import { useContext } from 'react'
import { authContextProvider } from '../contexts/AuthContext'

export const useAuth = ()=>{
    const value = useContext(authContextProvider);
    return value;
}