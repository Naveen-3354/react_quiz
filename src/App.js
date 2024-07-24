import './App.css';
import Login from './views/SignIn';
import Register from './views/SignUp';
import Profile from './views/Profile';
import "./css/dashboard.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import DashBoard from './views/DashBoard';
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { options } from './data/optionsData';
import Subject from './views/Subject';
import Test from './views/Test';
import History from './views/History';
import Logout from './views/SignOut';
import NotFound from './views/NotFound';
function App() {
  const { currentUser } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const Layout = () => {
    return (
      <div id='layout'>
        <SideBar options={options} handleButtonClick={handleButtonClick} activeButton={activeButton} />
        <div className="right">
          <Outlet />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    console.log(currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <DashBoard >
            <Navbar activeButton={options[activeButton].name} handleButtonClick={handleButtonClick} />
          </DashBoard>,
        },
        {
          path: "/subject",
          element: <Subject>
            <Navbar activeButton={options[activeButton].name} handleButtonClick={handleButtonClick} />
          </Subject>,
        },
        {
          path: "/test",
          element: <Test>
            <Navbar activeButton={options[activeButton].name} handleButtonClick={handleButtonClick} />
          </Test>,
        },
        {
          path: "/history",
          element: <History>
            <Navbar activeButton={options[activeButton].name} handleButtonClick={handleButtonClick} />
          </History>,
        },
        {
          path: "/profile",
          element: <Profile>
            <Navbar activeButton={options[activeButton].name} handleButtonClick={handleButtonClick} />
          </Profile>,
        },

      ],
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/signout",
      element: <Logout setActiveButton={setActiveButton}/>
    },
    {
      path:"*",
      element:<NotFound />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
