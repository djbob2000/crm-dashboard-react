import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';

import css from './App.module.scss';

const CustomersPage = lazy(() => import('../pages/CustomersPage/CustomersPage'));

function App() {
  return (
    <>
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CustomersPage />} />
              <Route path="*" element={<CustomersPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
