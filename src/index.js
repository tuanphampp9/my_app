import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './store/reducers/rootReducer';
import './styles/global.scss'
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Home from './views/Home/Home';
import ListTodo from './components/Todo/ListTodo'
import About from './views/About/Home';
import DefaultPage from './views/DefaultPage/DefaultPage'
import User from './views/User/User';
import DetailUser from './views/User/DetailUser';
import Contact from './views/Contact/Contact';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
const reduxStore = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="todos" element={<ListTodo />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user" element={<User />} />
            <Route path="user/:id" element={<DetailUser />} />
            <Route index element={<DefaultPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
