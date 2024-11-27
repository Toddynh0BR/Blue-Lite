import { Routes, Route } from 'react-router-dom';

//Principais
import { Home } from '../pages/home';
import { Download } from '../pages/download';
import { LojaVirtual } from '../pages/lojaVirtual';

//Mapa do site
import { Passos } from '../pages/passos';
import { Premium } from '../pages/premium';
import { Integraçoes } from '../pages/integraçoes';

//Funcionalidades
import { PDV } from '../pages/funcionalidades/pdv';
import { Emissor } from '../pages/funcionalidades/emissor';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/loja-virtual" element={<LojaVirtual />}/>
      <Route path="/baixar-blue-lite" element={<Download />}/>

      <Route path="/primeiros-passos" element={<Passos />}/>
      <Route path="/planos" element={<Premium />}/>
      <Route path="/central-de-integracoes" element={<Integraçoes />}/>

      <Route path="/conheca/programa-de-caixa" element={<PDV />}/>
      <Route path="/conheca/emissor-gratuito" element={<Emissor />}/>
    </Routes>
  )
}