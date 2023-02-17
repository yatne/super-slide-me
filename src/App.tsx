import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import GamePage from './pages/GamePage';
import MenuPage from './pages/MenuPage';
import {babyLevels} from './pages/levels/babyLevels';
import BlocksPage from './pages/blocksPage/BlocksPage';
import AboutPage from './pages/about/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPage />,
  },
  {
    path: '/game',
    element: <GamePage id="game" />,
  },
  {
    path: '/baby',
    element: <GamePage id="baby" levels={babyLevels}/>,
  },
  {
    path: '/blocks',
    element: <BlocksPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
