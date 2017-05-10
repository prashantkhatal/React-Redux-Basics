import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store";

import Home from "./containers/home";

render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    window.document.getElementById('MyId'));