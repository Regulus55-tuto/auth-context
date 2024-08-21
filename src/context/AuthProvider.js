import {createContext, useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const navigate = useNavigate()
    const loginAction = async (userInput) => {
        try{
            console.log('=======',userInput);
           const {data, status} = await axios.post('http://localhost:7070/api/auth/login',userInput)
            console.log('data=====',data)
            if(status === 200){
                setUser(data.user)
                setToken(data.token)
                localStorage.setItem('token',data.token)
                navigate('/dashboard')
                return;
            }
        }catch(e){
            console.log(e)
        }
    }
    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('token');
        navigate('/login')

    }
    return (
        <AuthContext.Provider value={{ user, token, loginAction, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
