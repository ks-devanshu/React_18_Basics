import { useState } from "react";

type ListGroup = {
    desc: string,
    amount: number,
    category: string
}

interface ListGroupProps{
    expenses: ListGroup[],
    onDelete: (index:number) => void
};

function ListGroup({expenses, onDelete}:ListGroupProps) {
    let [selectedCat, setSelectedCat] = useState(0);

    function getCat(label:string) {
        return label === "Groceries" ? 1 : label === "Utilities" ? 2 : 3;
    }

    if(expenses.length < 1)
        return;

    return (
        <>
            <div className="mb-3">
                <select defaultValue="0" className="form-select" id="category" onChange={(event) => {setSelectedCat(parseInt(event.target.value))}}>
                    <option value="0">All Categories</option>
                    <option value="1">Groceries</option>
                    <option value="2">Utilities</option>
                    <option value="3">Entertainment</option>
                </select>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((item,index) => {
                        if (selectedCat === 0 || getCat(item.category) === selectedCat)
                            return (
                            <tr key={index}>
                                <td>{item.desc}</td>
                                <td>{item.amount}</td>
                                <td>{item.category}</td>
                                <td><button className="btn btn-outline-danger" onClick={() => {onDelete(index)}}>Delete</button></td>
                            </tr>
                            )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                    <th scope="row">Total</th>
                    <td>${
                        expenses.reduce((sum, item) => {
                            if ((selectedCat === 0 || getCat(item.category) === selectedCat)) {
                                return parseFloat((sum+item.amount).toFixed(2));
                            }
                            return sum;
                        },0.00).toFixed(2)
                        }
                    </td>
                    <td></td>
                    <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export default ListGroup;