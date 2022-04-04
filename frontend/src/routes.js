import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastrarMembro from './pages/CadastrarMembro';
import CadastrarTarefa from './pages/CadastrarTarefa';
import EditarTarefa from './pages/EditarTarefa';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={''} element={<Home />} /> */}
        <Route path={'cadastrar-tarefa'} element={<CadastrarTarefa/>}/>
        <Route path={'editar-tarefa'} element={<EditarTarefa/>}/>
        <Route path={'cadastrar-membro'} element={<CadastrarMembro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;