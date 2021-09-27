import React from 'react';
import { useState } from 'react';
import { IoTimeSharp } from 'react-icons/io5';
import { RiErrorWarningLine } from 'react-icons/ri';

import { Formik, Field, Form } from 'formik';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';



export default function Permissionformhr(){


    const [dateState, setDateState] = useState(new Date());

    const changeDate = (e) => {
        setDateState(e);
        document.getElementById("date-calendar").classList.toggle("show");
    }

    const openCalendar =(e)=>{
        e.stopPropagation();
        document.getElementById("date-calendar").classList.toggle("show");
    }



    return(
        <div className="leave-form-container hour-permission-container">
            <h3 className="leave-permission-head">
                <span>
                    <IoTimeSharp />
                </span>
                Hour Permission
            </h3>
            <div className="reminder-card">
                <div className="warning-icon">
                    <span>
                        <RiErrorWarningLine />
                    </span>
                </div>
                <p>Per month <span>8</span>Hour permission only applicable. After <span>8</span>Hours consider as Leave</p>
            </div>
            <div className="form-section">
                <Formik
                    initialValues={{
                        date: '',
                        fromtime:'',
                        totime:'',
                        reson:''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        values.date = moment(dateState).format('MMMM Do YYYY').toString();
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form method="/">
                        <div className="inline-form">
                            <label htmlFor="date">Date</label>
                            <Field id="date" name="date" type="text" placeholder="Enter from date" onClick={openCalendar} value={`${moment(dateState).format('MMMM Do YYYY').toString()}`}  />

                            <div id="date-calendar" className="calendar-section permission-date-calendar">
                                <Calendar
                                    value={dateState}
                                    onChange={changeDate}
                                />
                            </div>
                        </div>

                        <div className="time-section">
                            <div className="inline-form">
                                <label htmlFor="fromtime">From time</label>
                                <Field
                                    
                                    component="select"
                                    id="fromtime"
                                    name="fromtime"
                                    multiple={false}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Field>
                            </div>

                            <div className="inline-form">
                                <label htmlFor="totime">To time</label>
                                <Field
                                    
                                    component="select"
                                    id="totime"
                                    name="totime"
                                    multiple={false}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Field>
                            </div>
                        </div>

                        <div className="inline-form">
                            <label htmlFor="reson">For what purpose you take Permission?</label>
                            <Field
                                component="textarea"
                                placeholder="Enter Reason..."
                                id="reson"
                                name="reson"
                                multiple={false}
                            >
                            </Field>
                        </div>
                        <div className="inline-form-button">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}