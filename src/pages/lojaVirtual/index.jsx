import * as S from "./style";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

import ImageLoja from "./assets/solicite-orcamento-loja-online.png";
import Image1 from "./assets/loja-virtual-dentro-do-sige-lite.png";
import ImageErp from "./assets/erp-tabelas-de-preco.svg";
import ImageBank from "./assets/BackPayment.png";
import BackP from "./assets/backPayment.svg";
import BackLoja from "./assets/backLoja.svg";


export function LojaVirtual() {
  const [selected, SetSelected] = useState('');
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

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
           A nossa Loja Virtual já vem <br />
           <strong>
           conectada com o sistema <br />
           de gestão!
           </strong>
          </h2>

          <span>
          Assim é mais fácil gerir <strong> vendas, entregas e financeiro.</strong>
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
       <h3>Ferramentas completas para você <strong> ter sua loja online.</strong></h3>

       <div className="cards">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44.769" height="40" viewBox="0 0 44.769 40">   <g id="delivery-truck_1_" data-name="delivery-truck (1)" transform="translate(0 -27.271)">     <g id="Grupo_8184" data-name="Grupo 8184" transform="translate(5.246 32.417)">       <path id="Caminho_39446" data-name="Caminho 39446" d="M98.646,108.35h-.026v-5.09a.8.8,0,0,0-.063-.327l-3.17-8.385a.874.874,0,0,0-.818-.565H89.4V88.5a2.384,2.384,0,0,0-2.381-2.382H71.609a9.369,9.369,0,0,1,.677,1.749H87.015a.634.634,0,0,1,.632.634V108.35h-25V98.806a9.28,9.28,0,0,1-1.749-.456v10h-.026a.874.874,0,0,0-.874.874V114.6a.874.874,0,0,0,.874.874h4.058a4.533,4.533,0,1,0,8.871,0H86.674a4.533,4.533,0,1,0,8.871,0h3.1a.874.874,0,0,0,.874-.874v-5.378a.874.874,0,0,0-.874-.874ZM89.4,95.732h4.568l2.515,6.654H89.4Zm0,8.4H96.87v4.216H89.4ZM69.365,119.225a2.806,2.806,0,1,1,2.784-2.806A2.8,2.8,0,0,1,69.365,119.225Zm21.745,0a2.806,2.806,0,1,1,2.784-2.806A2.8,2.8,0,0,1,91.11,119.225Zm6.661-5.5H94.765a4.516,4.516,0,0,0-7.311,0H73.02a4.516,4.516,0,0,0-7.311,0H61.746V110.1H97.771Z" transform="translate(-59.997 -86.12)" fill="#ff9100"></path>     </g>     <g id="Grupo_8185" data-name="Grupo 8185" transform="translate(0 27.271)">       <ellipse id="Elipse_344" data-name="Elipse 344" cx="9.374" cy="9.411" rx="9.374" ry="9.411" transform="translate(0 0)" fill="#0074FF"></ellipse>       <path id="Caminho_39447" data-name="Caminho 39447" d="M99.713,102.851H98.082a.874.874,0,0,1-.874-.874V99.247a.874.874,0,0,1,1.749,0V101.1h.756a.874.874,0,1,1,0,1.749Z" transform="translate(-88.708 -92.156)" fill="#ffd4c5"></path>     </g>   </g> </svg>
          <span>
          Gestão <strong> Logística </strong> <br />integrada
          </span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="47.472" height="40" viewBox="0 0 47.472 40">   <g id="window_2_" data-name="window (2)" transform="translate(0 -40.293)">     <g id="Grupo_8190" data-name="Grupo 8190" transform="translate(0 40.293)">       <g id="Grupo_8186" data-name="Grupo 8186">         <path id="Caminho_39448" data-name="Caminho 39448" d="M242.2,86.982h-1.1a.927.927,0,1,0,0,1.854h1.1a.927.927,0,1,0,0-1.854Z" transform="translate(-217.903 -82.653)" fill="#ff9100"></path>         <path id="Caminho_39449" data-name="Caminho 39449" d="M297.139,86.982h-1.1a.927.927,0,1,0,0,1.854h1.1a.927.927,0,1,0,0-1.854Z" transform="translate(-267.749 -82.653)" fill="#ff9100"></path>         <path id="Caminho_39450" data-name="Caminho 39450" d="M352.079,86.982h-1.1a.927.927,0,1,0,0,1.854h1.1a.927.927,0,1,0,0-1.854Z" transform="translate(-317.595 -82.653)" fill="#ff9100"></path>         <path id="Caminho_39451" data-name="Caminho 39451" d="M63.05,86.982H55.1a.927.927,0,1,0,0,1.854H63.05a.927.927,0,0,0,0-1.854Z" transform="translate(-49.151 -82.653)" fill="#ff9100"></path>         <path id="Caminho_39452" data-name="Caminho 39452" d="M72.648,194.115A3.885,3.885,0,0,0,68.772,198v.292H66.3a.927.927,0,0,0-.927.927v10.53a3.163,3.163,0,0,0,3.159,3.159h8.252a3.163,3.163,0,0,0,3.159-3.159V199.22a.927.927,0,0,0-.927-.927H76.523V198A3.885,3.885,0,0,0,72.648,194.115ZM70.627,198a2.021,2.021,0,1,1,4.042,0v.292H70.627Zm7.463,2.146v9.6a1.306,1.306,0,0,1-1.3,1.3H68.532a1.306,1.306,0,0,1-1.3-1.3v-9.6h1.545V202.1a.927.927,0,1,0,1.854,0v-1.954h4.042V202.1a.927.927,0,1,0,1.854,0v-1.954Z" transform="translate(-59.312 -179.853)" fill="#ff9100"></path>         <path id="Caminho_39453" data-name="Caminho 39453" d="M34.667,77.385H3.117a1.261,1.261,0,0,1-1.262-1.256V50.805h35.7v8.83H39.41V43.4a3.117,3.117,0,0,0-3.117-3.11H3.117A3.117,3.117,0,0,0,0,43.4V76.129a3.117,3.117,0,0,0,3.117,3.11h34.5a15.234,15.234,0,0,1-2.953-1.854ZM1.854,43.4a1.26,1.26,0,0,1,1.262-1.256H36.293A1.261,1.261,0,0,1,37.555,43.4v5.548H1.854Z" transform="translate(0 -40.293)" fill="#ff9100"></path>       </g>       <g id="Grupo_8189" data-name="Grupo 8189" transform="translate(29.493 18.415)">         <g id="Grupo_8187" data-name="Grupo 8187" transform="translate(0 0)">           <path id="Caminho_39454" data-name="Caminho 39454" d="M333.666,242.191a5.781,5.781,0,0,1-5.224-3.288h-2.714a5.8,5.8,0,0,1-7.632,2.767v9.5c0,6.948,8.989,9.319,8.989,9.319s8.989-2.371,8.989-9.319v-9.5A5.789,5.789,0,0,1,333.666,242.191Z" transform="translate(-318.095 -238.903)" fill="#0074FF"></path>         </g>         <g id="Grupo_8188" data-name="Grupo 8188" transform="translate(6.232 7.981)">           <path id="Caminho_39455" data-name="Caminho 39455" d="M387.789,330.52a.927.927,0,0,1-.653-.269l-1.554-1.544a.927.927,0,1,1,1.307-1.315l.84.835,2.459-2.913a.927.927,0,1,1,1.417,1.2l-3.108,3.681a.928.928,0,0,1-.668.328Z" transform="translate(-385.308 -324.985)" fill="#ffd4c5"></path>         </g>       </g>     </g>   </g> </svg>
          <span>
          <strong>Configuração </strong> <br />super fácil
          </span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31.423" height="40" viewBox="0 0 31.423 40">   <g id="online-shopping_2_" data-name="online-shopping (2)" transform="translate(-54.893)">     <g id="Grupo_8192" data-name="Grupo 8192" transform="translate(55.802 6.362)">       <g id="Grupo_8191" data-name="Grupo 8191" transform="translate(0)">         <circle id="Elipse_345" data-name="Elipse 345" cx="8.117" cy="8.117" r="8.117" transform="translate(0 11.478) rotate(-45)" fill="#0074FF"></circle>       </g>       <path id="Caminho_39456" data-name="Caminho 39456" d="M178.737,165.358l-.278-.1v-2.068a.9.9,0,0,1,.41.291.781.781,0,0,0,1.279-.9,2.628,2.628,0,0,0-1.689-1.009V161.5a.781.781,0,1,0-1.562,0v.134q-.13.031-.264.071a2.443,2.443,0,0,0-1.666,2.142,2.279,2.279,0,0,0,1.389,2.271c.121.057.306.135.541.227v2.514a1.65,1.65,0,0,1-.754-.491.781.781,0,0,0-1.217.98,3.4,3.4,0,0,0,1.971,1.128v.031a.781.781,0,0,0,1.562.027,2.563,2.563,0,0,0,2.329-2.155A2.894,2.894,0,0,0,178.737,165.358Zm-2.212-1.4a.925.925,0,0,1,.372-.669v1.343A.694.694,0,0,1,176.525,163.961Zm2.712,4.219a.935.935,0,0,1-.778.76v-2A1.281,1.281,0,0,1,179.237,168.179Z" transform="translate(-166.298 -154.523)" fill="#ffd4c5"></path>     </g>     <g id="Grupo_8193" data-name="Grupo 8193" transform="translate(54.893 0)">       <path id="Caminho_39457" data-name="Caminho 39457" d="M198.655,452.084h-1.042a.781.781,0,1,0,0,1.563h1.042a.781.781,0,1,0,0-1.562Z" transform="translate(-185.743 -416.765)" fill="#ff9100"></path>       <path id="Caminho_39458" data-name="Caminho 39458" d="M85.535,25.108H82.743v-.492a3.876,3.876,0,0,0-3.068-3.79V3.758A3.769,3.769,0,0,0,75.9,0H58.665a3.769,3.769,0,0,0-3.772,3.758V36.235A3.769,3.769,0,0,0,58.658,40H83.2a3.116,3.116,0,0,0,3.113-3.113v-11a.781.781,0,0,0-.781-.781Zm-4.354-.492v.492h-4.6v-.492a2.3,2.3,0,1,1,4.6,0Zm-8.928.492a.781.781,0,0,0-.781.781V32.2H56.456V6.605H78.113V20.821a3.875,3.875,0,0,0-3.09,3.794v.492ZM58.665,1.563H75.9a2.205,2.205,0,0,1,2.21,2.2V5.043H56.456V3.758a2.205,2.205,0,0,1,2.21-2.2Zm-2.21,34.672V33.763H71.472v3.124a3.094,3.094,0,0,0,.414,1.55H58.658A2.205,2.205,0,0,1,56.456,36.235Zm28.3.652a1.552,1.552,0,0,1-1.55,1.55H74.584a1.552,1.552,0,0,1-1.55-1.55V26.67h1.988V28.9a.781.781,0,0,0,1.563,0V26.67h4.6V28.9a.781.781,0,0,0,1.563,0V26.67h2.01V36.887Z" transform="translate(-54.893 0)" fill="#ff9100"></path>     </g>   </g> </svg>
          <span>
          Plataformas de <br /> <strong> pagamento</strong>
          </span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42.643" height="40" viewBox="0 0 42.643 40">   <g id="boxes_5_" data-name="boxes (5)" transform="translate(0 -15.866)">     <g id="Grupo_8196" data-name="Grupo 8196" transform="translate(6.194 28.257)">       <path id="Caminho_39459" data-name="Caminho 39459" d="M197.374,164.64h9.67v7.1h-9.67Z" transform="translate(-187.13 -164.64)" fill="#0074FF"></path>       <g id="Grupo_8194" data-name="Grupo 8194" transform="translate(0 19.167)">         <path id="Caminho_39460" data-name="Caminho 39460" d="M74.374,394.774h9.67v7.386h-9.67Z" transform="translate(-74.374 -394.774)" fill="#0074FF"></path>       </g>       <g id="Grupo_8195" data-name="Grupo 8195" transform="translate(20.489 19.167)">         <path id="Caminho_39461" data-name="Caminho 39461" d="M320.374,394.774h9.67v7.395h-9.67Z" transform="translate(-320.374 -394.774)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8197" data-name="Grupo 8197" transform="translate(0 15.866)">       <path id="Caminho_39462" data-name="Caminho 39462" d="M75.3,286.774a.833.833,0,0,0-.833.833v1.047H66.526v-1.047a.833.833,0,0,0-1.666,0v1.88a.833.833,0,0,0,.833.833H75.3a.833.833,0,0,0,.833-.833v-1.88A.833.833,0,0,0,75.3,286.774Z" transform="translate(-59.458 -264.211)" fill="#ff9100"></path>       <path id="Caminho_39463" data-name="Caminho 39463" d="M40.2,35.033h-7.93a2.436,2.436,0,0,0,.127-.778V18.31a2.447,2.447,0,0,0-2.444-2.444H12.688a2.447,2.447,0,0,0-2.444,2.444V34.255a2.433,2.433,0,0,0,.127.778H2.444A2.447,2.447,0,0,0,0,37.477V53.422a2.447,2.447,0,0,0,2.444,2.444H19.71a2.434,2.434,0,0,0,1.611-.608,2.428,2.428,0,0,0,1.609.608H40.2a2.447,2.447,0,0,0,2.441-2.446V37.479A2.447,2.447,0,0,0,40.2,35.033ZM11.91,34.255V18.31a.779.779,0,0,1,.778-.778H29.955a.779.779,0,0,1,.778.778V34.255a.779.779,0,0,1-.778.778H12.688a.779.779,0,0,1-.778-.778Zm8.579,19.167a.779.779,0,0,1-.778.778H2.444a.779.779,0,0,1-.778-.778V37.477a.779.779,0,0,1,.778-.778H19.71a.779.779,0,0,1,.778.778Zm20.489,0a.779.779,0,0,1-.776.781H22.93a.779.779,0,0,1-.776-.781V37.479a.779.779,0,0,1,.776-.781H40.2a.779.779,0,0,1,.776.781V53.42Z" transform="translate(0 -15.866)" fill="#ff9100"></path>       <path id="Caminho_39464" data-name="Caminho 39464" d="M321.3,286.774a.833.833,0,0,0-.833.833v1.047h-7.943v-1.047a.833.833,0,0,0-1.666,0v1.88a.833.833,0,0,0,.833.833H321.3a.833.833,0,0,0,.833-.833v-1.88A.833.833,0,0,0,321.3,286.774Z" transform="translate(-284.969 -264.211)" fill="#ff9100"></path>       <path id="Caminho_39465" data-name="Caminho 39465" d="M199.135,59.353v-1.88a.833.833,0,1,0-1.666,0V58.52h-7.943V57.473a.833.833,0,1,0-1.666,0v1.88a.833.833,0,0,0,.833.833H198.3A.833.833,0,0,0,199.135,59.353Z" transform="translate(-172.214 -53.244)" fill="#ff9100"></path>     </g>   </g> </svg>
          <span>
          Venda por <strong> Varejo <br /> e Atacado</strong>

          </span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg id="coin" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">   <g id="Grupo_8200" data-name="Grupo 8200">     <g id="Grupo_8198" data-name="Grupo 8198">       <path id="Caminho_39466" data-name="Caminho 39466" d="M246.781,43.162a.781.781,0,0,0-.781.781v1.48a.781.781,0,0,0,1.563,0v-1.48A.781.781,0,0,0,246.781,43.162Z" transform="translate(-226.781 -39.79)" fill="#ff9100"></path>       <path id="Caminho_39467" data-name="Caminho 39467" d="M246.781,434.311a.781.781,0,0,0-.781.781v1.48a.781.781,0,0,0,1.563,0v-1.48A.781.781,0,0,0,246.781,434.311Z" transform="translate(-226.781 -400.38)" fill="#ff9100"></path>       <path id="Caminho_39468" data-name="Caminho 39468" d="M434.364,248.208h-1.48a.781.781,0,0,0,0,1.563h1.48a.781.781,0,0,0,0-1.562Z" transform="translate(-398.345 -228.817)" fill="#ff9100"></path>       <path id="Caminho_39469" data-name="Caminho 39469" d="M43.215,248.208h-1.48a.781.781,0,1,0,0,1.563h1.48a.781.781,0,1,0,0-1.562Z" transform="translate(-37.754 -228.817)" fill="#ff9100"></path>       <path id="Caminho_39470" data-name="Caminho 39470" d="M378.87,103.447l-1.046,1.046a.781.781,0,1,0,1.1,1.1l1.046-1.046a.781.781,0,0,0-1.1-1.1Z" transform="translate(-348.095 -95.154)" fill="#ff9100"></path>       <path id="Caminho_39471" data-name="Caminho 39471" d="M102.286,380.031l-1.046,1.046a.781.781,0,1,0,1.1,1.1l1.046-1.046a.781.781,0,1,0-1.1-1.1Z" transform="translate(-93.119 -350.13)" fill="#ff9100"></path>       <path id="Caminho_39472" data-name="Caminho 39472" d="M378.928,380.031a.781.781,0,1,0-1.1,1.1l1.046,1.046a.781.781,0,0,0,1.1-1.1Z" transform="translate(-348.095 -350.13)" fill="#ff9100"></path>       <path id="Caminho_39473" data-name="Caminho 39473" d="M102.344,103.447a.781.781,0,0,0-1.1,1.1l1.046,1.046a.781.781,0,1,0,1.1-1.1Z" transform="translate(-93.119 -95.154)" fill="#ff9100"></path>       <path id="Caminho_39474" data-name="Caminho 39474" d="M34.142,5.858A20,20,0,1,0,5.858,34.142,20,20,0,1,0,34.142,5.858ZM20,38.437A18.437,18.437,0,1,1,38.437,20,18.458,18.458,0,0,1,20,38.437Z" fill="#ff9100"></path>     </g>     <g id="Grupo_8199" data-name="Grupo 8199" transform="translate(8.492 8.492)">       <circle id="Elipse_346" data-name="Elipse 346" cx="11.508" cy="11.508" r="11.508" fill="#0074FF"></circle>       <path id="Caminho_39475" data-name="Caminho 39475" d="M207.69,165.149q-.375-.132-.7-.25v-3.977a2.052,2.052,0,0,1,1.371.743.781.781,0,1,0,1.279-.9,3.688,3.688,0,0,0-2.65-1.421v-.471a.781.781,0,0,0-1.562,0v.537a6.463,6.463,0,0,0-.694.169,3.307,3.307,0,0,0-2.251,2.9,3.079,3.079,0,0,0,1.885,3.063c.221.1.588.255,1.06.436v4.65a3.278,3.278,0,0,1-1.88-1.027.781.781,0,0,0-1.217.98,4.913,4.913,0,0,0,3.1,1.638v.386a.781.781,0,0,0,1.563,0v-.324h.016a3.527,3.527,0,0,0,3.537-2.972A4.008,4.008,0,0,0,207.69,165.149Zm-2.653-1.014a1.518,1.518,0,0,1-.993-1.534,1.74,1.74,0,0,1,1.143-1.524q.123-.037.243-.067V164.3Q205.163,164.195,205.036,164.135ZM209,169.116c-.111.874-.857,1.466-2,1.6v-4.158l.177.063A2.453,2.453,0,0,1,209,169.116Z" transform="translate(-194.859 -154.235)" fill="#ffd4c5"></path>     </g>   </g> </svg>
          <span>
          Loja Virtual de <br /> <strong>Serviços</strong>
          </span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48.5" height="40" viewBox="0 0 48.5 40">   <g id="laptop_4_" data-name="laptop (4)" transform="translate(0 -44.868)">     <g id="Grupo_8205" data-name="Grupo 8205" transform="translate(9.918 58.743)">       <path id="Caminho_39476" data-name="Caminho 39476" d="M112.172,209.584a2.045,2.045,0,0,0,2.045,2.045h9.624a2.045,2.045,0,0,0,2.045-2.045h7.476V191.337H104.7v18.247Z" transform="translate(-104.696 -191.337)" fill="#0074FF"></path>       <g id="Grupo_8204" data-name="Grupo 8204" transform="translate(7.947 3.027)">         <g id="Grupo_8201" data-name="Grupo 8201" transform="translate(3.266 0.499)">           <path id="Caminho_39477" data-name="Caminho 39477" d="M224.01,241.154a.948.948,0,0,1-.873-1.314l4.49-10.7a.947.947,0,1,1,1.747.733l-4.49,10.7A.947.947,0,0,1,224.01,241.154Z" transform="translate(-223.062 -228.559)" fill="#ffd4c5"></path>         </g>         <g id="Grupo_8202" data-name="Grupo 8202">           <path id="Caminho_39478" data-name="Caminho 39478" d="M191.519,229.8a3.27,3.27,0,1,1,2.931-3.253A3.108,3.108,0,0,1,191.519,229.8Zm0-4.611a1.408,1.408,0,1,0,1.037,1.358A1.248,1.248,0,0,0,191.519,225.191Z" transform="translate(-188.588 -223.296)" fill="#ffd4c5"></path>         </g>         <g id="Grupo_8203" data-name="Grupo 8203" transform="translate(6.909 7.315)">           <path id="Caminho_39479" data-name="Caminho 39479" d="M264.454,307.026a3.27,3.27,0,1,1,2.931-3.253A3.108,3.108,0,0,1,264.454,307.026Zm0-4.611a1.408,1.408,0,1,0,1.037,1.358A1.248,1.248,0,0,0,264.454,302.415Z" transform="translate(-261.523 -300.52)" fill="#ffd4c5"></path>         </g>       </g>     </g>     <g id="Grupo_8206" data-name="Grupo 8206" transform="translate(0 44.868)">       <path id="Caminho_39480" data-name="Caminho 39480" d="M47.553,76.043h-.889V48.728a3.864,3.864,0,0,0-3.86-3.86H5.7a3.864,3.864,0,0,0-3.86,3.86V76.043H.947A.947.947,0,0,0,0,76.99v3.543a4.34,4.34,0,0,0,4.335,4.335H44.166A4.34,4.34,0,0,0,48.5,80.533V76.99A.947.947,0,0,0,47.553,76.043ZM5.7,46.763H42.8a1.968,1.968,0,0,1,1.965,1.965v2.637H3.731V48.728A1.967,1.967,0,0,1,5.7,46.763Zm-1.965,6.5H44.77V76.043H31.107a.947.947,0,0,0-.947.947,1.1,1.1,0,0,1-1.1,1.1H19.438a1.1,1.1,0,0,1-1.1-1.1.947.947,0,0,0-.947-.947H3.731ZM46.606,80.533a2.443,2.443,0,0,1-2.44,2.44H4.335a2.443,2.443,0,0,1-2.44-2.44v-2.6H16.6a3,3,0,0,0,2.838,2.045h9.624A3,3,0,0,0,31.9,77.937H46.606Z" transform="translate(0 -44.868)" fill="#ff9100"></path>       <path id="Caminho_39481" data-name="Caminho 39481" d="M241.33,79.874h1.064a.947.947,0,1,0,0-1.895H241.33a.947.947,0,1,0,0,1.895Z" transform="translate(-217.612 -74.842)" fill="#ff9100"></path>     </g>   </g> </svg>
          <span>
          Ferramentas de <br /><strong>vendas</strong>
          </span>
        </div>

       </div>
      </div>
     </S.Main>

     <S.Main2 >
      <div className="left">
        <h3>
Na Blue Lite, oferecemos uma <strong> maneira simplificada para que pequenas empresas tenham acesso à sua própria loja virtual </strong> sem custos exorbitantes.
        </h3>

        <span>
        Somos a plataforma ideal para Micro e Pequenas Empresas que desejam criar lojas virtuais. Nossos recursos são adaptáveis para atender negócios de todos os tipos. E o melhor: sem cobranças adicionais! Basta configurar sua loja e começar a vender.
        </span>

        <Link to="/baixar-blue-lite">
        <button>
            Download Grátis
        </button>
        </Link>
      </div>

      <div className="right">

      </div>
     </S.Main2>

     <S.Main3 ref={section1Ref}>
      <div className="left">
       <h2>
        <strong>Acompanhar pedidos e fazer entregas </strong>  nunca foi tão fácil.
       </h2>


      </div>

      <div className="right">
       <div className="card">
        <div className='title'>
          <svg xmlns="http://www.w3.org/2000/svg" width="67.5" height="80" viewBox="0 0 67.5 80">   <g id="courier_1_" data-name="courier (1)" transform="translate(-40)">     <g id="Grupo_8086" data-name="Grupo 8086" transform="translate(61.159 26.192)">       <path id="Caminho_39151" data-name="Caminho 39151" d="M184.163,173.818c0,3.419-2.091,6.19-4.67,6.19s-4.077-3.183-4.077-6.6,1.5-5.779,4.077-5.779S184.163,170.4,184.163,173.818Z" transform="translate(-175.416 -167.628)" fill="#ffbead"></path>       <path id="Caminho_39152" data-name="Caminho 39152" d="M397.606,173.818c0,3.419,2.091,6.19,4.67,6.19s4.077-3.183,4.077-6.6-1.5-5.779-4.077-5.779S397.606,170.4,397.606,173.818Z" transform="translate(-362.889 -167.628)" fill="#ffbead"></path>     </g>     <path id="Caminho_39153" data-name="Caminho 39153" d="M208.78,392.918H167.095a2.6,2.6,0,0,1-2.595-2.595v-3.96a14.109,14.109,0,0,1,14.109-14.109h18.657a14.109,14.109,0,0,1,14.109,14.109v3.96A2.6,2.6,0,0,1,208.78,392.918Z" transform="translate(-105.047 -314.09)" fill="#ffd4c5"></path>     <path id="Caminho_39154" data-name="Caminho 39154" d="M348.891,372.255H344.2a14.109,14.109,0,0,1,14.109,14.109v3.96a2.6,2.6,0,0,1-2.595,2.595H360.4A2.6,2.6,0,0,0,363,390.324v-3.96A14.109,14.109,0,0,0,348.891,372.255Z" transform="translate(-256.671 -314.09)" fill="#fd9542"></path>     <path id="Caminho_39155" data-name="Caminho 39155" d="M284.5,310.112h9.375v15.244H284.5Z" transform="translate(-206.297 -261.657)" fill="#ffd8ca"></path>     <path id="Caminho_39156" data-name="Caminho 39156" d="M314.5,310.112h4.688v15.244H314.5Z" transform="translate(-231.609 -261.657)" fill="#ffbead"></path>     <path id="Caminho_39157" data-name="Caminho 39157" d="M255.692,348.747s-.449,6.215,4.688,9.208c0,0-2.92,3.261-5.875,2.225-2.341-.821-3.665-5.187-4.114-6.965a1.1,1.1,0,0,1,.45-1.178Z" transform="translate(-177.488 -294.255)" fill="#f5f2f4"></path>     <path id="Caminho_39158" data-name="Caminho 39158" d="M319.188,348.747s.449,6.215-4.687,9.208c0,0,2.92,3.261,5.875,2.225,2.341-.821,3.665-5.187,4.114-6.965a1.1,1.1,0,0,0-.45-1.178Z" transform="translate(-231.609 -294.255)" fill="#f5f2f4"></path>     <path id="Caminho_39159" data-name="Caminho 39159" d="M218.046,96.136V85.881a15.071,15.071,0,0,1,30.142,0v10.2a15.071,15.071,0,1,1-30.142.057Z" transform="translate(-150.226 -59.746)" fill="#ffd8ca"></path>     <path id="Caminho_39160" data-name="Caminho 39160" d="M301.7,70.81a15.187,15.187,0,0,0-2.344.182,15.074,15.074,0,0,1,12.727,14.889v10.2A15.1,15.1,0,0,1,299.334,111,15.1,15.1,0,0,0,316.775,96.08v-10.2A15.071,15.071,0,0,0,301.7,70.81Z" transform="translate(-218.813 -59.746)" fill="#ffbead"></path>     <path id="Caminho_39161" data-name="Caminho 39161" d="M220.961,53.531c-23.113,0-16.6,19.951-16.1,21.022a26.276,26.276,0,0,1,1.033,3.751S209.1,75.724,209,74.74c-.165-1.573-1.077-11.238,2.9-10.327s5.61,1.573,8.932,1.573,4.959-.662,8.932-1.573,3.064,8.754,2.9,10.327c-.1.985,3.373,3.574,3.373,3.574a18.292,18.292,0,0,1,.767-3.76c.741-1.593,7.275-21.022-15.838-21.022Z" transform="translate(-138.071 -45.167)" fill="#7b727b"></path>     <path id="Caminho_39162" data-name="Caminho 39162" d="M219.747,122.187H180.312a1.481,1.481,0,0,1-1.481-1.481v-.971a2.236,2.236,0,0,1,2.236-2.236h37.924a2.236,2.236,0,0,1,2.236,2.236v.971A1.48,1.48,0,0,1,219.747,122.187Z" transform="translate(-117.139 -99.141)" fill="#f5f2f4"></path>     <path id="Caminho_39163" data-name="Caminho 39163" d="M410.544,117.5h-4.687a2.236,2.236,0,0,1,2.236,2.236v.971a1.481,1.481,0,0,1-1.481,1.481H411.3a1.481,1.481,0,0,0,1.481-1.481v-.971A2.236,2.236,0,0,0,410.544,117.5Z" transform="translate(-308.692 -99.141)" fill="#e7e4e7"></path>     <path id="Caminho_39164" data-name="Caminho 39164" d="M234.75,24.687H198.5l.676-6.132A12.416,12.416,0,0,1,211.517,7.5h10.215a12.416,12.416,0,0,1,12.341,11.055Z" transform="translate(-133.734 -6.328)" fill="#0074FF"></path>     <path id="Caminho_39165" data-name="Caminho 39165" d="M334.217,18.555A12.416,12.416,0,0,0,321.875,7.5h-4.687a12.416,12.416,0,0,1,12.341,11.055l.676,6.132h4.688Z" transform="translate(-233.877 -6.328)" fill="#2CC3FF"></path>     <path id="Caminho_39166" data-name="Caminho 39166" d="M280.3,51.187h-9.219a2.578,2.578,0,0,1-2.578-2.578V46.578A2.578,2.578,0,0,1,271.078,44H280.3a2.578,2.578,0,0,1,2.578,2.578v2.031A2.578,2.578,0,0,1,280.3,51.187Z" transform="translate(-192.797 -37.125)" fill="#fd9542"></path>     <path id="Caminho_39167" data-name="Caminho 39167" d="M318.688,44H314a2.578,2.578,0,0,1,2.578,2.578v2.031A2.578,2.578,0,0,1,314,51.187h4.688a2.578,2.578,0,0,0,2.578-2.578V46.578A2.578,2.578,0,0,0,318.688,44Z" transform="translate(-231.187 -37.125)" fill="#ffd4c5"></path>     <path id="Caminho_39168" data-name="Caminho 39168" d="M71.383,344.116v18.027a.526.526,0,0,1-.528.525H48.676a.526.526,0,0,1-.528-.525V344.116a14.159,14.159,0,0,1,.225-2.513l.937-5.2H70.221l.938,5.2A14.175,14.175,0,0,1,71.383,344.116Z" transform="translate(-6.875 -283.839)" fill="#2CC3FF"></path>     <path id="Caminho_39169" data-name="Caminho 39169" d="M165.04,341.6l-.937-5.2h-4.687l.938,5.2a14.159,14.159,0,0,1,.225,2.513v18.027a.526.526,0,0,1-.528.524h4.688a.526.526,0,0,0,.528-.524V344.116A14.175,14.175,0,0,0,165.04,341.6Z" transform="translate(-100.756 -283.839)" fill="#2CC3FF"></path>     <path id="Caminho_39170" data-name="Caminho 39170" d="M70.312,311.09H48.125a.625.625,0,0,1-.625-.625v-3.437a.625.625,0,0,1,.625-.625H70.312a.625.625,0,0,1,.625.625v3.438A.625.625,0,0,1,70.312,311.09Z" transform="translate(-6.328 -258.527)" fill="#2CC3FF"></path>     <path id="Caminho_39171" data-name="Caminho 39171" d="M168.188,306.4H163.5a.625.625,0,0,1,.625.625v3.438a.625.625,0,0,1-.625.625h4.688a.625.625,0,0,0,.625-.625v-3.437A.625.625,0,0,0,168.188,306.4Z" transform="translate(-104.203 -258.527)" fill="#2CC3FF"></path>     <g id="Grupo_8087" data-name="Grupo 8087" transform="translate(40 0)">       <path id="Caminho_39172" data-name="Caminho 39172" d="M103.224,61.672a15.193,15.193,0,0,0-9.851-4.631,2.26,2.26,0,0,0-.285-.229L88.75,53.87V51.5a16.24,16.24,0,0,0,4.919-3,1.172,1.172,0,0,0-1.557-1.752A13.963,13.963,0,0,1,73.055,46.2a13.774,13.774,0,0,1-4.063-9.807v-2.7c3.257-2.719,3.14-3.856,3.1-4.241a33.408,33.408,0,0,1-.154-5.232H93.576a33.687,33.687,0,0,1-.153,5.231c-.042.391-.162,1.549,3.365,4.278v2.6A13.959,13.959,0,0,1,95.2,42.8a1.172,1.172,0,0,0,2.075,1.089,16.226,16.226,0,0,0,1.556-4.458c7.981,2.828,9.589-13.9,2.229-14.38q.061-.406.109-.828h1.435a2.656,2.656,0,0,0,2.653-2.653V20.6a3.412,3.412,0,0,0-3.194-3.4l-.562-5.1A13.572,13.572,0,0,0,88,0H77.783a13.581,13.581,0,0,0-6.932,1.9,1.172,1.172,0,0,0,1.2,2.015,11.238,11.238,0,0,1,5.736-1.572H88A11.231,11.231,0,0,1,99.175,12.356l.533,4.832H66.074l.533-4.832a11.27,11.27,0,0,1,1.865-5.073,1.172,1.172,0,1,0-1.94-1.315A13.625,13.625,0,0,0,64.277,12.1l-.562,5.1a3.412,3.412,0,0,0-3.194,3.4v.971a2.656,2.656,0,0,0,2.653,2.653h1.312q.038.433.09.844c-7.193.644-5.539,17.189,2.357,14.368a16.273,16.273,0,0,0,10.1,12.1v2.341l-4.338,2.942a2.275,2.275,0,0,0-.282.227,15.073,15.073,0,0,0-6.772,2.167,15.375,15.375,0,0,0-.2-1.65l-.717-3.98a1.8,1.8,0,0,0,1.062-1.638V48.5a1.8,1.8,0,0,0-1.8-1.8H41.8A1.8,1.8,0,0,0,40,48.5v3.438a1.8,1.8,0,0,0,1.062,1.638l-.717,3.98a15.383,15.383,0,0,0-.243,2.72v7.055a1.172,1.172,0,0,0,2.344,0V60.277a13.032,13.032,0,0,1,.206-2.3l.764-4.237H62.367l.764,4.237a13.037,13.037,0,0,1,.206,2.3v1.176c0,.007,0,.013,0,.02V77.656H42.445V73.263a1.172,1.172,0,0,0-2.344,0V78.3A1.7,1.7,0,0,0,41.8,80h61.932a3.771,3.771,0,0,0,3.767-3.767V72.273a15.2,15.2,0,0,0-4.276-10.6Zm.227-29.7c-.008,3.272-1.592,6.68-4.331,4.979.008-.205.013-.411.013-.617V33.214a16.174,16.174,0,0,1,.658-3.334,15.8,15.8,0,0,0,.812-2.515c2.1.042,2.848,2.4,2.848,4.6Zm-5.786-3.077a9.573,9.573,0,0,0-.563,2.041,7.765,7.765,0,0,1-1.33-1.408,35.469,35.469,0,0,0,.152-5.307h2.889a19.019,19.019,0,0,1-1.148,4.674Zm-34.8-7.327V20.6a1.066,1.066,0,0,1,1.064-1.064h37.924a1.066,1.066,0,0,1,1.064,1.064v.971a.309.309,0,0,1-.309.309H63.173a.309.309,0,0,1-.309-.309Zm6.726,2.653a36.047,36.047,0,0,0,.155,5.33,7.247,7.247,0,0,1-1.229,1.413,13.818,13.818,0,0,0-.668-2.069,19.32,19.32,0,0,1-1.01-4.674h2.751ZM65.236,37.4c-3.357-.018-4.3-9.6-.256-10.023a15.724,15.724,0,0,0,.743,2.5,22.982,22.982,0,0,1,.925,3.379V36.39c0,.188,0,.375.011.562a2.56,2.56,0,0,1-1.423.447Zm23.4,19.226,3.094,2.1c-.837,3.284-2.15,5.674-3.353,6.1-1.281.449-2.676-.314-3.593-1A11.061,11.061,0,0,0,88.637,56.625ZM82.863,52.6a16.287,16.287,0,0,0,3.544-.392v3.094a9.063,9.063,0,0,1-3.516,7,8.967,8.967,0,0,1-3.517-6.959c0-.012,0-.024,0-.037V52.23a16.356,16.356,0,0,0,3.488.375ZM81,63.815c-.917.689-2.312,1.453-3.593,1-1.2-.422-2.516-2.811-3.353-6.1l3.094-2.1A11.062,11.062,0,0,0,81,63.815ZM42.344,49.047H63.438v2.344H42.344Zm62.812,27.186a1.425,1.425,0,0,1-1.423,1.423H65.68V62.015a12.754,12.754,0,0,1,6.139-2.559c.657,2.516,2.119,6.631,4.809,7.574a4.777,4.777,0,0,0,1.591.27,7.669,7.669,0,0,0,4.671-1.992c1.313,1.178,3.993,2.605,6.262,1.721,2.69-.943,4.152-5.059,4.809-7.575a12.889,12.889,0,0,1,11.194,12.818Z" transform="translate(-40 0)"></path>       <path id="Caminho_39173" data-name="Caminho 39173" d="M303.3,250.842a4.79,4.79,0,0,0,1.234-.183,1.172,1.172,0,0,0-.592-2.268,1.978,1.978,0,0,1-1.283,0,1.172,1.172,0,0,0-.592,2.268,4.782,4.782,0,0,0,1.234.183Z" transform="translate(-260.383 -209.548)"></path>       <path id="Caminho_39174" data-name="Caminho 39174" d="M262.257,164.879a1.172,1.172,0,0,0,.3-2.306,7.88,7.88,0,0,0-4.625,0,1.172,1.172,0,1,0,.592,2.268,5.539,5.539,0,0,1,3.441,0A1.18,1.18,0,0,0,262.257,164.879Z" transform="translate(-223.137 -136.878)"></path>       <path id="Caminho_39175" data-name="Caminho 39175" d="M337.79,164a1.172,1.172,0,0,0-.838-1.43,7.88,7.88,0,0,0-4.625,0,1.172,1.172,0,0,0,.592,2.268,5.539,5.539,0,0,1,3.441,0,1.171,1.171,0,0,0,1.43-.838Z" transform="translate(-285.912 -136.878)"></path>       <path id="Caminho_39176" data-name="Caminho 39176" d="M288.91,270.245a7.279,7.279,0,0,0,7.03,0,1.172,1.172,0,0,0-1.14-2.048,4.918,4.918,0,0,1-4.751,0,1.172,1.172,0,1,0-1.14,2.048Z" transform="translate(-249.51 -226.166)"></path>       <path id="Caminho_39177" data-name="Caminho 39177" d="M265.159,206.35v.938a1.172,1.172,0,0,0,2.344,0v-.937A1.172,1.172,0,0,0,265.159,206.35Z" transform="translate(-229.978 -173.127)"></path>       <path id="Caminho_39178" data-name="Caminho 39178" d="M350.331,205.132a1.172,1.172,0,0,0-1.172,1.172v.938a1.172,1.172,0,0,0,2.344,0V206.3A1.172,1.172,0,0,0,350.331,205.132Z" transform="translate(-300.853 -173.08)"></path>       <path id="Caminho_39179" data-name="Caminho 39179" d="M308.172,430A1.172,1.172,0,0,0,307,431.172v.625a1.172,1.172,0,0,0,2.344,0v-.625A1.172,1.172,0,0,0,308.172,430Z" transform="translate(-265.281 -362.813)"></path>       <path id="Caminho_39180" data-name="Caminho 39180" d="M308.172,461.385A1.172,1.172,0,0,0,307,462.557v.625a1.172,1.172,0,0,0,2.344,0v-.625A1.172,1.172,0,0,0,308.172,461.385Z" transform="translate(-265.281 -389.294)"></path>       <path id="Caminho_39181" data-name="Caminho 39181" d="M273.969,46.031a3.754,3.754,0,0,0,3.75-3.75V40.25a3.754,3.754,0,0,0-3.75-3.75H264.75A3.754,3.754,0,0,0,261,40.25v2.031a3.754,3.754,0,0,0,3.75,3.75Zm-10.625-3.75V40.25a1.408,1.408,0,0,1,1.406-1.406h9.219a1.408,1.408,0,0,1,1.406,1.406v2.031a1.408,1.408,0,0,1-1.406,1.406H264.75A1.408,1.408,0,0,1,263.344,42.281Z" transform="translate(-226.469 -30.797)"></path>     </g>   </g> </svg>
          <span>
           Cadastro de <br />
           <strong>entregadores</strong>
          </span>
        </div>
        <p>
        Com esse recurso você cadastra entregadores, monitora entregas e gera relatórios de todos os itens enviados.
        </p>
       </div>

       <div className="card">
        <div className='title'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48.281" height="80" viewBox="0 0 48.281 80">   <g id="smartphone" transform="translate(-101.5)">     <path id="Caminho_39182" data-name="Caminho 39182" d="M148.688,85.156H115.25a6.25,6.25,0,0,1-6.25-6.25V13.75a6.25,6.25,0,0,1,6.25-6.25h33.438a6.25,6.25,0,0,1,6.25,6.25V78.906A6.25,6.25,0,0,1,148.688,85.156Z" transform="translate(-6.328 -6.328)" fill="#7b727b"></path>     <path id="Caminho_39183" data-name="Caminho 39183" d="M337.688,7.5H333a6.25,6.25,0,0,1,6.25,6.25V78.906a6.25,6.25,0,0,1-6.25,6.25h4.688a6.25,6.25,0,0,0,6.25-6.25V13.75A6.25,6.25,0,0,0,337.688,7.5Z" transform="translate(-195.328 -6.328)" fill="#686169"></path>     <path id="Caminho_39184" data-name="Caminho 39184" d="M172.813,35.688v65.156a2.188,2.188,0,0,1-2.187,2.188H137.188A2.188,2.188,0,0,1,135,100.844V35.688a2.187,2.187,0,0,1,2.188-2.187h6.266a.853.853,0,0,1,.807.576l.826,2.4a.853.853,0,0,0,.807.576h16.026a.853.853,0,0,0,.807-.576l.826-2.4a.853.853,0,0,1,.807-.576h6.266A2.188,2.188,0,0,1,172.813,35.688Z" transform="translate(-28.266 -28.266)" fill="#2CC3FF"></path>     <g id="Grupo_8088" data-name="Grupo 8088" transform="translate(137.672 5.234)">       <path id="Caminho_39185" data-name="Caminho 39185" d="M337.688,33.5H333a2.187,2.187,0,0,1,2.187,2.188v65.156A2.187,2.187,0,0,1,333,103.031h4.688a2.188,2.188,0,0,0,2.188-2.188V35.688A2.187,2.187,0,0,0,337.688,33.5Z" transform="translate(-333 -33.5)" fill="#0074FF"></path>     </g>     <circle id="Elipse_340" data-name="Elipse 340" cx="12.344" cy="12.344" r="12.344" transform="translate(113.297 27.656)" fill="#ffd4c5"></circle>     <path id="Caminho_39186" data-name="Caminho 39186" d="M231.125,132.375h-5.937a2.188,2.188,0,1,1,0-4.375h5.937a2.188,2.188,0,1,1,0,4.375Z" transform="translate(-102.516 -108)" fill="#7b727b"></path>     <path id="Caminho_39187" data-name="Caminho 39187" d="M249.688,128H245a2.187,2.187,0,1,1,0,4.375h4.688a2.188,2.188,0,1,0,0-4.375Z" transform="translate(-121.078 -108)" fill="#686169"></path>     <path id="Caminho_39188" data-name="Caminho 39188" d="M211.469,396.349H199.281a3.281,3.281,0,0,1,0-6.562h12.187a3.281,3.281,0,1,1,0,6.563Z" transform="translate(-79.734 -328.882)" fill="#fd9542"></path>     <g id="Grupo_8089" data-name="Grupo 8089" transform="translate(101.5)">       <path id="Caminho_39189" data-name="Caminho 39189" d="M142.359,0H108.922A7.43,7.43,0,0,0,101.5,7.422v4.7a1.172,1.172,0,0,0,2.344,0v-4.7a5.084,5.084,0,0,1,5.078-5.078h33.438a5.084,5.084,0,0,1,5.078,5.078V72.578a5.084,5.084,0,0,1-5.078,5.078H108.922a5.084,5.084,0,0,1-5.078-5.078V17.7a1.172,1.172,0,0,0-2.344,0V72.578A7.43,7.43,0,0,0,108.922,80h33.438a7.43,7.43,0,0,0,7.422-7.422V7.422A7.43,7.43,0,0,0,142.359,0Z" transform="translate(-101.5)"></path>       <path id="Caminho_39190" data-name="Caminho 39190" d="M156.953,97.875H164.3a3.363,3.363,0,0,0,3.359-3.359V29.359A3.363,3.363,0,0,0,164.3,26h-6.266a2.026,2.026,0,0,0-1.915,1.366l-.752,2.184H139.792l-.752-2.184A2.026,2.026,0,0,0,137.126,26h-6.266a3.363,3.363,0,0,0-3.359,3.359V94.516a3.363,3.363,0,0,0,3.359,3.359h20.376a1.172,1.172,0,0,0,0-2.344H130.859a1.017,1.017,0,0,1-1.016-1.016V29.359a1.017,1.017,0,0,1,1.016-1.016H136.9l.752,2.184a2.026,2.026,0,0,0,1.915,1.366h16.026a2.026,2.026,0,0,0,1.915-1.366l.752-2.184H164.3a1.017,1.017,0,0,1,1.016,1.016V94.516a1.017,1.017,0,0,1-1.016,1.016h-7.344A1.172,1.172,0,0,0,156.953,97.875Z" transform="translate(-123.437 -21.938)"></path>       <path id="Caminho_39191" data-name="Caminho 39191" d="M169.5,141.672a13.517,13.517,0,1,0,26.7-3,1.172,1.172,0,0,0-2.286.519,11.22,11.22,0,0,1-10.895,13.657c-14.82-.613-14.818-21.732,0-22.344a11.118,11.118,0,0,1,8.779,4.262,1.172,1.172,0,0,0,1.841-1.451,13.439,13.439,0,0,0-9.448-5.1v-.988h1.8a3.359,3.359,0,0,0,0-6.719h-5.938a3.359,3.359,0,0,0,0,6.719h1.8v.989A13.533,13.533,0,0,0,169.5,141.672Zm9.531-17.812a1.017,1.017,0,0,1,1.016-1.016h5.938a1.016,1.016,0,0,1,0,2.031h-5.937A1.017,1.017,0,0,1,179.031,123.859Z" transform="translate(-158.875 -101.672)"></path>       <path id="Caminho_39192" data-name="Caminho 39192" d="M193.077,391.192h12.187a4.453,4.453,0,0,0,0-8.906H193.077A4.453,4.453,0,0,0,193.077,391.192Zm0-6.563h12.187a2.109,2.109,0,0,1,0,4.219H193.077A2.109,2.109,0,0,1,193.077,384.63Z" transform="translate(-175.031 -322.554)"></path>       <path id="Caminho_39193" data-name="Caminho 39193" d="M250.844,218.258a1.172,1.172,0,0,0-2.344,0v4.916a1.172,1.172,0,0,0,2.344,0Z" transform="translate(-225.531 -183.174)"></path>       <path id="Caminho_39194" data-name="Caminho 39194" d="M250.844,191.839a1.172,1.172,0,0,0-2.344,0v.407a1.172,1.172,0,0,0,2.344,0Z" transform="translate(-225.531 -160.883)"></path>       <path id="Caminho_39195" data-name="Caminho 39195" d="M249.672,301.505a1.172,1.172,0,0,0-1.172,1.172v.407a1.172,1.172,0,0,0,2.344,0v-.407A1.172,1.172,0,0,0,249.672,301.505Z" transform="translate(-225.531 -254.395)"></path>       <path id="Caminho_39196" data-name="Caminho 39196" d="M287.954,209.873a1.168,1.168,0,0,0,.829-.343l.288-.288a1.172,1.172,0,0,0-1.657-1.657l-.288.288a1.172,1.172,0,0,0,.829,2Z" transform="translate(-257.832 -174.86)"></path>       <path id="Caminho_39197" data-name="Caminho 39197" d="M209.548,288.279a1.168,1.168,0,0,0,.829-.343l.288-.288a1.172,1.172,0,1,0-1.657-1.657l-.288.288a1.172,1.172,0,0,0,.829,2Z" transform="translate(-191.677 -241.015)"></path>       <path id="Caminho_39198" data-name="Caminho 39198" d="M303.858,249.709h.407a1.172,1.172,0,0,0,0-2.344h-.407A1.172,1.172,0,0,0,303.858,249.709Z" transform="translate(-271.258 -208.714)"></path>       <path id="Caminho_39199" data-name="Caminho 39199" d="M193.381,247.365h-.407a1.172,1.172,0,0,0,0,2.344h.407A1.172,1.172,0,0,0,193.381,247.365Z" transform="translate(-177.7 -208.714)"></path>       <path id="Caminho_39200" data-name="Caminho 39200" d="M287.125,287.648l.288.288a1.172,1.172,0,0,0,1.657-1.657l-.288-.288a1.172,1.172,0,0,0-1.657,1.657Z" transform="translate(-257.832 -241.015)"></path>       <path id="Caminho_39201" data-name="Caminho 39201" d="M210.665,207.872l-.288-.288a1.172,1.172,0,1,0-1.657,1.657l.288.288a1.172,1.172,0,1,0,1.657-1.657Z" transform="translate(-191.677 -174.86)"></path>     </g>   </g> </svg>
          <span>
          Entregas <strong> imediatas <br />
          ou agendadas!</strong>
          </span>
        </div>
        <p>
        Ideal para entregas locais, você libera a opção do cliente retirar a mercadoria na loja ou receber o pedido em casa.
        </p>
       </div>

       <div className="card">
        <div className='title'>
          <svg xmlns="http://www.w3.org/2000/svg" width="72.969" height="80" viewBox="0 0 72.969 80">   <g id="cashless-payment" transform="translate(-22.5)">     <path id="Caminho_39131" data-name="Caminho 39131" d="M69.687,85.156H36.25A6.25,6.25,0,0,1,30,78.906V13.75A6.25,6.25,0,0,1,36.25,7.5H69.687a6.25,6.25,0,0,1,6.25,6.25V78.906A6.25,6.25,0,0,1,69.687,85.156Z" transform="translate(-6.328 -6.328)" fill="#7b727b"></path>     <path id="Caminho_39132" data-name="Caminho 39132" d="M258.688,7.5H254a6.25,6.25,0,0,1,6.25,6.25V78.906a6.25,6.25,0,0,1-6.25,6.25h4.688a6.25,6.25,0,0,0,6.25-6.25V13.75A6.25,6.25,0,0,0,258.688,7.5Z" transform="translate(-195.328 -6.328)" fill="#686169"></path>     <path id="Caminho_39133" data-name="Caminho 39133" d="M93.812,35.688v65.156a2.188,2.188,0,0,1-2.187,2.188H58.188A2.187,2.187,0,0,1,56,100.844V35.688A2.187,2.187,0,0,1,58.188,33.5h6.266a.853.853,0,0,1,.807.576l.826,2.4a.853.853,0,0,0,.807.576H82.919a.853.853,0,0,0,.807-.576l.826-2.4a.853.853,0,0,1,.807-.576h6.266A2.188,2.188,0,0,1,93.812,35.688Z" transform="translate(-28.266 -28.266)" fill="#bdecc4"></path>     <g id="Grupo_8083" data-name="Grupo 8083" transform="translate(58.672 5.234)">       <path id="Caminho_39134" data-name="Caminho 39134" d="M258.688,33.5H254a2.187,2.187,0,0,1,2.188,2.188v65.156A2.187,2.187,0,0,1,254,103.031h4.688a2.188,2.188,0,0,0,2.188-2.187V35.688A2.188,2.188,0,0,0,258.688,33.5Z" transform="translate(-254 -33.5)" fill="#00c853"></path>     </g>     <path id="Caminho_39135" data-name="Caminho 39135" d="M132.469,378.562H120.281a3.281,3.281,0,1,1,0-6.562h12.188a3.281,3.281,0,1,1,0,6.562Z" transform="translate(-79.734 -313.875)" fill="#fd9542"></path>     <path id="Caminho_39136" data-name="Caminho 39136" d="M154.933,124.5H101.067A3.067,3.067,0,0,1,98,121.433V90.067A3.067,3.067,0,0,1,101.067,87h53.865A3.067,3.067,0,0,1,158,90.067v31.365A3.067,3.067,0,0,1,154.933,124.5Z" transform="translate(-63.703 -73.406)" fill="#2CC3FF"></path>     <path id="Caminho_39137" data-name="Caminho 39137" d="M437.056,87h-4.687a3.067,3.067,0,0,1,3.067,3.067v31.366a3.067,3.067,0,0,1-3.067,3.067h4.688a3.067,3.067,0,0,0,3.067-3.067V90.067A3.067,3.067,0,0,0,437.056,87Z" transform="translate(-345.827 -73.406)" fill="#0074FF"></path>     <path id="Caminho_39138" data-name="Caminho 39138" d="M153.625,134.125h-9.687a.937.937,0,0,1-.937-.938v-6.25a.937.937,0,0,1,.938-.937h9.687a.937.937,0,0,1,.938.937v6.25A.937.937,0,0,1,153.625,134.125Z" transform="translate(-101.672 -106.312)" fill="#ffe589"></path>     <path id="Caminho_39139" data-name="Caminho 39139" d="M111.75,245.951H98v-8.125h13.75a4.063,4.063,0,1,1,0,8.125Z" transform="translate(-63.703 -200.666)" fill="#ff6167"></path>     <g id="Grupo_8085" data-name="Grupo 8085" transform="translate(22.5 0)">       <g id="Grupo_8084" data-name="Grupo 8084" transform="translate(0 0)">         <path id="Caminho_39140" data-name="Caminho 39140" d="M114.077,364.5a4.453,4.453,0,0,0,0,8.906h12.187a4.453,4.453,0,0,0,0-8.906Zm14.3,4.453a2.112,2.112,0,0,1-2.109,2.109H114.077a2.109,2.109,0,0,1,0-4.219h12.187A2.112,2.112,0,0,1,128.374,368.953Z" transform="translate(-96.031 -307.547)"></path>         <path id="Caminho_39141" data-name="Caminho 39141" d="M91.229,12.422H85.264a1.172,1.172,0,0,0,0,2.344h5.965a1.9,1.9,0,0,1,1.9,1.9V48.026a1.9,1.9,0,0,1-1.9,1.9H37.364a1.9,1.9,0,0,1-1.9-1.9V46.457H48.047a5.234,5.234,0,0,0,0-10.469H35.469V16.661a1.9,1.9,0,0,1,1.9-1.9H79.756a1.172,1.172,0,0,0,0-2.344H70.781v-5A7.43,7.43,0,0,0,63.359,0H29.922A7.43,7.43,0,0,0,22.5,7.422v6.725a1.172,1.172,0,0,0,2.344,0V7.422a5.084,5.084,0,0,1,5.078-5.078H63.359a5.084,5.084,0,0,1,5.078,5.078v5H66.719v-5a3.363,3.363,0,0,0-3.359-3.359H57.094a2.028,2.028,0,0,0-1.916,1.366l-.751,2.184H38.854L38.1,5.427a2.027,2.027,0,0,0-1.915-1.364H29.922a3.363,3.363,0,0,0-3.359,3.359V72.578a3.363,3.363,0,0,0,3.359,3.359H63.359a3.363,3.363,0,0,0,3.359-3.359V68.914a1.172,1.172,0,0,0-2.344,0v3.664a1.017,1.017,0,0,1-1.016,1.016H29.922a1.017,1.017,0,0,1-1.016-1.016V7.422a1.017,1.017,0,0,1,1.016-1.016h6.039l.751,2.186a2.027,2.027,0,0,0,1.915,1.364H54.653A2.028,2.028,0,0,0,56.569,8.59l.751-2.184h6.039a1.017,1.017,0,0,1,1.016,1.016v5H37.364a4.244,4.244,0,0,0-4.239,4.239V48.026a4.244,4.244,0,0,0,4.239,4.239H64.375V63.449a1.172,1.172,0,0,0,2.344,0V52.266h1.719V72.578a5.084,5.084,0,0,1-5.078,5.078H29.922a5.084,5.084,0,0,1-5.078-5.078V19.688a1.172,1.172,0,0,0-2.344,0V72.578A7.43,7.43,0,0,0,29.922,80H63.359a7.43,7.43,0,0,0,7.422-7.422V52.266H91.229a4.244,4.244,0,0,0,4.239-4.239V16.661a4.244,4.244,0,0,0-4.239-4.239ZM48.047,38.332a2.891,2.891,0,0,1,0,5.781H35.469V38.332Z" transform="translate(-22.5 0)"></path>         <path id="Caminho_39145" data-name="Caminho 39145" d="M137.609,118.5a2.112,2.112,0,0,0-2.109,2.109v6.25a2.112,2.112,0,0,0,2.109,2.109H147.3a2.112,2.112,0,0,0,2.109-2.109v-6.25A2.112,2.112,0,0,0,147.3,118.5Zm9.453,8.125h-9.219v-5.781h9.219Z" transform="translate(-117.844 -99.984)"></path>         <path id="Caminho_39146" data-name="Caminho 39146" d="M273.9,137.787v1.875a1.172,1.172,0,0,0,2.344,0v-1.875A1.172,1.172,0,0,0,273.9,137.787Z" transform="translate(-234.622 -115.276)"></path>         <path id="Caminho_39147" data-name="Caminho 39147" d="M398.778,140.834a1.172,1.172,0,0,0,1.172-1.172v-1.875a1.172,1.172,0,0,0-2.344,0v1.875A1.172,1.172,0,0,0,398.778,140.834Z" transform="translate(-338.996 -115.276)"></path>         <path id="Caminho_39148" data-name="Caminho 39148" d="M426.686,139.662v-1.875a1.172,1.172,0,0,0-2.344,0v1.875A1.172,1.172,0,0,0,426.686,139.662Z" transform="translate(-361.554 -115.276)"></path>         <path id="Caminho_39149" data-name="Caminho 39149" d="M315.067,139.662v-1.875a1.172,1.172,0,0,0-2.344,0v1.875A1.172,1.172,0,0,0,315.067,139.662Z" transform="translate(-267.376 -115.276)"></path>         <path id="Caminho_39150" data-name="Caminho 39150" d="M342.232,140.834a1.172,1.172,0,0,0,1.172-1.172v-1.875a1.172,1.172,0,0,0-2.344,0v1.875A1.172,1.172,0,0,0,342.232,140.834Z" transform="translate(-291.285 -115.276)"></path>       </g>     </g>   </g> </svg>
          <span>
         <strong>Cobrança </strong> <br />
          Manual
          </span>
        </div>
        <p>
        Integre com plataformas de pagamento, envie links de cobrança online ou faça a cobrança manualmente, no momento da entrega.
        </p>
       </div>

       <div className="card">
        <div className='title'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">   <g id="checkout_5_" data-name="checkout (5)" transform="translate(0 -0.001)">     <path id="Caminho_39202" data-name="Caminho 39202" d="M94.156,307.188H26.344a2.344,2.344,0,1,1,0-4.687H94.156a2.344,2.344,0,1,1,0,4.688Z" transform="translate(-20.25 -255.233)" fill="#f8f7f7"></path>     <path id="Caminho_39203" data-name="Caminho 39203" d="M447.688,302.5H443a2.344,2.344,0,0,1,0,4.688h4.688a2.344,2.344,0,1,0,0-4.687Z" transform="translate(-373.781 -255.233)" fill="#efefef"></path>     <path id="Caminho_39204" data-name="Caminho 39204" d="M108.279,359.375H62.846a6.35,6.35,0,0,1-6.305-5.6L54,332.5h63.125l-2.541,21.278A6.35,6.35,0,0,1,108.279,359.375Z" transform="translate(-45.562 -280.546)" fill="#e7e7e7"></path>     <path id="Caminho_39205" data-name="Caminho 39205" d="M380.229,332.5l-2.541,21.278a6.35,6.35,0,0,1-6.305,5.6h4.688a6.35,6.35,0,0,0,6.305-5.6l2.541-21.278Z" transform="translate(-313.354 -280.546)" fill="#d7d7d7"></path>     <g id="Grupo_8090" data-name="Grupo 8090" transform="translate(19.063 62.736)">       <path id="Caminho_39206" data-name="Caminho 39206" d="M124.344,411.188A2.344,2.344,0,0,1,122,408.844v-5a2.344,2.344,0,0,1,4.688,0v5A2.344,2.344,0,0,1,124.344,411.188Z" transform="translate(-122 -401.5)" fill="#686169"></path>       <path id="Caminho_39207" data-name="Caminho 39207" d="M183.844,411.188a2.344,2.344,0,0,1-2.344-2.344v-5a2.344,2.344,0,0,1,4.688,0v5A2.344,2.344,0,0,1,183.844,411.188Z" transform="translate(-172.203 -401.5)" fill="#686169"></path>       <path id="Caminho_39208" data-name="Caminho 39208" d="M243.344,411.188A2.344,2.344,0,0,1,241,408.844v-5a2.344,2.344,0,0,1,4.688,0v5A2.344,2.344,0,0,1,243.344,411.188Z" transform="translate(-222.406 -401.5)" fill="#686169"></path>       <path id="Caminho_39209" data-name="Caminho 39209" d="M302.844,411.188a2.344,2.344,0,0,1-2.344-2.344v-5a2.344,2.344,0,0,1,4.688,0v5A2.344,2.344,0,0,1,302.844,411.188Z" transform="translate(-272.609 -401.5)" fill="#686169"></path>       <path id="Caminho_39210" data-name="Caminho 39210" d="M362.344,411.188A2.344,2.344,0,0,1,360,408.844v-5a2.344,2.344,0,0,1,4.688,0v5A2.344,2.344,0,0,1,362.344,411.188Z" transform="translate(-322.812 -401.5)" fill="#686169"></path>     </g>     <path id="Caminho_39211" data-name="Caminho 39211" d="M194.138,23.312a16.172,16.172,0,1,0-21.717,15.55,6.488,6.488,0,0,1,3.808,3.68l1.442,3.616a.367.367,0,0,0,.683,0l1.4-3.582a6.47,6.47,0,0,1,3.793-3.72A16.2,16.2,0,0,0,194.138,23.312Z" transform="translate(-136.517 -6.327)" fill="#2CC3FF"></path>     <path id="Caminho_39212" data-name="Caminho 39212" d="M268.879,23.312a16.174,16.174,0,0,0-18.5-15.643A16.175,16.175,0,0,1,253.6,38.854a6.472,6.472,0,0,0-3.207,2.574,6.389,6.389,0,0,1,.58,1.115l1.442,3.616a.367.367,0,0,0,.683,0l1.4-3.582a6.47,6.47,0,0,1,3.793-3.72A16.2,16.2,0,0,0,268.879,23.312Z" transform="translate(-211.258 -6.327)" fill="#0074FF"></path>     <path id="Caminho_39213" data-name="Caminho 39213" d="M35.254,222.254a2.334,2.334,0,0,1-3.3,0L8.184,198.485a2.334,2.334,0,0,1,3.3-3.3l23.769,23.769a2.334,2.334,0,0,1,0,3.3Z" transform="translate(-6.328 -164.109)" fill="#fd9542"></path>     <path id="Caminho_39214" data-name="Caminho 39214" d="M323.184,222.253a2.334,2.334,0,0,0,3.3,0l23.769-23.769a2.334,2.334,0,0,0-3.3-3.3l-23.769,23.769a2.334,2.334,0,0,0,0,3.3Z" transform="translate(-272.109 -164.108)" fill="#fd9542"></path>     <g id="Grupo_8091" data-name="Grupo 8091" transform="translate(0 0.001)">       <path id="Caminho_39215" data-name="Caminho 39215" d="M165.685,33.636a5.327,5.327,0,0,1,3.122,3.014l1.442,3.616a1.531,1.531,0,0,0,1.43.969h.006a1.531,1.531,0,0,0,1.428-.98l1.4-3.582a5.3,5.3,0,0,1,3.107-3.046,17.385,17.385,0,0,0,8.255-26.233,1.172,1.172,0,0,0-1.922,1.342,15.1,15.1,0,0,1-7.143,22.692,7.647,7.647,0,0,0-4.481,4.394L171.67,37.5l-.686-1.72a7.674,7.674,0,0,0-4.493-4.347,15.007,15.007,0,1,1,13.941-26.27,1.172,1.172,0,0,0,1.37-1.9,17.354,17.354,0,1,0-16.117,30.372Z" transform="translate(-130.185 -0.001)"></path>       <path id="Caminho_39216" data-name="Caminho 39216" d="M118.01,394a3.52,3.52,0,0,0-3.516,3.516v5a3.516,3.516,0,0,0,7.032,0v-5A3.52,3.52,0,0,0,118.01,394Zm1.172,8.516a1.172,1.172,0,0,1-2.344,0v-5a1.172,1.172,0,0,1,2.344,0Z" transform="translate(-96.604 -332.438)"></path>       <path id="Caminho_39217" data-name="Caminho 39217" d="M174,397.613v5a3.516,3.516,0,0,0,7.032,0v-5A3.516,3.516,0,0,0,174,397.613Zm4.688,0v5a1.172,1.172,0,0,1-2.344,0v-5A1.172,1.172,0,0,1,178.684,397.613Z" transform="translate(-146.809 -332.535)"></path>       <path id="Caminho_39218" data-name="Caminho 39218" d="M233.5,397.613v5a3.516,3.516,0,0,0,7.032,0v-5a3.516,3.516,0,0,0-7.032,0Zm4.688,0v5a1.172,1.172,0,0,1-2.344,0v-5A1.172,1.172,0,0,1,238.187,397.613Z" transform="translate(-197.015 -332.535)"></path>       <path id="Caminho_39219" data-name="Caminho 39219" d="M296.517,394A3.52,3.52,0,0,0,293,397.516v5a3.516,3.516,0,0,0,7.032,0v-5A3.52,3.52,0,0,0,296.517,394Zm1.172,8.516a1.172,1.172,0,0,1-2.344,0v-5a1.172,1.172,0,0,1,2.344,0Z" transform="translate(-247.22 -332.438)"></path>       <path id="Caminho_39220" data-name="Caminho 39220" d="M356.02,394a3.52,3.52,0,0,0-3.516,3.516v5a3.516,3.516,0,0,0,7.032,0v-5A3.52,3.52,0,0,0,356.02,394Zm1.172,8.516a1.172,1.172,0,0,1-2.344,0v-5a1.172,1.172,0,0,1,2.344,0Z" transform="translate(-297.425 -332.438)"></path>       <path id="Caminho_39221" data-name="Caminho 39221" d="M228.438,67.466a1.172,1.172,0,0,0,1.653.114l4.661-4.058a1.179,1.179,0,0,0,0-1.769l-4.661-4.044a1.172,1.172,0,0,0-1.536,1.77l2.29,1.987H225.05a5.733,5.733,0,0,0-5.726,5.726v4.492a1.172,1.172,0,0,0,2.344,0V67.192a3.386,3.386,0,0,1,3.382-3.382h5.8l-2.3,2A1.172,1.172,0,0,0,228.438,67.466Z" transform="translate(-185.055 -48.45)" fill="#fff"></path>       <path id="Caminho_39222" data-name="Caminho 39222" d="M78.975,188.063a3.523,3.523,0,0,0-4.959,0L58.165,203.914l-.052,0H31.818a1.172,1.172,0,0,0,0,2.344H55.824L53.478,208.6l-.031,0H26.521l-2.344-2.344h1.885a1.172,1.172,0,0,0,0-2.344H21.833L5.984,188.063a3.506,3.506,0,1,0-4.959,4.958l10.89,10.89H6.093a3.516,3.516,0,0,0,0,7.031H7.4l2.418,20.245a7.526,7.526,0,0,0,7.469,6.63H62.717a7.526,7.526,0,0,0,7.469-6.63l.035-.293a1.172,1.172,0,0,0-2.327-.278l-.035.293a5.181,5.181,0,0,1-5.142,4.564H17.283a5.181,5.181,0,0,1-5.142-4.564L9.757,210.943h9.19l5.848,5.848a3.506,3.506,0,1,0,4.959-4.958l-.89-.89H51.136l-.89.89a3.51,3.51,0,0,0,0,4.958h0a3.523,3.523,0,0,0,4.959,0l5.886-5.886a1.173,1.173,0,0,0,.292.038h8.861l-1.689,14.141a1.172,1.172,0,0,0,2.327.278L72.6,210.943h1.3a3.516,3.516,0,0,0,0-7.031H68.085l10.89-10.89a3.51,3.51,0,0,0,0-4.958ZM6.093,208.6a1.172,1.172,0,0,1,0-2.344h8.167L16.6,208.6Zm22,6.534h0a1.168,1.168,0,0,1-1.644,0L2.683,191.365a1.162,1.162,0,1,1,1.644-1.644L28.1,213.489A1.164,1.164,0,0,1,28.1,215.133Zm45.811-8.878a1.172,1.172,0,0,1,0,2.344H63.4l2.344-2.344Zm3.41-14.891-23.77,23.769a1.168,1.168,0,0,1-1.644,0h0a1.164,1.164,0,0,1,0-1.644l23.77-23.769a1.162,1.162,0,0,1,1.644,1.644Z" transform="translate(0 -157.818)"></path>     </g>   </g> </svg>
          <span>
         <strong>Valor mínimo</strong> <br />
          para entrega
          </span>
        </div>
        <p>
        Quer oferecer frete grátis a partir de um determinado valor? Aqui é possível e super fácil de configurar!
        </p>
       </div>
      </div>
     </S.Main3>

     <S.Main4 ref={section2Ref}>
      <h2>
       Sua Loja do seu jeito, mais fácil do que você pensa.
      </h2>

      <ul>
       <li>
        <svg id="Page-1" xmlns="http://www.w3.org/2000/svg" width="33.333" height="40" viewBox="0 0 33.333 40">   <g id="_124---Script-Folder" data-name="124---Script-Folder" transform="translate(0)">     <path id="Shape" d="M6,40H30a3.337,3.337,0,0,0,3.333-3.333V6a3.333,3.333,0,0,0-2.728-3.272A3.333,3.333,0,0,0,27.333,0h-18a.667.667,0,0,0-.471.2L.2,8.862a.667.667,0,0,0-.2.471V34a3.333,3.333,0,0,0,2.728,3.272A3.333,3.333,0,0,0,6,40ZM32,6V36.667a2,2,0,0,1-2,2H6a2,2,0,0,1-1.877-1.333H27.333A3.337,3.337,0,0,0,30.667,34V4.123A2,2,0,0,1,32,6ZM8.667,2.276V6.667a2,2,0,0,1-2,2H2.276ZM1.333,34V10H6.667A3.337,3.337,0,0,0,10,6.667V1.333H27.333a2,2,0,0,1,2,2V34a2,2,0,0,1-2,2h-24A2,2,0,0,1,1.333,34Z" transform="translate(0)" fill="#ff9100"></path>     <path id="Shape-2" data-name="Shape" d="M28.667,5.333h4a.667.667,0,0,0,0-1.333h-4a.667.667,0,1,0,0,1.333Z" transform="translate(-9.333 -1.333)" fill="#0074FF"></path>     <path id="Shape-3" data-name="Shape" d="M38.667,5.333H40A.667.667,0,1,0,40,4H38.667a.667.667,0,1,0,0,1.333Z" transform="translate(-12.667 -1.333)" fill="#0074FF"></path>     <path id="Shape-4" data-name="Shape" d="M9.667,22c.763,0,1.333.387,1.333.733V24.6c0,1.159,1.171,2.067,2.667,2.067a.667.667,0,1,0,0-1.333c-.763,0-1.333-.387-1.333-.733V22.733a1.831,1.831,0,0,0-.7-1.4,1.831,1.831,0,0,0,.7-1.4V18.067c0-.347.57-.733,1.333-.733a.667.667,0,1,0,0-1.333c-1.5,0-2.667.907-2.667,2.067v1.867c0,.347-.57.733-1.333.733a.667.667,0,1,0,0,1.333Z" transform="translate(-3 -5.333)" fill="#0074FF"></path>     <path id="Shape-5" data-name="Shape" d="M34.333,18.067c0-1.159-1.171-2.067-2.667-2.067a.667.667,0,1,0,0,1.333c.763,0,1.333.387,1.333.733v1.867a1.831,1.831,0,0,0,.7,1.4,1.831,1.831,0,0,0-.7,1.4V24.6c0,.347-.57.733-1.333.733a.667.667,0,1,0,0,1.333c1.5,0,2.667-.907,2.667-2.067V22.733c0-.347.57-.733,1.333-.733a.667.667,0,0,0,0-1.333c-.763,0-1.333-.387-1.333-.733Z" transform="translate(-10.333 -5.333)" fill="#0074FF"></path>     <ellipse id="Oval" cx="0.5" cy="1" rx="0.5" ry="1" transform="translate(13 17)" fill="#0074FF"></ellipse>     <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(15 17)" fill="#0074FF"></circle>     <ellipse id="Oval-3" data-name="Oval" cx="0.5" cy="1" rx="0.5" ry="1" transform="translate(18 17)" fill="#0074FF"></ellipse>     <path id="Shape-6" data-name="Shape" d="M5.667,38.333h.667a.667.667,0,1,0,0-1.333H5.667a.667.667,0,1,0,0,1.333Z" transform="translate(-1.667 -12.333)" fill="#0074FF"></path>     <path id="Shape-7" data-name="Shape" d="M10.667,38.333h6a.667.667,0,1,0,0-1.333h-6a.667.667,0,1,0,0,1.333Z" transform="translate(-3.333 -12.333)" fill="#0074FF"></path>     <path id="Shape-8" data-name="Shape" d="M34.667,37h-10a.667.667,0,1,0,0,1.333h10a.667.667,0,1,0,0-1.333Z" transform="translate(-8 -12.333)" fill="#0074FF"></path>     <path id="Shape-9" data-name="Shape" d="M5.667,43.333h.667a.667.667,0,0,0,0-1.333H5.667a.667.667,0,0,0,0,1.333Z" transform="translate(-1.667 -14)" fill="#0074FF"></path>     <path id="Shape-10" data-name="Shape" d="M36.667,42h-6a.667.667,0,0,0,0,1.333h6a.667.667,0,1,0,0-1.333Z" transform="translate(-10 -14)" fill="#0074FF"></path>     <path id="Shape-11" data-name="Shape" d="M10.667,43.333h10a.667.667,0,0,0,0-1.333h-10a.667.667,0,0,0,0,1.333Z" transform="translate(-3.333 -14)" fill="#ff9100"></path>     <path id="Shape-12" data-name="Shape" d="M5.667,48.333h.667a.667.667,0,0,0,0-1.333H5.667a.667.667,0,0,0,0,1.333Z" transform="translate(-1.667 -15.667)" fill="#0074FF"></path>     <path id="Shape-13" data-name="Shape" d="M16.667,47h-6a.667.667,0,0,0,0,1.333h6a.667.667,0,0,0,0-1.333Z" transform="translate(-3.333 -15.667)" fill="#0074FF"></path>     <path id="Shape-14" data-name="Shape" d="M34.667,47h-10a.667.667,0,0,0,0,1.333h10a.667.667,0,1,0,0-1.333Z" transform="translate(-8 -15.667)" fill="#ff9100"></path>   </g> </svg>
        <span>
        <strong>Script </strong> Customizável
        </span>
        <p>Agora, na aba <strong>Layout</strong>, adicionamos o campo <strong>Script Customizado</strong>, permitindo a inclusão de plugins de chat ou até mesmo a configuração do <strong>Google Analytics</strong> para sua loja.</p>

       </li>

       <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="44.718" height="40" viewBox="0 0 44.718 40">   <g id="www" transform="translate(0 -0.5)">     <path id="Caminho_38967" data-name="Caminho 38967" d="M229.69,168.5a7.686,7.686,0,1,0,7.686,7.686A7.695,7.695,0,0,0,229.69,168.5Zm0,13.625a5.939,5.939,0,1,1,5.939-5.939A5.946,5.946,0,0,1,229.69,182.125Zm0,0" transform="translate(-202.615 -153.327)" fill="#0074FF"></path>     <path id="Caminho_38968" data-name="Caminho 38968" d="M300.877,211.5a.873.873,0,1,0,0,1.747,2.186,2.186,0,0,1,2.183,2.183.873.873,0,1,0,1.747,0A3.934,3.934,0,0,0,300.877,211.5Zm0,0" transform="translate(-273.802 -192.575)" fill="#0074FF"></path>     <path id="Caminho_38969" data-name="Caminho 38969" d="M44.411,70.969a.873.873,0,1,0-1.551.8l2.351,4.542a.873.873,0,0,0,1.563-.024L48.2,73.327l1.546,2.987a.874.874,0,0,0,.776.472h.013a.874.874,0,0,0,.774-.5l2.181-4.542a.873.873,0,1,0-1.575-.756l-1.423,2.963-1.546-2.987a.873.873,0,0,0-1.563.024l-1.423,2.963Zm0,0" transform="translate(-39.027 -63.883)" fill="#fd9542"></path>     <path id="Caminho_38970" data-name="Caminho 38970" d="M116.861,2.247a.874.874,0,1,0-.617-.256A.88.88,0,0,0,116.861,2.247Zm0,0" transform="translate(-105.858)" fill="#0074FF"></path>     <path id="Caminho_38971" data-name="Caminho 38971" d="M44.717,15.522V3.994A3.5,3.5,0,0,0,41.224.5H14.672a.873.873,0,1,0,0,1.747H41.224a1.749,1.749,0,0,1,1.747,1.747V15.522a1.749,1.749,0,0,1-1.747,1.747H37.032c-.025,0-.05,0-.074,0a11.415,11.415,0,0,0-6.139-5.134l1.295-2.7,1.546,2.987a.873.873,0,0,0,.775.472h.013a.874.874,0,0,0,.774-.5L37.4,7.865a.873.873,0,0,0-1.575-.756l-1.423,2.963L32.859,7.086a.874.874,0,0,0-1.563.024l-1.423,2.963L28.327,7.086a.874.874,0,0,0-1.552.8l1.933,3.734a11.372,11.372,0,0,0-4.731.312l1.955-4.069a.873.873,0,0,0-1.574-.756l-1.423,2.963L21.388,7.086a.874.874,0,0,0-1.563.024L18.4,10.073,16.855,7.086a.873.873,0,0,0-1.551.8l.809,1.562,1.542,2.979a.873.873,0,0,0,1.563-.024l1.423-2.963,1.546,2.987a.853.853,0,0,0,.092.139,11.43,11.43,0,0,0-5.084,4.7H3.493a1.749,1.749,0,0,1-1.747-1.747V3.994A1.749,1.749,0,0,1,3.493,2.247h3.58A.873.873,0,1,0,7.073.5H3.493A3.5,3.5,0,0,0,0,3.994V15.522a3.5,3.5,0,0,0,3.494,3.494h12.9A11.352,11.352,0,0,0,32.73,32.7l6.932,6.932a2.962,2.962,0,0,0,4.188-4.189l-2.724-2.724a.873.873,0,0,0-1.235,1.235l2.724,2.724A1.215,1.215,0,0,1,40.9,38.4l-6.7-6.7a11.344,11.344,0,0,0,3.565-12.681h3.465a3.5,3.5,0,0,0,3.494-3.494ZM27.075,32.466a9.607,9.607,0,1,1,9.607-9.607A9.618,9.618,0,0,1,27.075,32.466Zm0,0" fill="#fd9542"></path>     <path id="Caminho_38972" data-name="Caminho 38972" d="M430.346,343.037a.873.873,0,1,0,.618-.256A.88.88,0,0,0,430.346,343.037Zm0,0" transform="translate(-392.527 -312.387)" fill="#0074FF"></path>   </g> </svg>
        <span>
        <strong>Domínio </strong> Próprio
        </span>
        <p>Na <strong>Blue ERP</strong>, você pode usar o seu próprio domínio, como <strong>sualoja.com.br</strong>. Se ainda não tiver um domínio, pode optar por um domínio padrão da loja: <strong>sualoja.sigeloja.com.br</strong>. Com o Lite, estar online nunca foi tão fácil!</p>

        <p>
          
        </p>
       </li>

       <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="46.154" height="40" viewBox="0 0 46.154 40">   <g id="responsive" transform="translate(0 -32)">     <g id="Grupo_8054" data-name="Grupo 8054" transform="translate(0 32)">       <g id="Grupo_8053" data-name="Grupo 8053" transform="translate(0 0)">         <path id="Caminho_38973" data-name="Caminho 38973" d="M43.846,52h-.769V35.846A3.851,3.851,0,0,0,39.231,32H6.923a3.851,3.851,0,0,0-3.846,3.846V47.385H2.308A2.308,2.308,0,0,0,0,49.692v20A2.308,2.308,0,0,0,2.308,72H31.538a.769.769,0,0,0,.769-.769,3.851,3.851,0,0,0-3.846-3.846H26.154V62.769h9.231v6.923A2.308,2.308,0,0,0,37.692,72h6.154a2.308,2.308,0,0,0,2.308-2.308V54.308A2.308,2.308,0,0,0,43.846,52ZM16.923,69.692a.769.769,0,0,1-.769.769H2.308a.769.769,0,0,1-.769-.769v-.769H16.923Zm0-2.308H1.538V49.692a.769.769,0,0,1,.769-.769H16.154a.769.769,0,0,1,.769.769Zm11.538,1.538a2.312,2.312,0,0,1,2.176,1.538H18.32a2.281,2.281,0,0,0,.142-.769v-.769Zm-10-1.538V62.769H20v4.615Zm3.077,0V62.769h3.077v4.615Zm13.846-6.154H18.462V56.615H35.385Zm0-6.923v.769H18.462V49.692a2.28,2.28,0,0,0-.263-1.047c.012-.011.027-.014.038-.025L25.852,41a.769.769,0,0,0-1.088-1.088l-7.615,7.615c-.018.019-.026.044-.042.064a2.279,2.279,0,0,0-.952-.212H4.615V35.846a2.308,2.308,0,0,1,2.308-2.308H39.231a2.308,2.308,0,0,1,2.308,2.308V52H37.692A2.308,2.308,0,0,0,35.385,54.308Zm9.231,15.385a.769.769,0,0,1-.769.769H37.692a.769.769,0,0,1-.769-.769v-.769h7.692Zm0-2.308H36.923V54.308a.769.769,0,0,1,.769-.769h6.154a.769.769,0,0,1,.769.769Z" transform="translate(0 -32)" fill="#fd9542"></path>       </g>     </g>     <g id="Grupo_8056" data-name="Grupo 8056" transform="translate(4.606 56.522)">       <g id="Grupo_8055" data-name="Grupo 8055" transform="translate(0 0)">         <path id="Caminho_38974" data-name="Caminho 38974" d="M52.487,287.259a.769.769,0,0,0-1.088,0l-3.263,3.263a.769.769,0,0,0,1.069,1.107l.019-.019,3.263-3.263C52.625,288.109,52.349,287.656,52.487,287.259Z" transform="translate(-47.902 -287.034)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8058" data-name="Grupo 8058" transform="translate(9.221 56.532)">       <g id="Grupo_8057" data-name="Grupo 8057" transform="translate(0 0)">         <path id="Caminho_38975" data-name="Caminho 38975" d="M100.469,287.346a.769.769,0,0,0-1.069,0l-3.263,3.263a.769.769,0,0,0,1.069,1.107l.019-.019,3.263-3.263A.769.769,0,0,0,100.469,287.346Z" transform="translate(-95.902 -287.131)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8060" data-name="Grupo 8060" transform="translate(21.606 39.702)">       <g id="Grupo_8059" data-name="Grupo 8059">         <path id="Caminho_38976" data-name="Caminho 38976" d="M233.621,112.314a.769.769,0,0,0-1.069,0l-7.615,7.615a.769.769,0,1,0,1.069,1.107l.019-.019,7.615-7.615A.769.769,0,0,0,233.621,112.314Z" transform="translate(-224.702 -112.098)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8062" data-name="Grupo 8062" transform="translate(38.903 58.614)">       <g id="Grupo_8061" data-name="Grupo 8061">         <path id="Caminho_38977" data-name="Caminho 38977" d="M408.069,309A.769.769,0,0,0,407,309l-2.175,2.175a.769.769,0,1,0,1.069,1.107l.019-.019,2.175-2.175A.769.769,0,0,0,408.069,309Z" transform="translate(-404.59 -308.786)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8064" data-name="Grupo 8064" transform="translate(22.319 58.154)">       <g id="Grupo_8063" data-name="Grupo 8063" transform="translate(0 0)">         <path id="Caminho_38978" data-name="Caminho 38978" d="M232.893,304h-.008a.773.773,0,1,0,.008,0Z" transform="translate(-232.12 -304)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_8066" data-name="Grupo 8066" transform="translate(20.769 35.077)">       <g id="Grupo_8065" data-name="Grupo 8065" transform="translate(0 0)">         <path id="Caminho_38979" data-name="Caminho 38979" d="M219.846,64h-3.077a.769.769,0,1,0,0,1.538h3.077a.769.769,0,0,0,0-1.538Z" transform="translate(-216 -64)" fill="#0074FF"></path>       </g>     </g>   </g> </svg>
        <span>
        <strong>Layout </strong> Responsivo
        </span>

        <p>Com apenas um <strong>clique</strong>, você escolhe o layout ideal para sua loja! Todos os layouts são <strong>responsivos</strong>, garantindo que seus clientes acessem sua loja de forma perfeita em <strong>computadores</strong>, celulares e tablets.</p>

       </li>

       <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="30.706" height="40" viewBox="0 0 30.706 40">   <g id="chat_1_" data-name="chat (1)" transform="translate(-59.459)">     <g id="Grupo_8067" data-name="Grupo 8067" transform="translate(59.459 0)">       <path id="Caminho_38980" data-name="Caminho 38980" d="M176.622,31.46h3.743a.585.585,0,1,0,0-1.17h-3.743a.585.585,0,0,0,0,1.17Z" transform="translate(-166.926 -27.923)" fill="#fd9542"></path>       <path id="Caminho_38981" data-name="Caminho 38981" d="M131.142,363.45h10.852a.585.585,0,1,0,0-1.17H131.142a.585.585,0,1,0,0,1.17Z" transform="translate(-125 -333.965)" fill="#fd9542"></path>       <path id="Caminho_38982" data-name="Caminho 38982" d="M131.142,394.47h10.852a.585.585,0,0,0,0-1.17H131.142a.585.585,0,0,0,0,1.17Z" transform="translate(-125 -362.56)" fill="#fd9542"></path>       <path id="Caminho_38983" data-name="Caminho 38983" d="M131.142,425.49h10.852a.585.585,0,0,0,0-1.17H131.142a.585.585,0,0,0,0,1.17Z" transform="translate(-125 -391.156)" fill="#fd9542"></path>       <path id="Caminho_38984" data-name="Caminho 38984" d="M87.894,9.84a.585.585,0,0,0-.924.719A9.633,9.633,0,0,1,75.734,25.388a1.615,1.615,0,0,0-.612-.122h0l-3.675,0h0a.491.491,0,0,1-.491-.518l.152-2.811a1.592,1.592,0,0,0-.193-.852,9.632,9.632,0,0,1,8.444-14.25h.006a9.546,9.546,0,0,1,5.787,1.932.585.585,0,0,0,.7-.935,10.734,10.734,0,0,0-3.26-1.676V2.96A2.963,2.963,0,0,0,79.635,0H62.419a2.963,2.963,0,0,0-2.96,2.96V37.04A2.963,2.963,0,0,0,62.419,40H79.635a2.963,2.963,0,0,0,2.96-2.96V26.774a10.8,10.8,0,0,0,5.3-16.934Zm-6.469,27.2a1.792,1.792,0,0,1-1.79,1.79H62.419a1.792,1.792,0,0,1-1.79-1.79V2.96a1.792,1.792,0,0,1,1.79-1.79H79.635a1.792,1.792,0,0,1,1.79,1.79v2.9a10.862,10.862,0,0,0-1.557-.184v-1.8a1.51,1.51,0,0,0-1.508-1.508H76.552a1.514,1.514,0,0,0-1.3.743L74.62,4.185a.339.339,0,0,1-.291.166h-6.6a.339.339,0,0,1-.291-.166L66.8,3.11a1.514,1.514,0,0,0-1.3-.743H63.695a1.51,1.51,0,0,0-1.508,1.508V23.233a.585.585,0,1,0,1.17,0V3.876a.338.338,0,0,1,.338-.338H65.5a.339.339,0,0,1,.291.166l.632,1.074a1.514,1.514,0,0,0,1.3.743h6.6a1.514,1.514,0,0,0,1.3-.743L76.26,3.7a.339.339,0,0,1,.291-.166h1.807a.338.338,0,0,1,.338.338V5.687a10.8,10.8,0,0,0-8.809,15.962.424.424,0,0,1,.051.227l-.152,2.811a1.661,1.661,0,0,0,1.659,1.751h0l3.675,0h0a.452.452,0,0,1,.17.035,10.7,10.7,0,0,0,3.4.774v8.879a.338.338,0,0,1-.338.338H63.695a.338.338,0,0,1-.338-.338V25.963a.585.585,0,1,0-1.17,0V36.124a1.51,1.51,0,0,0,1.508,1.508H78.359a1.51,1.51,0,0,0,1.508-1.508v-8.87a10.819,10.819,0,0,0,1.557-.185Z" transform="translate(-59.459 0)" fill="#fd9542"></path>       <path id="Caminho_38985" data-name="Caminho 38985" d="M208.531,119.684a.929.929,0,0,0,.672.289l3.3,0a2.588,2.588,0,0,1,.7.242,8.31,8.31,0,0,0,8.46-2.106,8.338,8.338,0,1,0-13.258-1.841.174.174,0,0,1,.019.093l-.143,2.64A.928.928,0,0,0,208.531,119.684Zm.02-7.65a7.169,7.169,0,1,1,4.466,6.869,1.367,1.367,0,0,0-.518-.1h0l-3.037,0,.129-2.381a1.343,1.343,0,0,0-.162-.719A7.178,7.178,0,0,1,208.551,112.034Z" transform="translate(-195.817 -95.791)" fill="#0074FF"></path>       <path id="Caminho_38986" data-name="Caminho 38986" d="M254,155.928a4.571,4.571,0,0,0,1.881.431,4.083,4.083,0,0,0,3-1.379,2.078,2.078,0,0,0,.6-1.606,1.561,1.561,0,0,0-.691-1.134l-.018-.013c-.618-.423-1.768-1.211-2.765-.445a2.873,2.873,0,0,0-.505.528c-.2.255-.27.322-.428.345a1.582,1.582,0,0,1-1.119-.611,3.269,3.269,0,0,1-.819-1.326.421.421,0,0,1,.075-.354c.108-.17.34-.272.488-.407a1.836,1.836,0,0,0-.071-2.543c-1.228-1.609-2.361-1.135-2.928-.709a3.322,3.322,0,0,0-1.181,1.808,5.207,5.207,0,0,0,.691,4.05A8.881,8.881,0,0,0,254,155.928Zm-3.352-7.113a2.15,2.15,0,0,1,.753-1.173.674.674,0,0,1,.407-.176c.214,0,.5.148.887.659.181.237.459.745.213.968a1.753,1.753,0,0,1-.162.125,1.793,1.793,0,0,0-.525.519,1.584,1.584,0,0,0-.228,1.245c.259,1.124,1.772,3.048,3.248,2.833a1.758,1.758,0,0,0,1.176-.777,1.828,1.828,0,0,1,.3-.326c.3-.229.851.112,1.39.482l.018.013a.384.384,0,0,1,.189.291.932.932,0,0,1-.286.677,2.88,2.88,0,0,1-3.549.688,7.668,7.668,0,0,1-3.272-2.905A4.052,4.052,0,0,1,250.653,148.814Z" transform="translate(-234.525 -134.86)" fill="#0074FF"></path>     </g>   </g> </svg>
        <span>
        Botão de <strong> WhatsApp</strong>
        </span>

        <p>Para oferecer aos seus clientes um canal de atendimento <strong>rápido</strong> e <strong>prático</strong> para esclarecer dúvidas sobre seus produtos ou serviços, disponibilizamos o recurso do <strong>botão de WhatsApp</strong>, que aparece na sua loja de forma simples e eficiente.</p>

       </li>
      </ul>

      <Link to="/baixar-blue-lite">
            <button>
            Download Grátis
        </button>
        </Link>
     </S.Main4>

     <S.Main5 ref={section3Ref}>
      <img src={BackP} alt="" className="back"/>

      <div className="left">
        <img src={ImageBank} alt="image" />
       </div>

       <div className="right">
        <h2>
        
Integração com <br />
<strong> Plataformas de Pagamento </strong>
        </h2>

      
        <p>
        Além de contar com nossa própria plataforma de pagamento integrada,
         que facilita o registro de seus recebimentos,
         a Blue ERP permite a integração da sua loja online com outras soluções como <strong> PagSeguro </strong> ,
        <strong> Cielo </strong>, <strong> Pagar.me </strong> e <strong> PagHiper </strong>. Com isso, os recebimentos da sua Blue Loja serão processados automaticamente, garantindo mais agilidade e eficiência.
         Ganhe tempo com cobranças automáticas!
        </p>

      
        <Link to="/baixar-blue-lite">
        <button>
            Download Grátis
        </button>
        </Link>
       </div>
     </S.Main5>

     <S.Main6 ref={section4Ref}>
      <img src={ImageErp} alt="" />

      <div className="texts">
        <h2>
        <strong> Sua loja vendendo por atacado ou varejo </strong> com nossa ferramenta de tabelas de preço
        </h2>

        <p>
         Na Loja Virtual do <strong>Blue Lite</strong>, você tem a possibilidade de carregar <strong>tabelas de preço promocionais</strong>. Com isso, pode criar <strong>promoções</strong> na sua loja online de maneira ágil e prática, permitindo que os clientes vejam os produtos com suas descrições, o preço original e o valor promocional. Afinal, quem não gosta de aproveitar um desconto, uma vantagem ou um benefício especial, não é mesmo?
        </p>

        <Link to="/baixar-blue-lite">
        <button>
            Download Grátis
        </button>
        </Link>
      </div>
     </S.Main6>

     <S.Main5 ref={section5Ref}>
      <img src={BackLoja} alt="" className="back"/>

      <div className="left">
        <img src={ImageLoja} alt="image" />
       </div>

       <div className="right">
       <h2>
        <strong> Anuncie serviços </strong> e permita que seus clientes solicitem orçamento!
        </h2>
      
        <p>
Se você não possui um comércio, mas deseja divulgar seus serviços, que tal usar a <strong>Blue Loja</strong> como sua vitrine virtual? Com ela, é possível anunciar tanto <strong>serviços</strong> quanto produtos, permitindo que os clientes solicitem orçamentos de forma simples. O melhor de tudo é que você pode responder diretamente por <strong>e-mail</strong>, garantindo mais praticidade para aumentar seus lucros!
</p>

      
<Link to="/baixar-blue-lite">
        <button>
            Download Grátis
        </button>
        </Link>
       </div>
     </S.Main5>

     <S.Main7 ref={section6Ref}>
      <h2>
      <strong>Levamos a sério </strong> aumentar as vendas da sua empresa!
      </h2>

      <div className="cardLeft">
        <div className="Image">
<svg xmlns="http://www.w3.org/2000/svg" width="121.251" height="100" viewBox="0 0 121.251 100">   <g id="laptop_3_" data-name="laptop (3)" transform="translate(0 -44.868)">     <g id="Grupo_8113" data-name="Grupo 8113" transform="translate(0 44.868)">       <path id="Caminho_39261" data-name="Caminho 39261" d="M117,199.67V177.625a2.368,2.368,0,0,0-2.368-2.368h-6.58v-1.238a7.927,7.927,0,0,0-15.855,0v1.238H85.66a2.368,2.368,0,0,0-2.368,2.368V199.67a7.435,7.435,0,0,0,7.426,7.426h18.858A7.434,7.434,0,0,0,117,199.67ZM96.936,174.019a3.191,3.191,0,0,1,6.382,0v1.238H96.936ZM88.028,199.67V179.993H92.2v2.373a2.368,2.368,0,1,0,4.736,0v-2.373h6.382v2.373a2.368,2.368,0,1,0,4.736,0v-2.373h4.211V199.67a2.693,2.693,0,0,1-2.69,2.69H90.718A2.693,2.693,0,0,1,88.028,199.67Z" transform="translate(-63.567 -137.414)" fill="#fd9542"></path>       <path id="Caminho_39262" data-name="Caminho 39262" d="M118.883,122.8h-2.222V54.518a9.661,9.661,0,0,0-9.65-9.65H14.24a9.661,9.661,0,0,0-9.65,9.65V122.8H2.368A2.368,2.368,0,0,0,0,125.173v8.858a10.849,10.849,0,0,0,10.837,10.837h99.578a10.849,10.849,0,0,0,10.837-10.837v-8.858A2.368,2.368,0,0,0,118.883,122.8ZM14.24,49.6h92.771a4.919,4.919,0,0,1,4.913,4.913V61.11H9.327V54.518A4.919,4.919,0,0,1,14.24,49.6ZM9.327,65.846h102.6V122.8H77.767a2.368,2.368,0,0,0-2.368,2.368,2.746,2.746,0,0,1-2.743,2.743H48.6a2.746,2.746,0,0,1-2.743-2.743,2.368,2.368,0,0,0-2.368-2.368H9.327Zm107.188,68.185a6.107,6.107,0,0,1-6.1,6.1H10.837a6.107,6.107,0,0,1-6.1-6.1v-6.49H41.5a7.493,7.493,0,0,0,7.1,5.111H72.656a7.493,7.493,0,0,0,7.1-5.111h36.764Z" transform="translate(0 -44.868)" fill="#ffd4c5"></path>       <path id="Caminho_39263" data-name="Caminho 39263" d="M242.751,82.715h2.66a2.368,2.368,0,1,0,0-4.736h-2.66a2.368,2.368,0,0,0,0,4.736Z" transform="translate(-183.456 -70.138)" fill="#fd9542"></path>     </g>     <g id="Grupo_8116" data-name="Grupo 8116" transform="translate(64.546 77.912)">       <g id="Grupo_8114" data-name="Grupo 8114" transform="translate(0 20.718)">         <path id="Caminho_39264" data-name="Caminho 39264" d="M272.553,271.886h37.939v11.907H272.553Z" transform="translate(-272.553 -271.886)" fill="#fd9542"></path>       </g>       <g id="Grupo_8115" data-name="Grupo 8115">         <path id="Caminho_39265" data-name="Caminho 39265" d="M272.553,184.4h37.939V196.31H272.553Z" transform="translate(-272.553 -184.403)" fill="#fd9542"></path>       </g>     </g>   </g> </svg>
        </div>

        <h3>
          Histórico de Compras
        </h3>

        <p>
         Se você não possui um comércio, mas deseja divulgar seus serviços, que tal usar a <strong>Blue Loja</strong> como sua vitrine virtual? Com ela, é possível anunciar tanto <strong>serviços</strong> quanto produtos, permitindo que os clientes solicitem orçamentos de forma simples. O melhor de tudo é que você pode responder diretamente por <strong>e-mail</strong>, garantindo mais praticidade para aumentar seus lucros!
        </p>

      </div>

      <div className="cardRight">
        <div className="Image">
<svg xmlns="http://www.w3.org/2000/svg" width="106.607" height="100" viewBox="0 0 106.607 100">   <g id="boxes_4_" data-name="boxes (4)" transform="translate(0 -15.866)">     <g id="Grupo_8111" data-name="Grupo 8111" transform="translate(15.486 46.843)">       <path id="Caminho_39254" data-name="Caminho 39254" d="M197.374,164.64h24.175v17.746H197.374Z" transform="translate(-171.763 -164.64)" fill="#fd9542"></path>       <g id="Grupo_8109" data-name="Grupo 8109" transform="translate(0 47.918)">         <path id="Caminho_39255" data-name="Caminho 39255" d="M74.374,394.774H98.549v18.465H74.374Z" transform="translate(-74.374 -394.774)" fill="#fd9542"></path>       </g>       <g id="Grupo_8110" data-name="Grupo 8110" transform="translate(51.222 47.918)">         <path id="Caminho_39256" data-name="Caminho 39256" d="M320.374,394.774h24.175v18.487H320.374Z" transform="translate(-320.374 -394.774)" fill="#fd9542"></path>       </g>     </g>     <g id="Grupo_8112" data-name="Grupo 8112" transform="translate(0 15.866)">       <path id="Caminho_39257" data-name="Caminho 39257" d="M90.965,286.774a2.082,2.082,0,0,0-2.082,2.082v2.617H69.024v-2.617a2.082,2.082,0,0,0-4.164,0v4.7a2.082,2.082,0,0,0,2.082,2.082H90.965a2.082,2.082,0,0,0,2.082-2.082v-4.7A2.082,2.082,0,0,0,90.965,286.774Z" transform="translate(-51.355 -230.366)" fill="#ffd4c5"></path>       <path id="Caminho_39258" data-name="Caminho 39258" d="M100.5,63.784H80.679A6.089,6.089,0,0,0,81,61.839V21.976a6.117,6.117,0,0,0-6.11-6.11H31.721a6.117,6.117,0,0,0-6.11,6.11V61.839a6.083,6.083,0,0,0,.318,1.945H6.11A6.117,6.117,0,0,0,0,69.894v39.863a6.117,6.117,0,0,0,6.11,6.11H49.276a6.084,6.084,0,0,0,4.027-1.519,6.071,6.071,0,0,0,4.022,1.519H100.5a6.117,6.117,0,0,0,6.1-6.116V69.9a6.117,6.117,0,0,0-6.1-6.116ZM29.775,61.839V21.976A1.948,1.948,0,0,1,31.72,20.03H74.887a1.948,1.948,0,0,1,1.945,1.945V61.839a1.948,1.948,0,0,1-1.945,1.945H31.72a1.948,1.948,0,0,1-1.945-1.945Zm21.446,47.918a1.948,1.948,0,0,1-1.945,1.945H6.11a1.948,1.948,0,0,1-1.945-1.945V69.894A1.948,1.948,0,0,1,6.11,67.948H49.276a1.948,1.948,0,0,1,1.945,1.945Zm51.222-.006A1.948,1.948,0,0,1,100.5,111.7H57.325a1.948,1.948,0,0,1-1.939-1.952V69.9a1.948,1.948,0,0,1,1.939-1.952H100.5a1.948,1.948,0,0,1,1.939,1.952v39.85Z" transform="translate(0 -15.866)" fill="#ffd4c5"></path>       <path id="Caminho_39259" data-name="Caminho 39259" d="M336.965,286.774a2.082,2.082,0,0,0-2.082,2.082v2.617H315.024v-2.617a2.082,2.082,0,0,0-4.164,0v4.7a2.082,2.082,0,0,0,2.082,2.082h24.022a2.082,2.082,0,0,0,2.082-2.082v-4.7A2.082,2.082,0,0,0,336.965,286.774Z" transform="translate(-246.134 -230.366)" fill="#ffd4c5"></path>       <path id="Caminho_39260" data-name="Caminho 39260" d="M216.047,63.421v-4.7a2.082,2.082,0,1,0-4.164,0v2.617H192.024V58.722a2.082,2.082,0,1,0-4.164,0v4.7a2.082,2.082,0,0,0,2.082,2.082h24.022A2.082,2.082,0,0,0,216.047,63.421Z" transform="translate(-148.744 -48.15)" fill="#ffd4c5"></path>     </g>   </g> </svg>        </div>

        <h3>
          Combos Promocionais
        </h3>

        <p>
Quem trabalha com a <strong>venda de produtos alimentícios</strong> agora conta com um diferencial competitivo. No menu da <strong>Blue Loja</strong>, submenu <strong>Combos promocionais</strong>, é possível adicionar o nome, o percentual de desconto e os produtos que compõem cada combo, tornando suas ofertas ainda mais atrativas.
</p>


      </div>

      <div className="cardLeft">
        <div className="Image">
<svg xmlns="http://www.w3.org/2000/svg" width="112.518" height="100" viewBox="0 0 112.518 100">   <g id="user_2_" data-name="user (2)" transform="translate(0 -28.481)">     <g id="Grupo_8106" data-name="Grupo 8106" transform="translate(0 28.481)">       <path id="Caminho_39248" data-name="Caminho 39248" d="M104.451,28.481H8.067A8.084,8.084,0,0,0,0,36.565v85.228a6.683,6.683,0,0,0,6.663,6.689h99.193a6.683,6.683,0,0,0,6.663-6.689V36.565a8.084,8.084,0,0,0-8.066-8.084ZM4.4,36.565a3.684,3.684,0,0,1,3.671-3.688h96.385a3.684,3.684,0,0,1,3.671,3.688V49.626H4.4Zm103.728,85.228a2.283,2.283,0,0,1-2.267,2.293H6.663A2.283,2.283,0,0,1,4.4,121.792V54.021H108.123Z" transform="translate(0 -28.481)" fill="#ffd4c5"></path>       <path id="Caminho_39249" data-name="Caminho 39249" d="M310.689,76.589h-2.952a2.2,2.2,0,0,0,0,4.4h2.952a2.2,2.2,0,0,0,0-4.4Z" transform="translate(-238.393 -66.017)" fill="#fd9542"></path>       <path id="Caminho_39250" data-name="Caminho 39250" d="M372.821,76.589h-2.952a2.2,2.2,0,0,0,0,4.4h2.952a2.2,2.2,0,0,0,0-4.4Z" transform="translate(-286.871 -66.017)" fill="#fd9542"></path>       <path id="Caminho_39251" data-name="Caminho 39251" d="M434.953,76.589H432a2.2,2.2,0,0,0,0,4.4h2.952a2.2,2.2,0,1,0,0-4.4Z" transform="translate(-335.349 -66.017)" fill="#fd9542"></path>       <path id="Caminho_39252" data-name="Caminho 39252" d="M84.77,76.589H63.465a2.2,2.2,0,0,0,0,4.4H84.77a2.2,2.2,0,1,0,0-4.4Z" transform="translate(-47.803 -66.017)" fill="#fd9542"></path>     </g>     <g id="Grupo_8108" data-name="Grupo 8108" transform="translate(28.044 61.04)">       <g id="Grupo_8107" data-name="Grupo 8107">         <circle id="Elipse_341" data-name="Elipse 341" cx="28.215" cy="28.215" r="28.215" fill="#ffd4c5"></circle>       </g>       <path id="Caminho_39253" data-name="Caminho 39253" d="M215.168,238.69a11.322,11.322,0,1,0-17.577,0,9.908,9.908,0,0,0-5.187,8.681V254.9a2.2,2.2,0,0,0,2.2,2.2h23.556a2.2,2.2,0,0,0,2.2-2.2V247.37A9.919,9.919,0,0,0,215.168,238.69Zm-8.788-14.058a6.927,6.927,0,1,1-6.927,6.927,6.935,6.935,0,0,1,6.927-6.927Zm9.581,28.073H196.8V247.37a5.49,5.49,0,0,1,5.008-5.454,11.319,11.319,0,0,0,9.145,0,5.5,5.5,0,0,1,5.008,5.454V252.7Z" transform="translate(-178.165 -210.656)" fill="#fd9542"></path>     </g>   </g> </svg>        </div>

        <h3>
         Clientes Online
        </h3>
        <p>
Outra grande novidade é a possibilidade de acompanhar em tempo real todos os <strong>clientes online</strong> que estão navegando na sua loja. Você pode expandir, verificar os itens em seus <strong>carrinhos</strong> e, caso o cliente esteja logado, é possível entrar em contato com ele, compreender suas necessidades, acessar o carrinho e oferecer ajuda na compra. Essa abordagem facilita a realização de <strong>vendas consultivas</strong>, contribuindo para aumentar o ticket médio do seu negócio.
</p>


      </div>

      <div className="cardRight">
        <div className="Image">
<svg xmlns="http://www.w3.org/2000/svg" width="120.405" height="100" viewBox="0 0 120.405 100">   <g id="window" transform="translate(0 -43.385)">     <g id="Grupo_8103" data-name="Grupo 8103" transform="translate(0 43.385)">       <path id="Caminho_39240" data-name="Caminho 39240" d="M248.309,90.664h-2.828a2.352,2.352,0,0,0,0,4.7h2.828a2.352,2.352,0,1,0,0-4.7Z" transform="translate(-185.954 -79.546)" fill="#fd9542"></path>       <path id="Caminho_39241" data-name="Caminho 39241" d="M303.926,90.664H301.1a2.352,2.352,0,0,0,0,4.7h2.828a2.352,2.352,0,0,0,0-4.7Z" transform="translate(-228.492 -79.546)" fill="#fd9542"></path>       <path id="Caminho_39242" data-name="Caminho 39242" d="M359.544,90.664h-2.828a2.352,2.352,0,1,0,0,4.7h2.828a2.352,2.352,0,0,0,0-4.7Z" transform="translate(-271.03 -79.546)" fill="#fd9542"></path>       <path id="Caminho_39243" data-name="Caminho 39243" d="M77.6,90.664H57.194a2.352,2.352,0,0,0,0,4.7H77.6a2.352,2.352,0,0,0,0-4.7Z" transform="translate(-41.945 -79.546)" fill="#fd9542"></path>       <path id="Caminho_39244" data-name="Caminho 39244" d="M84.829,199.149a9.947,9.947,0,0,0-9.921,9.951v.78H68.531a2.352,2.352,0,0,0-2.352,2.352v27.047a8.093,8.093,0,0,0,8.084,8.084H95.449a8.093,8.093,0,0,0,8.084-8.084V212.232a2.352,2.352,0,0,0-2.352-2.352H94.75v-.78a9.948,9.948,0,0,0-9.921-9.951ZM79.611,209.1a5.218,5.218,0,1,1,10.436,0v.78H79.611Zm19.219,5.483v24.7a3.384,3.384,0,0,1-3.38,3.38H74.263a3.384,3.384,0,0,1-3.381-3.38v-24.7h4.025v5.05a2.352,2.352,0,1,0,4.7,0v-5.049H90.047v5.049a2.352,2.352,0,1,0,4.7,0v-5.049Z" transform="translate(-50.616 -162.518)" fill="#fd9542"></path>       <path id="Caminho_39245" data-name="Caminho 39245" d="M101.131,85.528V51.344a7.975,7.975,0,0,0-7.973-7.959H7.973A7.975,7.975,0,0,0,0,51.344v84.051a7.975,7.975,0,0,0,7.973,7.959H81.491a2.369,2.369,0,0,1-1.987-2.338v-2.365H7.973a3.267,3.267,0,0,1-3.27-3.256V70.325H96.427v15.2A13.081,13.081,0,0,0,85.72,98.375v7.735h4.7V98.375a8.356,8.356,0,1,1,16.712,0v7.735h4.7V98.375a13.081,13.081,0,0,0-10.708-12.846ZM4.7,65.622V51.344a3.266,3.266,0,0,1,3.27-3.255H93.157a3.266,3.266,0,0,1,3.27,3.255V65.622Z" transform="translate(0 -43.385)" fill="#ffd4c5"></path>     </g>     <g id="Grupo_8105" data-name="Grupo 8105" transform="translate(77.153 103.758)">       <g id="Grupo_8104" data-name="Grupo 8104" transform="translate(0 0)">         <path id="Caminho_39246" data-name="Caminho 39246" d="M368.961,339.737H330.446a2.369,2.369,0,0,1-2.369-2.369V302.479a2.369,2.369,0,0,1,2.369-2.369h38.515a2.369,2.369,0,0,1,2.369,2.369v34.889a2.369,2.369,0,0,1-2.369,2.369Z" transform="translate(-328.077 -300.11)" fill="#fd9542"></path>       </g>       <path id="Caminho_39247" data-name="Caminho 39247" d="M405.067,356.713a6.647,6.647,0,1,0-9,6.219v1.691a2.352,2.352,0,1,0,4.7,0v-1.69A6.66,6.66,0,0,0,405.067,356.713Zm-6.647-1.945a1.945,1.945,0,1,1-1.944,1.945A1.947,1.947,0,0,1,398.42,354.768Z" transform="translate(-376.794 -338.317)" fill="#ffd4c5"></path>     </g>   </g> </svg>
 </div>

        <h3>
        Compartilhamento de Carrinhos de Compras
        </h3>

        <p>
É possível criar um <strong>carrinho de compras pré-definido</strong> e compartilhá-lo diretamente com o cliente. Por exemplo, durante uma ligação, você pode montar um carrinho com diversos itens e gerar um <strong>link</strong> para enviá-lo ao cliente. Dessa forma, ele acessa o link, entra na sua <strong>loja</strong> e conclui a compra com praticidade.
</p>



      </div>

      <div className="cardLeft">
        <div className="Image">
<svg xmlns="http://www.w3.org/2000/svg" width="121.251" height="100" viewBox="0 0 121.251 100">   <g id="Grupo_8240" data-name="Grupo 8240" transform="translate(-1576 -6205)">     <g id="laptop_5_" data-name="laptop (5)" transform="translate(1576 6160.132)">       <g id="Grupo_8239" data-name="Grupo 8239" transform="translate(0 44.868)">         <path id="Caminho_39611" data-name="Caminho 39611" d="M118.883,122.8h-2.222V54.518a9.661,9.661,0,0,0-9.65-9.65H14.24a9.661,9.661,0,0,0-9.65,9.65V122.8H2.368A2.368,2.368,0,0,0,0,125.173v8.858a10.849,10.849,0,0,0,10.837,10.837h99.578a10.849,10.849,0,0,0,10.837-10.837v-8.858A2.368,2.368,0,0,0,118.883,122.8ZM14.24,49.6h92.771a4.919,4.919,0,0,1,4.913,4.913V61.11H9.327V54.518A4.919,4.919,0,0,1,14.24,49.6ZM9.327,65.846h102.6V122.8H77.767a2.368,2.368,0,0,0-2.368,2.368,2.746,2.746,0,0,1-2.743,2.743H48.6a2.746,2.746,0,0,1-2.743-2.743,2.368,2.368,0,0,0-2.368-2.368H9.327Zm107.188,68.185a6.107,6.107,0,0,1-6.1,6.1H10.837a6.107,6.107,0,0,1-6.1-6.1v-6.49H41.5a7.493,7.493,0,0,0,7.1,5.111H72.656a7.493,7.493,0,0,0,7.1-5.111h36.764Z" transform="translate(0 -44.868)" fill="#ffd4c5"></path>         <path id="Caminho_39612" data-name="Caminho 39612" d="M242.751,82.715h2.66a2.368,2.368,0,0,0,0-4.736h-2.66a2.368,2.368,0,0,0,0,4.736Z" transform="translate(-183.456 -70.138)" fill="#fd9542"></path>         <path id="Caminho_39613" data-name="Caminho 39613" d="M399.48,232.46h2.49a2.368,2.368,0,1,0,0-4.736h-2.49a2.368,2.368,0,0,0,0,4.736Z" transform="translate(-303.069 -184.42)" fill="#fd9542"></path>         <path id="Caminho_39614" data-name="Caminho 39614" d="M374.227,170.141a2.361,2.361,0,0,0,1.675-.694l1.761-1.761a2.368,2.368,0,1,0-3.349-3.349l-1.761,1.761a2.368,2.368,0,0,0,1.675,4.042Z" transform="translate(-283.795 -135.516)" fill="#fd9542"></path>         <path id="Caminho_39615" data-name="Caminho 39615" d="M374.313,290.172a2.368,2.368,0,0,0,3.349-3.349l-1.761-1.761a2.368,2.368,0,1,0-3.349,3.349Z" transform="translate(-283.795 -227.65)" fill="#fd9542"></path>         <path id="Caminho_39616" data-name="Caminho 39616" d="M89.23,227.724H86.74a2.368,2.368,0,1,0,0,4.736h2.49a2.368,2.368,0,1,0,0-4.736Z" transform="translate(-64.391 -184.42)" fill="#fd9542"></path>         <path id="Caminho_39617" data-name="Caminho 39617" d="M115.16,285.062l-1.761,1.761a2.368,2.368,0,1,0,3.349,3.349l1.761-1.761a2.368,2.368,0,1,0-3.349-3.349Z" transform="translate(-86.015 -227.65)" fill="#fd9542"></path>         <path id="Caminho_39618" data-name="Caminho 39618" d="M116.748,164.337a2.368,2.368,0,1,0-3.349,3.349l1.761,1.761a2.368,2.368,0,0,0,3.349-3.349Z" transform="translate(-86.015 -135.515)" fill="#fd9542"></path>       </g>       <path id="Caminho_39619" data-name="Caminho 39619" d="M25.08-15.015,10.175-12.98a2.03,2.03,0,0,1-1.512-.275,2.267,2.267,0,0,1-.632-1.43l-1.155-7.26a1.914,1.914,0,0,1,.3-1.595A2.2,2.2,0,0,1,8.69-24.2l10.945-1.54a1.788,1.788,0,0,0,1.155-.495,1.835,1.835,0,0,0,.33-1.21,1.569,1.569,0,0,0-.385-1.155,1.488,1.488,0,0,0-1.1-.385H4.455a2.075,2.075,0,0,1-1.512-.468,2.075,2.075,0,0,1-.467-1.512V-37.62a2.075,2.075,0,0,1,.467-1.513A2.075,2.075,0,0,1,4.455-39.6H22.22q5.335,0,8.36,2.5A8.786,8.786,0,0,1,33.6-29.92v5.775q0,4.62-2.31,6.6A11.876,11.876,0,0,1,25.08-15.015ZM18.92,0H8.855A2.075,2.075,0,0,1,7.343-.468,2.075,2.075,0,0,1,6.875-1.98V-9.185A2.075,2.075,0,0,1,7.343-10.7a2.075,2.075,0,0,1,1.512-.467H18.92a2.075,2.075,0,0,1,1.513.467A2.075,2.075,0,0,1,20.9-9.185V-1.98a2.075,2.075,0,0,1-.468,1.513A2.075,2.075,0,0,1,18.92,0Z" transform="translate(42.586 114.668)" fill="#fd9542"></path>     </g>   </g> </svg>
 </div>

        <h3>
        Chat online integrado à sua Loja!
        </h3>
        <p>
Como todas as nossas soluções são <strong>integradas</strong>, você pode aproveitar os recursos do <strong>Blue Talk</strong>, um chat empresarial disponível diretamente na sua loja. Essa ferramenta ajuda a melhorar o <strong>atendimento</strong> aos seus clientes, facilitando o processo de vendas e contribuindo para aumentar seus resultados. Experimente!
</p>



      </div>

     </S.Main7>

     <S.Main8>
      <div className="image">

      </div>

      <div className="center">
       <h3>
       + de 200 mil <br/>
      <strong>downloads</strong>
       </h3>

       <span>
       E crescendo...
       </span>
      </div>

      <div className="texts">
        <h2>
        Não perca tempo!<br/>
Baixe a Blue Lite agora mesmo. <br/>
<strong>É gratuíto.</strong>
        </h2>

        <Link to="/baixar-blue-lite">
        <button>
            Download Grátis
        </button>
        </Link>
      </div>
     </S.Main8>

     <S.Main9>
      <span>
      Perguntas Frequentes
      </span>
      <h3>
      Tire suas duvidas sobre a Blue Lite
      </h3>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '1' ? '' : '1')}>
        <FaPlus className={selected == '1' ? 'active' : ''}/>

        <p>
        Como e onde é feita a contratação da versão premium?
        </p>
       </div>

       <div className={selected === '1' ? 'response' : 'hide'}>
        <p>
        <p>
         Todo o processo é realizado pelo próprio usuário. Basta clicar no <strong>banner</strong> da versão premium dentro do sistema ou, se preferir, acessar o <strong>chat</strong> e selecionar o botão <strong>Contratar Agora</strong>. Você será redirecionado para a tela de contratação, onde deverá informar os dados da sua empresa e do cartão de crédito. Após concluir, o sistema iniciará automaticamente a sincronização com a nuvem e desbloqueará os recursos adicionais.
        </p>

        </p>
       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '2' ? '' : '2')}>
        <FaPlus className={selected == '2' ? 'active' : ''}/>

        <p>
        Posso usar o meu Blue Lite em mais de um computador?
        </p>
       </div>

       <div className={selected === '2' ? 'response' : 'hide'}>
        <p>
        <p>
