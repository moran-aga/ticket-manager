import "./App.css";
import Ticket from './components/Ticket';
import SearchInput from './components/SearchInput';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [tickets, setTickets] = useState([]);

  const getTickets = async (searchWord) => {
    if(searchWord === undefined){
      const { data } = await axios.get('api/tickets');
      setTickets(data.DbTickets);
      return;
    }
    const { data } = await axios.get(`/api/tickets?searchText=${searchWord}`);
    setTickets(data.DbTickets);
  };

  useEffect(() => {
    getTickets();
  }, []);


  return (
    <div className = "container">
      <SearchInput getTickets = {getTickets}/>
      <Ticket tickets = {tickets}/>
    </div>
  );
}

export default App;
