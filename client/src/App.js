import "./App.css";
import Ticket from "./components/Ticket";
import SearchInput from "./components/SearchInput";
import Counter from "./components/Counter";
import axios from "axios";
import { useEffect, useState } from "react";
import RestoreButton from "./components/RestoreButton";

function App() {
 const [tickets, setTickets] = useState([]);
 const [hiddenTickets, setHiddenTickets] = useState([]);

 const getTickets = async (searchWord) => {
  if (searchWord === undefined) {
   const { data } = await axios.get("/api/tickets?searchText=");
   setTickets(data);
   getHiddenTickets(data);
   return;
  }
  const { data } = await axios.get(`/api/tickets?searchText=${searchWord}`);
  setTickets(data);
  getHiddenTickets(data);
 };

 const hideOnClick = async (e) => {
  try {
   const ticketTime = e.target.parentElement.children[0].innerText;
   const ticketIndex = tickets.findIndex(
    (ticket) => ticket.creationTime === Number(ticketTime)
   );
   const tempList = [...tickets];
   tempList[ticketIndex].done = true;
   setTickets(tempList);
   getHiddenTickets(tempList);
  } catch (e) {
   console.log("ERROR" + e);
  }
 };

 const getHiddenTickets = (data) => {
  const temp = data.filter((ticket) => ticket.done);
  setHiddenTickets(temp);
 };

 const restoreOnClick = () => {
  const restoredList = tickets.map((ticket) => {
   ticket.done = false;
   return ticket;
  });
  setTickets(restoredList);
  setHiddenTickets([]);
 };

 useEffect(() => {
  getTickets();
 }, []);

 return (
  <div className="container">
   <SearchInput getTickets={getTickets} />
   <RestoreButton onClick={restoreOnClick} />
   <Counter hiddenTickets={hiddenTickets} tickets={tickets} />
   <Ticket tickets={tickets} hideOnClick={hideOnClick} />
  </div>
 );
}

export default App;
