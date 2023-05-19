import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../styles/mix.css";

const Register = () => {
  const [passhow, setPassShow] = useState(false);

  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: ""
  });

  console.log(inputdata);

  //setinputvalue

  const handelChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  //register data
  const handleSubmit = (e)=>{
    e.preventDefault();
    const{fname,email,password} = inputdata;

    if(fname === ""){
      toast.error("Enter Your Name")
    }
    else if(email===""){
      toast.error("Enter Your Email")
    }
    else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }
    else if(password===""){
      toast.error("Enter Your Password")
    }
    else if(password.length<6){
      toast.error("password length minimum 6 character")
    }
    else{
      toast.success("user register")
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              we are glad you will be using Project Cloud to manage your tasks!
              We hope that you will get like it.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id=""
                onChange={handelChange}
                placeholder="Enter Your Name"
              ></input>
            </div>

            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={handelChange}
                placeholder="Enter Your Email Address"
              ></input>
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passhow ? "password" : "text"}
                  name="password"
                  id=""
                  onChange={handelChange}
                  placeholder="Enter Your password"
                />
                <div className="showpass" onClick={() => setPassShow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={handleSubmit}>Sign Up</button>
            <p>Don't have an account</p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
