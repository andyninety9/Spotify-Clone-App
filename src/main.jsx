import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { DataLayer } from "./Components/Context/DataLayer.jsx";
import reducer, { initialState } from "./Components/Context/Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DataLayer initialState={initialState} reducer={reducer}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DataLayer>
    </React.StrictMode>
);
