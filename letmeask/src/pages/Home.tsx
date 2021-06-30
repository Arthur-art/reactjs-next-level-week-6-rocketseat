import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { database } from '../services/firebase'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'


export const Home = () => {

    const history = useHistory();
    const { user, signWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState("")

    const notfy = () => toast.error("Está sala não existe :(")
    const notfyNull = () => toast.error("Escreva o código de uma sala existente.")

    const handleCreateRoom = async () => {
        if (!user) {
            await signWithGoogle()
        }
        history.push("/rooms/news")
    }

    const handleJoinRoom = async (event: FormEvent) => {
        event.preventDefault()
        if (roomCode.trim() === "") {
            notfyNull()
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            notfy()
            return;
        }

        history.push(`/rooms/${roomCode}`)
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
                    <Toaster />
                    <div className="main-content">
                        <img src={logoImg} alt="Letmeask" />
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleImg} alt="GoogleImg" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separator">ou entre em uma sala</div>
                        <form onSubmit={handleJoinRoom}>
                            <input value={roomCode} onChange={(event) => setRoomCode(event.target.value)} type="text" placeholder="Digite o código da sala" />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}