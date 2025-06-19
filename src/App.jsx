  import React from 'react';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import Signup from './components/Signup';
  import Login from './components/Login';
  import Dashboard from './components/Dashboard';
  import { ToastContainer } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';
  import Home from './components/Home';
  import Course from './components/Course';
  import AddCourse from './components/AddCourse';
  import Student from './components/Student';
  import AddStudent from './components/AddStudent';
  import CollectFee from './components/CollectFee';
  import PaymentHistory from './components/PaymentHistory';

  function App() {
    const myRouter = createBrowserRouter([
      { path: '', Component: Login },
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
      { path: 'dashboard', Component: Dashboard, children:[
        {path: '', Component:Home},
        {path:'home', Component: Home},
        {path:'all-course', Component: Course}, 
        {path:'add-course', Component: AddCourse},
        {path: 'all-student', Component: Student},
        {path:'add-student', Component:AddStudent},
        {path: 'collect-fee', Component: CollectFee},
        {path: "payment-history", Component: PaymentHistory}
      ] },
    ]);

    return (
      <>
        <RouterProvider router={myRouter} />    
        <ToastContainer />
      </>
    );
  }

  export default App;
