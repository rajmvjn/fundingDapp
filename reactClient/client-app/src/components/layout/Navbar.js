import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="container-fluid">
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                 
                <h1 className="navbar-brand" >Ethereum Public Funding Platform. </h1>     
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/Login">Admin <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/fundlisting">Public</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
