import * as S from "./style";

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

import Image1 from "./assets/icon-head-emissor-gratuito.png";
import Image2 from "./assets/big-icon-foguete.svg";
import Image3 from "./assets/big-icon-danfe.svg";
import Image4 from "./assets/big-icon-certificadoA1A3.svg";
import Image5 from "./assets/big-icon-no-internet-2.svg";
import Image6 from "./assets/big-icon-SAT.svg";
import Image7 from "./assets/big-icon-despesas-sempre-emdia.svg";

import i1 from "./assets/icon-slip.svg";
import i2 from "./assets/icon-invoice.svg";


export function Emissor() {
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
          Emita Notas Fiscais
          </h2>

          <span>
 <strong>NF-e, NFC-e, CF-e SAT e MDF-e</strong>
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
Qual o tipo de venda que <strong> você faz na sua empresa?</strong></h3>

       <div className="cards">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <span style={{ fontSize: 30}}>
          <strong>Venda por Pedidos  </strong> <br />
          (emissão de NF 4.0 DANFE)
          </span>

          <img src={i1} alt="" />
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)} style={{ backgroundColor: '#00ffff'}}>
        
          <span style={{ fontSize: 30}}>   
<strong>Venda em Balcão</strong> <br />
(emissão de cupons fiscais)
          </span>
          
          <img src={i2} alt="" />
        </div>

       </div>
      </div>
     </S.Main>

     <S.Main2 >
      <div className="left">
        <h2>
        Sistema de <strong> Frente de Caixa para <br /> Comércio</strong>
        </h2>

        <Link to="/baixar-blue-lite">
         <button>
          Download Gratuito
         </button>
        </Link>
      </div>

      <div className="right">
      <p>
  Contar com um sistema de vendas fácil de usar e que permita finalizar transações rapidamente é incrível! No <strong>Blue Lite</strong>, o processo de vendas é muito mais prático, pois além de oferecer cadastro ilimitado de produtos e baixa automática no estoque, o sistema possibilita que o <strong>lançamento financeiro e a emissão do comprovante ou nota fiscal</strong> sejam realizados imediatamente.  
  Tudo para simplificar a gestão do seu comércio.
</p>

