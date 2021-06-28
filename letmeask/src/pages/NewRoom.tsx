import React, { useContext,FormEvent } from 'react'
import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import '../styles/auth.scss'
import { authContextProvider } from "../contexts/AuthContext"

export const NewRoom = () => {

    const {user, signWithGoogle} = useContext(authContextProvider)

    const handleCreateRoom = (event:FormEvent)=>{
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
                        <h2>Criar uma nova sala</h2>
                        <form onSubmit={handleCreateRoom}>
                            <input type="text" placeholder="Nome da sala" />
                            <Button type="submit">Criar uma sala</Button>
                        </form>
                        <p>Quer entrar em uma sala existente ? <Link to="/">clique aqui</Link></p>
                    </div>
                </main>
            </div>
        </>
    )
}