import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { Fragment } from "react";


export function DefaultLayout(){
    return (
        <Fragment>
            <Header></Header>
            <Outlet/>
        </Fragment>
    )
}