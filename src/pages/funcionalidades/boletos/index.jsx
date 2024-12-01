import * as S from "./style";

import { Preload } from "../../../components/preload";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { Link } from "react-router-dom";

import Logo from "./assets/logoSiteMaisPaghiper.png";
import Value from "./assets/valor.svg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import I1 from "./assets/logoItau.png";
import I2 from "./assets/logoSantander.png";
import I3 from "./assets/logoCaixa.png";
import I4 from "./assets/logoBB.png";

import Image1 from "./assets/iconeBoletoPersonalizado01.jpg";
import Image2 from "./assets/boletosBlue.png";
import Image3 from "./assets/iconeSemCobrancasSurpresa03.jpg";
import Image4 from "./assets/iconeTransferenciaGratuitaDosValores04.jpg";
import Image5 from "./assets/iconeSemTaxaDeAdesao05.jpg";
import Image6 from "./assets/iconeSemTarifazDeEmissaoCancelamentoOuBaixa06.jpg";
import Image7 from "./assets/iconeTaxaExtremamenteAtrativa07.jpg";
import Image8 from "./assets/iconeConciliacaoAutomatica08.jpg";
import Image9 from "./assets/iconeRepasseAutomatico09.jpg";

import ImageCard from "./assets/imgAjuda.jpg";

