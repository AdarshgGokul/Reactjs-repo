import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { faUpRightFromSquare, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loginpage.css';


function Login()  {
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
    return (
        <>
            <section >
                <div >
                    <Container>
                        <Row xs={1} sm={1} md={2} lg={2}>
                            <Col>
                                <center>
                                    <div className='pic-box'>
                                        <img src={img} alt='None' height='200px' width='200px' />
                                    </div>
                                </center>
                            </Col>
                            <center>
                                <Col>
                                    <div className='log-box d-flex justify-content-end'>
                                        <h2 className=''>Member Login</h2>
                                        <div className='in-box rounded-pill d-flex justify-content-start'>
                                            <FontAwesomeIcon icon={faEnvelope} size='xl' className='m-3' /><input type='email' id="inbox_1" placeholder='Email' />
                                        </div>
                                        <div className='in-box rounded-pill d-flex justify-content-start'>
                                            <FontAwesomeIcon icon={faLock} size='xl' className='m-3' /><input type='password' id="inbox_2" placeholder='Password' />
                                        </div>
                                        <button className='text-light fw-bold'>LOGIN</button>
                                        <div className='m-3'>
                                            Forgot &nbsp;<a href='#'>Username / Password ?</a><br />
                                        </div>
                                        <a href='#' className=''>Create your account&nbsp;&nbsp;<FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                                    </div>
                                </Col>
                            </center>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Login;