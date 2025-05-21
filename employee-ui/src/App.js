import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { Fragment, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = lazy(() => import('./screens/Dashboard.js'))
const PageNotFoundScreen = lazy(() => import('./screens/PageNotFoundScreen.js'))
const Layout = lazy(() => import('./Layout/Layout.js'))
const Profile = lazy(() => import('./screens/Profile.js'))

function App() {

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className='d-flex justify-content-center align-items-center vh-100'>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PageNotFoundScreen />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
