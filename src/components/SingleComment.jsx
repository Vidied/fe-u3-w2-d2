import { ListGroupItem } from "react-bootstrap";

const SingleComment = ({ comment }) => (
  <ListGroupItem  style={{ backgroundColor: "#1A1D23", color: "#00FF87" }}>
    <strong>{comment.rate}/5</strong> - {comment.comment}
  </ListGroupItem>
);

export default SingleComment;
