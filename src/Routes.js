import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Root from "./components/Root";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:'books',
        element: <Books/>,
        loader: ()=>{
          return fetch('https://api.itbook.store/1.0/new')
        },
      },
      {
        path:'/book/:bookId',
        element: <BookDetails/>,
        loader: ({params})=>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      }
    ],
  },
]);

// export default router;
