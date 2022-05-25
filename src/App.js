import React from 'react';
import './App.css';
import {useFetch} from "react-async";

async function getUsers () {
    const url = 'https://reqres.in/api/users?page=2';
    let resolve = await fetch(url);
    let json = await resolve.json();
    let users = json.data; //это нужные данные
    console.log (users);
    return(users);
}

const App = () => {
    let users = getUsers(); //это ебаный промис

    //let users = usersPromise.json();
    let usersComponent = users.map(user => <p key={user.id}>user.last_name</p>);
    return (
        <div className="App">
            {usersComponent}
            абракадабра
        </div>
    );
}

export default App;
