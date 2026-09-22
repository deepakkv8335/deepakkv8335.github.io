import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import RouteFallback from '@/components/RouteFallback.jsx';
import MainLayout from '@/layouts/MainLayout.jsx';

const Home = lazy(() => import('@/pages/Home.jsx'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail.jsx'));

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
