import React from 'react'
import { SideberData } from "./SideberData"

function Sideber() {
  return (
    <div className="Sideber">
        <ul className="SideberList">
            {SideberData.map((value, key) => {
                return (
                    <li key={key} 
                    className="row" 
                    id={window.location.pathname === value.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = value.link;
                    }}
                    >
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sideber