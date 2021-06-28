import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { firebase, auth } from '../services/firebase'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { TextContext } from '../App'
import '../styles/auth.scss'


export const Home = () => {

    const history = useHistory();
    const { context, setContext } = useContext(TextContext)

    const handleCreateRoom = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
            history.push("/rooms/news")
        })
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
                    <h1>{context}</h1>
                    <div className="main-content">
                        <img src={logoImg} alt="Letmeask" />
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleImg} alt="GoogleImg" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separator">ou entre em uma sala</div>
                        <form>
                            <input type="text" placeholder="Digite o código da sala" />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}