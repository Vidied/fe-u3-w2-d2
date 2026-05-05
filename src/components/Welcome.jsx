import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="my-3">
      <Alert style={{ backgroundColor: '#00F3FF', color: '#FF00FF' }} >
        <Alert.Heading>Benvenuti in EPI-Libreria!</Alert.Heading>
        <p>
          Il tuo angolo preferito per scoprire nuove storie e avventure indimenticabili.
        </p>
        <hr />
        <p className="mb-0">
          Sfoglia la nostra collezione e trova il tuo prossimo libro preferito.
        </p>
      </Alert>
    </Container>
  );
};

export default Welcome;