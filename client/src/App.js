
import React, { useReducer, createContext, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Createpost from './components/Createpost';
import Home from './components/Home';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { initialState, reducer } from './reducers/userReducers';

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push('/')
    } else {
      history.push('/login')
    }
  }, [])


  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/create" component={Createpost} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}  >
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </UserContext.Provider>


  );
}

export default App;
