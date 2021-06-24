import React from 'react'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

export const App = ({ text }: any) => {

    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
        </BrowserRouter>
    )
}