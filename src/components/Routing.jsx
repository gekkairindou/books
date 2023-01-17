import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { SideberLinkData } from './SideberData';

export const Routing = () => {
    return (
        <>
            <Routes>
                {SideberLinkData.map((value, key) => {
                    return (
                        <Route path={value.link} element={value.component} key={key} />
                    )
                })}
            </Routes>
        </>
    )
}