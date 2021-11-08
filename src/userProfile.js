import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import UserLogin from './userLogin';
import { getUsername, updateLogoutTime, insertUserLocation } from './utils/firebase';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            interval: null,
            isTabActive: true
        };
    }

    

    componentDidMount = () => {
        const interval = setInterval(this.trackUserLocation, 1000);
        this.setState({interval});
        window.addEventListener("focus", this.onFocus);
        window.addEventListener("blur", this.onBlur);
    }

    componentWillUnmount = () => {
        window.removeEventListener("focus", this.onFocus);
        window.removeEventListener("blur",this. onBlur);
        clearInterval(this.state.interval);
    }

    onFocus = () => {
        if(!this.state.interval) {
            const interval = setInterval(this.trackUserLocation, 5000);
            this.setState({isTabActive: true, interval});
        }
    }

    onBlur = () => {
        if(this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({isTabActive: false, interval: null});
        }
    }

    trackUserLocation = () => {
        if (navigator.geolocation && this.state.isTabActive) {
            navigator.geolocation.getCurrentPosition(this.trackLocation);
          } else { 
            console.log('location access is not allowed');
        }
    }

    trackLocation = position => insertUserLocation(this.props.db, new URLSearchParams(window.location.search).get("sessionId"), position);

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
                <div >
                <Link to={"/"}><button type="button" style={{ position: 'absolute', top: '5%', right: '5%', padding: '5px 10px', backgroundColor: 'orange', fontWeight: 'bold', fontSize:'18px' }}
                    onClick={() => this.logout()}>logout</button></Link></div>
            </>
        )
    }
}

export default UserProfile;