import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./Containers/HomePage'));
const AboutPage = lazy(() => import('./Containers/AboutPage'));
const NotFoundPage = lazy(() => import('./Containers/NotFoundPage'));

function App() {
  return (
    <div className={styles.wrapper}>
        <Routes>
          <Route
            path={routes.HOME}
            element={<Suspense fallback={<p className={styles.lazyLoading}>Loading...</p>}>
              <HomePage />
            </Suspense>}
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
