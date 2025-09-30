import { Card, Col, Container, Row } from "react-bootstrap";

export default function ThreeColumns() {
    const deals = [
        {
            img: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
            city: "New York",
            info: "2h 40m, direct",
            dates: "Mon 20/10 → Thu 25/10",
            price: "from C$ 185",
        },
        {
            img: "https://content.api.news/v3/images/bin/454c9989380d3d576486d3232f8afbb7",
            city: "buffalo",
            info: "3h 20m, direct",
            dates: "Thu 2/10 → Thu 13/10",
            price: "from C$ 100",
        },
        {
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/34/2d/28/caption.jpg?w=1400&h=1400&s=1&cx=662&cy=604&chk=v1_8984ddf3493edfb8c896",
            city: "las vegas",
            info: "3h 10m, direct",
            dates: "Sun 14/10 → Fri 31/10",
            price: "from C$ 150",
        },
        {
            img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/ohio-edited?_a=BAVAZGID0",
            city: "ohio",
            info: "1h 33m, direct",
            dates: "Tue 21/10 → Fri 24/10",
            price: "from C$ 220",
        },
    ];

    return (
        <Container id="deals" className="py-5">
            <h2 className="fw-bold mb-4">Travel deals CA$ 250</h2>
            <Row>
                {deals.map((deal, i) => (
                    <Col key={i} lg={7} md={6} sm={12} className="mb-4">
                        <Card className="deal-card shadow-sm border-0">
                            <Card.Img variant="top" src={deal.img} className="deal-img" />
                            <Card.Body>
                                <Card.Title className="fw-bold">{deal.city}</Card.Title>
                                <Card.Text className="text-muted mb-1">{deal.info}</Card.Text>
                                <Card.Text className="text-muted mb-2">{deal.dates}</Card.Text>
                                <Card.Text className="fw-bold text-dark">{deal.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
