import { useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../component/Firebase.config/Firebase.init";

initializeAuthentication()




const useFirebse = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // Google sign in 
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(eror => {
                const errormessage = error.message;
                setError(errormessage)
            })
            .finally(() => setIsLoading(false));

    }




    // set user email and password 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeUserName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }



    const handleRegistration = e => {
        // e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Must be at least 6 Character.')
            return;
        }

        return createUserWithEmailAndPassword(auth, email, password)

        // .then(result => {
        //     const user = result.user
        //     console.log(user)
        //     setError('');
        //     setUserName()

        //     window.location.reload()


        // })

        //     .catch(error => {
        //         setError(error.message)
        //     })
        //     .finally(() => setIsLoading(true))

    }




    const processLogedIn = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    // const processLogedIn = () => {
    //     return signInWithEmailAndPassword(auth, email, password)

    //     // .catch(error => {
    //     //     setError(error.message)
    //     // })
    //     // .finally(() => setIsLoading(true))

    // }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }



    // sign Out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])



    return {
        user,
        setUser,
        setError,
        setUserName,
        error,
        hanldeUserName,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,

        processLogedIn,
        logOut
    }
}
export default useFirebse;