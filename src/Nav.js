import React from 'react';
import image from './img/ellipse.svg'

const $=require('jquery');
function Nav() {
    const enableDarkMode =(e)=>{
        e.preventDefault();
        $(".main-container").toggleClass("main-container1");
        $(".cust").toggleClass("cust1");
        if(e.target.innerHTML=== "Dark Mode"){
            e.target.innerHTML = "Dark Mode ON";
        }else{
            e.target.innerHTML = "Dark Mode";
        }
    }
    return (
        <div>
            <img src={image} className="nav-img" alt="nav-img"/>
            <nav className="navbar navbar-expand-lg navbar-light navBar">
                <a className="navbar-brand" href="/" style={{color: "white",fontWeight: "800"}}>TOTAL CLOUD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-list">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Screenshot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark" onClick={enableDarkMode}>Dark Mode</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Nav
   