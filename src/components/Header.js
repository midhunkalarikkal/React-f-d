import {LOGO} from '../utils/constants'
import { useState } from 'react'

export const Header = () => {
  const [ btnName , setBtnName] = useState("Login")
    return (
      <nav className="header">
        <div className="logo-container">
          <img
            src={LOGO}
            alter=""
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Explore
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Cart
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Contact
              </a>
            </li>
            <li>
              <button className='login-btn' onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}
                }>{btnName}</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
