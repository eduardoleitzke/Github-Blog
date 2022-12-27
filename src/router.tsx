import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Posts";
import { DefaultLayout } from "./layout/DefaultLayout";
export function Router(){
    return (
        <Routes>
            <Route path="/" element = {<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Post/>}/>
            </Route>
        </Routes>
    )
}