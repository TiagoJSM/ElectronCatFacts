import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';
import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import NavBar from './navbar/Navbar';
import DailyCatFact from './daily-cat-fact/DailyCatFact';
import Favourites from './favourites/Favourites';
  
const router = createHashRouter([
    {
        path: "/",
        Component: DailyCatFact
    },
    {
        path: "favourites",
        Component: Favourites
    },
]);

function App() {
    return (
        <Fragment>
            <NavBar />
            <RouterProvider router={router} />
        </Fragment>
    );
}
  
createRoot(document.getElementById("root")).render(<App />);