import React from 'react'
import { Link } from 'react-router-dom'
    
import "./Login.css"
import Table from "./Table"
export default function Login() {
    return (
      <main>
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <Link to="/Table">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </form>
        </div>
      </main>
    );
}
