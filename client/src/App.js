import "./App.css";
import Ticket from "./components/Ticket";
import SearchInput from "./components/SearchInput";
import HiddenCounter from "./components/HiddenCounter";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchCounter from "./components/SearchCounter";

const navbarProps = ['Ticket Manager', 'sort', 'show hidden']

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

 const sortOnClick = () => {
    tickets.sort(function(a, b){
        return b.creationTime - a.creationTime;
    });
    const sortedTickets = [...tickets];
    setTickets(sortedTickets);
 }

 useEffect(() => {
  getTickets();
 }, []);

 return (
    <>
        <NavBar navTitles = {navbarProps} onSortClick = {sortOnClick}/>
        <header className = "app-title">Ticket Manager:</header>
        <div className="container">
            <SearchInput getTickets={getTickets} />
            <div className = "hiddenCounter">
                <HiddenCounter hiddenTickets={hiddenTickets} onClick={restoreOnClick} />
            </div>
            <SearchCounter tickets = {tickets} hiddenTickets = {hiddenTickets}/>
            <Ticket tickets={tickets} hideOnClick={hideOnClick} />
        </div>
    </>
 );
}

export default App;
