import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import UserLoginGoogle from './user/components/UserLoginGoogle/UserLoginGoogle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import userAuthService from "./user/services/user-auth.service";
import UserSetBirthday from './user/components/UserSetBiithday/UserSetBiithday';
import UserList from './user/components/UserList/UserList';

const router = createBrowserRouter([
  {
    path: "/list",
    element: (<UserList/>),
    loader: async () => {
      const isLoggedIn: boolean = await userAuthService.isLoggedIn();
      const isFullProfile: boolean = await userAuthService.isFullProfile();

      if (!isLoggedIn) {
        throw redirect("/login");
      }

      if (!isFullProfile) {
        throw redirect("/set-birthday");
      }

      return null;
    },
  },
  {
    path: "/set-birthday",
    element: (<UserSetBirthday/>),
    loader: async () => {
      const isLoggedIn: boolean = await userAuthService.isLoggedIn();

      if (!isLoggedIn) {
        throw redirect("/login");
      }
      
      return null;
    },
  },
  {
    path: "/",
    element: (
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
        <UserLoginGoogle />
      </GoogleOAuthProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