Claro que é possível, mas esse é um recurso exclusivo para clientes da <strong>versão premium</strong>. Na <strong>versão gratuita</strong>, o sistema permanece acessível apenas no <strong>computador</strong> onde foi instalado.
</p>


        </p>
       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '3' ? '' : '3')}>
        <FaPlus className={selected == '3' ? 'active' : ''}/>

        <p>
        Posso definir bloqueios e permissões para determinados usuários?
        </p>
       </div>

       <div className={selected === '3' ? 'response' : 'hide'}>
       <p>
Pode sim! É comum que os gestores restrinjam o acesso de colaboradores a determinadas <strong>informações</strong> da empresa. Na <strong>versão premium</strong>, é possível configurar <strong>bloqueios e permissões</strong> nas licenças dos usuários adicionais, garantindo maior controle e segurança.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '4' ? '' : '4')}>
        <FaPlus className={selected == '4' ? 'active' : ''}/>

        <p>
        Posso acessar a Blue Lite no Celular?
        </p>
       </div>

       <div className={selected === '4' ? 'response' : 'hide'}>
       <p>
O <strong>Blue Lite</strong> é um sistema acessível apenas para <strong>computadores</strong>. Se você deseja realizar cadastros, vendas ou outros controles diretamente pelo celular, a melhor opção é utilizar o <strong>Blue Mobi</strong>. Vale lembrar que o Blue Mobi está disponível exclusivamente na versão premium.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '5' ? '' : '5')}>
        <FaPlus className={selected == '5' ? 'active' : ''}/>

        <p>
        O que é um PDV?
        </p>
       </div>

       <div className={selected === '5' ? 'response' : 'hide'}>
       <p>
