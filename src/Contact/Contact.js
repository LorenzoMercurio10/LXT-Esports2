import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';

function Contact() {
    return (
    <>
        <section id="contact">
            <div className="contact-background">
                <div className="row justify-content-center contact-block">
                    <div className="col-xs-12 col-md-6 contact-text">
                        <h1 className="contact-header">CONTACT US</h1>
                        &nbsp;
                        <p className="contact-info">INFO</p>
                        <p className="mail">info@lxtesports.com</p>
                        <p className="org">LXT Esports powered by</p>
                        <p className="org-text">Ask Advisory Srl Società Benefit</p>
                        <p className="org-text">P.I. e C.F. 09602580962</p>
                        <p className="org-text">Viale Giulio Richard 1/A</p>
                        <p className="org-text">20143 - Milano</p>
                        <p className="org-text">Tel. +39 0289014844</p>
                        
                    <div className="col-xs-12 col-md-6 d-flex contact-socials">
                        <Nav.Link href="https://www.instagram.com/lxt.official/" target="_blank" className="instagram">
                            <img src="img/ig.png" alt="instagram" height="25" width="27"></img>
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/lxtesports" target="_blank" className="twitter">
                            <img src="img/twitter.png" alt="twitter" height="25" width="25"></img>
                        </Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/lxtesports" target="_blank" className="twitch">
                            <img src="img/twitch.png" alt="twitch" height="25" width="25"></img>
                        </Nav.Link>
                        <Nav.Link href="https://www.tiktok.com/@lxtesports" target="_blank" className="tiktok">
                            <img src="img/tiktok.png" alt="tiktok" height="25" width="25"></img>
                        </Nav.Link>
                    </div> 
                    <div className="col-xs-12 col-md-6 contact-policy">
                        <a className="policy" href="https://docs.google.com/document/d/1w5pogAwuysyAlKnsNWU-LvvrjCKfkUKk2UsXECrdRig/edit?usp=sharing" target="_blank">Privacy Policy</a>
                        &nbsp;
                        <a className="policy" href="https://docs.google.com/document/d/19LPqZJXrkn1JBG3vnYCo20D1Yc-RvlWq2QfUFLzb_Cc/edit?usp=sharing" target="_blank">Cookie Policy</a>
                    </div> 
                    </div> 
                     
                    <Form className="col-xs-12 col-md-6 form-contact" action="https://formsubmit.co/info@lxtesports.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Writer</Form.Label>
                                <Form.Control type="text" name="Writer" placeholder="Write here your name" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="Email Address" placeholder="Write here your email address" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Message</Form.Label>
                                <Form.Control type="text" name="Message" placeholder="Write here your message" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out if you have read the privacy and cookie policy" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Button className="button-contact" variant="primary" type="submit">
                            <span className="colore">Submit</span>
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    </>
 )
}

export default Contact;