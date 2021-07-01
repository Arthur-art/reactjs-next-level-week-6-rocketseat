import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams, useHistory } from 'react-router-dom'
import logoImg from "../assets/images/logo.svg"
import { Button } from "../components/Button"
import { RoomCode } from "../components/RoomCode"
import { useAuth } from "../hooks/useAuth"
import { database } from '../services/firebase'
import "../styles/room.scss"

type RoomParams = {
    id: string;
    name: string;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}>

export const Room = () => {

    const [newQuestion, setNewQuestion] = useState("")
    const [nameClass, setNameClass] = useState("")

    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const nameStorage = JSON.parse(localStorage.getItem("name") || "");
    const nameUser = user?.name || nameStorage;
    const history = useHistory()

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.once('value', room => {
            const data = room.val();
            setNameClass(data.title);
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    author: value.author,
                    content: value.content,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            })
        })
    }, [roomId])


    const notfy = () => toast.error("Você não digitou uma pergunta :(");
    const notfyWelcome = () => toast.success(`Olá ${nameUser.split(" ")[0]} ${nameUser.split(" ")[1]}, seja bem-vindo!`);
    const notfyOff = () => toast.error("Você não está logado.");
    const notFySend = () => toast.success("Pergunta Enviada com sucesso!")

    const handleSendQuestion = async (event: FormEvent) => {
        event.preventDefault()
        if (newQuestion.trim() === "") {
            notfy();
            return;
        }

        if (!user) {
            notfyOff()
            return;
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
        notFySend()
        setNewQuestion("")
    }

    const handleExit = () => {
        history.push("/")
    }


    useEffect(() => {
        notfyWelcome()
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
            <Button disabled={!user} onClick={handleExit}>Sair</Button>
            <main>
                <div className="room-title">
                    <h1>Sala : {nameClass || "Buscando sala..."}</h1>
                    <span>4 perguntas</span>
                </div>
                <form onSubmit={handleSendQuestion} >
                    <Toaster />
                    <textarea
                        value={newQuestion}
                        onChange={(event) => setNewQuestion(event.target.value)}
                        placeholder="O que você quer perguntar" />
                    <div className="form-footer">
                        {!user ?
                            <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
                            : <div className="img-profile">
                                <img src={user.avatar} alt="UserProfile" />
                                <span>{`${user.name?.split(" ")[0]} ${user.name?.split(" ")[1]} `}</span>
                            </div>}
                        <Button disabled={!user} type="submit">Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}