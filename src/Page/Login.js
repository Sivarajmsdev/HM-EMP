 import React from 'react';

import Formfield from '../Components/Loginpage/Formfield';
import Banner from '../Components/Loginpage/Banner';

export default class Login extends React.Component{
    render(){
        return(
            <div className="login-page-wrapper">
                <div className="login-section">
                    <div className="container">
                        <div className="row">
                            <div className=" banner-wp col col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <Banner />
                            </div>
                            <div className="login-form-wp col col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <Formfield />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}