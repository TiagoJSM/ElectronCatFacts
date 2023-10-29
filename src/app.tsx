import { createRoot } from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux';

import NavBar from './navbar/Navbar';
import DailyCatFact from './daily-cat-fact/DailyCatFact';
import Favourites from './favourites/Favourites';
import store from './redux/store/store';
import { fetchCatFact } from './redux/effects/catFacts';
  
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
        <Provider store={store}>
            <NavBar />
            <RouterProvider router={router} />
        </Provider>
    );
}

store.dispatch(fetchCatFact)

createRoot(document.getElementById("root")).render(<App />);