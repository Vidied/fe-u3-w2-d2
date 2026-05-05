import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddComment = ({ asin, onNewComment }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        },
      );

      if (res.ok) {
        alert("Commento inviato!");
        setComment({
          comment: "",
          rate: "1",
          elementId: asin,
        });
        if (onNewComment) onNewComment();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={sendComment} className="mt-3">
      <Form.Group className="mb-2">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Scrivi qui il tuo commento..."
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-dark bg-white w-100 rounded-2 px-2">
          Voto
        </Form.Label>
        <Form.Select
          value={comment.rate}
          onChange={(e) => setComment({ ...comment, rate: e.target.value })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button variant="info" type="submit" className="w-100 rounded-2">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
