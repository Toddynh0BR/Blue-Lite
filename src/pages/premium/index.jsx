import * as S from "./style";

import { useEffect, useState } from "react";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { GoShieldCheck } from "react-icons/go";
import Blue from "./assets/blueerp.svg";

import { FaRegStar } from "react-icons/fa";

export function Premium(){
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
         
          const scrollPosition = window.scrollY;
          setShowDiv(scrollPosition >= 400); 
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(() => {
 
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
     }, []);
    return(
     <S.Container>
      <Header />
       
      <S.Main>
       <div className="text">
        <h3>
        <strong> É a experiência de um ERP para empresa grande, </strong> impulsionando o crescimento da sua!
        </h3>
       </div>

       <div className="center">
        <div className="title">
        <FaRegStar/>
         <span>Pensado para a transformação digital de pequenas empresas</span>
        </div>
        <div className="rest">
         <div className="price">
         <h2>
         <strong>R$</strong>
         89
         <strong>,90</strong>
         </h2>

         <div className="back">
          <h2>
          <strong>R$</strong>
          89
          <strong>,90</strong>
          </h2>
         </div>

         <span><strong>/mês</strong> no plano anual</span>
         </div>

         <div className="texts">
          <h3>
            Na versão premium, o Blue Lite fica com todas ferramentas liberadas e <strong> backup seguro na nuvem</strong>
          </h3>

          <button>
            Contrate agora mesmo
          </button>
         </div>
        </div>
       </div>

       <div className="blueerp">
        <img src={Blue} alt="" />

        <h3>Sua empresa cresceu?</h3>
        <span>
        Escale para a Blue ERP sem dores de cabeça com migração de dados.
        </span>

        <button onClick={() => window.open("https://blueerp.com.br")}>
         <p>Conheça e surpreenda-se:</p>
         <strong>www.blueerp.com.br</strong>
        </button>
       </div>
      </S.Main>

      <S.Main2>
        <div className="ads">
         <div className={ showDiv ? 'banner' : 'hide'}>
          <h3>Contrate a versão premium</h3>
          <p>e desbloqueie todo o <br /> potencial do Blue Lite</p>

          <button>Contrate agora mesmo</button>

          <div className="price">
         <h2>
         <strong>R$</strong>
         89
         <strong>,90</strong>
         </h2>

         <div className="back">
          <h2>
          <strong>R$</strong>
          89
          <strong>,90</strong>
          </h2>
         </div>

         <span><strong>/mês</strong> no plano anual</span>
          </div>
         </div>
        </div>

        <ul className="plans">
         <li>
          <div className="name">
           <span>Usuários</span>
           <p>(R$ 29,90 por usuário adicional)</p>
          </div>

          <div className="icon">
           2
          </div>
         </li>

         <li>
          <div className="name">
           <span>Multi-Empresa - Filiais</span>
           <p>(R$ 299,00 por filial)</p>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Cadastros Básicos</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Compras - Notas de Entrada, Cotações e Ordens de Compras</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Estoque - Cadastro de Produtos/Serviços, Movimentações</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Financeiro Básico</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Financeiro Avançado</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Nota Fiscal Eletrônica - Todas as notas menos NFS-e</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>PDV - Frente de Caixa</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>

         <li>
          <div className="name">
           <span>Vendas - Pedidos/Orçamentos e Ordens de Serviço</span>
          </div>

          <div className="icon">
           <GoShieldCheck />
          </div>
         </li>
        </ul>
        
        <div className="blueerp">
<p>Gestão Financeira</p>
<p>Gestão Fiscal</p>
<p>Gestão de Compras</p>
<p>Gestão de Vendas</p>
<p>Gestão de Contratos</p>
<p>Gestão de CRM</p>
<p>Gestão de Produção</p>
<p>Gestão de Estoque</p>
<p>Expedição e SIGEP Web</p>
<p>Gestão de Frota</p>
<p>+ de 100 relatórios</p>

<button onClick={() => window.open("https://blueerp.com.br")}>
         <p>Conheça e surpreenda-se:</p>
         <strong>www.blueerp.com.br</strong>
</button>
        </div>
      </S.Main2>

      <S.Main>
       <div className="text">
       
       </div>

       <div className="center">
        <div className="title">
        <FaRegStar/>
         <span>Pensado para a transformação digital de pequenas empresas</span>
        </div>
        <div className="rest">
         <div className="price">
         <h2>
         <strong>R$</strong>
         89
         <strong>,90</strong>
         </h2>

         <div className="back">
          <h2>
          <strong>R$</strong>
          89
          <strong>,90</strong>
          </h2>
         </div>

         <span><strong>/mês</strong> no plano anual</span>
         </div>

         <div className="texts">
          <h3>
            Na versão premium, o Blue Lite fica com todas ferramentas liberadas e <strong> backup seguro na nuvem</strong>
          </h3>

          <button>
            Contrate agora mesmo
          </button>
         </div>
        </div>
       </div>

       <div className="blueerp">
        <img src={Blue} alt="" />

        <h3>Sua empresa cresceu?</h3>
        <span>
        Escale para a Blue ERP sem dores de cabeça com migração de dados.
        </span>

        <button onClick={() => window.open("https://blueerp.com.br")}>
         <p>Conheça e surpreenda-se:</p>
         <strong>www.blueerp.com.br</strong>
        </button>
       </div>
      </S.Main>

      <Footer />
     </S.Container>
    )
}