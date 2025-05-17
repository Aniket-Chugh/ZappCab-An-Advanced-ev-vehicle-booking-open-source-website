import React, { useEffect, useState } from 'react';
import ModelViewer from '../Components/Models';
import NavBar from '../HomePageComp/NavBar';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const [customer, setCustomer] = useState(true);
  const [captain, setCaptain] = useState(false);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [otp, setOtp] = useState("");
  const [duplicateusername , setduplicateusername] = useState(false);
  const [duplicateemail , setduplicateemail] = useState(false);



  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  const [user, setUser] = useState({
    phone_num: "",
    username: "",
    email: "",
    pass: ""
  });



useEffect(() => {
  const CheckDuplicacy = async () => {
    try {
      const response = await axios.get("http://localhost:3000/register");

      const isDuplicateusername = response.data.some(
        (u) => u.username === user.username,
      );

       const isDuplicateemail = response.data.some(
        (u) => u.email === user.email,
      );

      if (isDuplicateusername ) {
        toast.error("Username already exists!");
        setduplicateusername(true);
      }


         else if (isDuplicateusername == false) {
        setduplicateusername(false);

      }

      if (isDuplicateemail == true) {
                toast.error("Email already exists! ");

setduplicateemail(true)
      }

      else if (isDuplicateemail == false) {
        setduplicateemail(false);

      }



      console.log("Fetched users:", response.data);
    } catch (error) {
      console.error("Error checking duplicacy:", error);
    }
  };

  if (user.username) {
    CheckDuplicacy();
  }
}, [user.username , user.email]);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigateToStep2 = (e) => {
    e.preventDefault();
     toast.success("Sent OTP", {
        position: "bottom-left",
        autoClose: 1000,
        theme: "colored",
        transition: Slide
      });
    setStep1(false);
    setStep2(true);
  };

  const navigateToStep3 = (e) => {
    e.preventDefault();
    setStep2(false);
    setStep3(true);
  };

  const handleCustomer = () => {
    setCustomer(true);
    setCaptain(false);
    setStep1(true);
    setStep2(false);
    setStep3(false);
  };

  const handleCaptain = () => {
    setCaptain(true);
    setCustomer(false);
    setStep1(true);
    setStep2(false);
    setStep3(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


        if (duplicateemail == true) {
toast.error("   Check your Credentials")
        }

        else if (duplicateusername == true) {
toast.error("Username already exists!")

        }

else{
 await axios.post("http://localhost:3000/register", {
        phone_num: user.phone_num,
        username: user.username,
        email: user.email,
        pass: user.pass
      }, {
        withCredentials: true
      });

      toast.success("Account Created!", {
        position: "bottom-left",
        autoClose: 5000,
        theme: "colored",
        transition: Slide
      });

      setUser({
        phone_num: "",
        username: "",
        email: "",
        pass: ""
      });
    }
}

 catch (err) {
      console.log("Error found:", err);
      toast.error("Registration Failed!", {
        position: "bottom-left",
        autoClose: 1000,
        theme: "colored",
        transition: Slide
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <NavBar />

      <ToastContainer />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <ModelViewer />
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 sm:p-12 z-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {customer ? 'Sign up for your first ' : 'Become a '}
            <span className="text-indigo-600">{customer ? 'EV Ride' : 'Captain'}</span>
          </h2>
          <p className="mt-1 text-gray-600 text-sm">
            {customer ? "Let's get you started!" : 'Join our team.'}
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={handleCustomer}
            className={`px-4 py-2 rounded-md font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              customer
                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Customer
          </button>
          <button
            onClick={handleCaptain}
            className={`px-4 py-2 rounded-md font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              captain
                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Captain
          </button>
        </div>

        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          {customer && (
            <>
              {step1 && (
                <div>
                  <label htmlFor="phone_num" className="block text-gray-700 text-xs font-bold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_num"
                    name="phone_num"
                    placeholder="Enter your number"
                    value={user.phone_num}
                    onChange={handleInput}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    required
                  />
                  <button
                    onClick={navigateToStep2}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline text-sm mt-2"
                  >
                    Get OTP
                  </button>
                </div>
              )}

              {step2 && (
                <div>
                  <label htmlFor="otp" className="block text-gray-700 text-xs font-bold mb-1">
                    Enter OTP
                  </label>
                  <input
                    type="number"
                    id="otp"
                    name="otp"
                    placeholder="Enter the OTP"
                    value={otp}
                    onChange={handleOtp}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    required
                  />
                  <button
                    onClick={navigateToStep3}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline text-sm mt-2"
                  >
                    Verify OTP
                  </button>
                </div>
              )}

              {step3 && (
                <div className="space-y-2">
                  <div>
                    <label htmlFor="username" className="block text-gray-700 text-xs font-bold mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter username"
                      value={user.username}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-xs font-bold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={user.email}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pass" className="block text-gray-700 text-xs font-bold mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      placeholder="Create password"
                      value={user.pass}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline text-sm"
                  >
                    Create Account
                  </button>
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
