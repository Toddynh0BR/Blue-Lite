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
import { Financeiro } from '../pages/funcionalidades/financeiro';
import { ProgramaVendas } from '../pages/funcionalidades/programaVendas';
import { Cadastro } from '../pages/funcionalidades/cadastro';
import { Controle } from '../pages/funcionalidades/controle';
import { Estoque } from "../pages/funcionalidades/estoque";
import { Caixa } from '../pages/funcionalidades/caixa';
import { MDF } from '../pages/funcionalidades/mdf';
import { Loja } from '../pages/funcionalidades/loja';
import { Boletos } from '../pages/funcionalidades/boletos';

//Segmentos
import { Restaurante } from '../pages/segmentos/restaurantes';
import { Vestuario } from '../pages/segmentos/vestuarios';
import { Minimercado } from '../pages/segmentos/minimercados';
import { Autopeca } from '../pages/segmentos/autopecas';
import { Assistencia } from '../pages/segmentos/assistencia';
import { Calcado } from '../pages/segmentos/calcados';

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
      <Route path="/conheca/financeiro" element={<Financeiro />}/>
      <Route path="/conheca/programa-vendas" element={<ProgramaVendas />}/>
      <Route path="/conheca/cadastro-e-controle-de-clientes" element={<Cadastro />}/>

      <Route path="/conheca/controle-de-os" element={<Controle />}/>
      <Route path="/conheca/controle-de-estoque" element={<Estoque />}/>
      <Route path="/conheca/controle-de-caixa-gratis" element={<Caixa />}/>
      <Route path="/conheca/emissor-mdfe-gratuito" element={<MDF />}/>
      <Route path="/conheca/sistema-para-loja-gratis" element={<Loja />}/>
      <Route path="/emissao-de-boletos-com-o-blue-lite" element={<Boletos />}/>

      <Route path="/sistema-para-restaurantes" element={<Restaurante />}/>
      <Route path="/sistema-de-gestao-para-lojas-de-roupa" element={<Vestuario />}/>
      <Route path="/sistema-de-gestao-para-minimercados" element={<Minimercado />}/>
      <Route path="/sistema-de-gestao-para-autopecas" element={<Autopeca />}/>
      <Route path="/sistema-de-gestao-para-assistencia-tecnica" element={<Assistencia />}/>
      <Route path="/sistema-de-gestao-para-lojas-de-calcados" element={<Calcado />}/>
    </Routes>
  )
}