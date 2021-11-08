import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser, addLoginDetails, getUserData } from './utils/firebase';

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            id: uuidv4(),
            sessionId: uuidv4(),
            username: '',
            password: '',
        }
    }

    login = () => {

        if (this.state.username === "" || this.state.password === "") {
            alert("Username/Password cannot be empty");
        }
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.username.match(mailformat)) {
            getUserData(this.props.db, this.state.username, this.state.password).then(
                userData => {
                    if (!userData) {
                        addUser(this.props.db, {
                            id: this.state.id,
                            username: this.state.username,
                            password: this.state.password
                        });
                    }
                    addLoginDetails(this.props.db, this.state.sessionId, {
                        id: userData ? userData.id : this.state.id,
                        loginTime: new Date().toISOString()
                    });
                    this.setState({ id: userData ? userData.id : this.state.id });
                }
            );

        } else {
            alert("You have entered an invalid email address!");
        }

    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        }, () => {
            console.log('value' + value);
        });
    }

    render() {
        return (
            <>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ border: '2px solid skyblue', margin: '10% 35%', backgroundColor: 'skyblue' }}>
                        <div className="row" style={{ paddingBottom: '2rem' }}>
                            <h1>User Login/ Register</h1>
                        </div>
                        <div className="row" style={{ padding: '1rem' }} >
                            <label>Username : </label>
                            <input type="text" name="username" style={{ width: '200px', height: '30px' }} onChange={(e) => this.handleChange(e)}></input>
                        </div>
                        <div className="row" style={{ padding: '1rem' }}>
                            <label>Password : </label>
                            <input type="password" name="password" style={{ width: '200px', height: '30px' }} onChange={(e) => this.handleChange(e)}></input>
                        </div>
                        <div className="row" style={{ padding: '1rem' }}>
                            <a href="#">Forget Password</a>
                        </div>
                        <div className="row" style={{ padding: '1rem' }}>
                            <div className="col">
                                {!!this.state.username && this.state.password ?
                                    <Link to={`/userProfile?username=${this.state.username}&sessionId=${this.state.sessionId}`}><button type="button"
                                        style={{ padding: '5px 15px', backgroundColor: 'darkblue', color: 'white', fontWeight: 'bold', fontSize: '18px' }}
                                        onClick={() => this.login()}>Login</button></Link> : <button type="button"
                                            style={{ padding: '5px 15px', backgroundColor: 'darkblue', color: 'white', fontWeight: 'bold', fontSize: '18px' }}
                                            onClick={() => this.login()}>Login</button>}

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserLogin;