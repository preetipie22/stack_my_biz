import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import UserLogin from './userLogin';
import { getUsername, updateLogoutTime } from './utils/firebase';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    // componentDidMount = () => {
    //     this.getUsername();
    // }

    // getUsername = async () => {
    //     const id = new URLSearchParams(window.location.search).get("id");
    //     const username = await getUsername(this.props.db, id);
    //     this.setState({
    //         username: username
    //     });
    // }

    logout = () => {
        const id = new URLSearchParams(window.location.search).get("sessionId");
        updateLogoutTime(this.props.db, id, {
            logoutTime: new Date().toISOString()
        });
    }

    render() {

        const username = new URLSearchParams(window.location.search).get("username");

        return (
            <>
                <div className="container" style={{ textAlign:'center'}}>
                <div style={{ border: '2px solid skyblue', margin:'5% 35%', backgroundColor:'skyblue' }}>
                        <div className="row" style={{ paddingBottom: '2rem' }}>
                            <h1>User Profile</h1>
                        </div>
                        <div className="row" >

                            <input type="image" src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"></input>
                        </div>
                        <div className="row">
                            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Preeti Tiwari</div>
                        </div>
                        <div className="row" style={{ marginTop: '-10px' }}>
                            <p>{username ? username : ""}</p>
                        </div>
                    </div>
                </div>
                <div ><button type="button" style={{ position: 'absolute', top: '5%', right: '5%', padding: '5px 10px', backgroundColor: 'orange', fontWeight: 'bold', fontSize:'18px' }}
                    onClick={() => this.logout()}>logout</button></div>
            </>
        )
    }
}

export default UserProfile;