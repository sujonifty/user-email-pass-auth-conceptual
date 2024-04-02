import { createContext} from "react";
import {auth} from "../../Firebase/Firebase.config"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {

    //create user by registration
    const registerUser =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    // sign in by email & password
    const signInUser =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    //create a object for passing value.
    const registerInfo ={
        registerUser,
        signInUser,
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