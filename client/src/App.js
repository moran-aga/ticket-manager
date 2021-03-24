import "./App.css";
import Ticket from './components/Ticket';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  
  const getTickets = async () => {
    const { data } = await axios.get('api/tickets');
    setTickets(data.DbTickets);
  };

  return (
    <div className = "container">
      <Ticket tickets = {tickets}/>
    </div>
  );
}

export default App;
