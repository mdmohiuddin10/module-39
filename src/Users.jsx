import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}





/*
1. declare a stste to hole the data
2. useEffect with callBack and deoendency array
3. use fetch to load data
4. display data on the component
*/