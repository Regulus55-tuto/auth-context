import React, {useEffect} from 'react';
import {useAuth} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const auth = useAuth()
    console.log('ahty=====',auth)
    if(auth.token === null){
        navigate('/login')
    }

    useEffect(()=>{

    },[auth.user])
    return (
        <div>
         <h1>Welcome {auth?.user?.userName}</h1>
            <button onClick={()=>auth.logout()} className='btn-submit'>logout</button>
        </div>
    );
};

export default Dashboard;