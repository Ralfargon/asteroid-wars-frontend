import './index.css'

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Link } from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from './store'

import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
    errorElement: <NotFound />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);