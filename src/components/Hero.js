import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach } from "react-icons/fa";

export default function Hero() {
    // State for inputs
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [selected, setSelected] = useState("Flights");

    // Handle search
    const handleSearch = () => {
        alert(`Searching ${selected} from ${from} to ${to} on ${date}`);
        // Later you can replace alert with API call
        console.log({ selected, from, to, date });
    };

    return (
        <section className="hero-banner d-flex align-items-center">
            <Container className="text-center">
                <h1 className="fw-bold display-5 mb-3">
                    Compare <span className="highlight">deals</span> from 100s of sites
                </h1>
                <p className="text-muted mb-4">Find the best options for you quickly.</p>

                {/* Icon Row */}
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <Button
                            variant={selected === "Flights" ? "primary" : "light"}
                            className="icon-btn"
                            onClick={() => setSelected("Flights")}
                        >
                            <FaPlane /> Flights
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant={selected === "Stays" ? "primary" : "light"}
                            className="icon-btn"
                            onClick={() => setSelected("Stays")}
                        >
                            <FaHotel /> Stays
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant={selected === "Cars" ? "primary" : "light"}
                            className="icon-btn"
                            onClick={() => setSelected("Cars")}
                        >
                            <FaCar /> Cars
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant={selected === "Holiday" ? "primary" : "light"}
                            className="icon-btn"
                            onClick={() => setSelected("Holiday")}
                        >
                            <FaUmbrellaBeach /> Holiday
                        </Button>
                    </Col>
                </Row>

                {/* Search Bar */}
                <Form className="d-flex justify-content-center shadow rounded-pill bg-white p-2 search-bar">
                    <Form.Control
                        type="text"
                        placeholder="From?"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="border-0 rounded-pill"
                    />
                    <Form.Control
                        type="text"
                        placeholder="To?"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="border-0 rounded-pill mx-2"
                    />
                    <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border-0 rounded-pill"
                    />
                    <Button
                        variant="primary"
                        className="rounded-pill ms-2 px-4"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Form>
            </Container>
        </section>
    );
}
