import { useState } from "react";
import State from "./components/State";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ali", "Veli"]);

  return (
    <>
    <State/>
      <h1>Merhaba {name}</h1>
      <button onClick={() => setName("Ali")}>Click</button>
      <hr />
      <h1>yaş:{age}</h1>
      <button onClick={() => setAge(88)}>Click</button>
      <hr />
      {friends.map((item) => (
        <div>{item}</div>
      ))}
      <button onClick={() => setFriends(["Noah"])}>add new friend</button>
    </>
  );
}

export default App;
