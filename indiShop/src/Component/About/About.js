import { Box, TextField, Button } from '@mui/material';

import HomeGrid3 from "../Home/HomeGrid3";
import "./About.css";

const About =()=> {

    return (

    <div className="about-main">
        <h2>About Us</h2><br/>
        <HomeGrid3/><br/><br/>
        <h3>Contact Us</h3>
        <p>Address : Indishop Private Limited, Thane, 400080, Maharashtra, India Telephone:022-12345678</p>

        <div className="about-container">
            <div style={{textAlign:'center', paddingLeft:150}}>
                <h3>Feedback Form</h3>
                <Box component="form" sx={{'& .MuiTextField-root':{m:1},}} noValidate>
                    <form action="https://formspree.io/f/xnqklanv" method="POST">
                        <TextField
                            id="outlined-textarea"
                            label="Name"
                            type="text"
                            name="name"
                            required
                            autoComplete="off"
                            style={{width:350}}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="e-mail"
                            type="email"
                            name="email"
                            required
                            autoComplete="off"
                            style={{width:350}}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            name="message"
                            rows={4}
                            required
                            autoComplete='off'
                            style={{width:350}}
                        />
                        <br/>
                        <Button value="SUBMIT">SUBMIT</Button>
                    </form>
                </Box>
            </div>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60296.95186339!2d72.90875857242322!3d19.17075037919006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f6b9b46f55%3A0x4931f15f2ac0438c!2sAsha%20Nagar%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1696834039881!5m2!1sen!2sin"
                allowFullscreen=""
                loading="fast"
                referrerPolicy="no-referrer-when-downgrade"
                title="iframe"
                className="about-iframe"
            />

        </div>
    </div>
    )
}
export default About;