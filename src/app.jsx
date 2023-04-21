import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
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
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  );
}

export default App;
