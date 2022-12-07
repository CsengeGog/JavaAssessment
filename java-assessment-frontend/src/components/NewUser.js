import './NewUser.css'
import {useState} from 'react';
import axios from 'axios';



const NewUser = () => {
    const submit = () => {}
    const [formFirstname, setFirstname] = useState("");
    const [formLastname, setLastname] = useState("");
    const [formAge, setAge] = useState("");
    const [formPassword, setPassword] = useState("");

    const firstNameChangeHandler = (event) =>{
        setFirstname(event.target.value);
    }

    const lastNameChangeHandler = (event) =>{
        setLastname(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    }

    const passwordChangeHandler = (event) =>{
        setPassword(event.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submission!");
        let userData = {
            firstName : formFirstname,
            lastName : formLastname,
            age : formAge,
            password : formPassword

        }

        let config = {
            method: "post",
            url: "http://localhost:1433/user",
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            data: userData,
        };

        axios(config).then((response) => {
            console.log("Post response: ");
            console.log(response.data);
        },[]);
    };

    return (
        <div className='component-container'>
            <p>Add new User</p>

            <form className='new-user-form' onSubmit={submitHandler}>
                <div className='form-element'>
                    <label>First Name</label>
                    <input type="text" id="firstname" name="firstname" value={formFirstname} onChange={firstNameChangeHandler}></input>
                </div>

                <div className='form-element'>
                    <label>Last Name</label>
                    <input type="text" id="lastname" name="lastname" value={formLastname} onChange={lastNameChangeHandler}></input>
                </div>

                <div className='form-element'>
                    <label>Age</label>
                    <input type="text" id="age" name="age" value={formAge} onChange={ageChangeHandler}></input>
                </div>

                <div className='form-element'>
                    <label>Password</label>
                    <input type="text" id="password" name="password" value={formPassword} onChange={passwordChangeHandler}></input>
                </div>
                <div>

            <button onClick={submit}>Add</button>
            </div>

            </form>
        </div>
    );

}

export default NewUser;