import React, { useState } from 'react'
import LoginCSS from './Login.module.css'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const Login = () => {

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff)

    const handleToggle = () =>{
        if (type === 'password'){
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <div className = {LoginCSS.formMain}> 
        <form>
                <div className = {LoginCSS.formInner}>
                    <h3> 
                        <span className= {LoginCSS.orange}> FixIT </span> <br></br> 
                        <span className={LoginCSS.blue}> ClickIT to FixIT  </span>
                    </h3>
                    <h2 className = {LoginCSS.login}> Login </h2>
                    <h3> 
                    <span className={LoginCSS.blue}> Choose </span>
                    <span className={LoginCSS.orange}>YOUR </span>
                    <span className={LoginCSS.blue}>mechanic for </span>
                    <span className={LoginCSS.orange}> YOUR </span>
                    <span className={LoginCSS.blue}> ride </span>
                    </h3>
                    {/* Error! */}
                    <div>
                        <label className={LoginCSS.labe} htmlFor='name'>Email </label>
                        <input className={LoginCSS.inp} type = "email" name='email' id='email' placeholder='name@example.com' />
                    </div>
                    <div>
                        <label className={LoginCSS.labe} htmlFor='password'>Password </label>
                        <div className={LoginCSS.wrap}>
                            <input className={LoginCSS.inpt} type = {type} name='password' id='password' placeholder='min. 8 characters'/>
                            <span className ={LoginCSS.IC} onClick = {handleToggle}><Icon icon ={icon} size={25}></Icon> </span>
                        </div>
                    </div>
                    <div>
                        <label className={LoginCSS.boxText} htmlFor='keepLogin'>Keep me logged in </label>
                        <input className={LoginCSS.box} type = "checkbox" name='keepLogin' id='keepLogin' />
                    </div>
                    <input className={LoginCSS.submit} type= 'submit' value= 'LOGIN' />
                </div>
            </form>
        </div>  
  )
}

export default Login