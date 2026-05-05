import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((c) => (
        <SingleComment key={c._id} comment={c} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
