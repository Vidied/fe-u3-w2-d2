import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    if (!this.props.asin) return;

    this.setState({ isLoading: true, isError: false });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data, isLoading: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
      console.log("Errore nel fetch dei commenti:", error);
    }
  };

  render() {
    return (
      <div className="sticky-top" style={{ top: "20px" }}>
        {!this.props.asin && (
          <Alert style={{backgroundColor: '#00F3FF', color: '#FF00FF'}}>Seleziona un libro per vedere i commenti</Alert>
        )}
        
        {this.state.isLoading && <Spinner animation="border" variant="primary" />}
        
        {this.state.isError && (
          <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
        )}

        <CommentList comments={this.state.comments} />
        
        {this.props.asin && !this.state.isLoading && (
          <AddComment asin={this.props.asin} onNewComment={this.fetchComments} />
        )}
      </div>
    );
  }
}

export default CommentArea;
