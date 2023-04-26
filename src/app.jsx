import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/Login/LoginPage.js';
import MainPage from './pages/Main/MainPage.js';
import './app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  );
}

export default App;
