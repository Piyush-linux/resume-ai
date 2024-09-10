import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './routes/error-page.jsx';
import App from './routes/App.jsx';
import SignUp from './routes/auth/sign-up';
import Layout from './routes/app/layout.jsx';
import Dashboard from './routes/app/dashboard';
import SignIn from './routes/auth/sign-in';
import LayoutWeb from './routes/LayoutWeb';
import Create from './routes/app/dashboard/create';
import EditResume from './routes/app/dashboard/resume/edit/[id]';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  // website
  {
    element: <LayoutWeb />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },{
        path: "/auth/sign-in",
        element: <SignIn />,
      },{
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ]
  },
  // App
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },{
        path: "/create",
        element: <Create />
      },{
        path: "/resume/edit/:id",
        element: <EditResume />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <ToastContainer/>
    </ClerkProvider>
  </StrictMode>,
)
