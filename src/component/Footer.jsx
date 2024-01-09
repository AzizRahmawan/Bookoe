import Logo from './../assets/icon/logo-nav.svg';

const Footer = () => {

    return (
        <>
            <footer>                
                <div className="container">
                    <div className="footer-form">
                        <div className="form-title">
                            Join our newsletter to get our latest recommendation!
                        </div>
                        <div className="card-form">
                            <input type="text" className="input-email" placeholder="Enter your email" />
                            <button>Sumbit</button>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="logo-footer">
                            <a href="/" className="footer-logo">
                                <img src={Logo} alt="Logo" />
                                <div className="footer-logo-name">
                                <span className="footer-logo-title">Bookoe</span>
                                <br />
                                <span className="footer-logo-sub-title">Rekomendasi Bukumu</span>
                                </div>
                            </a>
                            <div className="footer-logo-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </div>
                        </div>
                        <div className="footer-divider"></div>
                        <div className="footer-contact">
                            <div className="copyright">
                                Copyright © 2023 Codemasters.id | All Rights Reserved 
                            </div>
                            <div className="contact-icon">
                                a
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;