import { AppBar, Toolbar, Button, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../Login/DataProvider";
import Login from "../Login/Login";
import "./Header.css";

const Header =()=> {

    const [open, setOpen] = useState(false);
    const handleLogin =()=> {
        setOpen(true)
    };

    const { account,setAccount } = useContext(DataContext)
    const handleLogout =()=> {
        setAccount('')
    }

    return (

        <AppBar style={{height:60, background:"#fff"}}>
            <Toolbar>
                <Link to="/"><img src="../media/IndiShop.png" alt="logo" style={{marginLeft:100}}/></Link>
                <div className="wrapperMain">
                    <Link to="/"><Button>Home</Button></Link>
                    <Link to="/products"><Button>Products</Button></Link>
                    <Link to="/about"><Button>About</Button></Link>
                    <Link to="/cart">
                        <IconButton color="primary" size="large">
                        <Badge badgeContent={4} color="error"><ShoppingCart /></Badge>
                        </IconButton>
                    </Link>
                    {
                        account ?
                        <Button className="loginBtn" onClick={handleLogout}>Logout-{account}</Button>
                    :
                        <Button className="loginBtn" variant="contained" onClick={handleLogin}>Login</Button>
                    }
                    <Login open={open} setOpen={setOpen}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header;