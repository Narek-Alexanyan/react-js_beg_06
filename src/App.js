import './App.css';
import { Container } from '@material-ui/core';
import Counter from './components/Counter';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Counter />
        <hr/>
        <Form />
      </Container>
    </div>
  );
}

export default App;
