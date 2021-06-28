import { AuthContextProvider } from "../src/contexts/AuthContext"

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route } from "react-router-dom"

export const App = ({ text }: any) => {

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/news" component={NewRoom} />
            </AuthContextProvider>
        </BrowserRouter>
    )
}