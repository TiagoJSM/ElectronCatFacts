import { createRoot } from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux';

import NavBar from './navbar/Navbar';
import DailyCatFact from './daily-cat-fact/DailyCatFact';
import Favourites from './favourites/Favourites';
import Config from "./config/Config";
import store from './redux/store/store';
import { fetchCatFact } from './redux/effects/effects';

const router = createHashRouter([
    {
        path: "/",
        Component: DailyCatFact
    },
    {
        path: "favourites",
        Component: Favourites
    },
    {
        path: "config",
        Component: Config
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

store.dispatch(fetchCatFact);

function wait(seconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, seconds * 1000);
    });
}

const run = async () => {
    while (true) {
        const updateInterval = store.getState().config;
        console.log(updateInterval);
        await wait(updateInterval);
        store.dispatch(fetchCatFact);
    }
}
run();

createRoot(document.getElementById("root")).render(<App />);