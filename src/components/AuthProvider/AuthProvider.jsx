import { createContext, useState} from "react";
import {auth} from "../../Firebase/Firebase.config"
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser]=useState(null);
    const googleProvider = new GoogleAuthProvider();
    //create user by registration
    const registerUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        /*
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })*/
        //ata akhane na likhe amara j khane registerUser call korbo oi khane likbo,
        // jate result & error gulo page show korte pari. a jonno createUser... k return korte hobi.
    }
    
    // sign in by email & password
    const signInUser =(email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
        /*
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })*/
        //ata akhane na likhe amara j khane signInUser call korbo oi khane likbo,
        // jate result & error gulo page show korte pari. a jonno signInWith... k return korte hobi.
    }

    // create user by google Provider
    const googleLogIn=()=>{
      return  signInWithPopup(auth, googleProvider)
    }
     
    //create a object for passing value.
    const registerInfo ={
        registerUser,
        signInUser,
        googleLogIn,
        user,
        setUser,
    }
    // console.log(children);
    return (
        <div>
            <authContext.Provider value={registerInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;