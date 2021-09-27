import React from 'react';
import { useState } from 'react';
import { IoIosClipboard } from 'react-icons/io';

import { Formik, Field, Form } from 'formik';
import Calendarfrom from 'react-calendar';
import Calendarto from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';



export default function Leaveform(){


    const [fromdateState, setfromDateState] = useState(new Date());
    const [todateState, settoDateState] = useState(new Date());

    const changefromDate = (e) => {
        setfromDateState(e);
        var formDate_blk = document.getElementById("fromdate-calendar");
        formDate_blk.classList.toggle("show")
    }

    const changetoDate = (e) => {
        settoDateState(e);
        var toDate_blk = document.getElementById("todate-calendar");
        toDate_blk.classList.toggle("show")
    }

    const openFromcalendar =(e)=>{
        e.stopPropagation();
        var formDate_blk = document.getElementById("fromdate-calendar");
        document.getElementById("todate-calendar").classList.remove("show");
        formDate_blk.classList.toggle("show");
    }

    const opentocalendar =(e)=>{
        e.stopPropagation();
        var toDate_blk = document.getElementById("todate-calendar");
        document.getElementById("fromdate-calendar").classList.remove("show");
        toDate_blk.classList.toggle("show");
    }


    return(
        <div className="leave-form-container">
            <h3 className="leave-permission-head">
                <span>
                    <IoIosClipboard />
                </span>
                Leave Permission
            </h3>
            <div className="form-section">
                <Formik
                    initialValues={{
                        fromdate: '',
                        todate: '',
                        location:[],
                        terms:'',
                        reson:''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        values.fromdate = moment(fromdateState).format('MMMM Do YYYY').toString();
                        values.todate = moment(todateState).format('MMMM Do YYYY').toString();
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form method="/">
                        <div className="inline-form">
                            <label htmlFor="fromdate">From Date</label>
                            <Field id="fromdate" name="fromdate" type="text" placeholder="Enter from date" onClick={openFromcalendar} value={`${moment(fromdateState).format('MMMM Do YYYY').toString()}`}  />

                            <div id="fromdate-calendar" className="calendar-section fromdate-calendar">
                                <Calendarfrom 
                                    value={fromdateState}
                                    onChange={changefromDate}
                                />
                            </div>
                        </div>

                        <div className="inline-form">
                            <label htmlFor="Todate">To Date</label>
                            <Field id="todate" name="todate" type="text" placeholder="Enter To date" onClick={opentocalendar} value={moment(todateState).format('MMMM Do YYYY').toString()}  />

                            <div id="todate-calendar" className="calendar-section todate-calendar">
                                <Calendarto
                                    value={todateState}
                                    onChange={changetoDate}
                                />
                            </div>

                        </div>

                        <div className="inline-form">
                            <label htmlFor="location">Leave Type</label>
                            <Field
                                
                                component="select"
                                id="location"
                                name="location"
                                multiple={false}
                            >
                                <option value="Type 1">Type 1</option>
                                <option value="Type 2">Type 2</option>
                                <option value="Type 3">Type 3</option>
                                <option value="Type 4">Type 4</option>
                            </Field>
                        </div>
                        <div className="inline-form">
                            <label htmlFor="reson">For what purpose you take leave?</label>
                            <Field
                                component="textarea"
                                placeholder="Enter Reason..."
                                id="reson"
                                name="reson"
                                multiple={false}
                            >
                            </Field>
                        </div>
                        <div className="inline-form">
                            <label>
                                <Field type="checkbox" name="terms" />I accept the terms and
                                conditions.
                            </label>
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