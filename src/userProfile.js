import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class UserProfile extends Component {
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
                        <h1>User Profile</h1>
                    </div>
                    <div className="row" >
                      
                            <input type="image" src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"></input>
                    </div>
                    <div className="row">
                      <div style={{fontSize:'18px', fontWeight:'bold'}}>Preeti Tiwari</div>
                    </div>
                    <div className="row" style={{marginTop:'-10px'}}>
                    <p>preetitiwari0022@gmail.com</p>
                    </div>
                </div>
            </>
        )
    }
}

export default UserProfile;