import React from 'react'

function Sideber(props) {
  return (
    <>
    <div className="Sideber">
        <ul className="SideberList">
            {props.sideberData.map((value, key) => {
                return (
                    <li key={key} 
                    className="row" 
                    id={window.location.pathname === value.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = value.link;
                    }}
                    >
                        <div id="icon">{value.icon}</div>
                        <div id="title"><p>{value.title}</p></div>
                    </li>
                )
            })}
        </ul>
    </div>
    <div className="SideberRight"></div>
    </>
  )
}

export default Sideber