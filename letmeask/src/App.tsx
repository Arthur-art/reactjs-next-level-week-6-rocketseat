import React, { createContext } from 'react'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

export const TestContext = createContext("")

export const App = ({ text }: any) => {

    return (
        <TestContext.Provider value={"Props do Context"}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/news" component={NewRoom} />
            </BrowserRouter>
        </TestContext.Provider>
    )
}