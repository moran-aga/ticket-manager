import "./App.css";
import Ticket from './components/Ticket';
import SearchInput from './components/SearchInput';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [tickets, setTickets] = useState([]);

  const getTickets = async (searchWord) => {
    if(searchWord === undefined){
      const { data } = await axios.get('/api/tickets');
      setTickets(data);
      return;
    }
    const { data } = await axios.get(`/api/tickets?searchText=${searchWord}`);
    setTickets(data);
  };

  const hideOnClick = async (e) => {
      const ticketTime = e.target.parentElement.parentElement.children[3].innerText;
      const ticketIndex = tickets.findIndex(ticket => ticket.creationTime === Number(ticketTime));
      await axios.patch(`/api/tickets/${tickets[ticketIndex]._id}/done`);
      getTickets();
      // not re-rendering the component
      // const tempList = tickets;
      // setTickets(tempList);
  }

  useEffect(() => {
    getTickets();
  }, []);


  return (
    <div className = "container">
      <SearchInput getTickets = {getTickets}/>
      <Ticket tickets = {tickets} hideOnClick = {hideOnClick}/>
    </div>
  );
}

export default App;
