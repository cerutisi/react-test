import React, { useEffect } from 'react'
import Employees from "./Employees";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


function App() {


  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Главная</Link>
                      </li>
                      <li>
                          <Link to="/Employees">Сотрудники</Link>
                      </li>
                  </ul>
              </nav>


              <Switch>
                  <Route path="/Employees">
                      <Employees></Employees>
                  </Route>

                  <Route path="/">
                       <div className="wrapper">
                           <h1>Empty</h1>
                       </div>
                  </Route>
              </Switch>
          </div>
      </Router>
  )
}

export default App
