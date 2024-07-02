import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Layout";
import Home from "../components/Home";
import Result from "../components/Result";
import ErrorScreen from "../components/ErrorScreen";

const router =  createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/error" element={<ErrorScreen />} />
            <Route path="/:instaId" element={<Result />} />
        </Route>
    )
)

export default router;