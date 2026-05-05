import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,}

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} className="text-center">
            <Form.Group>
              <Form.Control
              className="my-2"
                type="search"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>

          <Col md={8}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} sm={6} lg={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedAsin={this.state.selectedAsin}
                    
                      changeSelectedAsin={(asin) =>
                        this.setState({ selectedAsin: asin })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>

    
          <Col md={4}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
