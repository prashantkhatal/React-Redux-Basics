import React from "react";
import {Header} from "./Header";

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
                            <button className="btn btn-primary"> Click to Change User Name </button>
                        </div>
                    </div>
            </div>
        );
    }
}