import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css'
import {App, store} from "./app";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/picasso-posts-task">
      <App/>
    </BrowserRouter>
  </Provider>
);
