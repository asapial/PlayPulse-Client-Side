import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Router.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

export const AuthContext=createContext();

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>
  </AuthProvider>

)
