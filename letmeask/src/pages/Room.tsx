import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import logoImg from "../assets/images/logo.svg"
import { Button } from "../components/Button"
import { RoomCode } from "../components/RoomCode"
import { useAuth } from "../hooks/useAuth"
import "../styles/room.scss"

type RoomParams = {
    id: string;
    name: string;
}

export const Room = () => {

    const [newQuestion, setNewQuestion] = useState("")

    const user = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const nameStorage = JSON.parse(localStorage.getItem("name") || "");
    const name = user.user?.name || nameStorage;

    const notfy = () => toast.error("Você não digitou uma pergunta :(");
    const notfyWelcome = () => toast.success(`Olá ${name.split(" ")[0]} ${name.split(" ")[1]}, seja bem-vindo!`);
    const notfyOff = () => toast.error("Você não está logado.");

    const handleSendQuestion = (event: FormEvent) => {
        event.preventDefault()
        if (newQuestion.trim() === "") {
            notfy();
            return;
        }

        if (!user) {
            notfyOff()
            return;
        }
    }
    
    useEffect(() => {
        notfyWelcome()
        console.log(user)
        return;
    }, [])

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <RoomCode code={roomId} />
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala - React</h1>
                    <span>4 perguntas</span>
                </div>
                <form onSubmit={handleSendQuestion} >
                    <Toaster />
                    <textarea
                        onChange={(event) => setNewQuestion(event.target.value)}
                        placeholder="O que você quer perguntar" />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
                        {user && <Button type="submit">Enviar pergunta</Button>}
                    </div>
                </form>
            </main>
        </div>
    )
}