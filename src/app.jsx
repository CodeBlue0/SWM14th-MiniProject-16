import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/Login/LoginPage.js';
import MainPage from './pages/Main/MainPage.js';
import MyPage from './pages/MyPage/MyPage.js';
import './app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
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
