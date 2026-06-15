// import Message from "./components/Message"
// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert";
// import { useState } from "react";
// import Button from "./components/Button";
// import DismissiableAlert from "./components/DismissiableAlert";

// import Button from './components/ButtonWithCss/Button'
import { useState } from 'react';
import Like from './components/Like'


function App() {
    // let cities = [ "New York", "San Fransico", "Tokyo", "London", "Paris", "Berlin" ];
    // function handleSelectItem(item: String) {
    //   console.log(item);
    // }

    // let [isClicked, setIsClicked] = useState(false);

    function handleLikeClick() {
      console.log('clicked');
    }

  return <div>
    {/* <Message></Message>
    <ListGroup list={cities} heading={"Heading"} handleClick={handleSelectItem}></ListGroup>
    <Alert>Hello React</Alert> */}
    {/* {isClicked && <DismissiableAlert onClose={()=>{setIsClicked(false)}}>I'm an Alert</DismissiableAlert>}
    <Button onClick={()=>{setIsClicked(true)}}>Press Me!</Button> */}

    {/* <Button></Button> */}
    <Like handleClick={handleLikeClick}></Like>
  </div>;
}

export default App;