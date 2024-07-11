import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Form } from '../pages/Form';
import { List } from '../pages/List';

export const routes = {
  home: {
    path: '/',
    title: 'Home'
  },
  login: {
    path: '/login',
    title: 'login'
  },
  form: {
    path: '/form',
    title: 'Formulário'
  },
  list: {
    path: '/list',
    title: 'Lista'
  },
  accessDenied: { path: '/access-denied', title: 'Acesso negado' },
  naoEncontrado: { path: '*', title: '404' }
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.home.path} element={<Home/>}>
      <Route path={routes.login.path}>
        <Route path={'/login'} element={<Login/>} />
      </Route>
      <Route path={routes.form.path}>
        <Route path={'/form'} element={<Form/>} />
      </Route>
      <Route path={routes.list.path}>
        <Route path={'/list'} element={<List/>} />
      </Route>
      <Route path={routes.accessDenied.path} element={<h1>Você não possui permissão para acessar este conteúdo!</h1>} />
      <Route path={routes.naoEncontrado.path} element={<span>404, não encontrado!</span>} />
    </Route>
  )
);