import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [expenses,setExpenses] = useState<Form[]>([]);

  const onDelete = (index:number) => {
    setExpenses([...expenses.slice(0,index),...expenses.slice(index+1)]);
  }

  return <div>
    <Form onSubmit={(data:Form) => {
      setExpenses([...expenses,{...data}]);
      }}></Form>

    <ListGroup expenses={expenses} onDelete={onDelete}></ListGroup>
  </div>
}

export default App;