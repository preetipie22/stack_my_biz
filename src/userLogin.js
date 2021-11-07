import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { addUser, addLoginDetails} from './utils/firebase';

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            username: 'preeti',
            email: 'preeti@gmail.com',
            password: 'test123'
        }
    }

    login = () => {
        addUser({
            id: this.state.id,
            loginTime: new Date().toISOString()
        });
        addLoginDetails({
            id: this.state.id,
            username: this.state.username,
            email:this.state.email,
            password:this.state.password
        });
    }

    render() {
        return (
            <>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="row" style={{ paddingBottom: '2rem' }}>
                        <h1>User Login/ Register</h1>
                    </div>
                    <div className="row" >
                        <label>Username : </label>
                        <input type="text"></input>
                    </div>
                    <div className="row">
                        <label>Password : </label>
                        <input type="password"></input>
                    </div>
                    <div className="row">
                        <a href="#">Forget Password</a>
                    </div>
                    <div className="row">
                        <div className="col">
                                
                                    <Link to={"/userProfile"}><button type="button" onClick={() => this.login()}>Login</button></Link>
                                
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default UserLogin;