
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [name, setName] = useState(localStorage.getItem('name') ? JSON.parse((localStorage.getItem('name'))) : '')
  const [password, setPassword] = useState()
  const [remember, setRemember] = useState(/*Mettre une fonction pour verifier le localstorage*/)

  function submit(e) {
    e.preventDefault()
    if (remember && name) {
      localStorage.setItem('name', JSON.stringify(name))
    }
    !remember && localStorage.clear()
    if (name && password) {
      let host = "http://localhost:3001/api/v1/user/login"
      let request = {
        method: "POST",
        body: JSON.stringify({
          email: name,
          password: password
        }),
        headers: {
          "Content-type": "application/json"
        }
      }
      fetch(host, request)
        .then(res => {
          if (res.ok) {
           return res.json()
          }
          else {
            alert("L'email ou le mot de passe est incorrect.")
          }
        }).then(data=>{
          let token = data.body.token
          dispatch({type :"login", payload:{token:token}})
          localStorage.setItem("token",JSON.stringify(token))
          navigate('../user')
        })
        .catch(error => console.error("Problème avec la requête de connexion : " + error))
    }
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" value={name} id="username" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" onChange={(e) => setRemember(e.target.checked)} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" onClick={(e) => submit(e)}>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}


