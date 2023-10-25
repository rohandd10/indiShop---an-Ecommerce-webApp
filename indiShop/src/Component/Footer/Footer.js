import "./Footer.css";

const Footer =()=> {
    return (
    <div className="main">
        <div className="footer-top">
            <div className="footer-top-container">
                <div className="footer-top-row">
                    <div className="column">
                        <h4 className="column-header">Contact Us</h4>
                        <div>
                            <p class="column-header-body">Indishop Private Limited,</p>
                            <p class="column-header-body">Kalyan, 421301,</p>
                            <p class="column-header-body">Maharashtra, India</p>
                            <p class="column-header-body">Telephone:<a href="tel:022-456789123">022-456789123</a></p>
                        </div>
                    </div>

                    <div className="column">
                        <h4 className="column-header">Information</h4>
                        <div>
                            <p className="column-body">Privacy Policy</p>
                            <p className="column-body">Refund Policy</p>
                            <p className="column-body">Shipping Policy</p>
                            <p className="column-body">Terms of Services</p>
                        </div>
                    </div>

                    <div className="column">
                        <h4 className="column-header">Account</h4>
                        <div>
                            <p className="column-body">Search</p>
                            <p className="column-body">About Us</p>
                            <p className="column-body">Faq</p>
                            <p className="column-body">Contact</p>
                        </div>
                    </div>

                    <div className="column">
                        <h4 className="column-header">Quick Links</h4>
                        <div>
                            <p className="column-body">Trending</p>
                            <p className="column-body">Fashion</p>
                            <p className="column-body">Home</p>
                            <p className="column-body">Mobiles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">

            <div className="footer-bottom-contents">
                <img src="../media/sell.svg" alt="Sell" width="13" height="13"/>
                <p>Become a Seller</p>
            </div>

            <div className="footer-bottom-contents">
                <img src="../media/advertise.svg" alt="Advertise" width="13" height="13"/>
                <p>Advertise</p>
            </div>

            <div className="footer-bottom-contents">
                <img src="../media/giftCards.svg" alt="Gift" width="13" height="13"/>
                <p>Gift Cards</p>
            </div>

            <div className="footer-bottom-contents">
                <img src="../media/helpCentre.svg" alt="Help" width="13" height="13"/>
                <p>Help Center</p>
            </div>

            <div className="footer-bottom-contents">
                <p>©{new Date().getFullYear()} indishop.com</p>
            </div>

            <div className="footer-bottom-contents">
                <img src="../media/paymentMethod.svg" alt="Payment"/>
            </div>

        </div>
    </div>
    )
}
export default Footer;