import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { login, logout, selectIsLoggin, selectUser } from '../redux/user/userSlice';
import { auth } from '../firebase';

import Layout from './Layout';
import Login from './Auth/Login';

const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggin);

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userLogin) => {
            if(userLogin) {
                dispatch(login({
                    uid: userLogin.uid,
                    email: userLogin.email
                }))                
            }
            else dispatch(logout());
        })
  
        return unsubscribe;
    }, [dispatch])

    return isLoggedIn;
    
}

const ProtectedRoutes = () => {
    let location = useLocation();
    const isAuth = useAuth();
    return isAuth ? <Layout /> : <Login location={location} />;
}

export default ProtectedRoutes