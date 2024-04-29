import News from "./components/News";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />,
          <News key="all" country="in" category="all" />
        </>
      ),
    },
    {
      path: "/technology",
      element: (
        <>
          <Nav />,
          <News key="technology" country="in" category="technology" />
        </>
      ),
    },
    {
      path: "/health",
      element: (
        <>
          <Nav />,
          <News key="health" country="in" category="health" />
        </>
      ),
    },
    {
      path: "/science",
      element: (
        <>
          <Nav />,
          <News key="science" country="in" category="science" />
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <Nav />,
          <News key="sports" country="in" category="sports" />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <Nav />,
          <News key="entertainment" country="in" category="entertainment" />
        </>
      ),
    },
    {
      path: "/bussiness",
      element: (
        <>
          <Nav />,
          <News key="bussiness" country="in" category="bussiness" />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
