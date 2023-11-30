import React from "react";
import { Navigate } from "react-router-dom";

    class Login extends React.Component {
        constructor() {
            super()
            this.state = {
                email : "",
                password : ""
            }
        }

        setEmail = (event) => {
            this.setState({ 
                email: event.target.value
            })
        }

        setPassword = (event) => {
            this.setState({
                password : event.target.value
            })
        }

        login() {
            
            window.localStorage.setItem("email", this.state.email);
            window.localStorage.setItem("password", this.state.password);

            window.localStorage.setItem("loggedin", true);

            
        }


        render() {
            return (

                <div className="container">

                <div className="row">

                <div className="col-6">

                <form className="mt-5" onSubmit={(event) => this.login(event)}>
                        <label className="text-light">Email</label>
                    <input type="email" className="form-control" placeholder="email" onChange={(event) => this.setEmail(event)} value={this.state.email}/>
                        <label className="text-light mt-3">Password</label>
                    <input type="password" placeholder="password" className="form-control" onChange={(event) => this.setPassword(event)} value={this.state.password}/>
                    <input type="submit" className="btn btn-success mt-3"/>
                    </form>

                    {
                        window.localStorage.getItem("loggedin") == "true" ? <Navigate to={"/dashboard"} /> : ""
                    }

                </div>

                </div>

                </div>

            )
        }
    }

export default Login;