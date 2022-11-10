
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/LoginRegister/Login/Login';
import SignUp from '../../Pages/LoginRegister/SignUp/SignUp';
import ServicesAll from '../../Pages/Services/ServicesAll/ServicesAll';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path:'/serviceall',
          element: <ServicesAll></ServicesAll>
        }
      ]
    }
  ])

export default router;