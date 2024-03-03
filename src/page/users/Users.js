import React, { useEffect, useState } from 'react';
import classes from './Users.module.css';
import { Link } from 'react-router-dom';


const Users = () => {

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.org/users')
        const users = await (data.json())
        setUsers(users)
    }
    useEffect(()=>{
        getUsers()
    }, [])

    return (
        <>
            <ul className={classes.users}>
                {
                    users.map(user =>
                        <li key={user.id} className={classes.user}>
                            <p><span>Username:</span> {user.login.username}</p>
                            <p><span>BirthDate:</span> {user.birthDate}</p>
                            <Link to={`/users/${user.id}`}>Подробнее</Link>
                        </li>)
                }
            </ul>
        </>

    );
};

export default Users;