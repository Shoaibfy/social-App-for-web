import React, { useState, useContext } from 'react'
import '../App.css'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { UserContext } from '../App'


const Login = () => {

    const { state, dispatch } = useContext(UserContext)

    const history = useHistory()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return M.toast({ html: "Invalid Email", classes: "#ef9a9a red lighten-1" })
        }
        console.log("data loading...")
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,

            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#ef9a9a red lighten-1" })
                    // console.log(data)
                }
                else {
                    // console.log(data)
                    localStorage.setItem("jwt-token", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: data.user })
                    M.toast({ html: "Successfully signed In", classes: "#1b5e20 green darken-4" })
                    history.push("/")

                }
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Login</h2>
                <input
                    className=' white lighten-5'
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    className=' white lighten-5'
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="btn #ef9a9a red lighten-1" onClick={PostData} >
                    Login
                </button>
                <br></br>
                <h6>
                    <Link to='/signup'>Create New Account ? </Link>
                </h6>

            </div>

        </div>
    )
}

export default Login
