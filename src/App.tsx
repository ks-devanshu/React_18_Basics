// import Message from "./components/Message"
// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert";
// import { useState } from "react";
// import Button from "./components/Button";
// import DismissiableAlert from "./components/DismissiableAlert";

// import Button from './components/ButtonWithCss/Button'
// import { useState } from 'react';
// import Like from './components/Like'


// import ExpandableText from "./components/ExpandableText";

// import Form from "./components/Form";


import { useEffect, useState } from "react";
import ServerList from "./components/ServerList";
// import axios from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import userServices, {User} from "./services/user-services";

// type User = {
//   id: number,
//   name: string
// }

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


    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const onDelete = (user:User) => {
    //   const originalUsers = [...users];
    //   setUsers(users.filter((each) => each.id !== user.id));

    //   apiClient.delete('/users/' + user.id)
    //   .catch( (err) => { 
    //     setError(err.message);
    //     setUsers(originalUsers);
    //   });
    // };

    const onDelete = (user:User) => {
      const originalUsers = [...users];
      setUsers(users.filter((each) => each.id !== user.id));

      userServices.deleteUser(user).catch( (err) => { 
        setError(err.message);
        setUsers(originalUsers);
      });
    };

    // const onAdd = () => {
    //   const originalUsers = [...users];
    //   const newUser = {id: 0, name:"Dummy Addition"};
    //   setUsers([newUser, ...users]);

    //   apiClient.post('/users/',newUser)
    //     .then( (res) => {setUsers([res.data, ...users])} )
    //     .catch ( (err) => {
    //       setError(err.message);
    //       setUsers(originalUsers);
    //   });
    // };

    const onAdd = () => {
      const originalUsers = [...users];
      const newUser = {id: 0, name:"Dummy Addition"};
      setUsers([newUser, ...users]);

      userServices.addUser(newUser).then( (res) => {setUsers([res.data, ...users])} )
        .catch ( (err) => {
          setError(err.message);
          setUsers(originalUsers);
      });
    };

    // const onUpdate = (user:User) => {
    //   const originalUsers = [...users];
    //   const updatedUser = {...user, name:user.name+"!"};
    //   setUsers(users.map( (each) => each.id === user.id ? updatedUser : each ))
      
    //   apiClient.patch('/users/'+user.id, updatedUser)
    //   .catch( (err) => {
    //     setError(err.message);
    //     setUsers(originalUsers);
    //   } )
    // };

    const onUpdate = (user:User) => {
      const originalUsers = [...users];
      const updatedUser = {...user, name:user.name+"!"};
      setUsers(users.map( (each) => each.id === user.id ? updatedUser : each ))
      
      userServices.updateUser(updatedUser).catch( (err) => {
        setError(err.message);
        setUsers(originalUsers);
      } )
    };

    // useEffect( ()=> {
    //   const controller = new AbortController();

    //   setIsLoading(true);

    //   apiClient.get<User[]>('/users', {signal: controller.signal})
    //   .then( (res) => {setUsers(res.data); setIsLoading(false);} )
    //   .catch( (err) => { 
    //     if (err instanceof CanceledError) return; // for Abort Controller
    //     setError(err.message);
    //     setIsLoading(false); } )
    //   // .finally( () => setIsLoading(false) );

    //   return () => {controller.abort()};
    // }, [])


    useEffect( ()=> {
      setIsLoading(true);
      const {request, abort} = userServices.getAllUsers();

      request.then( (res) => {setUsers(res.data); setIsLoading(false);} )
      .catch( (err) => { 
        if (err instanceof CanceledError) return; // for Abort Controller
        setError(err.message);
        setIsLoading(false); } )
      // .finally( () => setIsLoading(false) );

      return () => abort();
    }, [])


  return <div>
    {/* <Message></Message>
    <ListGroup list={cities} heading={"Heading"} handleClick={handleSelectItem}></ListGroup>
    <Alert>Hello React</Alert> */}
    {/* {isClicked && <DismissiableAlert onClose={()=>{setIsClicked(false)}}>I'm an Alert</DismissiableAlert>}
    <Button onClick={()=>{setIsClicked(true)}}>Press Me!</Button> */}

    {/* <Button></Button> */}
    {/* <Like handleClick={handleLikeClick}></Like> */}

    {/* <ExpandableText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate delectus aut quae dolor nihil minima totam nulla sed in soluta assumenda quaerat placeat rerum fuga officiis corporis adipisci, non, quis magnam consectetur quod enim. Rerum nam ad earum? Totam illo odio fuga praesentium animi. Temporibus dignissimos labore voluptatem adipisci.</ExpandableText> */}

    {/* <Form></Form> */}    

    {isLoading && <div className="spinner-border"></div>}
    {error && <p className="text-danger">{error}</p>}
    <ServerList users={users} onDelete={onDelete} onAdd={onAdd} onUpdate={onUpdate}></ServerList>  
  </div>;
}

export default App;