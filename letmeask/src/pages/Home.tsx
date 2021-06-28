import React, { useContext, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { authContextProvider } from '../contexts/AuthContext'
import '../styles/auth.scss'


export const Home = () => {

    const history = useHistory();
    const {user,signWithGoogle} = useContext(authContextProvider)

    const handleCreateRoom = async () => {
        if(!user){
           await signWithGoogle()
        }
        history.push("/rooms/news")
    }

    const handleForms = (event:FormEvent)=>{
        event.preventDefault()
    }

    return (
        <>
            <div id="page-auth">
                <aside>
                    <img src={illustrationImg} />
                    <strong>{"Crie salas de Q&A ao-vivo"}</strong>
                    <p>Tire dúvidas da sua audiência em tempo real</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={logoImg} alt="Letmeask" />
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleImg} alt="GoogleImg" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separator">ou entre em uma sala</div>
                        <form onSubmit={handleForms}>
                            <input  type="text" placeholder="Digite o código da sala" />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}