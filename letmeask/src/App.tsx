import React, { createContext } from 'react'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

export const TextContext = createContext("")

export const App = ({ text }: any) => {

    return (
        <TextContext.Provider value="Props do meu contexto">
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/news" component={NewRoom} />
            </BrowserRouter>
        </TextContext.Provider>
    )
}