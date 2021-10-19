import React from 'react';
import { IconContext } from "react-icons";
import { ImSad } from 'react-icons/im';
import './notFound.css';


const NotFound = () => {
    return (
        <section className="notfound-container d-flex justify-content-center align-items-center text-center">
            <div>
                <h1>404</h1>
                <h3>Page not found!</h3>

                <IconContext.Provider value={{ size:"150", color: "red", className: "global-class-name" }}>
                    <ImSad />
                </IconContext.Provider>
            </div>
        </section>
    );
};

export default NotFound;



