import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form'
import User from './User'
import axios from "axios"

const initialFormValues = {
    name: '',
    email: '',
    language: '',
    password: '',
    passwordConfirmation: '',
    tos: false,
    }

const initialUsers = [{}]

function App() {
  
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const getUsers = () => {       
        axios
        .get(`https://reqres.in/api/users`)
        .then((res) => {
            console.log(res)
            setUsers(res.data.data)
        })
        .catch((err) => {
            alert("Something ain't right here")
            debugger
        })
    }
    
    const postNewUser = (newUser) => {       
        axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
            setUsers([res.data, ...users])
            setFormValues(initialFormValues)
        })
        .catch((err) => {
            alert("Something ain't right here")
            debugger
        })
    }

    const inputChange = (name, value) => {
    }
    
    const formSubmit = () => {
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password,
            language: formValues.language,
            tos: formValues.tos
        }
        postNewUser(newUser)
    }
    
    useEffect(() => {
        getUsers()
    }, [])

   
    return (
        <div className="App">
            <Form 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
            />
            
            {users.map((user) => {
                return <User key={user.id} details={user} />
            })}
        </div>
    )
}


export default App
