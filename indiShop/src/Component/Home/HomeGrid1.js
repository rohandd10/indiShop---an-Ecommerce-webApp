import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./Home.css"

const HomeGrid1 =()=> {
    return (<>
        <div className="BannerWrapper1">
            <div className="BannerContent1">
                <img src="images/main-banner-1.jpg" alt="main-banner-1"/>
                <div className="BannerText1">
                    <h4 style={{fontSize:20, marginTop:10}}>SUPERCHARGED FOR PROS</h4>
                    <h1 style={{fontSize:45, marginTop:10}}>SPECIAL SALE</h1>
                    <p style={{fontSize:15, margin:"15px 0 30px 0"}}>From 48000 or 2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
            <div className="BannerContent2">
                <img src="images/main-banner.jpg" alt="main-banner-2"/>
                <div className="BannerText1">
                    <h4 style={{fontSize:20, marginTop:10}}>SUPERCHARGED FOR PROS</h4>
                    <h1 style={{fontSize:45, marginTop:10}}>SPECIAL SALE</h1>
                    <p style={{fontSize:15, margin:"15px 0 30px 0"}}>From 48000 or 2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
        </div>

        <div className="BannerWrapper2">
            <div className="BannerContent3">
                <img src="images/catbanner-01.jpg" alt="cat-banner-1"/>
                <div className="BannerText2">
                    <h5 style={{margin:0}}>SUPERCHARGED FOR PROS</h5>
                    <h3>Special Sale</h3>
                    <p style={{margin:0}}>From 48000 or</p>
                    <p style={{margin:0}}>2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
            <div className="BannerContent4">
                <img src="images/catbanner-02.jpg" alt="cat-banner-2"/>
                <div className="BannerText2">
                    <h5 style={{margin:0}}>SUPERCHARGED FOR PROS</h5>
                    <h3>Special Sale</h3>
                    <p style={{margin:0}}>From 48000 or</p>
                    <p style={{margin:0}}>2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
            <div className="BannerContent5">
                <img src="images/catbanner-03.jpg" alt="cat-banner-3"/>
                <div className="BannerText2">
                    <h5 style={{margin:0}}>SUPERCHARGED FOR PROS</h5>
                    <h3>Special Sale</h3>
                    <p style={{margin:0}}>From 48000 or</p>
                    <p style={{margin:0}}>2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
            <div className="BannerContent6">
                <img src="images/catbanner-04.jpg" alt="cat-banner-4"/>
                <div className="BannerText2">
                    <h5 style={{margin:0}}>SUPERCHARGED FOR PROS</h5>
                    <h3>Special Sale</h3>
                    <p style={{margin:0}}>From 48000 or</p>
                    <p style={{margin:0}}>2000/month</p>
                    <Link><Button variant="contained">Details</Button></Link>
                </div>
            </div>
        </div>
    </>)
}
export default HomeGrid1;