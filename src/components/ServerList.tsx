
type User = {
    id: number,
    name: string
}

interface props {
    users: User[],
    onDelete: (user:User) => void,
    onAdd: () => void,
    onUpdate: (user:User) => void
}

function ServerList({users, onDelete, onAdd, onUpdate}:props) {
    return (
        <>
        <button className="btn btn-primary mb-3" onClick={onAdd}>Add</button>
        <ul className="list-group">
            {users.map( (user)=> <li key={user.id} className="list-group-item d-flex justify-content-between">{user.name}<span><button className="btn btn-outline-primary me-1" onClick={() => {onUpdate(user)}}>Update</button><button className="btn btn-outline-danger" onClick={() => {onDelete(user)}}>Delete</button></span></li> )}
        </ul>
        </>
    )
}

export default ServerList;