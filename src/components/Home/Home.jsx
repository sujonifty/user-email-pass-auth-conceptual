import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Home = () => {
    const user = useContext(authContext);
    console.log(user);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;