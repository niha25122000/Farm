import React, { Fragment, useState } from 'react';
import axios from 'axios';
import "./farmerlogin.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import showPwdImg from './show-password.png';
import hidePwdImg from './hide-password.png';


function Login() {

  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();
  // const setAuth = useSetRecoilState(authAtom);
  // const[submitting,setSubmitting]=useState(false);
  // const [isValid,setIsValid]=useState(false);

  const handlePhoneNoChange = (value) => { setPhoneNo(value); };
  const handlePasswordChange = (value) => { setPassword(value); };

  const handleLogin = () => {
    if (!phoneNo) {
      setErrorMessage('Please provide your phone number');
      return;
    }
    if (!password) {
      setErrorMessage('Please provide a password');
      return;
    }
    const data = {
      PhoneNo: phoneNo,
      Password: password,
    };
    const url = 'http://localhost:55976/api/Test/Login';

    axios.post(url, data)
      .then((result) => {
        const loginResult = result.data;

        alert(loginResult
        );
        navigate(loginResult === "Login Successful...!!!" ? "/FarmerAccount" : "/farmer");

      }).catch((error) => {
        alert(error);
      })
  }
  return (
    <Fragment>
      <div className='f_login'>
        <div className='form-row1'>
          <label><BsFillTelephoneFill size={30} color={'black'} /></label>
          <input type="text" id="txtPhoneNo" placeholder='Enter PhoneNumber' required onChange={(e) => handlePhoneNoChange(e.target.value)} /> <br></br>
        </div>
        <div className='form-row1'>
          <label><RiLockPasswordFill size={30} color={'black'} /></label>
          {/* <input type="Password" id="Password" placeholder='Enter Password'required onChange={(e) =>handlePasswordChange(e.target.value)}/> <br></br> */}
          <input
            name="pwd"
            placeholder="Enter Password"
            type={isRevealPwd ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <img
            title={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? hidePwdImg : showPwdImg} color={'white'}
            onClick={() => setIsRevealPwd(prevState => !prevState)}
          />
        </div>
        <br></br>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className="f_a_login">
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </Fragment>
  )
}
export default Login;


