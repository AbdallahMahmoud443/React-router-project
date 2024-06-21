import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/learnLayout/Layout";
import StartQuick from "../pages/learnLayout/Index";
import ThinkingInReact from "../pages/learnLayout/ThinkingInReact";
import Installation from "../pages/learnLayout/Installation";
import Contribute from "../pages/learnLayout/Contribute";
import Login from "../pages/learnLayout/Login";
import PrvateRoute from "../auth/PrvateRoute";
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../errors/PageNotFound";

//*createBrowserRouter => This will enable client side routing for our web app.
//* Every Object is represente WebPage

const isLogin = true;
const userData: { email: string } | null = isLogin
  ? { email: "Abdallah@gmail.com" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* errorElement in root will disappear all routes inside this root vs.  errorElement in each route when cause problem show error page in bad route only (used when appear error in any page)*/}
      {/** Root layout is fixed part in layout of webpage naything math /namepage is navbar will apear in it */}
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={
          <ErrorHandler statusCode={404} errorMessage="Page Not Found" />
        }
      >
        <Route index element={<Home />} />
        {/** index that mean this route will apear when user type \ only */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        {/** RrotectedRouter */}
        <Route
          path="contribute"
          element={
            <PrvateRoute isAllow={isLogin} RedirctPath="/login" data={userData}>
              <Contribute />
            </PrvateRoute>
          }
        />
        {/** Navigate=>  redirect to page */}
        <Route
          path="login"
          element={
            <PrvateRoute
              isAllow={!isLogin}
              RedirctPath="/contribute"
              data={userData}
            >
              <Login />
            </PrvateRoute>
          }
          errorElement={<ErrorHandler />}
        />
      </Route>

      {/** Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<StartQuick />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
      {/** Page Not found if user write anything that not match any page => he directed to PageNotFound Component  */}
      <Route path="*" element={<PageNotFound/>}>

      </Route>
    </>
  )
);

export default router;
