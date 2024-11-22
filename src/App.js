import './App.css';
import Button from './components/Button/Button';
import Container from './components/Container/Container';

import Copyright from './components/copyright/Copyrgiht';
import ProdcutsList from './components/ProdcutsList/ProdcutsList';
import SimpleForm from './components/SimpleForm/SimpleForm';
import TextField from './components/TextField/TextField';

function App() {

  return (
    <div className="App simpleStyle">

      <Container>
        <SimpleForm />
        <SimpleForm />
        <SimpleForm />
      </Container>
      <ProdcutsList />
      <Copyright />
    </div>
  );
}

export default App;
