import React from 'react'
import { Route, Routes} from 'react-router-dom';


export const Routing = (props) => {
    return (
        <>
            <Routes>
                {props.routeDate.map((value, key) => {
                    return (
                        <Route path={value.link} element={value.component} key={key} />
                    )
                })}
            </Routes>
        </>
    )
}