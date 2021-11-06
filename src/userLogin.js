import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import UserProfile from './userProfile';

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {

        }
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
                                
                                    <Link to={"/userProfile"}><button type="button">Login</button></Link>
                                
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default UserLogin;