import { RouterProvider } from "react-router";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div data-theme="night" className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
