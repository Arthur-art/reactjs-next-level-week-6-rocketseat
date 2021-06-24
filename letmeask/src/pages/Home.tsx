import React from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


export const Home = () => {

    return (
        <>
            <div>
                <aside>
                    <img src={illustrationImg} />
                    <strong>{"Crie salas de Q&A ao-vivo"}</strong>
                    <p>Tire dúvidas da sua audiência em tempo real</p>
                </aside>
                <main>
                    <div>
                        <img src={logoImg} alt="Letmeask" />
                        <button>
                            <img src={googleImg} alt="GoogleImg" />
                            Crie sua sala com o Google
                        </button>
                        <div>ou entre em uma sala</div>
                        <form>
                            <input type="text" placeholder="Digite o código da sala"/>
                        </form>
                        <button type="submit">Entrar na sala</button>
                    </div>
                </main>
            </div>
        </>
    )
}