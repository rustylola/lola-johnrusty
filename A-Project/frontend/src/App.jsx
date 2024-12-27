import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error,
  AddJob, Stats, AllJobs, Profile, Admin
} from './pages/index';

// Action
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addJobAction } from './pages/AddJob';
import { loader as dashboardLoader} from './pages/DashboardLayout';


// Dark Theme Checker
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}
checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element:<Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children:[
          {
            index: true,
            element: <Stats />
          },
          {
            path: 'addjob',
            element: <AddJob />,
            action: addJobAction
          },
          {
            path: 'alljobs',
            element: <AllJobs />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          }
        ]
      },
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;