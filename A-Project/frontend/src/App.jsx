import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error,
  AddJob, Stats, AllJobs, Profile, Admin
} from './pages/index';
import { action as registerAction } from './pages/Register';

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
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children:[
          {
            index: true,
            element: <Stats />
          },
          {
            path: 'addjob',
            element: <AddJob />
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