/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./into.scss"

import intoImg1 from "../../images/into-bg-2.png"
import intoImg2 from "../../images/into-bg-2.1.png"

function Into() {
    return (
        <section className="into">
            <div className="container">
                <div className="into__inner">
                    <h1 className="into__title">Next generation digital banking</h1>
                    <p className="into__deckription">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className="into__invite-button invite-button" type="button">
                        <a className="invite-button__link" href="#">Request Invite</a>
                    </button> 

                    <img  className="into_bg--img1" src={intoImg1} alt="into background img" width="729" height="900"/>
                    <img className="into_bg--img2" src={intoImg2} alt="into background img" width="327px" height="402px"/>
                </div>
            </div>
        </section>

    );
}

export default Into;