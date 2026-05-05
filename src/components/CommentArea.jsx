import { useCallback, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = useCallback(async () => {
    if (!asin) return;

    setIsLoading(true);
    setIsError(false);

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        },
      );

      if (response.ok) {
        let data = await response.json();
        setComments(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.error("Errore nel fetch dei commenti:", error);
    } finally {
      setIsLoading(false);
    }
  }, [asin]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="sticky-top" style={{ top: "20px" }}>
      {!asin && (
        <Alert style={{ backgroundColor: "#00F3FF", color: "#FF00FF" }}>
          Seleziona un libro per vedere i commenti
        </Alert>
      )}

      {isLoading && (
        <Spinner
          animation="border"
          variant="primary"
          className="d-block my-2"
        />
      )}

      {isError && (
        <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
      )}

      <CommentList comments={comments} />

      {asin && !isLoading && (
        <AddComment asin={asin} onNewComment={fetchComments} />
      )}
    </div>
  );
};

export default CommentArea;