Um <strong>sistema PDV</strong> (Ponto de Venda) é uma solução desenvolvida para agilizar as vendas realizadas no <strong>balcão</strong> ou caixa da sua loja. Com ele, é possível utilizar leitores de <strong>código de barras</strong> e teclas de acesso rápido, proporcionando ainda mais praticidade e eficiência nas vendas. É o tipo de sistema utilizado em mercadinhos e balcões de loja, e o <strong>Blue Lite</strong> oferece uma versão extremamente fácil de usar. Experimente!
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '6' ? '' : '6')}>
        <FaPlus className={selected == '6' ? 'active' : ''}/>

        <p>
        É necessário internet para usar a Blue Lite?
        </p>
       </div>

       <div className={selected === '6' ? 'response' : 'hide'}>
       <p>
Não, o <strong>Blue Lite</strong> é um software instalado diretamente no seu <strong>computador</strong>, permitindo seu uso mesmo sem acesso à <strong>internet</strong>. No entanto, alguns recursos, como a integração com Mercado Livre, Mercado Pago, B2W e a emissão de boletos registrados pela PagHiper, necessitam de conexão para funcionarem corretamente.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '7' ? '' : '7')}>
        <FaPlus className={selected == '7' ? 'active' : ''}/>

        <p>
        As integrações com Ifood, Mercado Livre e B2W são gratuitas?
        </p>
       </div>

       <div className={selected === '7' ? 'response' : 'hide'}>
       <p>
