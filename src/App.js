import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.routes';
import './App.css';
import { Suspense } from 'react';
import { Loading } from './components/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
