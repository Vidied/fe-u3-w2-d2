import React from "react";
import { Form } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  handleChange = (field, value) => {
    this.setState({
      comment: { ...this.state.comment, [field]: value },
    });
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        },
      );
      if (res.ok) {
        alert("Commento inviato");
        this.props.noNewComment();
      }
    } catch (err) {
      console.log("Errore", err);
    }
  };

  render() {
    return (
      <form onSubmit={this.sendComment}>
        <Form.Group>
          <Form.Control
          className="my-2"
            as="textarea"
            rows={3}
            placeholder="Commenta!"
            value={this.state.comment.comment}
            onChange={(e) => this.handleChange("comment", e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-dark bg-white w-100 rounded-2">Voto</Form.Label>
          <Form.Select
          className="mb-2"
            value={this.state.comment.rate}
            onChange={(e) => this.handleChange("rate", e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <button className="btn btn-info rounded-2">Invia</button>
      </form>
    );
  }
}

export default AddComment;
