import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="footer-clean mt-5">
            <Container className="pt-5 pb-4">
                <Row>
                    <Col md={3} sm={6} className="mb-4">
                        <h6 className="fw-bold">Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">List your property</a></li>
                            <li><a href="#">Partnerships</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Affiliate Marketing</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6} className="mb-4">
                        <h6 className="fw-bold">Explore</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Canada travel guide</a></li>
                            <li><a href="#">Hotels in Canada</a></li>
                            <li><a href="#">Vacation rentals in Canada</a></li>
                            <li><a href="#">Vacation packages in Canada</a></li>
                            <li><a href="#">Domestic flights</a></li>
                            <li><a href="#">Car rentals in Canada</a></li>
                            <li><a href="#">All accommodation types</a></li>
                            <li><a href="#">Travel blog</a></li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6} className="mb-4">
                        <h6 className="fw-bold">Policies</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Vrbo terms and conditions</a></li>
                            <li><a href="#">Expedia Rewards Terms</a></li>
                            <li><a href="#">Legal information / Contact us</a></li>
                            <li><a href="#">Content guidelines and reporting content</a></li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6} className="mb-4">
                        <h6 className="fw-bold">Help</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Cancel your hotel or vacation rental booking</a></li>
                            <li><a href="#">Cancel your flight</a></li>
                            <li><a href="#">Refund timelines</a></li>
                            <li><a href="#">Use an Expedia coupon</a></li>
                            <li><a href="#">International travel documents</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="text-center small text-muted mt-4">
                    <Col>
                        <p>© 2025  Patel. All rights reser.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

