import './App.css';
import Cabecalho from './comun/componentes/Cabecalho/Cabecalho';
import Principal from './comun/componentes/Principal/Principal';
import Rodape from './comun/componentes/Rodape/Rodape';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/PaginasInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  }
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;


