import * as S from "./style";

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

import Image1 from "./assets/icon-head-emissor-mdfe.png";
import Image2 from "./assets/big-icon-danfe-2.svg";
import Image3 from "./assets/big-icon-certificadoA1A3.svg";
import Image4 from "./assets/big-icon-download.svg";
import Image5 from "./assets/venda-financeiro.svg";

import i1 from "./assets/icone-online.svg";
import i2 from "./assets/icon-slip.svg";
import i3 from "./assets/icon-certificadoA1A3.svg";
import i4 from "./assets/icon-download.svg";

export function MDF() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);


  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
  });
  };

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
          Emissor de MDF-e
          </h2>

          <span style={{fontSize: 16}}>
          Com o Blue Lite você emite o <strong> Manifesto Eletrônico <br />
          de Documentos Fiscais </strong> sem surpresas e sem dor de cabeça!
          </span>

          <Link to="/baixar-blue-lite">
           <button>
            Download Grátis
           </button>
          </Link>

          <ul>
            <li>
             <GoShieldCheck/> 
             <p>
              Plano grátis sem limite de tempo.
             </p>
            </li>

            <li>
             <GoShieldCheck/>
             <p>
              Mais de 200 mil downloads.
             </p>
            </li>

          </ul>
        </div>

        <img src={Image1} alt="" />
      </div>

      <div className="rest">
       <h3>
Recursos para <strong> simplificar </strong> o seu dia-a-dia</h3>

       <div className="cards">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <span>
          <strong> Ferramentas</strong>  Exclusivas
          </span>

          <img src={i1} alt="" />
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
        
          <span>   
<strong>Emissão Fácil </strong>  & <strong> Rápida</strong>
          </span>
          
          <img src={i2} alt="" />
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
         
          <span>   
<strong>Certificado A1 e A3 </strong>
          </span>
          
          <img src={i3} alt="" />
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
         
          <span>
         <strong> Exportação e download </strong> 
          </span>
          
          <img src={i4} alt="" />
        </div>

       </div>
      </div>
     </S.Main>

     <S.Main2 ref={section1Ref} style={{ backgroundColor: "#0074FF", height: '70vh'}}>
      <div className="left">
        <h2 style={{ color: '#ffbb00'}}>
        Conte com ferramentas exclusivas para emitir <strong> NFC-e, CF-e SAT e MDF-e</strong>
        </h2>

        <Link to="/baixar-blue-lite">
         <button>
          Download Gratuito
         </button>
        </Link>
      </div>

      <div className="right">
      <p style={{color: '#fff'}}>Além de poder controlar o <strong>cadastro de produtos</strong> e <strong>clientes</strong>, acompanhar o <strong>fluxo de caixa</strong>, gerenciar pedidos e orçamentos, e realizar vendas em um moderno e prático PDV, o <strong>Blue Lite</strong> permite que você emita notas e o Manifesto Eletrônico de Documentos Fiscais com apenas alguns cliques, de forma totalmente segura.</p>

      </div>
     </S.Main2>

     <S.Main4 ref={section2Ref}>
      <div  className="left">
       <h3>
       Emissão <strong> Fácil e Rápida</strong>
       </h3>

       <p>Sem dúvida, entre todas as qualidades do <strong>Blue Lite</strong>, o fato de ser um emissor totalmente gratuito é um grande diferencial. Moderno, rápido e extremamente fácil de usar, nosso Sistema ERP automatiza processos, como o preenchimento dos campos do seu <strong>MDF-e</strong>, que são carregados automaticamente com os dados já cadastrados no sistema.</p>

<p>Com isso, de forma eficiente, você poderá vincular todos os outros documentos fiscais necessários em uma operação ou prestação de serviços de transporte de carga. Além de tudo isso, oferecemos modais personalizados, de acordo com as necessidades da sua empresa: <strong>Modal Rodoviário</strong>, <strong>Modal Ferroviário</strong>, <strong>Modal Aéreo</strong> e <strong>Aquaviário</strong>.</p>


      </div>

      <div className="right">
       <img src={Image2} alt="" />
      </div>
     </S.Main4>

     <S.Main4 ref={section3Ref}>
      <div  className="left">
      <img src={Image3} alt="" />
      </div>

      <div className="right">
      
       <h3>
       Compatível com <strong> Certificado A1 e A3 </strong>
       </h3>

       <p>Não se preocupe, o <strong>Blue Lite</strong> é um ERP totalmente compatível com o <strong>Certificado A1</strong> e o <strong>Certificado A3</strong>. Assim, você pode emitir suas notas fiscais e MDF-e com total confiança, sem enfrentar nenhum problema. E, claro, o nosso Emissor Gratuito possui uma conexão direta com a Secretaria da Fazenda, garantindo mais <strong>segurança</strong> e <strong>agilidade</strong> em todas as suas operações.</p>


      </div>
     </S.Main4>

     <S.Main4 ref={section4Ref}>
      <div  className="left">
       <h3>
       Download em <strong> XML </strong> ou <strong> PDF</strong>
       </h3>

       <p>Através de um painel <strong>intuitivo</strong>, você poderá acompanhar todos os seus MDF-e emitidos e exportá-los facilmente em arquivo XML ou PDF. Ao encerrar os manifestos, você poderá liberar o motorista e o veículo para novas entregas, tudo isso com apenas alguns <strong>cliques</strong>.</p>
<p><strong>Mercadoria parada</strong> porque seu Sistema ERP não emite MDF-e? Nunca mais!</p>


      </div>

      <div className="right">
       <img src={Image4} alt="" />
      </div>
     </S.Main4>

     <Footer/>
    </S.Container>
  )
}