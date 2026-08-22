import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

// Lazy load layout pages for structural performance optimization
const Home = React.lazy(() => import('./pages/Home'));
const Apps = React.lazy(() => import('./pages/Apps'));
const About = React.lazy(() => import('./pages/About'));
const Vendors = React.lazy(() => import('./pages/Vendors'));
const Cities = React.lazy(() => import('./pages/Cities'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const HelpCenter = React.lazy(() => import('./pages/Help'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Refund = React.lazy(() => import('./pages/Refund'));
const DeleteAccount = React.lazy(() => import('./pages/DeleteAccount'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="apps" element={<Apps />} />
            <Route path="about" element={<About />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="cities" element={<Cities />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="help" element={<HelpCenter />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal/terms" element={<Terms />} />
            <Route path="legal/privacy" element={<Privacy />} />
            <Route path="legal/refund-policy" element={<Refund />} />
            <Route path="delete-account" element={<DeleteAccount />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
