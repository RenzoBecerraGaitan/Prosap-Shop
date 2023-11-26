import React from "react";
import Form from "./Form/Form";
import "./Login.css";
import Users from "./../../assets/users.png";

export default function Login() {
    return (
        <>
            <div className="background-login">
                <div className="formLogin">
                    <Form Users={Users}/>
                </div>
            </div>
        </>
    )
}