export function Boletos(){
  useEffect(() => {
 
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, []);

    return(
     <S.Container>
      <Preload/>
      <Header/>

      <div className="social">
        
        <a href="https://www.facebook.com/people/Blue-Innovation/61568409581809/" target="blank" className="icon">
          <FaFacebookF/>
        </a>

        <a href="https://www.instagram.com/blueinnovationbr/profilecard/?igsh=MWVscWxxN2tnYjVoZA%3D%3D" target="blank" className="icon">
          <FaInstagram/>
        </a>

        <a href="https://www.youtube.com/@blueinnovation-m3g?si=0dFTX812cgdyNQ9W" target="blank" className="icon">
          <FaYoutube/>
        </a>
      </div>
      
      <S.Main>
       <div className="left">
        <h3>
        Boletos registrados automaticamente e sem burocracia
        </h3>

        <ul>

<li>
    <GoShieldCheck/>
    <p>Boleto registrado nas normas da Febraban</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Sem tarifa de emissão, cancelamento ou baixa</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Sem taxa de adesão ou mensalidades</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Boleto enviado por email</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Baixa automática</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Lembretes de vencimento por e-mail e sms</p>
</li>

<li>
    <GoShieldCheck/>
    <p>Repasse dos valores em 2 dias</p>
</li>

<li>
    <GoShieldCheck/>
    <p><strong>Tarifa fixa de R$ 1,99 </strong> por boleto pago</p>
</li> 

        </ul>

        <button>
         Conheça mais
        </button>

        <div className="button">
         <FaArrowDown/>
         <p>Mais informações</p>
        </div>
       </div>

       <div className="right">
        <img src={Value} alt="" />
       </div>
      </S.Main>

      <S.Main2>
        <div className="title">
         <span>Conheça</span>
         <h2>
         O melhor Sistema Gratuito de Gestão de Lojas e Empresas agora com Emissão de Boletos Registrados com a menor taxa do mercado!
         </h2>
        </div>

        <h3>Quadro comparativo de Taxas de Boletos dos Bancos</h3>

        <header>
         <div className="topic border">
         Sistemas
         </div>

         <div className="topic border">
         Com Registro
         </div>

         <div className="topic border">
         Manutenção
         </div>

         <div className="topic border">
         Baixa de Título
         </div>

         <div className="topic border">
         Alteração
         </div>

         <div className="topic">
         Taxa única somente para boletos pagos
         </div>
        </header>

        <nav>
         <div className="topic">
          <img src={Logo} alt="" />
         </div>

         <div className="topic">
          <span>R$</span> 
          <strong>0,</strong>
          <p>00</p>
         </div>

         <div className="topic">
          <span>R$</span> 
          <strong>0,</strong>
          <p>00</p>
         </div>

         <div className="topic">
          <span>R$</span> 
          <strong>0,</strong>
          <p>00</p>
         </div>

         <div className="topic">
          <span>R$</span> 
          <strong>0,</strong>
          <p>00</p>
         </div>

         <div className="topic">
         <span>R$</span> 
          <strong>1,</strong>
          <p>99</p>
         </div>
        </nav>

        <ul>
         <li>
          <div className="topic border">
            <img src={I1} alt="" style={{ width: 60}}/>
            <div className="font">
             <a target="blank" href="https://www.itau.com.br/_arquivosestaticos/Itau/PDF/Empresas/Tarifas/empresas-tabela-geral_m.pdf"><FaLocationArrow/> Fonte</a>
            </div>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>30</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>7,</strong>
          <p>30</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>00</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>7,</strong>
          <p>30</p>
          </div>

          <div className="topic">
           <FaX size={10} color="rgb(194, 9, 9)"/>
           <b>Não possui</b>
          </div>
         </li>

         <li>
          <div className="topic border">
            <img src={I2} alt="" />
            <div className="font">
             <a target="blank" href="https://www.santander.com.br/document/wps/Tabela-Tarifas-Cobranca.pdf"><FaLocationArrow/> Fonte</a>
            </div>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>10,</strong>
          <p>00</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>5,</strong>
          <p>94</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>20</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>20</p>
          </div>

          <div className="topic">
           <FaX size={10} color="rgb(194, 9, 9)"/>
           <b>Não possui</b>
          </div>
         </li>

         <li>
          <div className="topic border">
            <img src={I3} alt="" />
            <div className="font">
             <a target="blank" href="https://www.caixa.gov.br/site/Paginas/PageNotFoundError.aspx?requestUrl=https://www.caixa.gov.br/Downloads/tabelas-tarifas-pessoa-fisica-pessoa-juridica/Tabela_de_Tarifas_Pessoa_Juridica.pdf"><FaLocationArrow/> Fonte</a>
            </div>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>30</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>5,</strong>
          <p>00</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>4,</strong>
          <p>50</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>5,</strong>
          <p>50</p>
          </div>

          <div className="topic">
           <FaX size={10} color="rgb(194, 9, 9)"/>
           <b>Não possui</b>
          </div>
         </li>

         <li>
          <div className="topic border">
            <img src={I4} alt="" />
            <div className="font">
             <a target="blank" href="https://www.bb.com.br/docs/pub/trf/tarifasPJ.pdf"><FaLocationArrow/> Fonte</a>
            </div>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>7,</strong>
          <p>00</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>6,</strong>
          <p>10</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>5,</strong>
          <p>30</p>
          </div>

          <div className="topic border">
          <span>R$</span> 
          <strong>5,</strong>
          <p>30</p>
          </div>

          <div className="topic">
           <FaX size={10} color="rgb(194, 9, 9)"/>
           <b>Não possui</b>
          </div>
         </li>
        </ul>

        <h5>*as taxas podem variar de acordo com a negociação com o banco</h5>
      </S.Main2>

      <S.Main3>
        <div className="left">
         <h2>
         Boleto personalizável
         </h2>

         <p>
         Utilize a sua própria logo e adicione frases personalizadas mantendo a identidade do seu comércio. Ao utilizar sua logo, por exemplo, a conversão de boletos pagos aumenta significativamente.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>

        <div className="right">
            <img src={Image1} alt="" />
        </div>
      </S.Main3>

      <S.Main3>
        <div className="right">
            <img src={Image2} alt="" />
        </div>

        <div className="left">
         <h2>
         Boleto registrado sem arquivo de remessa e retorno
         </h2>

         <p>
         Todo o processo é feito online através do próprio Blue Lite, de forma prática e em poucos cliques. Esqueça o processo de gerar arquivos de remessa e importar os arquivos de retorno. No momento da emissão, o boleto é registrado em tempo real. Utilize o boleto como ele deve ser: fácil, rápido e barato!
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>
      </S.Main3>

      <S.Main3>
        <div className="left">
         <h2>
         Sem cobranças surpresa
         </h2>

         <p>
         A PagHiper, parceira do Blue Lite para a emissão de boletos é transparente. Você só será cobrado, com uma taxa fixa, quando um boleto for pago. Não há tarifas surpresa.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>

        <div className="right">
            <img src={Image3} alt="" />
        </div>
      </S.Main3>

      <S.Main3>
        <div className="right">
            <img src={Image4} alt="" />
        </div>

        <div className="left">
         <h2>
         Transferência gratuita dos valores recebidos
         </h2>

         <p>
         Com a PagHiper e o Blue Lite, você transfere os valores recebidos por boleto da sua carteira virtual para sua conta corrente* sem pagar nenhuma taxa!
<br /><br />
* Bancos com transferência gratuita: Bradesco, Itaú, Santander, Sicoob, Sicredi, Banco do Brasil.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>
      </S.Main3>

      <S.Main3>
        <div className="left">
         <h2>
         Sem taxa de adesão ou mensalidades
         </h2>

         <p>
         Inscreva-se de forma prática através do próprio Blue Lite e não pague nada por isso. O cadastro é prático e sem burocracia, além de ser gratuito: não há taxas de adesão e nem cobrança de mensalidades.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>

        <div className="right">
            <img src={Image5} alt="" />
        </div>
      </S.Main3>

      <S.Main3>
        <div className="right">
            <img src={Image6} alt="" />
        </div>

        <div className="left">
         <h2>
         Sem tarifa de emissão, cancelamento ou baixa
         </h2>

         <p>
         Pague somente quando ganhar dinheiro! Não há cobrança de taxas de registro, baixa, cancelamento ou alterações. Você só pagará a taxa fixa quando seu cliente pagar o seu boleto, e pronto. Sem surpresas!
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>
      </S.Main3>

      <S.Main3>
        <div className="left">
         <h2>
         Taxa extremamente atrativa
         </h2>

         <p>
         Compare com seu banco. Utilizando a PagHiper pelo Blue Lite, você pagará uma taxa fixa de R$1,99 por cada boleto pago pelo seu cliente. Não há cobrança de taxas de emissão, baixa, alterações ou cancelamentos.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>

        <div className="right">
            <img src={Image7} alt="" />
        </div>
      </S.Main3>

      <S.Main3>
        <div className="right">
            <img src={Image8} alt="" />
        </div>

        <div className="left">
         <h2>
         Conciliação automática
         </h2>

         <p>
         Com a integração PagHiper e Blue Lite, a conciliação de pagamentos dos seus boletos é automática, atualizando o seu financeiro. Por tudo estar integrado, você ganha tempo e automatiza tarefas repetitivas.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>
      </S.Main3>

      <S.Main3>
        <div className="left">
         <h2>
         Repasse automático
         </h2>

         <p>
         Configure repasses automáticos dos valores recebidos para sua conta corrente. O dinheiro cai na sua conta automaticamente, de forma prática e sem custos. Basta indicar qual será a conta bancaria e a frequência que os depósitos deverão ocorrer. Praticidade para o seu dia a dia e mais tempo para você gerir o seu negócio de sucesso.
         </p>

         <button>
            Baixar Blue Lite
         </button>
        </div>

        <div className="right">
            <img src={Image9} alt="" />
        </div>
      </S.Main3>

      <S.Main4>
        <span>Depoimentos</span>
        <h2>Quem Usa e Aprova o  Blue Lite</h2>

        <Swiper
         pagination={{ clickable: true }}
         navigation={true}
         slidesPerView={1}
         spaceBetween={0}
         loop={true}
        >
         <SwiperSlide>
          <svg fill="#004798" height={34} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.2 31.7"  xml:space="preserve">
                    <g>
                    <path class="st0" d="M15.9,19.2c-1.5-1.1-3.1-1.7-4.6-1.7c-0.2,0-1.7,0.1-4.4,0.4c-0.6,0-1.1-0.2-1.3-0.5c-0.3-0.3-0.4-0.7-0.4-1.2
                           c0-1.4,0.4-3,1.3-4.8c1.8-3.5,4.9-6.5,9.4-9.1L14.6,0c-3.6,1.6-7,4.3-10,7.9C1.5,11.6,0,15.7,0,20.2c0,3,1,5.6,2.9,7.9
                           c1.9,2.3,4.4,3.5,7.5,3.5c2.8,0,4.8-0.8,6-2.4c1.2-1.6,1.8-3.3,1.8-5C18.2,22,17.4,20.4,15.9,19.2z"></path>
                    <path class="st0" d="M36.9,19.2c-1.5-1.1-3.1-1.7-4.6-1.7c-0.2,0-1.7,0.1-4.4,0.4c-0.6,0-1.1-0.2-1.3-0.5c-0.3-0.3-0.4-0.7-0.4-1.2
                           c0-1.4,0.4-3,1.3-4.8c1.8-3.5,4.9-6.5,9.4-9.1L35.6,0c-3.6,1.6-7,4.3-10,7.9c-3.1,3.7-4.6,7.7-4.6,12.3c0,3,1,5.6,2.9,7.9
                           c1.9,2.3,4.4,3.5,7.5,3.5c2.8,0,4.8-0.8,6-2.4c1.2-1.6,1.8-3.3,1.8-5C39.2,22,38.4,20.4,36.9,19.2z"></path>
                     </g>
          </svg>

          <p>
           Show de bola! Gratuito, funcional e com integração com o Mercado Livre! Era o que eu estava procurando.
          </p>

          <div className="photo p1">

          </div>

          <h5>Carlos Goulart - Goulart Informática</h5>
         </SwiperSlide>

         <SwiperSlide>
         <svg fill="#004798" height={34} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.2 31.7"  xml:space="preserve">
                    <g>
                    <path class="st0" d="M15.9,19.2c-1.5-1.1-3.1-1.7-4.6-1.7c-0.2,0-1.7,0.1-4.4,0.4c-0.6,0-1.1-0.2-1.3-0.5c-0.3-0.3-0.4-0.7-0.4-1.2
                           c0-1.4,0.4-3,1.3-4.8c1.8-3.5,4.9-6.5,9.4-9.1L14.6,0c-3.6,1.6-7,4.3-10,7.9C1.5,11.6,0,15.7,0,20.2c0,3,1,5.6,2.9,7.9
                           c1.9,2.3,4.4,3.5,7.5,3.5c2.8,0,4.8-0.8,6-2.4c1.2-1.6,1.8-3.3,1.8-5C18.2,22,17.4,20.4,15.9,19.2z"></path>
                    <path class="st0" d="M36.9,19.2c-1.5-1.1-3.1-1.7-4.6-1.7c-0.2,0-1.7,0.1-4.4,0.4c-0.6,0-1.1-0.2-1.3-0.5c-0.3-0.3-0.4-0.7-0.4-1.2
                           c0-1.4,0.4-3,1.3-4.8c1.8-3.5,4.9-6.5,9.4-9.1L35.6,0c-3.6,1.6-7,4.3-10,7.9c-3.1,3.7-4.6,7.7-4.6,12.3c0,3,1,5.6,2.9,7.9
                           c1.9,2.3,4.4,3.5,7.5,3.5c2.8,0,4.8-0.8,6-2.4c1.2-1.6,1.8-3.3,1.8-5C39.2,22,38.4,20.4,36.9,19.2z"></path>
                     </g>
          </svg>

          <p>
          O Blue Lite facilitou muito a rotina do meu consultório. Tudo está mais organizado, consigo ter o controle dos meus clientes, vendas e do meu financeiro de forma muito fácil e rápida. Foi um divisor de águas para minha empresa.
          </p>

          <div className="photo p2">

          </div>

          <h5>Dr. Matheus Dutra - Matheus Dutra Estética Avançada</h5>
         </SwiperSlide>
        </Swiper>
      </S.Main4>

      <S.Main5>
       <div className="left">
        <span>
          Perguntas Frequentes
        </span>

        <h3>
        Tire todas as suas dúvidas
        </h3>

        <div className="card">
          <img src={ImageCard} alt="" />
          <img src={Value} alt="" className="value"/>

          <h4>Melhor taxa do mercado!</h4>

          <p>
          Baixe agora e comece a gerar os seus boletos sem burocracia!
          </p>

          <Link to="/baixar-blue-lite">
           <button>Baixar Blue Lite</button>
          </Link>
        </div>
       </div>

       <ul className="right">
        <li>
          <header>
            <span>Os boletos são registrados?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Sim! Todos os boletos são automaticamente registrados, trazendo muito mais segurança para a operação e atendendo a norma 15/2015 da Federação Brasileira de Bancos (FEBRABAN).
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Quais documentos preciso ter para começar a emitir boletos?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Se você for emitir boletos para receber o valor em uma conta de pessoa física, você precisará de RG, CPF ou CNH e Comprovante de Residência. Já, se for utilizar uma conta empresarial, precisará também do Contrato Social da empresa.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Quanto tempo preciso aguardar para emitir boletos com o Blue Lite + PagHiper?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            É na hora. Você será liberado para emissão de boletos imediatamente após o cadastro.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Preciso ter conta em algum banco?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Sim. Você precisará ter uma conta em um banco para receber os valores dos boletos pela PagHiper. Alguns bancos tem essa transferência de forma gratuita. São eles: Banco do Brasil, Bradesco, Itaú, Santander, Sicoob e Sicredi. Mas você pode transferir seu dinheiro da sua conta digital PagHiper para outros bancos pagando uma tarifa de R$2,00 por saque.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Preciso contratar carteira de cobrança com o banco para emitir boletos?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Não! Essa é uma das vantagens de utilizar a PagHiper para emitir boletos. Você não precisa ter nenhum contrato de carteira de cobrança (e nem pagar taxas) com o seu Banco para poder emitir boletos pela PagHiper.


            </p>
          </div>
        </li>

        <li>
          <header>
            <span>O nome e logotipo da minha empresa aparece no boleto?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Sim, a emissão dos boletos segue as regras do Banco Central, portanto, a sua empresa aparece no boleto como beneficiária. E ainda o logotipo dela aparecerá ao lado do logotipo da PagHiper.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Quem é o emissor do boleto e quem controla essa emissão?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Quem controla todo o processo da emissão do boleto e o registro dele com o sistema de bancos é a PagHiper, nossa parceira.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Qual a vantagem de utilizar o Blue Lite e a PagHiper para emitir boletos?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Através do Blue Lite, você pagará apenas R$1,99 por boleto pago! É a menor taxa do mercado. Além disso, é extremamente prático emitir boletos pelo sistema, evitando o retrabalho e o preenchimento manual de informações no boleto! Ainda, a conciliação bancária é feita automaticamente no seu sistema, sem necessidade de importar um arquivo retorno e nem enviar arquivos de remessa para registrar os boletos. É muito prático e seguro!
            </p>
          </div>
        </li>

        
        <li>
          <header>
            <span>Quais bancos são habilitados para receber a transferência dos valores por meio da PagHiper?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Todos os bancos são habilitados para receber a transferência dos valores! Caso não encontre o seu banco na lista para solicitar a transferência, entre em contato com o suporte PagHiper.
            </p>
          </div>
        </li>

        
        <li>
          <header>
            <span>Posso me cadastrar como pessoa física?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Sim, poderá emitir boletos normalmente. Porém, só poderá solicitar saques para sua conta bancária pessoal.
            </p>
          </div>
        </li>

                
        <li>
          <header>
            <span>Como alterar as informações de conta bancária, juros e multas dos boletos?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Dentro do próprio Blue Lite, nas configurações da PagHiper, você tem a disposição essas e outras diversas opções para efetuar as alterações e configurações da sua conta PagHiper.
            </p>
          </div>
        </li>

                
        <li>
          <header>
            <span>Quanto custa o boleto e quanto serei cobrado de tarifas para emitir boletos pelo Blue Lite com a PagHiper?
            </span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            A emissão dos boletos é gratuita. Custo ZERO. Isso porque você só vai pagar a tarifa de R$1,99 sobre os boletos que forem efetivamente pagos pelo seu cliente. Ou seja:
<br /><br />
Uso do sistema Blue Lite: R$0,00<br />
Cadastro na PagHiper: R$0,00<br />
Custo por boleto emitido: R$0,00<br />
Custo de cancelamento, alteração, manutenção ou vencimento de boleto: R$0,00<br />
Custo de transferência/saque: R$0,00 (bancos selecionados) ou R$2,00 por saque.<br />
Custo por boleto PAGO: R$1,99<br />
            </p>
          </div>
        </li>

                
        <li>
          <header>
            <span>Como efetuar o pagamento da tarifa dos boletos?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Não precisa se preocupar. A tarifa é descontada automaticamente assim que o pagamento é aprovado. :)
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Existe um valor mínimo para emissão de um boleto?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Indicamos um valor mínimo de R$5,00 para emissão de um boleto, pois caso ele seja pago, será descontada a taxa de R$1,99. Porém, o sistema não impede a emissão de boletos com valores menores.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Vou precisar pagar alguma tarifa para o banco?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Nada. Emitindo boletos pelo Blue Lite com a PagHiper você não paga tarifas para os bancos.
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Como vou receber os valores em minha conta?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Você pode solicitar manualmente a transferência dos valores da sua conta digital PagHiper para a conta do seu banco ou configurar saques periódicos automáticos, determinando um dia da semana. Assim, todo o saldo da sua conta PagHiper será transferido de forma periódica e automática para uma conta bancária que você cadastrou previamente no período que você escolher (semanal, quinzenal, mensal...).
            </p>
          </div>
        </li>

        <li>
          <header>
            <span>Quanto tempo leva para os valores aparecerem na minha conta bancária?</span>
            <FaPlus/>
          </header>

          <div className="text">
            <p>
            Após a solicitação do saque, normalmente o depósito é feito no mesmo dia. Porém, há o prazo máximo de 2 dias úteis para os recursos serem transferidos para sua conta bancária. Caso seja seu primeiro saque, há um prazo de um dia a mais para verificação da propridade da sua conta bancária, mas é um processo rápido e automático. Fique tranquilo.
            </p>
          </div>
        </li>

       </ul>
      </S.Main5>

      <Footer/>
     </S.Container>
    )
}