import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "../src/assets/data";
import {useState} from "react";

function App() {
  const [page,setPage] = useState(1);
  const userPerPage = 5;
  





  return (
 <>
 <Header/>
 <Main/>
 <Button/>
 </>
  );
}

export default App;
