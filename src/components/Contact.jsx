import React from 'react'
import "../Style/Contact.css";
import { useEffect } from "react";
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
const Contact = () => {
  useEffect(()=>{
    document.title="Contact | Arpit"
  })
  const [state, handleSubmit] = useForm("xgejpbqq");
  if (state.succeeded) {
    toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    document.getElementById("myForm").reset();

  }
  return (
    <>
     <div className="nav">
        <div className="logo">
          <img className='logoimg' src={logo} alt="Coca Cola" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    <div className='Contact' >
       <form id='myForm' onSubmit={handleSubmit} className='form'>
        <input className='inputs' type="text" name='Name' placeholder='Enter Your Name'autoComplete='off' required />
        <input className='inputs' type="text" name='Phoneno' placeholder='Enter Your Phone no.' autoComplete='off' required />
        <input className='inputs' type="text" name='Email' placeholder='Enter Your E-mail' autoComplete='off' required />
        <input className='inputsMessage' type="text" name='Message' placeholder='Enter The Message' autoComplete='off' required />
        <button type='submit' className='formbtn' disabled={state.submitting}>Submit</button>
       </form>
       <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
    </>
  )
}

export default Contact;