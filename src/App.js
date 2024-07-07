import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ArticleContainer from "./components/ArticleContainer";
import ArticleDetails from "./components/ArticleDetails";
import Error from "./pages/Error";
import { ArticleProvider } from "./context/ArticleContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArticleContainer />,
    errorElement: <Error />,
  },
  {
    path: "/articles/:id",
    element: <ArticleDetails />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticleProvider>
          <RouterProvider router={router} />
        </ArticleProvider>
      </header>
    </div>
  );
}

export default App;
