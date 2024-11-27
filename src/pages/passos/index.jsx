import * as S from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import Image1 from "./assets/imgSigeCaixaGratis.svg";
import { TiArrowUpOutline } from "react-icons/ti";


export function Passos() {

   useEffect(() => {
 
     window.scrollTo({
       top: 0,
       behavior: "smooth", 
     });
  }, []);
  
  return (
    <S.Container>
     <Header/>
     <S.Main>
      <div className="text">
        <div className="texts">
          <h2>
           O <strong> caminho de sucesso </strong> da <br />
           sua empresa, começa aqui!
          </h2>

          <span>
           Acompanhe nossos <strong> tutoriais e artigos </strong> para aproveitar <br />
           ao máximo todos os recursos do Sistema Blue Lite!
          </span>

          <button>
            Acompanhe no Youtube
          </button>
        </div>

        <img src={Image1} alt="" />
      </div>
     </S.Main>

     <S.Main2>
     <div className="CardOne">
      <div className="texts">
       <h3>
        1º Passo
       </h3>

       <h4>
       Instalação e cadastros iniciais
       </h4>

       <p>
       Aqui, mostramos como instalar o Blue Lite, explorar todos os tipos de dashboards e registrar sua empresa e produtos.
       </p>
      </div>

      <div className="video">
      <iframe   src="https://www.youtube.com/embed/QD4lG6KrsUE?si=dtUN1QZbgwsHPwYX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
     </div>

     <div className="CardTwo">
      <div className="video">
      <iframe  src="https://www.youtube.com/embed/YgfdF_io85g?si=-2bOrFlEnddG8gfq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="texts">
       <h3>
        2º Passo
       </h3>

       <h4>
       Cadastros básicos e lançamentos financeiros
       </h4>

       <p>
       No segundo tutorial, vamos aprofundar os ensinamentos, mostrando como cadastrar pessoas, serviços, categorias de contas, contas bancárias e lançamentos financeiros.
       </p>
      </div>
     </div>

     <div className="CardOne">
      <div className="texts">
       <h3>
        3º Passo
       </h3>

       <h4>
       Vendas
       </h4>

       <p>
       A terceira etapa é voltada para as vendas. Nela, mostramos todas as funcionalidades do PDV (ponto de venda), como gerar pedidos e orçamentos.
       </p>
      </div>

      <div className="video">
      <iframe src="https://www.youtube.com/embed/Ih_8cpOlXVA?si=Y5_E23wU6BPaIN96" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
     </div>

     <div className="CardTwo">
      <div className="video">
      <iframe  src="https://www.youtube.com/embed/h8nlJM1hK-8?si=JtMS2YieTBj2fk3O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="texts">
       <h3>
        4º Passo
       </h3>

       <h4>
       Módulo Foods
       </h4>

       <p>
       Se o seu negócio atua no setor de alimentação e delivery, o módulo Foods é o mais indicado para você. Por isso, preparamos um tutorial completo sobre o cadastro de produtos alimentícios, gestão de pedidos, mesas e comandas. Não deixe de conferir!
       </p>
      </div>
     </div>
     </S.Main2>

     <S.Main3>
      <h2><strong> Seguindo todos esses passos, </strong> você já pode começar a faturar bastante com o <strong> Blue Lite!</strong></h2>
      <Link to="/baixar-blue-lite">
       <button>
        Download  Gratuito
       </button>
      </Link>
     </S.Main3>

     <div className="returnTop" onClick={()=> window.scrollTo({top: 0, behavior: "smooth",})}>
      <TiArrowUpOutline/>
     </div>
     <Footer/>
    </S.Container>
  )
}