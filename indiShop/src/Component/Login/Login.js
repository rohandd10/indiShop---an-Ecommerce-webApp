import { Button, Dialog, TextField } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";

import { DataContext } from "./DataProvider";
import "./Login.css";

const Login =({open, setOpen})=> {

    const logo = "../media/IndiShop.png";

    const accountInitial = {
        isLogin: { view: 'isLogin', },
        isSignup: { view: 'isSignup', }
    }
    const [dialogSwitch,setDialogSwitch] = useState(accountInitial.isLogin);
    const handleAccount =()=> {
        setDialogSwitch(accountInitial.isSignup)
    };
    const handleClose =()=> {
        setOpen(false)
        setDialogSwitch(accountInitial.isLogin)
    };


    let [username,setUsername] = useState();
    let [name,setName] = useState();
    let [email,setEmail] = useState();
    let [pass,setPass] = useState();

    const { setAccount } = useContext(DataContext);
    
    const handleSignUp =()=> {
        axios.post("http://localhost:9000/signUp", {username,name,email,pass})
        .then((res)=> console.log(res))
        .catch((error)=>console.log(error))
        handleClose();
        setAccount(username);
    }

    let flag;

    const handleSignIn =()=> {
        axios.get(`http://localhost:9000/signIn/${username}/${pass}`)
        .then(
            (res)=> {
                flag = res.data;
                if (flag === "N/A" || flag === "no") {
                    alert("not welcome")
                }
                else {
                    alert("Welcome");
                    setAccount(username);
                }
            }
        )
        .catch((error)=> console.log(error))
        handleClose();
    }

    return (
    <>
        <Dialog open={open} onClose={handleClose}>

            {
                dialogSwitch.view === 'isLogin' ?

                <div className="dialog-login">
                    <img src={logo} className="dialog-img" alt="icon"/><br/>
                    <TextField variant="standard" label="Enter Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
                    <TextField variant="standard" label="Enter Password" type="password" onChange={(e)=>setPass(e.target.value)}/><br/><br/><br/>
                    <Button className="button" variant="contained" onClick={handleSignIn}>Login</Button><br/><br/>
                    <p className="account" onClick={handleAccount}>New User?  Create an account</p>
                </div>

            :

                <div className="dialog-login">
                    <img src={logo} className="dialog-img" alt="icon"/>
                    <TextField variant="standard" label="Enter Username" name="username" onChange={(e)=>setUsername(e.target.value)}/><br/>
                    <TextField variant="standard" label="Enter Name" onChange={(e)=>setName(e.target.value)}/><br/>
                    <TextField variant="standard" label="Enter E-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <TextField variant="standard" label="Enter Password" type="password" onChange={(e)=>setPass(e.target.value)}/><br/><br/>
                    <Button className="button" variant="contained" onClick={handleSignUp}>SIGN UP</Button><br/><br/>
                </div>

            }
            
        </Dialog>

    </>
    )
}
export default Login;