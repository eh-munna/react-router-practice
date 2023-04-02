import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

// 54-1 Module Introduction, simple react router setup

// in this createBrowserRouter() method component bare minimum we need to property in an object

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>,
//   },

//   //  create new routes
//   {
//     path: `/about`,
//     element: <div>This is about</div>,
//   },
//   {
//     path: '/contact',
//     element: <div>This is contact</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>
// );

//

// 54-2 (interesting) Nested route and outlet for shared content

// Making component and add them as element of the router

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <App></App>,
//   errorElement: <ErrorPage></ErrorPage>,
// },
// //  create new routes
// {
//   path: `/about`,
//   element: <About></About>,
// },
// {
//   path: '/contact',
//   element: <Contact></Contact>,
// },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
