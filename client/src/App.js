import "./App.css";
import Ticket from './components/Ticket';

function App() {
  
  return (
    <div className = "container">
      <Ticket tickets = {tickets}/>
    </div>
  );
}

export default App;
