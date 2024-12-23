import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error,
  AddJob, Stats, AllJobs, Profile, Admin
} from './pages/index';

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