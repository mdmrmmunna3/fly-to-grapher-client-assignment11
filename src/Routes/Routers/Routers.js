
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/LoginRegister/Login/Login';
import SignUp from '../../Pages/LoginRegister/SignUp/SignUp';
import MyReview from '../../Pages/MyReview/MyReview';
import ServiceDetails from '../../Pages/Services/ServiceDetails/ServiceDetails';
import ServicesAll from '../../Pages/Services/ServicesAll/ServicesAll';
import ShowReview from '../../Pages/Services/ShowReview/ShowReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        },
        {
          path:'/serviceDetails/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch (`http://localhost:5000/servicesAll/${params.id}`) 
        },
        {
          path:'/review',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        // {
        //   path: 'showreview',
        //   element: <PrivateRoute><ShowReview></ShowReview></PrivateRoute>,
        // }
      ]
    }
  ])

export default router;