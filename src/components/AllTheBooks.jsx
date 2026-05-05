import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import libriFantasy from "../assets/Libri/fantasy.json";
import { Container, Row, Col } from "react-bootstrap";

function AllTheBooks() {
  return (
    <Container>
      <Row className="g-2">
        {libriFantasy.map((libri) => {
          return (
            <Col xs={12} md={6} lg={3} key={libri.asin}>
              <Card className="h-100">
                <Card.Img
                  style={{ height: "250px", objectFit: "cover" }}
                  variant="top"
                  src={libri.img}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-truncate">
                    {libri.title}
                  </Card.Title>
                  <Card.Text>
                    <span>Categoria:{libri.category}</span>
                    <span>Prezzo:{libri.price}€</span>
                  </Card.Text>
                  <Button variant="primary">Compra</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
