import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./assets/Libri/fantasy.json";


function App() {
  return (
    <div>
      <header>
        <MyNav></MyNav>
      </header>
      <main  >
        <Container>
          <Welcome></Welcome>

          <BookList books={fantasy}></BookList>
          <AllTheBooks></AllTheBooks>
        </Container>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
