import React from 'react'
import { AppLink } from "../components/AppLink"

function AppHome() {
  return (
    <div className="content">
        <div className="flex-content">
        <ul className="AppList">
        {AppLink.map((value, key) => {
          return (
            <li key={key} 
            className="AppRow" 
            id={window.location.pathname === value.link ? "active" : ""}
            onClick={() => {
                window.location.pathname = value.link;
            }}
            >
              <div id="title"><p>{value.title}</p></div>
            </li>
          )
        })}
        </ul>
        </div>
    </div>
  )
}

export default AppHome