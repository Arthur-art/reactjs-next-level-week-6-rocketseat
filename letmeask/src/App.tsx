import React, { createContext,useState } from 'react'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

export const TextContext = createContext({} as any)

export const App = ({ text }: any) => {

    const [context, setContext] = useState("")

    return (
        <TextContext.Provider value={{context, setContext}}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/news" component={NewRoom} />
            </BrowserRouter>
        </TextContext.Provider>
    )
}