import './App.css';
import TasksContainer from './components/TasksContainer/TasksContainer';

function App() {
  return (
    <div className="App">
      <h2>Утром</h2>
      <TasksContainer time={'AM'} />
      <h2>Вечером</h2>
      <TasksContainer time={'PM'} />
    </div>
  );
}

export default App;
