import React from "react";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css"

function Contact() {
  function Submit(e){
    e.preventDefault()
    toast("Submitted Sucessfully")
  }

   
  
  return (
    <div className="contain">
      <form name="myform" onSubmit={Submit} >
        
      <label for="fname" >First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
        required
      />
      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.." required
      />
      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        required
      ></textarea>
      <input type="submit" value="Submit" />
      <ToastContainer/>
      </form>
      
    </div>
  );
}

export default Contact;
