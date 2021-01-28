import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCog, faComments, faEllipsisV, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import "./Sidebar.css"
import Item from "./SidebarItems.js"


import { itemslist } from "../../../Contents/Data/MenuItems.js"
import Profile from "../../../Contents/image/no-profile-img-294x300.jpg"




export default function Sidebar() {
    const [toggle, setToggle] = useState(true)

    return (
        <Router>
            <div className="wrapper d-flex justify-content-start">
                <div className={toggle ? "sidebar-hide" : "sidebar-show"}>
                    <div className="card bg-dark">
                        <img src={Profile} className="card-img-top" alt="" />
                        <h5 className="card-title text-center mt-3">Admin</h5>
                        <div className="card-body px-0 ">

                            <div className="accordion" id="accordionExample">
                                {
                                    itemslist.map((item, i) => <Link to={item.path}><Item key={i} item={item}/></Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggle ? "main-panel-extended" : "main-panel"}>
                    <nav className="navbar navbar-light bg-light w-100">
                        <div className="container-fluid d-flex justify-content-between">
                            <div className="Toggle-Button">
                                <button className="btn btn-dark" type="button" onClick={() => setToggle(!toggle)}>
                                    <FontAwesomeIcon size="1x" icon={faEllipsisV} />
                                    <span className="visually-hidden mx-2">Menu</span>
                                </button>
                            </div>
                            <div className="Navbar-Items d-flex justify-content-between">
                                <form className="d-flex mx-2">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-dark" type="submit">Search</button>
                                </form>
                                <button className="btn btn-light" type="button">
                                    <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faCog} />
                                </button>
                                <button className="btn btn-light" type="button">
                                    <span className="badge rounded bg-secondary">9</span>
                                    <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faComments} />
                                </button>
                                <button className="btn btn-light" type="button">
                                    <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faCalendarAlt} />
                                </button>
                                <button className="btn btn-light" type="button">
                                    <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faSignOutAlt} />
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="Views-container">
                        <Switch>
                            {
                                itemslist.map((route, j) => (
                                    <Route
                                        key={j}
                                        path={route.path}
                                        exact={route.exact}
                                        children= {route.component}
                                    />
                                ))
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
