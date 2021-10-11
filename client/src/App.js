import './App.css';
import { VoteProvider } from './contexts/VoteContext';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <VoteProvider>
        <Container />
      </VoteProvider>
    </div>
  );
}

export default App;
