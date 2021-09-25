import React, { useState } from "react";
import { setUserSession } from '../../Utils/Common';
import {
    Link, useHistory
  } from "react-router-dom";
import { Formik, Field, Form } from 'formik';

function Login(props) {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(null);
        const history = useHistory();

        return(
            <>
                <div className="form-wrapper">
                    <div className="alert-badge success" id="loginAlert">Login Successfull</div>
                    <div className="alert-badge failed" id="loginFAlert">Login failure, please enter correct email and password</div>
                    <div className="form-heading">
                        <h2>Sign in to Hexamarvel</h2>
                    </div>
                        <Formik 
                            initialValues={{ email: '', password: '', toggle: false }}
                               validate={values => {
                                 const errors = {};
                                 if (!values.email) {
                                   errors.email = 'Required';

                                 } else if (
                                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                 ) {
                                   errors.email = 'Invalid email address';
                                 } else {
                                    var element = document.getElementById("email-field");
                                    var element2 = document.getElementById("email-label");
                                    element.classList.add("success");
                                    element2.classList.add("success");
                                 }

                                 if (!values.password) {
                                   errors.password = 'Required';
                                 } else {
                                    var element = document.getElementById("password-field");
                                    var element2 = document.getElementById("password-label");
                                    element.classList.add("success");
                                    element2.classList.add("success");
                                 }
                                 return errors;
                               }}

                               onSubmit={(values, { setSubmitting }) => {

                                 setTimeout(() => {
                                   setError('');
                                    const encodedString = new Buffer(email + ':' + password).toString('base64');
                                    const requestOptions = {
                                        method: 'GET',
                                        headers: { 'Authorization': "Basic " + encodedString },
                                    };
                                    fetch('https://mocki.io/v1/965160ab-18de-4f39-8080-856a635850bb', requestOptions)
                                    .then(res => res.json())
                                    .then((data) => {
                                        data.forEach(function (item, index) {
                                            if (item.email === values.email && item.password == values.password){
                                                var element1 = document.getElementById("loginAlert");
                                                element1.classList.add("showAlert");
                                                setTimeout(() => {
                                                    localStorage.setItem('user', item.email)
                                                    setUserSession(item.token, [email,password]);
                                                    history.push('/dashboard');
                                                }, 500);
                                            }else {
                                                var element1 = document.getElementById("loginFAlert");
                                                element1.classList.add("showAlert");

                                                var element = document.getElementById("email-field");
                                                var element2 = document.getElementById("email-label");
                                                element.classList.remove("success");
                                                element2.classList.remove("success");
                                                element.classList.add("error");
                                                element2.classList.add("error");

                                                var element = document.getElementById("password-field");
                                                var element2 = document.getElementById("password-label");
                                                element.classList.remove("success");
                                                element2.classList.remove("success");
                                                element.classList.add("error");
                                                element2.classList.add("error");
                                            }
                                        });
                                    }).catch((error) => {
                                        setError('Invalid username or password');
                                        console.log(setError);
                                        alert();
                                    });
                                    

                                 }, 400);

                               }}
                        >
                           
                            {({

                                 values,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 isSubmitting,

                                 /* and other goodies */

                               }) => (
                                <div className="form-fields">
                                <div className="form-sectionn">
                                    <Form onSubmit={handleSubmit}>
                                        <div className="inline-form">
                                            <Field 

                                                type="email"
                                                 name="email"
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.email}
                                                 id="email-field"
                                                 className={errors.email && touched.email && "error"}
                                            />

                                            <span className="info-bar required ">
                                                {errors.email && touched.email && errors.email}
                                            </span>
                                            <label htmlFor="lastName" id="email-label" className={errors.email && touched.email && "error"}>Email</label>
                                        </div>
                                        <div className="inline-form">
                                            <Field
                                                id="password"
                                                name="password"
                                                placeholder=""
                                                type="password"
                                                value={values.password}
                                                id="password-field"
                                                className={errors.password && touched.password && "error"}
                                            />
                                            <span className="info-bar required">
                                                {errors.password && touched.password && errors.password}
                                            </span>
                                            <label htmlFor="email" id="password-label" className={errors.password && touched.password && "error"}>Password</label>
                                            <span className="password-icon"></span>
                                        </div>  
                                        <div className="inline-form-check-box">
                                            <div className="check-box-section">
                                                <label className="check-box-container">
                                                    <Field 
                                                        id= "remember-me"
                                                        type="checkbox" 
                                                        name="toggle" 
                                                    />   
                                                    <span className="checkmark"></span> 
                                                </label>
                                                <span className="remember-text">Remember Me</span>
                                            </div>
                                            <div className="forgot-pasw">
                                                <Link to="/#">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>  
                               )}
                        </Formik>
                </div>
            </>
        );
}

function ForgotPassword(props) {
    return(
        <h1>ForgotPassword</h1>
    );
}

function LoginControl(props) {
  const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {    
        return (
            <>
            <ForgotPassword />
            console.log('value is' + props.value);
            </>
        );  
    }  
    return <Login />;
}

export default LoginControl;