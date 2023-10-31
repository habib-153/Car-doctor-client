/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) 
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName:name , photoURL:photo
          })
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                 axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
            .then(res =>{
               console.log('token response',res.data)
             })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginWithEmail,
        handleUpdateProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;