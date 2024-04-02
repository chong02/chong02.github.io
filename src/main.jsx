import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import People from './pages/People.jsx'
import Hire from './pages/Hire.jsx'
import Audition from './pages/Audition.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/people",
    element: <People/>
  },
  {
    path: "/hire-us",
    element: <Hire/>
  },
  {
    path: "/audition",
    element: <Audition/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home.jsx';
// import './index.css';

// console.log('Hi');
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//       </Switch>
//     </Router>
//   </React.StrictMode>
// );
