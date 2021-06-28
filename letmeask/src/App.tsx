import React, { createContext, useState } from 'react'
import { firebase, auth } from './services/firebase'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

type User = {
    id: string;
    name: string;
    imgProfile: any;
}

type AuthContextType = {
    user: User | undefined;
    signWithGoogle: () => void;
}

export const authContextProvider = createContext({} as AuthContextType)

export const App = ({ text }: any) => {

    const [user, setUser] = useState<User>()


    function signWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            if (result.user) {
                const { displayName, photoURL, uid } = result.user;
                
                if (!displayName || photoURL) {
                    throw new Error("Conta da google invalida")
                }

                setUser({
                    id: uid,
                    name: displayName,
                    imgProfile: photoURL
                })
            }
        })
    }

    return (
        <authContextProvider.Provider value={{ user, signWithGoogle }}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/news" component={NewRoom} />
            </BrowserRouter>
        </authContextProvider.Provider>
    )
}