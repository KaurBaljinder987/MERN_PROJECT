import "../Styling.css";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "api/signup";
import logo from "../components/images/logo.png";
import logo1 from "../components/images/logo1.png";

const SignUp = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();
    const [signup] = useSignupMutation();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "fname") {
            setFname(value);
        }
        if (name === "lname") {
            setLname(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
        if (name === "confirmPassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {

        const payload = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
        }

        if (password === confirmPassword) {
            signup(payload)
                .unwrap()
                .then(() => {
                    navigate("/");
                })
                .catch((err) => {
                    toast.error(err.data.message);
                });
        }
        console.log("first name", fname);
        console.log("last name", lname);
        console.log("email", email);
        console.log("password", password);
        console.log("confirm password", password);
    }

    return (
        <div className="feature-page1">
            <div className="img1">
                <div className="image1"><img src={logo} alt=""></img></div>
                <div className="image2"><img src={logo1} alt=""></img> </div>
                <div className="para1"><h3>Management Information System</h3></div>
                <div className="para2">An internal Netsmartz product powered by the BYT team that will empower us to manage our team better</div>
            </div>

            <div className="login wrapper1">
                <div className="content1">
                    <div className="hdng"> <h2>SIGN UP</h2></div>
                    <form>
                        <div className="input1">
                            <div className="nav-item">First Name</div>
                            <input type="text" placeholder="Type your first name" name="fname" onChange={handleChange} />
                            <div className="nav-item">Last Name</div>
                            <input type="text" placeholder="Type your last name" name="lname" onChange={handleChange} />
                            <div className="nav-item">Email</div>
                            <input type="text" placeholder="Type your email here" name="email" onChange={handleChange} />
                            <div className="nav-item">Password</div>
                            <input type="password" placeholder="Type your password here" name="password" onChange={handleChange} />
                            <div className="nav-item">Confirm Password</div>
                            <input type="password" placeholder="Confirm your password" name="confirmPassword" onChange={handleChange} />
                        </div>


                        <div className="button1">
                            <input type="button" value="Sign Up" onClick={handleSubmit}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;