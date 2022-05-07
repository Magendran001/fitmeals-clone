import "../components/css/login.css"
import styled from "styled-components";
import { Link } from "react-router-dom";


const Btn = styled.button`
    color: whitesmoke;
    font-weight: bolder;
    font-size: 16px;
    background-color: #da2424;
    border: 2px solid transparent;
    min-width: 180px;
    font-size: 16px;
    padding: 12px 32px;
    border-radius: 36px;
    background-clip: border-box;
    margin-top: -14px;
    margin-left: 0px;
    margin-right: 30px;
    &:hover{
        background-color: #8ec038;
    }
`;

function Login(){
    return(
        <div className="login_form">
              <h1>Login</h1>
              <div className="form_input">
                  <label>Username or email address<span>*</span></label><br />
                  <input type="text"></input><br />
                  <label>Password<span>*</span></label><br />
                  <input type="password"></input>
                  <div className="btn">
                    <Btn className="butn">Log in</Btn>
                    <input className="check" type="checkbox"></input>
                    <label className="label_btn">Remember Me</label>
                  </div>
                  <p className="p"> <Link to="/lostpassword">Lost your password?</Link> </p>
                  
              </div>
          </div>
    )
}

export {Login}