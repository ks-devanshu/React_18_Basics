// import Message from "./components/Message"
// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert";
// import { useState } from "react";
// import Button from "./components/Button";
// import DismissiableAlert from "./components/DismissiableAlert";

// import Button from './components/ButtonWithCss/Button'
// import { useState } from 'react';
// import Like from './components/Like'


import ExpandableText from "./components/ExpandableText";


function App() {
    // let cities = [ "New York", "San Fransico", "Tokyo", "London", "Paris", "Berlin" ];
    // function handleSelectItem(item: String) {
    //   console.log(item);
    // }

    // let [isClicked, setIsClicked] = useState(false);
    // function handleLikeClick() {
    //   console.log('clicked');
    // }


    // Updating state objects
    // const [game, setGame] = useState({
    //   id: 1,
    //   player: {
    //     name: 'John',
    //   },
    // });
    // const handleClickGame = () => {
    //   setGame({...game, player:{...game.player, name:'bob'} })
    // };
    // const [pizza, setPizza] = useState({
    //   name: 'Spicy Pepperoni',
    //   toppings: ['Mushroom']
    // });
    // const handleClickPizza = () => {
    //   setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
    // };
    // const [cart, setCart] = useState({
    //   discout: .1,
    //   items: [
    //     {id: 1, title: 'Product 1', quantity: 1},
    //     {id: 2, title: 'Product 2', quantity: 1}
    //   ]
    // });
    // const handleClickCart = () => {
    //   setCart({...cart, items: cart.items.map( item => item.id === 1 ? {...item, quantity:item.quantity+1} : item )})
    // }


  return <div>
    {/* <Message></Message>
    <ListGroup list={cities} heading={"Heading"} handleClick={handleSelectItem}></ListGroup>
    <Alert>Hello React</Alert> */}
    {/* {isClicked && <DismissiableAlert onClose={()=>{setIsClicked(false)}}>I'm an Alert</DismissiableAlert>}
    <Button onClick={()=>{setIsClicked(true)}}>Press Me!</Button> */}

    {/* <Button></Button> */}
    {/* <Like handleClick={handleLikeClick}></Like> */}

    <ExpandableText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate delectus aut quae dolor nihil minima totam nulla sed in soluta assumenda quaerat placeat rerum fuga officiis corporis adipisci, non, quis magnam consectetur quod enim. Rerum nam ad earum? Totam illo odio fuga praesentium animi. Temporibus dignissimos labore voluptatem adipisci.</ExpandableText>

  </div>;
}

export default App;