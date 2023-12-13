
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            setUser(currentUser)
            console.log(user)
            setLoading(false)

            if (currentUser) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else{
                axiosSecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [axiosSecure,user])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;