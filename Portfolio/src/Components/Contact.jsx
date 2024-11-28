// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import '../CSS/Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default function Contact() {
      
    return (
        <>
            <div className="contact-container">
                <div className="contact"> 
                    <div className="contactPage-photo"> 
                    </div>
                    <div className="form-heading">
                        <div className="heading-detail">
                            <h5 className='contact-h5'>Let’s Discuss Your Project</h5>
                            <p className='contact-p'>Always available for freelancing if the right project comes along,<br className='temp-br' /> Feel free to contact me.</p>
                        </div>
                    </div>

                    <div className="form-group"> 
                        <div className="contact-detail">
                           
                        </div>
                        <div className="contact-input">
                            <Container className="input-container">
                                <Form>
                                    <Row className="mb-3">
                                        <Col className='frist-col'>
                                            <Form.Group controlId="formName">
                                                <Form.Label>Your Name</Form.Label>
                                                <Form.Control type="text" className='contact-in' placeholder="Name *" required />
                                            </Form.Group>
                                        </Col>
                                        <Col className='second-col'>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label>Your Email</Form.Label>
                                                <Form.Control type="email" className='contact-in' placeholder="Email *" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3 third-col" controlId="formSubject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" className='contact-in' placeholder="Subject *" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3 fourth-col" controlId="formMessage">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} className='contact-in' placeholder="Your message *" required />
                                    </Form.Group>

                                    
                                    <button className='w-100 contact-btn'>
                                           SEND MESSAGE
                                    </button>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
