// import Message from "./components/Message"
// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import DismissiableAlert from "./components/DismissiableAlert";


function App() {
    // let cities = [ "New York", "San Fransico", "Tokyo", "London", "Paris", "Berlin" ];
    // function handleSelectItem(item: String) {
    //   console.log(item);
    // }

    let [isClicked, setIsClicked] = useState(false);

  return <div>
    {/* <Message></Message>
    <ListGroup list={cities} heading={"Heading"} handleClick={handleSelectItem}></ListGroup>
    <Alert>Hello React</Alert> */}
    {isClicked && <DismissiableAlert onClose={()=>{setIsClicked(false)}}>I'm an Alert</DismissiableAlert>}
    <Button onClick={()=>{setIsClicked(true)}}>Press Me!</Button>
  </div>;
}

export default App;