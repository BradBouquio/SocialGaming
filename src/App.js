import logo from './logo.svg';
import { Button, Container } from '@material-ui/core';
import SimpleTabs from './SimpleTabs';
import './App.css';



function App() {


  return (
    
    <div className="App">
      <SimpleTabs />
      <Container maxWidth="sm">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Container>
    </div>
  );
}

export default App;
