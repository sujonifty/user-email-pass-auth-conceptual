import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const [error, setError] = useState('');
    const [mailError, setMailError] = useState('');
    /*
    const authInfo=useContext(authContext);
    console.log(authInfo)
    const {registerUser}=authInfo;
    */
    //akbare distructure kore nesi
    const { registerUser } = useContext(authContext);
    // console.log(registerUser)


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);


        //check mail
        if (!/@gmail\.com$/.test(email)) {
            setMailError('mail must be end @gmail.com');
            return;
        }
        //check password & confirm password
        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (password != confirmPassword) {
            setError('password is not matching');
            return;
        }
        /*
            Explanation:
                .* => Matches any character (except for line terminators) zero or more times.
                \d{2,} => Matches at least 2 digits.
                $ => Asserts position at the end of a line.
        */
        if (!/.*\d{2,}$/.test(password)) {
            setError('password must end with at least 2 numbers');
            return;
        }
        /*
            Explanation:

                [...] => Character class, matches any single character inside the brackets.
                !@#$%&* => Special characters to be matched.
                This regex pattern will match any string that contains at least one of the specified special characters !@#$%&*
        */
        if (!/!@#$%&*/.test(password)) {
            setError('password must at least 1 special character[!@#$%&*]');
            return;
        }

        //jehetu resgisterUser akta function tai ata k call korte hobi
        registerUser(email, password);
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="Confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <small className="text-red-700">{error}</small>
                            }
                            {
                                mailError && <small className="text-red-700">{mailError}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;