import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage.js';
import './app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>메인페이지</h1>
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
