import { Component, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

// class BookList extends Component {
//   state = {
//     searchQuery: "",
//     selectedAsin: null,}

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <Form.Group>
            <Form.Control
              className="my-2"
              type="search"
              placeholder="Cerca un libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} sm={6} lg={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedAsin={selectedAsin}
                    changeSelectedAsin={(asin) =>
                      setSelectedAsin(e.target.value)
                    }
                  />
                </Col>
              ))}
          </Row>
        </Col>

        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
