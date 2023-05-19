import React from 'react';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { HomePage } from './Containers/HomePage';
import { FavouritesPage } from './Containers/FavouritesPage';

function App() {
  return (
    <div className={styles.wrapper}>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.FAVOURITES} element={<FavouritesPage />} />
        </Routes>
    </div>
  );
}

export default App;
