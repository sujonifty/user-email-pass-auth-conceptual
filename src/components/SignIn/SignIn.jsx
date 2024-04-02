import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";



const SignIn = () => {
    const [error, setError]=useState('');
    const [success, setSuccess]=useState('')
    const {signInUser,googleLogIn} = useContext(authContext);
    // console.log(signInUser);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //clean previous message.
        setError('');
        setSuccess('');

        signInUser(email, password)
        .then((result)=>{
            console.log(result.user);
            setSuccess('Log In successfully.')
        })
        .catch((error)=>{
            setError(error);
        })
    }
    // logIn by google provider
    const handleGoogleSignIn=()=>{
        googleLogIn()
        .then((result)=>{
            console.log(result.user);
            setSuccess('Log In successfully.')
        })
        .catch((error)=>{
            setError(error);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign-In</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn btn-success">Google LogIn</button>
                            </div>
                            {
                                error && <small className="text-red-600">{error}</small>
                            }
                            {
                                success && <small className="text-green-600">{success}</small>
                            }
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;