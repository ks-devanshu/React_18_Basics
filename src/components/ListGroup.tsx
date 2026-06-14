import { useState } from "react";

interface ListGroupProps{
  list: String[];
  heading: String;
  handleClick: (item:String) => void;
}

function ListGroup({list, heading, handleClick} : ListGroupProps) {
    // let list = [
    //     "New York", "San Fransico", "Tokyo", "London", "Paris", "Berlin"
    // ];
    // list =[];

    let [selectedIndex, setSelectedIndex] = useState(-1);

    return ( 
    <>
        <h1>{heading}</h1>
        {/* {list.length === 0 && <p>No items</p>} */}
        <ul className="list-group">
            {list.map( (item, index) => <li 
            className={index === selectedIndex ? "list-group-item active" : "list-group-item"}
            onClick={ () => {
                setSelectedIndex(index);
                handleClick(item);
            }
            }
            key={item}
            >{item}</li> )}
        </ul>
    </>
    );
}

export default ListGroup;