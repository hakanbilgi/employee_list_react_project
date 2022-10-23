import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './assests/data';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);
  const userPerPage = 5;

  const indexOffLastUser = page * userPerPage;
  // console.log(indexOffLastUser)
  const indexOffFirstUser = indexOffLastUser - userPerPage;

  const currentUsers = data.slice(indexOffFirstUser, indexOffLastUser);
  // console.log(currentUsers)
  // indexOffLastUser > data.length && setPage(1);
  return (
    <div className="App">
      <Header from={indexOffFirstUser + 1} to={indexOffFirstUser + currentUsers.length} />
      {currentUsers.map((item) => (
        <React.Fragment key={item.id}><Main {...item} /></React.Fragment>
      ))}
      <Button total={Math.ceil(data.length / userPerPage)} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
