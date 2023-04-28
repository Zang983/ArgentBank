import Account from "../components/account/account";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


type state = {
    createdAt : string|object|null,
    email : string,
    firstName: string,
    lastName: string,
    id : string|null,
    updatedAt : string|object|null,
    token : null | string
  }
export default function User() {
    const [editMode, setEditMode] = useState(false)
    const firstNameSelector = useSelector((state:state) => state.firstName)
    const lastNameSelector = useSelector((state:state) => state.lastName)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let token =  localStorage.getItem("token")
    token = parseToken(token)
  
    const handleChangeFirstName = (value: string) => setFirstName(value)
    
    function parseToken(token:string|null){
        if(!token)
            return 
        return JSON.parse(token)
    }

    function resetForm() {
        setEditMode(false)
        setFirstName(firstNameSelector)
        setLastName(lastNameSelector)
    }
    function editProfil(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        if (firstName && lastName && token != null) {
            const host = "http://localhost:3001/api/v1/user/profile"
            const request = {
                method: "PUT",
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName
                }),
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${token}`
                },
            }
            fetch(host, request)
                .then(res => {
                    if (res.ok) {
                        dispatch({ type: "updateName", payload: { firstName, lastName } })
                        setEditMode(false)
                        return res.json()
                    }
                    else {
                        alert("L'email ou le mot de passe est incorrect.")
                    }
                }).then(value => console.log(value))
                .catch(error => console.error("Problème avec la requête de connexion : " + error))
        }
    }
    useEffect(() => {
        if (token) {
            const host = "http://localhost:3001/api/v1/user/profile"
            const request = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${token}`
                }
            }
            fetch(host, request)
                .then(res => {
                    if (res.ok)
                        return res.json()
                }).then(data => {
                    dispatch({ type: "getDataUser", payload: { data } })
                    setFirstName(firstNameSelector)
                    setLastName(lastNameSelector)
                })
                .catch(error => console.error(error))
        }
        else {
            navigate("../sign-in")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstNameSelector, lastNameSelector])
    return (
        <>
            <Header/>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />
                        {!editMode && `${firstName} ${lastName}`}</h1>
                    {!editMode && <button onClick={() => setEditMode(true)} className="edit-button">Edit Name</button>}
                    {editMode &&
                        <form className="formEdit">
                            <div>
                                <input value={firstName} onChange={(e) => { handleChangeFirstName(e.target.value) }} id="firstName" type="text" />
                                <button type="submit" className="alignRight edit-button" onClick={(e) => editProfil(e)}>Save</button>

                            </div>
                            <div>
                                <input value={lastName} id="lastName" type="text" onChange={(e) => setLastName(e.target.value)} />
                                <button className="edit-button" onClick={() => resetForm()}>Cancel</button>
                            </div>
                        </form>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Current Balance" />
            </main>
            <Footer />
        </>
    )
}