Sim, todos os recursos disponíveis nessas <strong>integrações</strong> com o <strong>Blue Lite</strong> são ilimitados e totalmente <strong>gratuitos</strong>. Você pagará apenas pelos anúncios ou operações realizadas diretamente com as empresas integradas.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '8' ? '' : '8')}>
        <FaPlus className={selected == '8' ? 'active' : ''}/>

        <p>
        A integração com a PagHiper para emissão de boletos registrados é gratuita?
        </p>
       </div>

       <div className={selected === '8' ? 'response' : 'hide'}>
       <p>
Sim, todos os recursos oferecidos nesta <strong>integração</strong> com o <strong>Blue Lite</strong> são ilimitados e totalmente <strong>gratuitos</strong>. Você pagará apenas pelos boletos quitados diretamente à PagHiper.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '9' ? '' : '9')}>
        <FaPlus className={selected == '9' ? 'active' : ''}/>

        <p>
        O Blue Lite é grátis por quanto tempo?
        </p>
       </div>

       <div className={selected === '9' ? 'response' : 'hide'}>
       <p>
A versão gratuita do <strong>Blue Lite</strong> não possui limitação de dias, mas sim de <strong>volume de movimentação financeira</strong> (até R$5.000,00) ou de notas emitidas (até R$5.000,00). Ao atingir esse limite, será necessário contratar a versão premium para continuar utilizando os recursos do sistema. Além disso, se o usuário vincular sua conta do Blue Lite a uma licença de teste do Sistema Blue Cloud, o uso gratuito seguirá as regras do <strong>Blue Cloud</strong>, permitindo o acesso à plataforma gratuitamente por 15 dias.
</p>

       </div>
      </div>

      <div className="topic">
       <div className="card" onClick={()=> SetSelected( selected === '10' ? '' : '10')}>
        <FaPlus className={selected == '10' ? 'active' : ''}/>

        <p>
        Como funciona a configuração do SAT no Blue Lite?
        </p>
       </div>

       <div className={selected === '10' ? 'response' : 'hide'}>
       <p>
Se você precisar emitir <strong>CF-e SAT</strong> (em São Paulo), será necessário configurar o seu aparelho SAT com o sistema. O primeiro passo é adquirir um aparelho SAT (não realizamos a comercialização desse produto e não há restrição de marca para a vinculação com o <strong>Blue Lite</strong>). Após ter o aparelho, basta enviar um e-mail para <strong>contato@bluelite.com.br</strong> solicitando a configuração. Nossa equipe entrará em contato e realizará o processo por meio de acesso remoto, utilizando a ferramenta AnyDesk.
</p>

       </div>
      </div>
     </S.Main9>

     <Footer/>
    </S.Container>
  )
}