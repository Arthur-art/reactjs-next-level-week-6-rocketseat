import React,{ createContext, ReactNode, useEffect, useState } from "react"
import {auth,firebase} from "../services/firebase"

type User = {
    id: string;
    name: string | null;
    imgProfile: any;
}

type AuthContextType = {
    user: User | undefined;
    signWithGoogle: () => Promise<void>;
}

type contextProps = {
    children: ReactNode
}


export const authContextProvider = createContext({} as AuthContextType)

export const AuthContextProvider = ({children}:contextProps)=>{


const [user, setUser] = useState<User>()

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {

            const { displayName, photoURL, uid } = user;

            if (!displayName || !photoURL) {
                throw new Error("Conta da google invalida")
            }

            setUser({
                id: uid,
                name: displayName,
                imgProfile: photoURL
            })
            localStorage.setItem("name", JSON.stringify(displayName))
        }
    })
    return () => {
        unsubscribe()
    }
}, [])


async function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
            throw new Error("Conta da google invalida")
        }

        setUser({
            id: uid,
            name: displayName,
            imgProfile: photoURL
        })
    }
}


    return (
        <authContextProvider.Provider value={{ user, signWithGoogle }}>
            {children}
        </authContextProvider.Provider>
    )
}