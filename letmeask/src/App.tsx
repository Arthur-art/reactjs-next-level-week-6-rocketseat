import { AuthContextProvider } from "../src/contexts/AuthContext"

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Room } from "./pages/Room"

export const App = ({ text }: any) => {

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/rooms/news" exact component={NewRoom} />
                    <Route path="/rooms/:id" component={Room} />
                </Switch>
            </AuthContextProvider>
        </BrowserRouter>
    )
}