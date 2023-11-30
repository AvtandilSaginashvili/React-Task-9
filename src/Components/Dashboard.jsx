import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

    function Dashboard() {

        const nav = useNavigate();

            const logout = () => {

                window.localStorage.removeItem("email");
                window.localStorage.removeItem("password");

                window.localStorage.setItem("loggedin", false);

                const log = window.localStorage.getItem("loggedin");

                if (log === "true") {
                    nav("/dashboard");
                }else {
                    nav("/");
                }
            }

            useEffect(() => {
                const log = window.localStorage.getItem("loggedin");

                if (log === "true") {
                    nav("/dashboard");
                }else {
                    nav("/");
                }

            }, []);

                return (

                    <div className="container">

                    <div className="row">

                    <div className="col-6 d-flex justify-content-between">

                    <div>
                    <h1 className="text-light text-center mt-5">მთავარი გვერდი</h1>
                    <h2 className="text-success text-center">{window.localStorage.getItem("email")}</h2>
                    </div>

                    <button type="button" className="btn btn-danger mt-5" onClick={logout}>Log Out</button>

                    </div>

                    </div>

                    </div>

                )
            }

export default Dashboard;

