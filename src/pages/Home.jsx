import { Suspense } from 'react';
import { CustomGrid } from '../components/Grid';
import { Navbar } from '../components/Navbar/Navbar';
import { Loading } from '../components/Loading';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { routes } from '../routes/index.routes';
import { Main } from '../components/Main';

export const Home = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <CustomGrid container spacing={10}>
        <CustomGrid item xs={12}>
          <Navbar />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Outlet />
            {location.pathname === routes.home.path && <Main />}
          </Container>
        </CustomGrid>
      </CustomGrid>
    </Suspense>
  );
};
