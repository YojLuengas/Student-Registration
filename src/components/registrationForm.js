import React, {useState} from 'react';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import './style.css'
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [yearandsection,setYearandSection] = useState(null);
    const [idnum,setidnum] = useState(null);
    const [age,setage] = useState(null);
    const [gender,setgender] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "yearandsection"){
            setYearandSection(value);
        }
        if(id === "idnum"){
            setidnum(value);
        }
        if(id === "age"){
            setage(value);
        }
        if(id === "gender"){
            setgender(value);
        }

    }

    const handleSubmit = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                yearandsection:yearandsection,
                idnum:idnum,
                age:age,
                gender:gender,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="yearandsection">
                    <label className="form__label" for="yearandsection">Year and Section </label>
                    <input className="form__input" type="yearandsection" id="yearandsection" value={yearandsection} onChange = {(e) => handleInputChange(e)} placeholder="Year and Section"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="id number">
                    <label className="form__label" for="idnum">ID Number </label>
                    <input className="form__input" type="idnum"  id="idnum" value={idnum} onChange = {(e) => handleInputChange(e)} placeholder="ID Number"/>
                </div>
                <div className="age">
                    <label className="form__label" for="age">Age </label>
                    <input className="form__input" type="age"  id="age" value={age} onChange = {(e) => handleInputChange(e)} placeholder="Age"/>
                </div>
                <div className="gender">
                    <label className="form__label" for="gender">Gender </label>
                    <input className="form__input" type="gender"  id="gender" value={gender} onChange = {(e) => handleInputChange(e)} placeholder="Gender"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm