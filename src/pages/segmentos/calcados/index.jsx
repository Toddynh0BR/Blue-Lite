import * as S from "./style";

import { Preload } from "../../../components/preload";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { Link } from "react-router-dom";

import Background from "../assets/image-top-sige-lite-calcados.png";
import { useState, useRef, useEffect } from "react";

import Image1 from "../assets/sistema-para-lojas-de-calcados.svg";
import Image2 from "../assets/controle-de-estoque-calcados.svg";
import Image3 from "../assets/gestao-financeira-minimercados.svg";
import Line from "../assets/line-back-cta.svg";

import C1I1 from '../assets/loja-virtual-gratis.png'; 
import C1I2 from '../assets/sige-loja-restaurantes.png'; 

import C2I1 from "../assets/app-de-vendas.png";
import C2I2 from "../assets/catalogo-virtual.png";

import C3I1 from "../assets/mercado-livre-e-b2w-integracao.png";
import C3I2 from "../assets/contorle-de-pedidos-restaurante.png";

import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

export function Calcado() {
    const [isOutOfView, setIsOutOfView] = useState(false);
    const [selected, SetSelected] = useState('');
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
       // Criar um observador para monitorar o elemento
       const observer = new IntersectionObserver(
         ([entry]) => {
           if (!entry.isIntersecting) {
             // A div saiu da tela
             console.log('saiu')
             setIsOutOfView(true);
           } else {
             // A div ainda está na tela
             console.log('voltou')
             setIsOutOfView(false);
           }
         },
         {
           threshold: 0, // Trigger quando qualquer parte da div sair da tela
         }
       );
   
       const element = document.getElementById('myDiv');
       observer.observe(element);
   
       // Limpar o observador quando o componente for desmontado
       return () => {
         observer.disconnect();
       };
     }, []);


    return (
        <S.Container data-subHeader={isOutOfView}>
         <Header />
         <Preload/>

         <div className="subheader"> 
          <div className="topic"  onClick={() => handleScrollToSection(section1Ref)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M248,208v16h-8a28,28,0,0,0,0,56h32a12,12,0,0,1,0,24H220v16h28v16h16V320h8a28,28,0,0,0,0-56H240a12,12,0,0,1,0-24h52V224H264V208Z"></path><path d="M456,368H384l-8-10.667V257.58a107.486,107.486,0,0,0-78.024-103.374L311.692,106.2A8,8,0,0,0,304,96H256v16H293.4l-11.429,40H256v16h31.191A91.521,91.521,0,0,1,360,257.58V360a7.987,7.987,0,0,0,.821,3.5A117.143,117.143,0,0,0,251.129,368H192a32.041,32.041,0,0,0-30.9,40.379l-31.849-14.59A16,16,0,0,1,131.2,390.4l19.2-25.6A8,8,0,0,0,152,360V272H136v85.333L118.4,380.8a32,32,0,0,0-3.684,6.328L88.364,375.058A34.132,34.132,0,0,0,44.1,389.891,37.069,37.069,0,0,0,40,407.84a33.973,33.973,0,0,0,18.872,30.545l93.283,46.641A104.565,104.565,0,0,0,198.66,496H456a8,8,0,0,0,8-8V376A8,8,0,0,0,456,368ZM360,480H198.66a88.5,88.5,0,0,1-39.351-9.285L66.031,424.076A18.059,18.059,0,0,1,56,407.84a22.069,22.069,0,0,1,2.187-10.363A18.086,18.086,0,0,1,81.7,389.6l90.971,41.67A8,8,0,0,0,176,432h88V416H192a16,16,0,0,1,0-32h61.33a8,8,0,0,0,4.117-1.141l.75-.45a101.177,101.177,0,0,1,97.272-3.735L360,380.942Zm88,0H376V384h72Z"></path><circle cx="408" cy="448" r="16"></circle><path d="M72.185,234.7a8,8,0,0,0,10.243,5.914l27.922-8.892,19.736,21.662a8,8,0,0,0,11.828,0l19.736-21.662,27.922,8.892a8,8,0,0,0,10.243-5.914l6.261-28.627,28.628-6.262a8,8,0,0,0,5.914-10.243l-8.892-27.922,21.662-19.736a8,8,0,0,0,0-11.828L231.726,110.35l8.892-27.922A8,8,0,0,0,234.7,72.185l-28.628-6.262L199.815,37.3a8,8,0,0,0-10.243-5.914L161.65,40.274,141.914,18.612a8,8,0,0,0-11.828,0L110.35,40.274,82.428,31.382A8,8,0,0,0,72.185,37.3L65.924,65.923,37.3,72.185a8,8,0,0,0-5.914,10.243l8.892,27.922L18.612,130.086a8,8,0,0,0,0,11.828L40.274,161.65l-8.892,27.922A8,8,0,0,0,37.3,199.815l28.628,6.262ZM54.841,153.277,35.879,136l18.962-17.277a8,8,0,0,0,2.235-8.341L49.292,85.939l25.061-5.481a8,8,0,0,0,6.106-6.106l5.48-25.06,24.443,7.784a8.005,8.005,0,0,0,8.342-2.235L136,35.878l17.276,18.963a8,8,0,0,0,8.342,2.235l24.443-7.784,5.48,25.06a8,8,0,0,0,6.106,6.106l25.061,5.481-7.784,24.443a8,8,0,0,0,2.235,8.341L236.121,136l-18.962,17.277a8,8,0,0,0-2.235,8.341l7.784,24.443-25.061,5.481a8,8,0,0,0-6.106,6.106l-5.48,25.06-24.443-7.784a8,8,0,0,0-8.342,2.235L136,236.122l-17.276-18.963a8,8,0,0,0-8.342-2.235l-24.443,7.784-5.48-25.06a8,8,0,0,0-6.106-6.106l-25.061-5.481,7.784-24.443A8,8,0,0,0,54.841,153.277Z"></path><rect x="79.431" y="128" width="113.137" height="16" transform="translate(-56.333 136) rotate(-45)"></rect><path d="M104,128a24,24,0,1,0-24-24A24.027,24.027,0,0,0,104,128Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,104,96Z"></path><path d="M152,160a24,24,0,1,0,24-24A24.027,24.027,0,0,0,152,160Zm32,0a8,8,0,1,1-8-8A8.009,8.009,0,0,1,184,160Z"></path></g></svg>
            <p> Quero vender mais</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section2Ref)}>
           <svg id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>
            <p>  Quero emitir notas</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section3Ref)}>
           <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" ><path d="m240 64h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v80h16v-88a8 8 0 0 0 -8-8h-416a8 8 0 0 0 -8 8v416a8 8 0 0 0 8 8h248v-16h-32v-192h32v-16h-32zm120 56h-48v-56h48zm-256-56h48v56h-48zm-16 0v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v192h-192v-192zm16 208h48v56h-48zm120 192h-192v-192h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56z"></path><path d="m192 224h16v16h-16z"></path><path d="m160 224h16v16h-16z"></path><path d="m192 432h16v16h-16z"></path><path d="m160 432h16v16h-16z"></path><path d="m88 16h240v16h-240z"></path><path d="m344 16h16v16h-16z"></path><path d="m464 160h-144a32.036 32.036 0 0 0 -32 32v272a32.036 32.036 0 0 0 32 32h144a32.036 32.036 0 0 0 32-32v-272a32.036 32.036 0 0 0 -32-32zm16 304a16.019 16.019 0 0 1 -16 16h-144a16.019 16.019 0 0 1 -16-16v-272a16.019 16.019 0 0 1 16-16h144a16.019 16.019 0 0 1 16 16z"></path><path d="m368 192h16v16h-16z"></path><path d="m400 192h16v16h-16z"></path><path d="m384 448h16v16h-16z"></path><path d="m392 300.687-14.469-14.47-11.314 11.314 20.126 20.126a8 8 0 0 0 11.314 0l64-64-11.314-11.314z"></path><path d="m392 352a56.063 56.063 0 0 0 56-56h-16a39.98 39.98 0 1 1 -20.006-34.653l8.012-13.85a56 56 0 1 0 -28.006 104.503z"></path><path d="m328 376h16v16h-16z"></path><path d="m360 376h96v16h-96z"></path><path d="m328 408h128v16h-128z"></path></svg>
            <p>  Quero gerir estoque</p>
           </div>  
           
           <div className="topic" onClick={() => handleScrollToSection(section4Ref)}>
           <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" xml:space="preserve"> <g> 	<g> 		<path d="M456,208H296c-13.255,0-24,10.745-24,24v224c0,13.255,10.745,24,24,24h160c13.255,0,24-10.745,24-24V232 			C480,218.745,469.255,208,456,208z M368,464h-72c-4.418,0-8-3.582-8-8v-56h80V464z M368,384h-80v-64h80V384z M464,456 			c0,4.418-3.582,8-8,8h-72v-64h80V456z M464,384h-80v-64h80V384z M464,304H288v-72c0-4.418,3.582-8,8-8h160c4.418,0,8,3.582,8,8 			V304z"></path> 	</g> </g> <g> 	<g> 		<path d="M440,240H312c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h128c4.418,0,8-3.582,8-8v-32C448,243.582,444.418,240,440,240z 			 M432,272H320v-16h112V272z"></path> 	</g> </g> <g> 	<g> 		<polygon points="336,344 336,328 320,328 320,344 304,344 304,360 320,360 320,376 336,376 336,360 352,360 352,344 		"></polygon> 	</g> </g> <g> 	<g> 		<rect x="400" y="344" width="48" height="16"></rect> 	</g> </g> <g> 	<g> 		<polygon points="350.624,421.656 339.312,410.344 328,421.656 316.688,410.344 305.376,421.656 316.688,432.968 305.376,444.28 			316.688,455.592 328,444.28 339.312,455.592 350.624,444.28 339.312,432.968 		"></polygon> 	</g> </g> <g> 	<g> 		<rect x="400" y="424" width="48" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="416" y="444" width="16" height="8"></rect> 	</g> </g> <g> 	<g> 		<rect x="416" y="412" width="16" height="8"></rect> 	</g> </g> <g> 	<g> 		<path d="M320,0H88v0.072c-2.112-0.025-4.148,0.793-5.656,2.272l-80,80C0.863,83.851,0.045,85.887,0.072,88H0v376 			c0,8.837,7.163,16,16,16h240v-16h-48v-24h16c4.418,0,8-3.582,8-8v-40c0-4.418-3.582-8-8-8h-16v-24h16c4.418,0,8-3.582,8-8v-40 			c0-4.418-3.582-8-8-8h-0.208c20.243-15.048,32.184-38.777,32.208-64c0.086-44.183-35.662-80.069-79.844-80.155 			S96.086,195.507,96,239.689c-0.049,25.327,11.897,49.181,32.208,64.311H64c-4.418,0-8,3.582-8,8v32H40c-4.418,0-8,3.582-8,8v40 			c0,4.418,3.582,8,8,8h16v24H40c-4.418,0-8,3.582-8,8v32H16V96h64c8.837,0,16-7.163,16-16V16h224v176h16V16 			C336,7.163,328.837,0,320,0z M216,400v24H72v-24H216z M112,240c0-35.346,28.654-64,64-64c35.346,0,64,28.654,64,64 			c0,35.346-28.654,64-64,64C140.67,303.96,112.04,275.33,112,240z M72,320h144v24H72V320z M48,384v-24h144v24H64H48z M48,440h144 			v24H48V440z M80,80H27.312L80,27.312V80z"></path> 	</g> </g> <g> 	<g> 		<path d="M176,216h24v-16h-16v-8h-16v9.472c-12.473,4.393-19.023,18.066-14.629,30.539c3.38,9.596,12.455,16.009,22.629,15.989 			c4.418,0,8,3.582,8,8s-3.582,8-8,8h-24v16h16v8h16v-9.472c12.473-4.393,19.023-18.066,14.629-30.539 			c-3.38-9.596-12.455-16.009-22.629-15.989c-4.418,0-8-3.582-8-8S171.582,216,176,216z"></path> 	</g> </g> <g> 	<g> 		<path d="M448,40h-16c0-4.418-3.582-8-8-8h-8V8c0-4.418-3.582-8-8-8h-32c-4.418,0-8,3.582-8,8v24h-8c-4.418,0-8,3.582-8,8v152h16 			V48h48v144h16V56h16v104h16V56C464,47.163,456.837,40,448,40z M400,32h-16V16h16V32z"></path> 	</g> </g> <g> 	<g> 		<rect x="120" y="64" width="136" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="32" y="112" width="272" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="32" y="144" width="96" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="232" y="144" width="72" height="16"></rect> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <p>  Quero gerir finanças</p>
           </div>  
         </div>
          
         <S.Main id="myDiv">
          <img src={Background} alt="" className="Background" />
          <div className="left">
           <h1>
           Mais que um <br /> Sistema de gestão <br /><strong> para sua loja de calçados!</strong>
           </h1>

           <ul>
            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p><strong>Frente de Loja </strong> com emissor de notas;</p>

            </li>

            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p><strong>Loja Virtual  </strong> integrada;</p>
            </li>

            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p>Recursos para  <strong> Gestão de Estoque </strong>  conectado. </p>
            </li>
           </ul>

           <Link to="/baixar-blue-lite">
            <button>
            Download Gratuito
            </button>
           </Link>

           <span> 
            <GoShieldCheck size={13} color="rgb(9, 194, 9)"/> &nbsp; Plano Grátis  
            <b style={{ marginLeft: 20}}></b>  
            <GoShieldCheck size={13} color="rgb(9, 194, 9)"/> &nbsp; Mais de 200 mil downloads
           </span>
          </div>

          <div className="bottom">
          <div className="topic"  onClick={() => handleScrollToSection(section1Ref)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M248,208v16h-8a28,28,0,0,0,0,56h32a12,12,0,0,1,0,24H220v16h28v16h16V320h8a28,28,0,0,0,0-56H240a12,12,0,0,1,0-24h52V224H264V208Z"></path><path d="M456,368H384l-8-10.667V257.58a107.486,107.486,0,0,0-78.024-103.374L311.692,106.2A8,8,0,0,0,304,96H256v16H293.4l-11.429,40H256v16h31.191A91.521,91.521,0,0,1,360,257.58V360a7.987,7.987,0,0,0,.821,3.5A117.143,117.143,0,0,0,251.129,368H192a32.041,32.041,0,0,0-30.9,40.379l-31.849-14.59A16,16,0,0,1,131.2,390.4l19.2-25.6A8,8,0,0,0,152,360V272H136v85.333L118.4,380.8a32,32,0,0,0-3.684,6.328L88.364,375.058A34.132,34.132,0,0,0,44.1,389.891,37.069,37.069,0,0,0,40,407.84a33.973,33.973,0,0,0,18.872,30.545l93.283,46.641A104.565,104.565,0,0,0,198.66,496H456a8,8,0,0,0,8-8V376A8,8,0,0,0,456,368ZM360,480H198.66a88.5,88.5,0,0,1-39.351-9.285L66.031,424.076A18.059,18.059,0,0,1,56,407.84a22.069,22.069,0,0,1,2.187-10.363A18.086,18.086,0,0,1,81.7,389.6l90.971,41.67A8,8,0,0,0,176,432h88V416H192a16,16,0,0,1,0-32h61.33a8,8,0,0,0,4.117-1.141l.75-.45a101.177,101.177,0,0,1,97.272-3.735L360,380.942Zm88,0H376V384h72Z"></path><circle cx="408" cy="448" r="16"></circle><path d="M72.185,234.7a8,8,0,0,0,10.243,5.914l27.922-8.892,19.736,21.662a8,8,0,0,0,11.828,0l19.736-21.662,27.922,8.892a8,8,0,0,0,10.243-5.914l6.261-28.627,28.628-6.262a8,8,0,0,0,5.914-10.243l-8.892-27.922,21.662-19.736a8,8,0,0,0,0-11.828L231.726,110.35l8.892-27.922A8,8,0,0,0,234.7,72.185l-28.628-6.262L199.815,37.3a8,8,0,0,0-10.243-5.914L161.65,40.274,141.914,18.612a8,8,0,0,0-11.828,0L110.35,40.274,82.428,31.382A8,8,0,0,0,72.185,37.3L65.924,65.923,37.3,72.185a8,8,0,0,0-5.914,10.243l8.892,27.922L18.612,130.086a8,8,0,0,0,0,11.828L40.274,161.65l-8.892,27.922A8,8,0,0,0,37.3,199.815l28.628,6.262ZM54.841,153.277,35.879,136l18.962-17.277a8,8,0,0,0,2.235-8.341L49.292,85.939l25.061-5.481a8,8,0,0,0,6.106-6.106l5.48-25.06,24.443,7.784a8.005,8.005,0,0,0,8.342-2.235L136,35.878l17.276,18.963a8,8,0,0,0,8.342,2.235l24.443-7.784,5.48,25.06a8,8,0,0,0,6.106,6.106l25.061,5.481-7.784,24.443a8,8,0,0,0,2.235,8.341L236.121,136l-18.962,17.277a8,8,0,0,0-2.235,8.341l7.784,24.443-25.061,5.481a8,8,0,0,0-6.106,6.106l-5.48,25.06-24.443-7.784a8,8,0,0,0-8.342,2.235L136,236.122l-17.276-18.963a8,8,0,0,0-8.342-2.235l-24.443,7.784-5.48-25.06a8,8,0,0,0-6.106-6.106l-25.061-5.481,7.784-24.443A8,8,0,0,0,54.841,153.277Z"></path><rect x="79.431" y="128" width="113.137" height="16" transform="translate(-56.333 136) rotate(-45)"></rect><path d="M104,128a24,24,0,1,0-24-24A24.027,24.027,0,0,0,104,128Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,104,96Z"></path><path d="M152,160a24,24,0,1,0,24-24A24.027,24.027,0,0,0,152,160Zm32,0a8,8,0,1,1-8-8A8.009,8.009,0,0,1,184,160Z"></path></g></svg>
            <p> Quero vender mais</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section2Ref)}>
           <svg id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>
            <p>  Quero emitir notas</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section3Ref)}>
           <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" ><path d="m240 64h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v80h16v-88a8 8 0 0 0 -8-8h-416a8 8 0 0 0 -8 8v416a8 8 0 0 0 8 8h248v-16h-32v-192h32v-16h-32zm120 56h-48v-56h48zm-256-56h48v56h-48zm-16 0v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v192h-192v-192zm16 208h48v56h-48zm120 192h-192v-192h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56z"></path><path d="m192 224h16v16h-16z"></path><path d="m160 224h16v16h-16z"></path><path d="m192 432h16v16h-16z"></path><path d="m160 432h16v16h-16z"></path><path d="m88 16h240v16h-240z"></path><path d="m344 16h16v16h-16z"></path><path d="m464 160h-144a32.036 32.036 0 0 0 -32 32v272a32.036 32.036 0 0 0 32 32h144a32.036 32.036 0 0 0 32-32v-272a32.036 32.036 0 0 0 -32-32zm16 304a16.019 16.019 0 0 1 -16 16h-144a16.019 16.019 0 0 1 -16-16v-272a16.019 16.019 0 0 1 16-16h144a16.019 16.019 0 0 1 16 16z"></path><path d="m368 192h16v16h-16z"></path><path d="m400 192h16v16h-16z"></path><path d="m384 448h16v16h-16z"></path><path d="m392 300.687-14.469-14.47-11.314 11.314 20.126 20.126a8 8 0 0 0 11.314 0l64-64-11.314-11.314z"></path><path d="m392 352a56.063 56.063 0 0 0 56-56h-16a39.98 39.98 0 1 1 -20.006-34.653l8.012-13.85a56 56 0 1 0 -28.006 104.503z"></path><path d="m328 376h16v16h-16z"></path><path d="m360 376h96v16h-96z"></path><path d="m328 408h128v16h-128z"></path></svg>
            <p>  Quero gerir estoque</p>
           </div>  
           
           <div className="topic" onClick={() => handleScrollToSection(section4Ref)}>
           <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" xml:space="preserve"> <g> 	<g> 		<path d="M456,208H296c-13.255,0-24,10.745-24,24v224c0,13.255,10.745,24,24,24h160c13.255,0,24-10.745,24-24V232 			C480,218.745,469.255,208,456,208z M368,464h-72c-4.418,0-8-3.582-8-8v-56h80V464z M368,384h-80v-64h80V384z M464,456 			c0,4.418-3.582,8-8,8h-72v-64h80V456z M464,384h-80v-64h80V384z M464,304H288v-72c0-4.418,3.582-8,8-8h160c4.418,0,8,3.582,8,8 			V304z"></path> 	</g> </g> <g> 	<g> 		<path d="M440,240H312c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h128c4.418,0,8-3.582,8-8v-32C448,243.582,444.418,240,440,240z 			 M432,272H320v-16h112V272z"></path> 	</g> </g> <g> 	<g> 		<polygon points="336,344 336,328 320,328 320,344 304,344 304,360 320,360 320,376 336,376 336,360 352,360 352,344 		"></polygon> 	</g> </g> <g> 	<g> 		<rect x="400" y="344" width="48" height="16"></rect> 	</g> </g> <g> 	<g> 		<polygon points="350.624,421.656 339.312,410.344 328,421.656 316.688,410.344 305.376,421.656 316.688,432.968 305.376,444.28 			316.688,455.592 328,444.28 339.312,455.592 350.624,444.28 339.312,432.968 		"></polygon> 	</g> </g> <g> 	<g> 		<rect x="400" y="424" width="48" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="416" y="444" width="16" height="8"></rect> 	</g> </g> <g> 	<g> 		<rect x="416" y="412" width="16" height="8"></rect> 	</g> </g> <g> 	<g> 		<path d="M320,0H88v0.072c-2.112-0.025-4.148,0.793-5.656,2.272l-80,80C0.863,83.851,0.045,85.887,0.072,88H0v376 			c0,8.837,7.163,16,16,16h240v-16h-48v-24h16c4.418,0,8-3.582,8-8v-40c0-4.418-3.582-8-8-8h-16v-24h16c4.418,0,8-3.582,8-8v-40 			c0-4.418-3.582-8-8-8h-0.208c20.243-15.048,32.184-38.777,32.208-64c0.086-44.183-35.662-80.069-79.844-80.155 			S96.086,195.507,96,239.689c-0.049,25.327,11.897,49.181,32.208,64.311H64c-4.418,0-8,3.582-8,8v32H40c-4.418,0-8,3.582-8,8v40 			c0,4.418,3.582,8,8,8h16v24H40c-4.418,0-8,3.582-8,8v32H16V96h64c8.837,0,16-7.163,16-16V16h224v176h16V16 			C336,7.163,328.837,0,320,0z M216,400v24H72v-24H216z M112,240c0-35.346,28.654-64,64-64c35.346,0,64,28.654,64,64 			c0,35.346-28.654,64-64,64C140.67,303.96,112.04,275.33,112,240z M72,320h144v24H72V320z M48,384v-24h144v24H64H48z M48,440h144 			v24H48V440z M80,80H27.312L80,27.312V80z"></path> 	</g> </g> <g> 	<g> 		<path d="M176,216h24v-16h-16v-8h-16v9.472c-12.473,4.393-19.023,18.066-14.629,30.539c3.38,9.596,12.455,16.009,22.629,15.989 			c4.418,0,8,3.582,8,8s-3.582,8-8,8h-24v16h16v8h16v-9.472c12.473-4.393,19.023-18.066,14.629-30.539 			c-3.38-9.596-12.455-16.009-22.629-15.989c-4.418,0-8-3.582-8-8S171.582,216,176,216z"></path> 	</g> </g> <g> 	<g> 		<path d="M448,40h-16c0-4.418-3.582-8-8-8h-8V8c0-4.418-3.582-8-8-8h-32c-4.418,0-8,3.582-8,8v24h-8c-4.418,0-8,3.582-8,8v152h16 			V48h48v144h16V56h16v104h16V56C464,47.163,456.837,40,448,40z M400,32h-16V16h16V32z"></path> 	</g> </g> <g> 	<g> 		<rect x="120" y="64" width="136" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="32" y="112" width="272" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="32" y="144" width="96" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="232" y="144" width="72" height="16"></rect> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <p>  Quero gerir finanças</p>
           </div>  
          </div>
         </S.Main>

         <S.Main2>
          <div className="left">
            <h2>
            Tudo o que a sua Loja de Calçados precisa, o Blue Lite tem!
            </h2>
            <p>Empreender é sempre um desafio, especialmente se você tem uma pequena empresa. E quando o empreendedor precisa ser mil e uma utilidades, nada melhor que contar com ferramentas que lhe auxiliem a <strong>simplificar a rotina administrativa</strong>, a ter <strong>ampla visão do seu negócio</strong> e, ainda, consiga ter praticidade para vender e controlar suas finanças.</p>

<p>É aí que entra o <strong>Blue Lite</strong>, como a aposta de mais de 200 mil empreendedores em todo o Brasil que decidiram descomplicar a gestão empresarial e apostar em ferramentas para vender mais. Tudo o que a sua <strong>Loja de Roupas</strong> precisa, o <strong>Blue Lite</strong> tem!</p>


            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
           </Link>
          </div>  

          <img src={Image1} alt="" />
         </S.Main2>

         <S.Main3>
          <div className="title">
           <h3>
           Você quer vender mais?
           </h3>

           <h2>
           Temos as ferramentas certas <br /> para as suas vendas decolarem!
           </h2>
          </div>
          
          <div className="columns" ref={section1Ref}>

           <div className="column">
            <div className="topic">
             <img src={ C1I1} alt="" />
             <span>Plataforma para criar sua Loja Virtual</span>
             <p>Muito mais do que uma simples loja virtual, o <strong>Blue Lite</strong> reúne recursos que permitem integrar loja física e virtual, gerenciando todas as suas atividades e canais de atendimento em um único lugar. Amplie suas possibilidades de venda tanto para outras empresas (<strong>B2B</strong>) quanto para o consumidor final (<strong>B2C</strong>), proporcionando uma experiência de compra <strong>rápida</strong>, fácil e eficiente!</p>

            </div>
           </div>

           <div className="column c2">
            <div className="topic">
             <img src={C2I1} alt="" />
             <span>Aplicativo de Vendas para Celular</span>
             <p>Quer vender em qualquer lugar? Com o <strong>Blue Lite</strong> isso é uma realidade que cabe na palma da sua mão. O nosso App de Vendas possui um PDV <strong>frente de caixa otimizado</strong>, ideal para quem quer <strong>faturar mais</strong> e poupar tempo. Com ele, é possível realizar vendas, gerando notas e cupons fiscais para enviar aos clientes em instantes.</p>

           </div>

           </div>


           <div className="column c3">
            <div className="topic">
             <img src={C3I1} alt="" />
             <span>Central de integrações</span>
             <p>Não bastassem todas as funcionalidades nativas do <strong>Blue Lite</strong>, você pode contar com nossas integrações com a B2W Marketplace ou ainda com o Mercado Livre. Assim, anunciar as roupas e acessórios da sua loja fica muito mais fácil. Em um painel exclusivo, você acompanha seus anúncios, responde todas as perguntas recebidas, envia mensagens automáticas e acompanha o <strong>status</strong> de todas as suas vendas e recebimentos.</p>

            </div>

           </div>

          </div>

          <div className="image">
            <h2>
             <strong>Baixe gratuitamente e <br /></strong>
             comece a vender mais <br />
             <strong>com o Blue Lite:</strong>
            </h2>

            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
            </Link>

            <img src={Line} alt="" />
          </div>

          <div className="rest" ref={section2Ref}>
            <span>Quer emitir notas fiscais?</span>
            <h2>
            A gente descomplica a emissão <br /> de notas e cupons fiscais!
            </h2>

            <ul>
             <li>
              <span>
              Emissor NFE
              </span>
              <p>Projetado para ser prático e eficiente, o <strong>Blue Lite</strong> é um ERP Online e Offline com emissão de notas fiscais que permite imprimir a DANFE em instantes, a partir de pedidos e orçamentos. Afinal, nosso software possui <strong>cadastros rápidos</strong> que permitem a emissão de notas fiscais eletrônicas de modo <strong>seguro</strong> e organizado. Além disso, você pode utilizar tanto o certificado digital A1 como A3.</p>

             </li>

             <li>
              <span>
              NFC-e ou CF-e SATFE
              </span>
              <p>Um dos grandes diferenciais do PDV Frente de Caixa do <strong>Blue Lite</strong> é que ele funciona até mesmo sem internet! Nele, é possível registrar suas vendas manualmente ou por meio de um leitor de código de barras e controlar o seu <strong>fluxo de caixa</strong> com eficiência. Ah, e claro, você pode emitir NFC-e, CF-e SAT e, se estiver offline, pode emitir suas notas em contingência.</p>

             </li>

             <li>
              <span>
              
              </span>
              <p></p>

             </li>
            </ul>

            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
            </Link>
          </div>
         </S.Main3>

         <S.Main4 ref={section3Ref}>
          <div className="left">
            <span>Quer controlar seu estoque?</span>
            <h2>
            Gerencie todos os produtos que entram e saem da sua loja!
            </h2>

            <h3>
            Cadastro de produtos
            </h3>

            <p><strong>Cadastro ilimitado</strong> de roupas! Registre roupas de todos os tamanhos, cores e estampas. Com apenas alguns cliques você insere todas as características dos produtos, informações fiscais e os dados necessários para já sair vendendo.</p>

            <h3>
            Gestão de estoque
            </h3>

            <p>Controle as quantidades em estoque rapidamente, acompanhe o <strong>ranking de produtos mais vendidos</strong> e receba alertas quando um produto está acabando. Com o <strong>Blue Lite</strong> você pode gerenciar todas as suas mercadorias simples ou com variação, podendo definir sua <strong>margem de lucro</strong> e alterar quantidades com apenas alguns cliques.</p>


            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
           </Link>
          </div>  

          <img src={Image2} alt="" />
         </S.Main4>

         <S.Main4 ref={section4Ref} style={{ background: 'none'}}>
          <img src={Image3} alt="" />

          <div className="left">
            <span>Quer organizar o financeiro?</span>
            <h2 style={{ color: '#0074FF'}}>
            Ajudamos você a cuidar do seu caixa, para a sua loja crescer!
            </h2>

            <h3 style={{ color: '#ff9100'}}>
          Contas a pagar e a receber
            </h3>

          <p style={{ color: '#363636'}}>Totalmente integrado aos seus pedidos e ao seu PDV, você terá um prático módulo de <strong>gestão financeira</strong>. Assim, automaticamente, é possível realizar <strong>lançamentos financeiros</strong>, cadastrar categorias de gastos, controlar o calendário de pagamentos, gerar boletos e acompanhar todas as suas <strong>receitas e despesas</strong>.</p>

            <h3 style={{ color: '#ff9100'}}>
            Cadastro de Clientes e Fornecedores
            </h3>

          <p style={{ color: '#363636'}}>Tenha a sua carteira de clientes sempre organizada, com o cadastro de pessoas físicas e jurídicas do <strong>Blue Lite</strong>! Com esse recurso você pode vincular clientes às vendas ou fornecedores aos pagamentos, de forma <strong>rápida</strong> e <strong>prática</strong>.</p>


            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
           </Link>
          </div>  
         </S.Main4>

         <S.Main5>
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
         </S.Main5>

         <S.Main6>
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
Se você precisar emitir <strong>CF-e SAT</strong> (em São Paulo), será necessário configurar o seu aparelho SAT com o sistema. O primeiro passo é adquirir um aparelho SAT (não realizamos a comercialização desse produto e não há restrição de marca para a vinculação com o <strong>Blue Lite</strong>). Após ter o aparelho, basta enviar um e-mail para <strong>support@blueinnovation.com.br</strong> solicitando a configuração. Nossa equipe entrará em contato e realizará o processo por meio de acesso remoto, utilizando a ferramenta AnyDesk.
</p>

       </div>
      </div>
         </S.Main6>

         <Footer />
        </S.Container>
    )
};