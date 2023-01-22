import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import GamePage from './pages/GamePage';
import MenuPage from './pages/MenuPage';
import {babyLevels} from './babyLevels';

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
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
