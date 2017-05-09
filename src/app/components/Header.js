import React from "react";

export class Header extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            {this.props.links.map((menu, key) => <li key={key}> <a href={menu}>{menu}</a></li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}