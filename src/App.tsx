import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
function App() { //** App responsible for container of rountes */
    //** This first route is what we often call the "root route" since the rest of our routes will render inside of it. It will serve as the root layout of the UI => <RouterProvider router={router}/>*/
  return (
    <>
        <RouterProvider router={router} /> 
    </>
  );
}

export default App;