<span style={{ display: 'block' , marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#0074FF'}}>É ZERO ENROLAÇÃO E ZERO BUROCRACIA!</span>
      </div>
     </S.Main2>

     <S.Main3>
      <ul>
         <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="50.168" height="50" viewBox="0 0 50.168 50">   <g id="Grupo_9196" data-name="Grupo 9196" transform="translate(-399.899 -2489)">     <path id="Caminho_42864" data-name="Caminho 42864" d="M56.349,42.431a9.446,9.446,0,0,1-8.4,1.2.836.836,0,0,0-.765.106l-3.762,2.667.968,1.363L47.8,45.347a11.173,11.173,0,0,0,9.483-1.532,11.861,11.861,0,0,0,1.4-1.105l-1.133-1.229a10.074,10.074,0,0,1-1.2.95Z" transform="translate(391.121 2480.521)" fill="#ff9100"></path>     <path id="Caminho_42865" data-name="Caminho 42865" d="M41.131,27.416a7.6,7.6,0,0,0-3.461,7.249l-10.6,6.792-10.6-6.788a7.567,7.567,0,0,0-3.465-7.247,7.992,7.992,0,0,0-5.45-1.359,6.186,6.186,0,0,0-5.331,7.9,7.986,7.986,0,0,0,3.3,4.541,7.565,7.565,0,0,0,8.025.5l8.226,5.84-7.828,5.02A3.28,3.28,0,1,0,17.617,55.3l9.456-6.706,9.456,6.711A3.285,3.285,0,1,0,40.2,49.86l-7.837-5.015L40.591,39a7.565,7.565,0,0,0,8.025-.494c3.436-2.319,4.557-6.694,2.5-9.753s-6.54-3.658-9.983-1.339ZM16.649,53.94a1.65,1.65,0,0,1-2.267-.414,1.606,1.606,0,0,1,.469-2.257l8.4-5.387,2.373,1.683ZM40,52.3a1.613,1.613,0,0,1-2.513,1.643L14.054,37.308a.836.836,0,0,0-.976.007,5.793,5.793,0,0,1-6.612-.195,6.321,6.321,0,0,1-2.621-3.586,4.514,4.514,0,0,1,3.929-5.817A6.322,6.322,0,0,1,12.08,28.8a5.793,5.793,0,0,1,2.653,6.058.836.836,0,0,0,.359.909l24.2,15.5A1.6,1.6,0,0,1,40,52.3Zm7.674-15.182a5.794,5.794,0,0,1-6.613.193.836.836,0,0,0-.976-.007l-9.247,6.565-2.217-1.421,10.427-6.687a.836.836,0,0,0,.359-.907A5.822,5.822,0,0,1,42.067,28.8c2.675-1.8,6.114-1.405,7.659.884s.625,5.634-2.049,7.437Z" transform="translate(397.922 2483.061)" fill="#0074FF"></path>     <path id="Caminho_42866" data-name="Caminho 42866" d="M11.79,3.56l-.925-1.393A10.867,10.867,0,0,0,6.621,14.845L8.2,14.287A9.2,9.2,0,0,1,11.791,3.56Z" transform="translate(397.262 2486.973)" fill="#ff9100"></path>     <path id="Caminho_42867" data-name="Caminho 42867" d="M10.257,19.978A9.3,9.3,0,0,1,9.192,18.5l-1.447.836A10.962,10.962,0,0,0,9,21.083Z" transform="translate(396.975 2484.292)" fill="#ff9100"></path>     <path id="Caminho_42868" data-name="Caminho 42868" d="M37.568,30.588l2.38-11.9a7.523,7.523,0,0,0-.691-15.018A7.429,7.429,0,0,0,34.6,5.289a7.511,7.511,0,0,0-12.425,0,7.429,7.429,0,0,0-4.654-1.617,7.523,7.523,0,0,0-.691,15.014l2.38,11.9,1.638-.328-.468-2.347H36.4l-.468,2.34Zm-4.035-4.347.7-4.9-1.655-.237-.733,5.134H29.225V17.046H27.554v9.195H24.935L24.2,21.107l-1.655.237.7,4.9h-3.2l-1.705-8.526a.836.836,0,0,0-.819-.669,5.851,5.851,0,1,1,4.249-9.864.836.836,0,0,0,1.359-.209,5.84,5.84,0,0,1,10.517,0,.836.836,0,0,0,1.359.209,5.848,5.848,0,1,1,4.249,9.864.836.836,0,0,0-.819.669l-1.705,8.526Z" transform="translate(396.605 2487)" fill="#0074FF"></path>   </g> </svg>
          <span>Restaurantes</span>
         </li>

         <li>
         <svg xmlns="http://www.w3.org/2000/svg" width="43.333" height="50" viewBox="0 0 43.333 50">   <path id="fashion_2_" data-name="fashion (2)" d="M89.666,28.476V25.163a.833.833,0,0,0-.833-.833H85.752l-3.373-2.249a3.333,3.333,0,1,0-5.213-2.751.833.833,0,0,0,1.667,0A1.667,1.667,0,1,1,80.5,21h0a.832.832,0,0,0-.462.14l-4.79,3.193H72.166l-.03,0-.072,0H68.252l-3.373-2.249a3.333,3.333,0,1,0-5.212-2.751.833.833,0,1,0,1.667,0A1.667,1.667,0,1,1,63,21h0a.833.833,0,0,0-.462.14l-4.79,3.193H53.936a4.16,4.16,0,0,0-4.042,3.156.79.79,0,0,0-.016.079L48.01,40.039a.834.834,0,0,0-.01.123V56.829a.833.833,0,0,0,.833.833h5a.833.833,0,0,0,.833-.833V56h5a.833.833,0,0,0,.833-.833v-.833h5v.833a.833.833,0,0,0,.833.833h3.749l-.415,9.129A.833.833,0,0,0,70.5,66h20a.833.833,0,0,0,.832-.871Zm-1.52,3.262A2.233,2.233,0,0,1,86.7,30.306a4.948,4.948,0,0,1-.28-.976h1.612ZM88,27.663H76.137l-.015-.1a.8.8,0,0,0-.016-.079A4.163,4.163,0,0,0,75.4,26H88Zm-7.5-4.832,2.248,1.5h-4.5ZM70.362,26,69.976,28.5a1.541,1.541,0,0,1-2.758.685A5.82,5.82,0,0,0,68.774,26ZM58.917,26h8.166a4.167,4.167,0,0,1-8.166,0ZM63,22.831l2.248,1.5h-4.5ZM57.226,26a5.82,5.82,0,0,0,1.556,3.191,1.541,1.541,0,0,1-2.758-.685L55.638,26Zm1.607,28.333H54.667V38.5A.833.833,0,0,0,53,38.5V56H49.667V40.225L51.52,27.854A2.5,2.5,0,0,1,53.936,26h.016l.425,2.76a3.155,3.155,0,0,0,2.672,2.68,3.212,3.212,0,0,0,1.785-.219ZM60.5,52.663V30.432a5.818,5.818,0,0,0,5,0V52.663Zm6.667-21.446a3.213,3.213,0,0,0,1.785.219,3.155,3.155,0,0,0,2.672-2.679L72.048,26h.016a2.5,2.5,0,0,1,2.416,1.858l1.853,12.371V56H73V38.5a.833.833,0,0,0-1.667,0V54.329H67.166Zm12.5,33.112H71.372l.31-6.823a.828.828,0,0,0,.484.156h5A.833.833,0,0,0,78,56.829V40.163a.834.834,0,0,0-.009-.124l-1.6-10.71h3.28Zm1.667,0v-35h3.4a6.883,6.883,0,0,0,.406,1.559,3.835,3.835,0,0,0,3.082,2.565l1.4,30.875Z" transform="translate(-48 -15.996)" fill="#0074FF"></path> </svg>
          <span>Vestuário</span>
         </li>

         <li>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="48.68" height="50" viewBox="0 0 48.68 50">   <g id="Grupo_9197" data-name="Grupo 9197" transform="translate(-703 -2489)">     <path id="Caminho_42869" data-name="Caminho 42869" d="M48.379,42.742l-5.1-8.5.457-3.9h.649a2.089,2.089,0,0,0,2.087-2.087V25.862a2.089,2.089,0,0,0-2.087-2.087H41.522V21.038c0-.007,0-.015,0-.023a.729.729,0,0,0-.159-.455h0L38.834,17.38v-2.67a1.6,1.6,0,0,0-1.6-1.6H34.293c-.019-.038-.038-.074-.057-.11a9.078,9.078,0,0,0-2.972-2.6,1.164,1.164,0,0,1-.533-.983V7.483a.952.952,0,0,0,.53-.853V2.555A2.558,2.558,0,0,0,28.706,0H25.924a2.558,2.558,0,0,0-2.555,2.555V6.63a.952.952,0,0,0,.53.853V9.424a1.165,1.165,0,0,1-.533.983c-.266.172-.564.371-.867.587,0-.057,0-.114,0-.171a3.906,3.906,0,1,0-7.724.823c.088.416.17.8.246,1.163a2.8,2.8,0,0,0-3.107,4.4,2.761,2.761,0,0,0,.422.419l2.18,1.757a6.153,6.153,0,0,0-2.086,4.393h-3.5l-.153-.287.068-.036c2.342-1.246,4.3-3.292,3.5-4.792s-3.586-1.024-5.928.222l-.068.037L5.37,17.068l.069-.036a9.736,9.736,0,0,0,2.836-2.185c1.091-1.3.882-2.19.661-2.607s-.845-1.089-2.531-.91a9.744,9.744,0,0,0-3.4,1.131L2.94,12.5,2.2,11.111a5.226,5.226,0,0,1-.62-2.479,5.292,5.292,0,0,1,9.965-2.491l1.262,2.373A.733.733,0,0,0,14.1,7.826L12.839,5.453A6.757,6.757,0,1,0,.908,11.8L7.279,23.776H4.3a2.089,2.089,0,0,0-2.087,2.087v2.391A2.089,2.089,0,0,0,4.3,30.34h.649l.457,3.9-5.1,8.5a2.113,2.113,0,0,0,1.515,3.179,2.111,2.111,0,0,0,2.108-1l2.28-3.8.164,1.411a.733.733,0,0,0,.727.647.724.724,0,0,0,.086,0,.733.733,0,0,0,.642-.813l-.385-3.3,5.232-8.718H36.01l5.232,8.718-.919,7.858A1.831,1.831,0,0,1,38.5,48.535H10.177a1.831,1.831,0,0,1-1.818-1.619l-.193-1.651a.732.732,0,1,0-1.455.171L6.9,47.086A3.3,3.3,0,0,0,10.178,50H38.5a3.3,3.3,0,0,0,3.273-2.914l.7-5.971,2.281,3.8a2.112,2.112,0,1,0,3.622-2.174ZM7.111,20.176c2.359-1.255,3.838-1.03,3.947-.827s-.533,1.556-2.892,2.811L8.1,22.2,7.043,20.212l.068-.036ZM3.7,13.755a8.384,8.384,0,0,1,2.864-.967c.728-.077,1.049.076,1.083.141s-.018.416-.489.977a8.382,8.382,0,0,1-2.4,1.834l-.068.036L3.628,13.791l.068-.037Zm38.35,18.433L40.937,30.34h1.325ZM27.2,23.775V21.27l2.309-2.9h8.244l1.523,1.915H35.953a.732.732,0,1,0,0,1.465h4.1v2.028ZM37.37,14.711V16.9H29.884V14.711a.132.132,0,0,1,.132-.132h7.222a.132.132,0,0,1,.132.132ZM25.924,1.465h2.782a1.091,1.091,0,0,1,1.09,1.09V6.116H24.834V2.555a1.091,1.091,0,0,1,1.09-1.09ZM24.16,11.638a2.623,2.623,0,0,0,1.2-2.214V7.581h3.9V9.424a2.623,2.623,0,0,0,1.2,2.214,14.186,14.186,0,0,1,1.976,1.477h-2.43a1.6,1.6,0,0,0-1.6,1.6v2.67L25.89,20.559a.731.731,0,0,0-.159.456v2.761h-.973a6.155,6.155,0,0,0-2.085-4.393l.884-.712,1.3-1.043a2.81,2.81,0,0,0,.421-.417,2.8,2.8,0,0,0-2.448-4.549l-.129.016c.4-.319.9-.672,1.464-1.039ZM21.615,15.43c.2-.285.385-1.213,1.357-1.312a1.331,1.331,0,0,1,.962,2.367l-1.3,1.045-1.228.99q-.2-.1-.407-.191ZM18.6,8.382a2.444,2.444,0,0,1,2.386,2.961L20.7,12.688c0,.007,0,.014,0,.022l-1.1,5.209a6.227,6.227,0,0,0-1.991,0l-.009-.043c-.254-1.205-.527-2.5-1.381-6.537A2.44,2.44,0,0,1,18.6,8.382Zm-5.541,7.9a1.331,1.331,0,1,1,2.218-1.442l.305.593c.275,1.3.431,2.039.579,2.745l.032.149q-.207.088-.407.191a32.737,32.737,0,0,1-2.728-2.235ZM18.6,19.3a4.707,4.707,0,0,1,4.7,4.472H13.9A4.707,4.707,0,0,1,18.6,19.3ZM6.42,30.34H7.745L6.636,32.188ZM2.669,44.162a.646.646,0,0,1-.646.308h0a.648.648,0,0,1-.464-.975l5.224-8.706,0,0,2.869-4.78c.01-.016.02-.032.029-.048l1.6-2.662a.648.648,0,1,1,1.11.666l-.749,1.248-.024.039ZM13.551,28.875l.095-.158a2.112,2.112,0,1,0-3.622-2.174l-1.4,2.332H4.3a.623.623,0,0,1-.622-.622V25.862A.623.623,0,0,1,4.3,25.24h40.09a.623.623,0,0,1,.622.622v2.391a.623.623,0,0,1-.622.622H40.058l-1.4-2.332a2.112,2.112,0,1,0-3.622,2.174l.095.158ZM46.659,44.47a.682.682,0,0,1-.646-.308l-9.721-16.2A.648.648,0,1,1,37.4,27.3L41.9,34.784l0,.006L47.123,43.5a.648.648,0,0,1-.464.974Zm0,0" transform="translate(702.999 2489)" fill="#0074FF"></path>     <path id="Caminho_42870" data-name="Caminho 42870" d="M135.634,335.7v-2.424a1.956,1.956,0,1,0-3.912,0V335.7a1.956,1.956,0,1,0,3.912,0Zm-2.447,0v-2.424a.491.491,0,0,1,.983,0V335.7a.491.491,0,0,1-.983,0Zm0,0" transform="translate(584.141 2190.035)" fill="#ff9100"></path>     <path id="Caminho_42871" data-name="Caminho 42871" d="M184.38,416.777v-2.423a1.956,1.956,0,1,0-3.912,0v2.423a1.956,1.956,0,1,0,3.912,0Zm-2.447,0v-2.423a.491.491,0,1,1,.982,0v2.423a.491.491,0,1,1-.982,0Zm0,0" transform="translate(540.155 2116.875)" fill="#ff9100"></path>     <path id="Caminho_42872" data-name="Caminho 42872" d="M233.126,335.7v-2.424a1.956,1.956,0,1,0-3.912,0V335.7a1.956,1.956,0,1,0,3.912,0Zm-2.447,0v-2.424a.491.491,0,1,1,.982,0V335.7a.491.491,0,1,1-.982,0Zm0,0" transform="translate(496.17 2190.035)" fill="#ff9100"></path>     <path id="Caminho_42873" data-name="Caminho 42873" d="M281.87,416.777v-2.423a1.956,1.956,0,0,0-3.912,0v2.423a1.956,1.956,0,0,0,3.912,0Zm-2.447,0v-2.423a.491.491,0,1,1,.982,0v2.423a.491.491,0,1,1-.982,0Zm0,0" transform="translate(452.186 2116.875)" fill="#ff9100"></path>     <path id="Caminho_42874" data-name="Caminho 42874" d="M330.616,335.7v-2.424a1.956,1.956,0,1,0-3.912,0V335.7a1.956,1.956,0,0,0,3.912,0Zm-2.448,0v-2.424a.491.491,0,1,1,.983,0V335.7a.491.491,0,0,1-.983,0Zm0,0" transform="translate(408.201 2190.035)" fill="#ff9100"></path>   </g> </svg>
          <span>Minimercados</span>
         </li>

         <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50">   <g id="Outline" transform="translate(-5 -2)">     <g id="Grupo_9191" data-name="Grupo 9191" transform="translate(5 2)">       <path id="Caminho_42875" data-name="Caminho 42875" d="M46.667,53.333a3.333,3.333,0,1,0-3.333,3.333A3.333,3.333,0,0,0,46.667,53.333Zm-5,0A1.667,1.667,0,1,1,43.333,55,1.667,1.667,0,0,1,41.667,53.333Z" transform="translate(-10.833 -10)" fill="#ff9100"></path>       <path id="Caminho_42876" data-name="Caminho 42876" d="M53.1,52.816a.833.833,0,0,0-.938.712L51.439,58.8H38.833a.833.833,0,1,0,0,1.667H52.167a.833.833,0,0,0,.826-.721l.817-5.992a.833.833,0,0,0-.714-.938Z" transform="translate(-10.5 -10.468)" fill="#ff9100"></path>       <path id="Caminho_42877" data-name="Caminho 42877" d="M49.794,32.285A.833.833,0,0,0,49.166,32H45.25l1.4-7.344a.817.817,0,0,0,0-.295l.384-1.788,1.244,2.074-1,4.7a.833.833,0,0,0,.64.989.851.851,0,0,0,.176.018A.833.833,0,0,0,48.9,29.7l1.077-5.026a.828.828,0,0,0-.1-.6l-2.5-4.167a.833.833,0,0,0-1.529.25l-.685,3.179-3.194-1.277a.833.833,0,0,0-1.136.667l-.692,5.532-.556-.139-.423-5.348a.833.833,0,0,0-.217-.487l.167-2.146.792-.237,2.2,1.172a.833.833,0,1,0,.785-1.47l-2.5-1.333a.833.833,0,0,0-.632-.063l-1.667.5a.833.833,0,0,0-.592.732l-.1,1.288-.977-.977a.833.833,0,0,0-1.254.089l-1,1.333v-.833a2.5,2.5,0,0,0-2.5-2.5H30V17a2.5,2.5,0,0,0-2.5-2.5H23.333V10.558L29.72,6.3a.833.833,0,0,0,.231-1.156L28.1,2.371a.833.833,0,0,0-1.156-.231l-7.5,5a2.494,2.494,0,0,0-1.113,2.08V14.5H14.167a2.5,2.5,0,0,0-2.5,2.5v.833H10a2.5,2.5,0,0,0-2.5,2.5V22c0,.017.5,4.39.5,4.39a.833.833,0,0,0,.827.739.726.726,0,0,0,.1-.006.833.833,0,0,0,.733-.922l-.388-3.368h6.567a.833.833,0,0,0,0-1.667H9.167v-.833A.833.833,0,0,1,10,19.5H31.667a.833.833,0,0,1,.833.833v.833H19.167a.833.833,0,0,0,0,1.667h13.75l-.25.333a.833.833,0,0,0-.167.569l.25,3-.3-.852a.833.833,0,0,0-.514-.51l-2.469-.848a.833.833,0,0,0-1.058.517l-.451,1.311-.516-1.327a.833.833,0,0,0-.773-.532H23.333a.833.833,0,0,0-.782,1.122l.519,1.407c-.19-.012-.377-.029-.57-.029H14.167a9.124,9.124,0,0,0-5.054,1.522.834.834,0,1,0,.922,1.389,7.464,7.464,0,0,1,4.132-1.244H22.5a7.51,7.51,0,0,1,7.453,6.667H6.713a7.454,7.454,0,0,1,1.2-3.3.833.833,0,0,0-1.39-.917A9.13,9.13,0,0,0,5,36.166.833.833,0,0,0,5.833,37h.1a3.49,3.49,0,0,0,.851,1.573,4.013,4.013,0,0,0-.122.927,4.147,4.147,0,0,0,1.175,2.888A2.449,2.449,0,0,0,6.82,45.333H5.833A.833.833,0,0,0,5,46.166v1.667A4.172,4.172,0,0,0,9.167,52h2.5a.833.833,0,0,0,0-1.667h-2.5a2.5,2.5,0,0,1-2.5-2.5V47h13.1l.417.52a.833.833,0,0,0,1.3,0l3.083-3.853H27.5a.833.833,0,0,1,0,1.667H25.667a.833.833,0,0,0,0,1.667H30v.833a2.5,2.5,0,0,1-2.5,2.5H15A.833.833,0,0,0,15,52H27.5a4.172,4.172,0,0,0,4.167-4.167V46.166a.833.833,0,0,0-.833-.833h-.987a2.449,2.449,0,0,0-1.022-2.945A4.147,4.147,0,0,0,30,39.5a4.047,4.047,0,0,0-.1-.877A2.54,2.54,0,0,0,30.789,37h.044a.794.794,0,0,0,.153-.031A9.167,9.167,0,0,0,37.5,39.5c4.242,0,7.754-2.549,8.268-5.833h2.443l-1.1,8.09a.833.833,0,0,0,.714.937.739.739,0,0,0,.112.008.833.833,0,0,0,.826-.721l1.232-9.036A.833.833,0,0,0,49.794,32.285ZM20,9.22a.833.833,0,0,1,.371-.693l6.807-4.537L28.1,5.376,22.037,9.417a.833.833,0,0,0-.371.693V14.5H20Zm-6.667,8.613V17a.833.833,0,0,1,.833-.833H27.5a.833.833,0,0,1,.833.833v.833ZM39.11,29.72l1.684.417-.423,7.2a8.245,8.245,0,0,1-1.708.417ZM35.923,21.6l1.6,1.6.381,4.759a.73.73,0,0,0-.069.031.833.833,0,0,0-.333.624l-.511,9.186a8.456,8.456,0,0,1-1.667-.265L34.19,23.917ZM24.529,26.167H26.1l.75,1.933a9.1,9.1,0,0,0-1.886-.754Zm3.778,13.075a2.24,2.24,0,0,1,.026.258,2.5,2.5,0,0,1-2.5,2.5h-15a2.5,2.5,0,0,1-2.489-2.4l.077.039a3.548,3.548,0,0,0,3.157,0l1.341-.667a.923.923,0,0,1,.828,0l1.759.879a2.6,2.6,0,0,0,2.32,0l1.757-.883a.923.923,0,0,1,.828,0l1.759.879a2.6,2.6,0,0,0,2.32,0l1.759-.879a.923.923,0,0,1,.828,0,2.591,2.591,0,0,0,1.229.269ZM9.167,45.333a.833.833,0,1,1,0-1.667H17.1l1.333,1.667Zm11.667.333-1.6-2h3.2Zm7.894-8.225a.886.886,0,0,1-.095.044h-.019c-.011,0-.017.013-.028.017a.9.9,0,0,1-.759-.024,2.6,2.6,0,0,0-2.32,0l-1.757.882a.923.923,0,0,1-.828,0l-1.759-.879a2.6,2.6,0,0,0-2.32,0l-1.759.879a.923.923,0,0,1-.828,0L14.5,37.481a2.605,2.605,0,0,0-2.32,0l-1.34.667a1.872,1.872,0,0,1-1.667,0l-.639-.315A1.845,1.845,0,0,1,7.712,37H29.093a.909.909,0,0,1-.366.441ZM31.6,35.126a9.1,9.1,0,0,0-1.276-3.709l-1.117-3.574.5-1.469,1.3.447L33.3,33.264l.3,3.588A5.8,5.8,0,0,1,31.6,35.125Zm10.489,1.323.407-6.9a.833.833,0,0,0-.63-.858l-.093-.025.583-4.66,2.526,1.011L42.828,35.826a5.9,5.9,0,0,1-.736.623Z" transform="translate(-5 -2)" fill="#0074FF"></path>       <circle id="Elipse_378" data-name="Elipse 378" cx="1.5" cy="1.5" r="1.5" transform="translate(14 28)" fill="#0074FF"></circle>       <ellipse id="Elipse_379" data-name="Elipse 379" cy="1" ry="1" transform="translate(12 28)" fill="#0074FF"></ellipse>       <circle id="Elipse_380" data-name="Elipse 380" cx="0.5" cy="0.5" r="0.5" transform="translate(9 30)" fill="#0074FF"></circle>       <ellipse id="Elipse_381" data-name="Elipse 381" cy="0.5" ry="0.5" transform="translate(22 30)" fill="#0074FF"></ellipse>       <ellipse id="Elipse_382" data-name="Elipse 382" cx="1" cy="1.5" rx="1" ry="1.5" transform="translate(5 28)" fill="#0074FF"></ellipse>       <circle id="Elipse_383" data-name="Elipse 383" cx="1" cy="1" r="1" transform="translate(17 28)" fill="#0074FF"></circle>     </g>   </g> </svg>
          <span>Lanchonetes</span>
         </li>

         <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="55.652" height="50" viewBox="0 0 55.652 50">   <g id="pizzaria" transform="translate(0 -26)">     <g id="Grupo_9193" data-name="Grupo 9193" transform="translate(0 26)">       <g id="Grupo_9192" data-name="Grupo 9192" transform="translate(0 0)">         <path id="Caminho_42878" data-name="Caminho 42878" d="M55.651,40.119c0-.024,0-.047,0-.071s0-.025,0-.037-.006-.043-.01-.065,0-.029-.007-.043-.009-.035-.013-.052-.009-.036-.015-.054-.01-.026-.014-.039-.016-.042-.024-.063-.01-.022-.016-.032-.021-.044-.033-.065l0-.009-4.855-8.444V27.087A1.087,1.087,0,0,0,49.565,26H6.087A1.087,1.087,0,0,0,5,27.087v4.057L.145,39.588l0,.007c-.014.024-.026.05-.038.075l-.011.022c-.011.025-.02.05-.029.075,0,.009-.007.018-.01.027s-.013.045-.019.067-.007.025-.01.038-.007.038-.01.057-.006.034-.008.051,0,.033,0,.05,0,.039,0,.059c0,0,0,.009,0,.014v4.348a1.087,1.087,0,0,0,1.087,1.087H5V73.826H4.236a1.087,1.087,0,1,0,0,2.174H51.416a1.087,1.087,0,1,0,0-2.174h-.764V45.565h3.913a1.087,1.087,0,0,0,1.087-1.087V40.13S55.651,40.123,55.651,40.119Zm-2.965-1.076H28.913V32.522H48.936ZM7.174,28.174h41.3v2.174H7.174V28.174Zm-.458,4.348H26.739v6.522H2.966ZM2.174,43.391V41.217H26.739v2.174ZM37.609,73.826H7.174V45.565H9.658v1.087a1.087,1.087,0,1,0,2.174,0V45.565h2.484v1.087a1.087,1.087,0,1,0,2.174,0V45.565h2.484v1.087a1.087,1.087,0,1,0,2.174,0V45.565h2.485v1.087a1.087,1.087,0,1,0,2.174,0V45.565h2.484v1.087a1.087,1.087,0,1,0,2.174,0V45.565H32.95v1.087a1.087,1.087,0,1,0,2.174,0V45.565h2.485Zm10.87,0h-8.7v-8.7H40.87a1.087,1.087,0,1,0,0-2.174H39.783v-8.7h8.7V73.826Zm0-21.739h-8.7V45.565h8.7v6.522Zm5-8.7H28.913V41.217H53.478Z" transform="translate(0 -26)" fill="#0074FF"></path>         <path id="Caminho_42879" data-name="Caminho 42879" d="M1.114,466H1.088a1.087,1.087,0,0,0,0,2.174h.026a1.087,1.087,0,0,0,0-2.174Z" transform="translate(-0.001 -418.171)" fill="#0074FF"></path>         <path id="Caminho_42880" data-name="Caminho 42880" d="M492.878,466h-.026a1.087,1.087,0,0,0,0,2.174h.026a1.087,1.087,0,0,0,0-2.174Z" transform="translate(-438.312 -418.175)" fill="#0074FF"></path>         <path id="Caminho_42881" data-name="Caminho 42881" d="M136.347,255.466v0l-.843-3.146a1.087,1.087,0,0,0-1.331-.768,17.9,17.9,0,0,0-12.622,12.622,1.087,1.087,0,0,0,.768,1.331l3.15.844h.007l13.037,3.494a1.086,1.086,0,0,0,.281.037h.012a1.088,1.088,0,0,0,1.019-1.437Zm-11.326,8.509-1.054-.283a15.736,15.736,0,0,1,9.727-9.727l.283,1.054A14.642,14.642,0,0,0,125.021,263.975Zm7.245,1.941-.078-2.963a1.087,1.087,0,1,0-2.173.057l.061,2.319-2.949-.79a12.464,12.464,0,0,1,7.415-7.414l1.074,4.01-1.443,1.288a1.087,1.087,0,1,0,1.448,1.621l.625-.558,1.009,3.766Z" transform="translate(-108.304 -226.999)" fill="#ff9100"></path>       </g>     </g>   </g> </svg>
          <span>Pizzarias</span>
         </li>

         <li>
            <svg id="car-parts_3_" data-name="car-parts (3)" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">   <g id="Grupo_9195" data-name="Grupo 9195">     <g id="Grupo_9194" data-name="Grupo 9194">       <path id="Caminho_42882" data-name="Caminho 42882" d="M47.581,0H17.291A2.418,2.418,0,0,0,15,1.654l-.254.765H12.1A2.422,2.422,0,0,0,9.677,4.839V5.883a5.634,5.634,0,0,0-2.112,9.638,8.909,8.909,0,0,0-3.4,5.652A5.641,5.641,0,0,0,5.645,32.258V37.1H9.278a12.738,12.738,0,0,0,1.382,3.325L8.089,42.994l4.562,4.562,2.573-2.572a12.738,12.738,0,0,0,3.325,1.382V50H25V46.367a12.738,12.738,0,0,0,3.325-1.382L30.9,47.556l4.562-4.562-2.572-2.573A12.738,12.738,0,0,0,34.27,37.1H37.9V30.645H34.27a12.738,12.738,0,0,0-1.382-3.325L35.207,25h9.954V12.9h2.419A2.422,2.422,0,0,0,50,10.484V2.419A2.422,2.422,0,0,0,47.581,0ZM36.29,1.613a2.419,2.419,0,1,1-2.419,2.419A2.422,2.422,0,0,1,36.29,1.613Zm-5.645,0h2.44a3.991,3.991,0,0,0-.827,2.419A4.037,4.037,0,0,0,36.29,8.065a3.991,3.991,0,0,0,2.419-.827V12.9H30.645Zm-6.6,0a2.405,2.405,0,0,1-4.542,0ZM7.258,11.29a4.04,4.04,0,1,1,1.8,3.352L9.032,14.6l-.023.013A4.031,4.031,0,0,1,7.258,11.29Zm1.763,5.165a5.7,5.7,0,0,0,.656.243v5.973a5.657,5.657,0,0,0-3.851-1.69A7.313,7.313,0,0,1,9.021,16.456ZM5.645,30.645a4.032,4.032,0,1,1,3.121-6.576l-.678.678L10.66,27.32a12.738,12.738,0,0,0-1.382,3.325H5.645Zm27.419-5.783L30.827,27.1l.364.549a11.162,11.162,0,0,1,1.647,3.964l.131.646H36.29v3.226H32.969l-.131.646a11.162,11.162,0,0,1-1.647,3.964l-.364.549L33.18,43,30.9,45.277l-2.352-2.352L28,43.288a11.162,11.162,0,0,1-3.964,1.647l-.646.131v3.321H20.161V45.066l-.646-.131a11.162,11.162,0,0,1-3.964-1.647L15,42.924,12.65,45.277,10.369,43l2.352-2.352-.364-.549A11.162,11.162,0,0,1,10.71,36.13l-.131-.646H7.258V32.258h3.321l.131-.646a11.162,11.162,0,0,1,1.647-3.964l.364-.549-2.352-2.352,2.281-2.281L15,24.818l.549-.364a11.162,11.162,0,0,1,3.964-1.647l.646-.131V19.355h3.226v3.321l.646.131A11.162,11.162,0,0,1,28,24.454l.549.364L30.9,22.465l2.166,2.167Zm10.484-1.475H34.1l-3.2-3.2-2.573,2.572A12.738,12.738,0,0,0,25,21.374V17.742H18.548v3.633a12.738,12.738,0,0,0-3.325,1.382l-2.573-2.572-1.36,1.36v-4.61a5.645,5.645,0,0,0,0-11.29V4.839a.807.807,0,0,1,.806-.806H15.9l.622-1.868a.806.806,0,0,1,.765-.552h.532a4.032,4.032,0,0,0,7.9,0h3.307V10.5a3.991,3.991,0,0,0-2.419-.827,4.032,4.032,0,1,0,3.951,4.839H43.548ZM29.032,13.71a2.419,2.419,0,1,1-2.419-2.419A2.422,2.422,0,0,1,29.032,13.71Zm19.355-3.226a.807.807,0,0,1-.806.806H45.161V9.677H43.548V12.9H40.323V4.032A3.991,3.991,0,0,0,39.5,1.613h4.053V8.065h1.613V1.613h2.419a.807.807,0,0,1,.806.806Z" fill="#0074FF"></path>       <path id="Caminho_42883" data-name="Caminho 42883" d="M34.419,240a2.419,2.419,0,1,0,2.419,2.419A2.422,2.422,0,0,0,34.419,240Zm0,3.226a.806.806,0,1,1,.806-.806A.807.807,0,0,1,34.419,243.226Z" transform="translate(-28.774 -215.806)" fill="#ff9100"></path>       <path id="Caminho_42884" data-name="Caminho 42884" d="M90.419,92.839A2.419,2.419,0,1,0,88,90.419,2.422,2.422,0,0,0,90.419,92.839Zm0-3.226a.806.806,0,1,1-.806.806A.807.807,0,0,1,90.419,89.613Z" transform="translate(-79.129 -79.129)" fill="#ff9100"></path>       <path id="Caminho_42885" data-name="Caminho 42885" d="M144.065,256a8.065,8.065,0,1,0,4.307,14.883l-.863-1.362a6.458,6.458,0,1,1,1.134-.91l1.145,1.135A8.064,8.064,0,0,0,144.065,256Z" transform="translate(-122.29 -230.194)" fill="#ff9100"></path>       <path id="Caminho_42886" data-name="Caminho 42886" d="M172.839,288a4.839,4.839,0,1,0,4.839,4.839A4.844,4.844,0,0,0,172.839,288Zm0,8.064a3.226,3.226,0,1,1,3.226-3.226A3.229,3.229,0,0,1,172.839,296.064Z" transform="translate(-151.065 -258.968)" fill="#ff9100"></path>     </g>   </g> </svg>
          <span>Autopeças</span>
         </li>

         <li>
            <svg id="support_2_" data-name="support (2)" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">   <path id="Caminho_42887" data-name="Caminho 42887" d="M64,240h1.613v1.613H64Zm0,0" transform="translate(-57.548 -215.806)" fill="#0074FF"></path>   <path id="Caminho_42888" data-name="Caminho 42888" d="M96,240h1.613v1.613H96Zm0,0" transform="translate(-86.323 -215.806)" fill="#0074FF"></path>   <path id="Caminho_42889" data-name="Caminho 42889" d="M128,240h1.613v1.613H128Zm0,0" transform="translate(-115.097 -215.806)" fill="#0074FF"></path>   <path id="Caminho_42890" data-name="Caminho 42890" d="M47.652,36.963l1.09-1.907-.6-.6A25,25,0,1,0,3.226,37.278v9.5h9.5a24.979,24.979,0,0,0,21.734,1.367l.6.6,1.907-1.09c.183.084.367.161.552.231L38.094,50h4.458l.579-2.117c.185-.069.369-.147.552-.231l1.907,1.09,3.152-3.151-1.09-1.907c.084-.183.161-.367.231-.552L50,42.552V38.094l-2.117-.579c-.069-.185-.147-.369-.231-.552ZM1.613,25A23.387,23.387,0,1,1,46.9,33.217L45.591,31.9l-1.907,1.09c-.183-.084-.367-.161-.552-.231l-.579-2.118H40.323V20.968H35.484V12.9H33.871V5.214L30.89,3.226H29.032V12.9H27.419v8.065H24.194V15.732a2.52,2.52,0,0,1,.951-1.919,6.243,6.243,0,0,0,2.275-4.807A6.338,6.338,0,0,0,23.727,3.3l-1.146-.532V8.439L20.968,9.514,19.355,8.439V2.769L18.209,3.3a6.338,6.338,0,0,0-3.693,5.705,6.243,6.243,0,0,0,2.275,4.807,2.52,2.52,0,0,1,.951,1.919v5.236H3.226v12.55A23.437,23.437,0,0,1,1.613,25ZM17.824,12.573a4.6,4.6,0,0,1-.082-7.064V9.3l3.226,2.151L24.194,9.3V5.509a4.6,4.6,0,0,1-.082,7.064,4.125,4.125,0,0,0-1.531,3.159v5.236H19.355V15.732A4.125,4.125,0,0,0,17.824,12.573ZM38.71,22.581v4.839H4.839V22.581ZM32.258,12.9H30.645V5l1.613,1.075Zm1.613,1.613v1.613H29.032V14.516Zm-4.839,3.226h4.839v3.226H29.032ZM4.839,29.032H38.71v1.613h-.616l-.579,2.117c-.185.069-.369.147-.552.231L35.055,31.9l-2.8,2.8V30.645H25.807V37.1h6.452V35.676l.735,1.287c-.084.183-.161.367-.231.552l-2.117.578v4.458l2.117.579c.069.185.147.369.231.552l-.845,1.479H4.839Zm25.806,3.226v3.226H27.419V32.258ZM25,48.387a23.427,23.427,0,0,1-8.518-1.613H33.088l.129.129A23.256,23.256,0,0,1,25,48.387Zm23.387-7.068-1.768.485-.13.423a6.416,6.416,0,0,1-.461,1.1l-.208.391.911,1.6-1.409,1.41-1.6-.911-.391.208a6.326,6.326,0,0,1-1.1.462l-.423.13-.486,1.77H39.325l-.485-1.768-.423-.13a6.416,6.416,0,0,1-1.1-.461l-.391-.208-1.6.911-1.41-1.409.911-1.6-.208-.391a6.354,6.354,0,0,1-.461-1.1l-.13-.423-1.769-.486V39.325l1.768-.485.13-.423a6.417,6.417,0,0,1,.461-1.1l.208-.391-.911-1.6,1.409-1.41,1.6.911.391-.208a6.355,6.355,0,0,1,1.1-.461l.423-.13.486-1.769H41.32l.485,1.768.423.13a6.416,6.416,0,0,1,1.1.461l.391.208,1.6-.911,1.41,1.409-.911,1.6.208.391a6.355,6.355,0,0,1,.461,1.1l.13.423,1.769.486Zm0,0" transform="translate(0 0)" fill="#0074FF"></path>   <path id="Caminho_42891" data-name="Caminho 42891" d="M356.839,352a4.839,4.839,0,1,0,4.839,4.839A4.843,4.843,0,0,0,356.839,352Zm0,8.065a3.226,3.226,0,1,1,3.226-3.226A3.229,3.229,0,0,1,356.839,360.065Zm0,0" transform="translate(-316.516 -316.516)" fill="#ff9100"></path>   <path id="Caminho_42892" data-name="Caminho 42892" d="M64,313.677h9.677V304H64Zm1.613-8.065h6.452v6.452H65.613Zm0,0" transform="translate(-57.548 -273.355)" fill="#ff9100"></path>   <path id="Caminho_42893" data-name="Caminho 42893" d="M64,416h9.677v1.613H64Zm0,0" transform="translate(-57.548 -374.064)" fill="#ff9100"></path>   <path id="Caminho_42894" data-name="Caminho 42894" d="M182.452,304H176v6.452h6.452Zm-1.613,4.839h-3.226v-3.226h3.226Zm0,0" transform="translate(-158.258 -273.355)" fill="#0074FF"></path>   <path id="Caminho_42895" data-name="Caminho 42895" d="M176,384h11.29v1.613H176Zm0,0" transform="translate(-158.258 -345.29)" fill="#ff9100"></path>   <path id="Caminho_42896" data-name="Caminho 42896" d="M176,416h11.29v1.613H176Zm0,0" transform="translate(-158.258 -374.064)" fill="#ff9100"></path> </svg>
          <span>Informática</span>
         </li>

         <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">   <g id="shoe-fashion-store-shop-shopping-commerce" transform="translate(-2 -2)">     <rect id="Retângulo_4774" data-name="Retângulo 4774" width="1" height="3" transform="translate(9 40)" fill="#0074FF"></rect>     <path id="Caminho_42897" data-name="Caminho 42897" d="M52,12.833V6.167a.833.833,0,0,0-.833-.833V3.667A1.672,1.672,0,0,0,49.5,2H4.5A1.672,1.672,0,0,0,2.833,3.667V5.333A.833.833,0,0,0,2,6.167v6.667a.833.833,0,0,0,.833.833V50.333H2V52H52V50.333h-.833V13.667A.833.833,0,0,0,52,12.833ZM4.5,3.667h45V5.333H4.5ZM16.167,50.333H7.833V33.667h8.333Zm0-18.333H7.833v-.833h8.333Zm0-2.5H7.833v-.833h8.333ZM49.5,50.333H17.833v-22.5A.833.833,0,0,0,17,27H7a.833.833,0,0,0-.833.833v22.5H4.5V21.142A4.1,4.1,0,0,0,7,22a4.162,4.162,0,0,0,3.333-1.692,4.13,4.13,0,0,0,6.667,0,4.13,4.13,0,0,0,6.667,0,4.13,4.13,0,0,0,6.667,0,4.13,4.13,0,0,0,6.667,0,4.13,4.13,0,0,0,6.667,0A4.162,4.162,0,0,0,47,22a4.1,4.1,0,0,0,2.5-.858Zm-45-32.5V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm6.667,0V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm6.667,0V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm6.667,0V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm6.667,0V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm6.667,0V13.667h5v4.167a2.5,2.5,0,0,1-5,0Zm11.667,0a2.5,2.5,0,0,1-5,0V13.667h5ZM50.333,12H3.667V7H50.333Z" transform="translate(0 0)" fill="#0074FF"></path>     <path id="Caminho_42898" data-name="Caminho 42898" d="M50.5,28H23.833a.833.833,0,0,0-.833.833V52.167a.833.833,0,0,0,.833.833H50.5a.833.833,0,0,0,.833-.833V28.833A.833.833,0,0,0,50.5,28Zm-.833,23.333h-25V29.667h25Z" transform="translate(-3.5 -4.333)" fill="#0074FF"></path>     <path id="Caminho_42899" data-name="Caminho 42899" d="M48.5,31H37.667a.833.833,0,0,0-.833.833V33.5H36a.833.833,0,0,0-.833.833v5a.833.833,0,0,0,.833.833h.833V41h-5A5.84,5.84,0,0,0,26,46.833v3.333a.833.833,0,0,0,.833.833H48.5a.833.833,0,0,0,.833-.833V31.833A.833.833,0,0,0,48.5,31ZM36.833,35.167h5.833V38.5H36.833ZM47.667,49.333h-20V48.5h20Zm0-2.5h-20a4.167,4.167,0,0,1,4.167-4.167v1.667H33.5V42.667h.833v1.667H36V42.667h1.667a.833.833,0,0,0,.833-.833V40.167h5a.833.833,0,0,0,.833-.833v-5A.833.833,0,0,0,43.5,33.5h-5v-.833h9.167Z" transform="translate(-4 -4.833)" fill="#ff9100"></path>     <circle id="Elipse_384" data-name="Elipse 384" cx="1" cy="1" r="1" transform="translate(36 31)" fill="#0074FF"></circle>   </g> </svg>
          <span>Calçados</span>
         </li>
      </ul>

      <h3>
       Ferramentas adaptadas <strong> para diferentes segmentos de negócios</strong>
      </h3>
     </S.Main3>

     <S.Banner>
      <h2>
      Venda por Pedidos
      </h2>

      <h3>
      Veja como funciona a emissão de NF 4.0 Danfe:
      </h3>

      <ul>
        <li>
          <div className="number">
1
          </div>

          <span>
            <strong>Registrar</strong> <br /> a venda
          </span>
        </li>

        <li>
          <div className="number">
2
          </div>

          <span>
            <strong>Conferir</strong> <br />
            os dados da nota
          </span>
        </li>

        <li>
          <div className="number">
3
          </div>

          <span>
            <strong>Emitir</strong> <br />
            nota fiscal 4.0
          </span>
        </li>

        <li>
          <div className="number">
4
          </div>

          <span>
            <strong>Imprimir</strong> <br />
            o Danfe
          </span>
        </li>
      </ul>
     </S.Banner>

     <S.Main4 ref={section1Ref}>
      <div  className="left">
       <h3>
       Pronto para <strong> emissão da Nota 4.0</strong>
       </h3>

       <p>
  O <strong>Blue Lite</strong> está totalmente alinhado à legislação fiscal brasileira e ao padrão de emissão de notas fiscais eletrônicas 4.0, implementado em 2018. Com uma tecnologia avançada e moderna, o sistema realiza <strong>atualizações rápidas</strong>, garantindo que você continue emitindo suas notas mesmo diante de alterações nas leis fiscais.  
  Assim, sua empresa permanece em conformidade sempre.
</p>


      </div>

      <div className="right">
       <img src={Image2} alt="" />
      </div>
     </S.Main4>

     <S.Main4 ref={section2Ref} style={{ backgroundColor: '#e7e7e7'}}>
      <div  className="left">
      <img src={Image3} alt="" />
      </div>

      <div className="right">
      
       <h3>
      <strong> Emissor de DANFE </strong> muito fácil de usar
       </h3>

       <p>
  Desenvolvido para oferecer praticidade e eficiência, o <strong>Blue Lite</strong> é um ERP disponível tanto online quanto offline, com funcionalidades como a emissão de notas fiscais. O sistema permite imprimir a DANFE de forma rápida, com apenas alguns cliques.  
  Além disso, seus <strong>cadastros rápidos</strong> tornam o processo de emissão ainda mais ágil, garantindo eficiência para o seu negócio.
</p>



      </div>
     </S.Main4>

     <S.Main4 ref={section3Ref}>
      <div  className="left">
       <h3>
       Compatível com <strong> certificados A1 e A3</strong>
       </h3>

       <p>
  Não se preocupe, o <strong>Blue Lite</strong> é totalmente compatível com Certificados A1 e A3 (em formato de cartão, arquivo ou token).  
  Além disso, o nosso ERP emissor de notas fiscais possui <strong>conexão direta com a Secretaria da Fazenda (SEFAZ)</strong>, utilizando protocolos modernos e seguros, permitindo a emissão de notas 4.0 e cupons fiscais de forma simples e descomplicada.
</p>


      </div>

      <div className="right">
       <img src={Image4} alt="" />
      </div>
     </S.Main4>

     <S.Banner style={{ backgroundColor: '#00ffff'}}>
      <h2>
      Venda em Balcão
      </h2>

      <h3>
      Veja como funciona a emissão de cupons:
      </h3>

      <ul>
        <li>
          <div className="number">
1
          </div>

          <span>
            <strong>Adicionar</strong> <br /> 
            os produtos
          </span>
        </li>

        <li>
          <div className="number">
2
          </div>

          <span>
            <strong>Inserir</strong> <br />
            Forma de pagamento
           
          </span>
        </li>

        <li>
          <div className="number">
3
          </div>

          <span>
            <strong> Finalizar</strong> <br />
           
a venda
          </span>
        </li>

        <li>
          <div className="number">
4
          </div>

          <span>
            <strong> Imprimir</strong> <br />
           
            o copum
          </span>
        </li>
      </ul>
     </S.Banner>

     <S.Main4 ref={section4Ref}>
      <div  className="left">
      <img src={Image5} alt="" />
      </div>

      <div className="right">
      
       <h3>
       <strong>Emita cupons fiscais (NFC-e), </strong> mesmo offline
       </h3>

       <p>
  Além de todas as funcionalidades que você já conhece, o <strong>Blue Lite</strong> também é um sistema ideal para emitir cupons fiscais. Com ele, você pode gerar e imprimir cupons diretamente do PDV, com apenas um clique. E o melhor: <strong>NÃO É NECESSÁRIO TER INTERNET!</strong>  
  Esqueça o constrangimento de enfrentar filas e não conseguir entregar o cupom fiscal por problemas como “o sistema caiu” ou “estamos sem sistema”. Com o <strong>Blue Lite</strong>, isso não acontece.  
  O sistema emite seu cupom fiscal em contingência e realiza a autorização automática com a Secretaria da Fazenda, garantindo vendas sem interrupções e clientes ainda mais satisfeitos!
</p>

      </div>
     </S.Main4>

     <S.Main4 ref={section2Ref} style={{ backgroundColor: '#e7e7e7'}}>
      <div  className="left">
      <img src={Image6} alt="" />
      </div>

      <div className="right">
      
       <h3>
       Emissor de <strong> cupom SAT CF-e</strong>
       </h3>

       <p>
  Para empresas localizadas no estado de São Paulo, a legislação exige a emissão do Cupom Fiscal Eletrônico (CF-e) através do Sistema Autenticador e Transmissor (SAT). Com o <strong>Blue Lite</strong>, você pode emitir o CF-e SAT de forma simples, pois o software se comunica diretamente com o aparelho SAT da sua empresa.  
  Isso torna a emissão gratuita de cupons fiscais em São Paulo <strong>rápida e segura</strong>, facilitando o cumprimento das obrigações fiscais sem complicações.
</p>




      </div>
     </S.Main4>

     <S.Main4 ref={section3Ref}>
      <div  className="left">
       <h3>
      <strong> Gestão Empresarial </strong> de ponta a ponta
       </h3>

       <p>
  Além de emitir notas e cupons, o <strong>Blue Lite</strong> oferece uma ampla variedade de recursos gratuitos para que você possa gerenciar sua empresa de forma completa. Com ele, é possível controlar o financeiro com contas a pagar e receber, gerenciar o estoque de forma automática, cadastrar vendas, clientes, produtos e muito mais!  
  Tudo isso em um só lugar, para simplificar a administração do seu negócio.
</p>



      </div>

      <div className="right">
       <img src={Image7} alt="" />
      </div>
     </S.Main4>
     <Footer/>
    </S.Container>
  )
}