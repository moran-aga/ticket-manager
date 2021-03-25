import "./App.css";
import Ticket from './components/Ticket';
import SearchInput from './components/SearchInput';
import Counter from './components/Counter';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);

  const getTickets = async (searchWord) => {
    if(searchWord === undefined){
      const { data } = await axios.get('/api/tickets?searchText');
      setTickets(data);
      return;
    }
    const { data } = await axios.get(`/api/tickets?searchText=${searchWord}`);
    setTickets(data);
  };

  const hideOnClick = async (e) => {
    try{
      const ticketTime = e.target.parentElement.parentElement.children[3].innerText;
      const ticketIndex = tickets.findIndex(ticket => ticket.creationTime === Number(ticketTime));
      const tempList = [...tickets];
      tempList[ticketIndex].done = true;
      setTickets(tempList);
    } catch(e){
      console.log("ERROR" + e);
    }
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className = "container">
      <SearchInput getTickets = {getTickets}/>
      <Counter hiddenTickets = {hiddenTickets} />
      <Ticket tickets = {tickets} hideOnClick = {hideOnClick}/>
    </div>
  );
}

export default App;
