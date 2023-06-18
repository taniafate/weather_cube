import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { HomePage } from './Containers/HomePage';
import { lazy, Suspense } from 'react';

const AboutPage = lazy(() => import('./Containers/AboutPage'));
const NotFoundPage = lazy(() => import('./Containers/NotFoundPage'));

function App() {
  return (
    <div className={styles.wrapper}>
        <Routes>
          <Route
            path={routes.HOME}
            element={<HomePage />}
          />
          <Route
            path={routes.ABOUT}
            element={<Suspense fallback={<p className={styles.lazyLoading}>Loading...</p>}>
              <AboutPage />
            </Suspense>}
          />
          <Route
            path={routes.NOTFOUNDPAGE}
            element={<Suspense fallback={<p className={styles.lazyLoading}>Loading...</p>}>
              <NotFoundPage />
            </Suspense>}
          />
        </Routes>
    </div>
  );
}

export default App;
