import "../Styling.css";
import React, { useState } from "react";
import { loginStore } from "slices/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "api/login";
import logo from "../components/images/logo.png";
import logo1 from "../components/images/logo1.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = () => {
        const payload = {
            email: email,
            password: password,
        }
        login(payload);

        console.log("email", email);
        console.log("password", password);

        login(payload)
            .unwrap()
            .then((res) => {
                const token = res.token;
                dispatch(loginStore({ token }));
                navigate("/");
            })
            .catch(() => console.log("test"));
    }

    return (
        <div className="feature-page">
            <div className="img">
                <div className="image1"><img src={logo} alt=""></img></div>
                <div className="image2"><img src={logo1} alt=""></img> </div>
                <div className="h3"><h3>Management Information System</h3></div>
                <div className="para">An internal Netsmartz product powered by the BYT team that will empower us to manage our team better</div>
            </div>

            <div className="login wrapper">
                <div className="content">
                    <div className="h1"> <h2>LOGIN</h2></div>
                    <form>
                        <div className="input">
                            <div className="nav">Email</div>
                            <input type="text" placeholder="Type your email here" name="email" onChange={handleChange} />
                            <div className="nav">Password</div>
                            <input type="password" placeholder="Type your password here" name="password" onChange={handleChange} />
                        </div>
                        <div className="button">
                            <input type="button" value="Login" onClick={handleSubmit} />
                        </div>
                        <div className="terms">
                            <a href="/signup">SignUp</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;