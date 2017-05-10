import React from "react";
import {connect} from "react-redux"

import {Header} from "../components/Header";
import getActions from "../actions/UserActions";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header links={["Home", "User"]}/>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div> UserName: {this.props.user.name}</div>
                            <div> Age: {this.props.user.age}</div>
                            <button onClick={() => {this.props.setName('Sachin').setAge(33)}} className="btn btn-primary"> Click to Change User Details</button>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        math: state.math,
        user: state.user
    }
};

const mapDispatchToProps = (customDispatcher) => {
    return {
        setName: function (name) {
            customDispatcher(getActions('SET_NAME', name));
            return this;
        },
        setAge: (age) => {
            customDispatcher(getActions('SET_AGE', age));
            return this;
        }
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Home);