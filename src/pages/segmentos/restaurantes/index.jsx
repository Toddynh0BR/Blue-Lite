import * as S from "./style";

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { Link } from "react-router-dom";

import Background from "../assets/image-top-sige-lite-foods.png";
import { useState, useRef, useEffect } from "react";

import Image1 from "../assets/sistema-restaurante.svg";
import Image2 from "../assets/controle-financeiro-foods.svg";
import Line from "../assets/line-back-cta.svg";

import C1I1 from '../assets/app-mobile-garcom.png'; 
import C1I2 from '../assets/sige-loja-restaurantes.png'; 

import C2I1 from "../assets/contorle-de-mesas.png";
import C2I2 from "../assets/catalogo-virtual.png";

import C3I1 from "../assets/integracao-ifood.png";
import C3I2 from "../assets/contorle-de-pedidos-restaurante.png";

import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

export function Restaurante() {
    const [isOutOfView, setIsOutOfView] = useState(false);
    const [selected, SetSelected] = useState('');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

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

         <div className="subheader">
          <div className="topic"  onClick={() => handleScrollToSection(section1Ref)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M248,208v16h-8a28,28,0,0,0,0,56h32a12,12,0,0,1,0,24H220v16h28v16h16V320h8a28,28,0,0,0,0-56H240a12,12,0,0,1,0-24h52V224H264V208Z"></path><path d="M456,368H384l-8-10.667V257.58a107.486,107.486,0,0,0-78.024-103.374L311.692,106.2A8,8,0,0,0,304,96H256v16H293.4l-11.429,40H256v16h31.191A91.521,91.521,0,0,1,360,257.58V360a7.987,7.987,0,0,0,.821,3.5A117.143,117.143,0,0,0,251.129,368H192a32.041,32.041,0,0,0-30.9,40.379l-31.849-14.59A16,16,0,0,1,131.2,390.4l19.2-25.6A8,8,0,0,0,152,360V272H136v85.333L118.4,380.8a32,32,0,0,0-3.684,6.328L88.364,375.058A34.132,34.132,0,0,0,44.1,389.891,37.069,37.069,0,0,0,40,407.84a33.973,33.973,0,0,0,18.872,30.545l93.283,46.641A104.565,104.565,0,0,0,198.66,496H456a8,8,0,0,0,8-8V376A8,8,0,0,0,456,368ZM360,480H198.66a88.5,88.5,0,0,1-39.351-9.285L66.031,424.076A18.059,18.059,0,0,1,56,407.84a22.069,22.069,0,0,1,2.187-10.363A18.086,18.086,0,0,1,81.7,389.6l90.971,41.67A8,8,0,0,0,176,432h88V416H192a16,16,0,0,1,0-32h61.33a8,8,0,0,0,4.117-1.141l.75-.45a101.177,101.177,0,0,1,97.272-3.735L360,380.942Zm88,0H376V384h72Z"></path><circle cx="408" cy="448" r="16"></circle><path d="M72.185,234.7a8,8,0,0,0,10.243,5.914l27.922-8.892,19.736,21.662a8,8,0,0,0,11.828,0l19.736-21.662,27.922,8.892a8,8,0,0,0,10.243-5.914l6.261-28.627,28.628-6.262a8,8,0,0,0,5.914-10.243l-8.892-27.922,21.662-19.736a8,8,0,0,0,0-11.828L231.726,110.35l8.892-27.922A8,8,0,0,0,234.7,72.185l-28.628-6.262L199.815,37.3a8,8,0,0,0-10.243-5.914L161.65,40.274,141.914,18.612a8,8,0,0,0-11.828,0L110.35,40.274,82.428,31.382A8,8,0,0,0,72.185,37.3L65.924,65.923,37.3,72.185a8,8,0,0,0-5.914,10.243l8.892,27.922L18.612,130.086a8,8,0,0,0,0,11.828L40.274,161.65l-8.892,27.922A8,8,0,0,0,37.3,199.815l28.628,6.262ZM54.841,153.277,35.879,136l18.962-17.277a8,8,0,0,0,2.235-8.341L49.292,85.939l25.061-5.481a8,8,0,0,0,6.106-6.106l5.48-25.06,24.443,7.784a8.005,8.005,0,0,0,8.342-2.235L136,35.878l17.276,18.963a8,8,0,0,0,8.342,2.235l24.443-7.784,5.48,25.06a8,8,0,0,0,6.106,6.106l25.061,5.481-7.784,24.443a8,8,0,0,0,2.235,8.341L236.121,136l-18.962,17.277a8,8,0,0,0-2.235,8.341l7.784,24.443-25.061,5.481a8,8,0,0,0-6.106,6.106l-5.48,25.06-24.443-7.784a8,8,0,0,0-8.342,2.235L136,236.122l-17.276-18.963a8,8,0,0,0-8.342-2.235l-24.443,7.784-5.48-25.06a8,8,0,0,0-6.106-6.106l-25.061-5.481,7.784-24.443A8,8,0,0,0,54.841,153.277Z"></path><rect x="79.431" y="128" width="113.137" height="16" transform="translate(-56.333 136) rotate(-45)"></rect><path d="M104,128a24,24,0,1,0-24-24A24.027,24.027,0,0,0,104,128Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,104,96Z"></path><path d="M152,160a24,24,0,1,0,24-24A24.027,24.027,0,0,0,152,160Zm32,0a8,8,0,1,1-8-8A8.009,8.009,0,0,1,184,160Z"></path></g></svg>
            <p> Quero vender mais</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section2Ref)}>
           <svg id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>
            <p> Quero gerir estoque</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section3Ref)}>
           <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" ><path d="m240 64h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v80h16v-88a8 8 0 0 0 -8-8h-416a8 8 0 0 0 -8 8v416a8 8 0 0 0 8 8h248v-16h-32v-192h32v-16h-32zm120 56h-48v-56h48zm-256-56h48v56h-48zm-16 0v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v192h-192v-192zm16 208h48v56h-48zm120 192h-192v-192h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56z"></path><path d="m192 224h16v16h-16z"></path><path d="m160 224h16v16h-16z"></path><path d="m192 432h16v16h-16z"></path><path d="m160 432h16v16h-16z"></path><path d="m88 16h240v16h-240z"></path><path d="m344 16h16v16h-16z"></path><path d="m464 160h-144a32.036 32.036 0 0 0 -32 32v272a32.036 32.036 0 0 0 32 32h144a32.036 32.036 0 0 0 32-32v-272a32.036 32.036 0 0 0 -32-32zm16 304a16.019 16.019 0 0 1 -16 16h-144a16.019 16.019 0 0 1 -16-16v-272a16.019 16.019 0 0 1 16-16h144a16.019 16.019 0 0 1 16 16z"></path><path d="m368 192h16v16h-16z"></path><path d="m400 192h16v16h-16z"></path><path d="m384 448h16v16h-16z"></path><path d="m392 300.687-14.469-14.47-11.314 11.314 20.126 20.126a8 8 0 0 0 11.314 0l64-64-11.314-11.314z"></path><path d="m392 352a56.063 56.063 0 0 0 56-56h-16a39.98 39.98 0 1 1 -20.006-34.653l8.012-13.85a56 56 0 1 0 -28.006 104.503z"></path><path d="m328 376h16v16h-16z"></path><path d="m360 376h96v16h-96z"></path><path d="m328 408h128v16h-128z"></path></svg>
            <p> Quero emitir notas e gerir finanças</p>
           </div>  
         </div>
          
         <S.Main id="myDiv">
          <img src={Background} alt="" className="Background" />
          <div className="left">
           <h1>
           Sistema de Gestão <br />
           para <strong> Restaurantes</strong>
           </h1>

           <ul>
            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p>Controle de <strong> mesas, comandas e tele-entrega;</strong></p>
            </li>

            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p>Cadastro de <strong> produtos alimentícios e pizzas;</strong></p>
            </li>

            <li>
             <GoShieldCheck size={20} color="rgb(9, 194, 9)"/>
             <p>Integração com <strong> iFood.</strong></p>
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
            <p> Quero gerir estoque</p>
           </div>

           <div className="topic" onClick={() => handleScrollToSection(section3Ref)}>
           <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" ><path d="m240 64h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v80h16v-88a8 8 0 0 0 -8-8h-416a8 8 0 0 0 -8 8v416a8 8 0 0 0 8 8h248v-16h-32v-192h32v-16h-32zm120 56h-48v-56h48zm-256-56h48v56h-48zm-16 0v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56v192h-192v-192zm16 208h48v56h-48zm120 192h-192v-192h56v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64h56z"></path><path d="m192 224h16v16h-16z"></path><path d="m160 224h16v16h-16z"></path><path d="m192 432h16v16h-16z"></path><path d="m160 432h16v16h-16z"></path><path d="m88 16h240v16h-240z"></path><path d="m344 16h16v16h-16z"></path><path d="m464 160h-144a32.036 32.036 0 0 0 -32 32v272a32.036 32.036 0 0 0 32 32h144a32.036 32.036 0 0 0 32-32v-272a32.036 32.036 0 0 0 -32-32zm16 304a16.019 16.019 0 0 1 -16 16h-144a16.019 16.019 0 0 1 -16-16v-272a16.019 16.019 0 0 1 16-16h144a16.019 16.019 0 0 1 16 16z"></path><path d="m368 192h16v16h-16z"></path><path d="m400 192h16v16h-16z"></path><path d="m384 448h16v16h-16z"></path><path d="m392 300.687-14.469-14.47-11.314 11.314 20.126 20.126a8 8 0 0 0 11.314 0l64-64-11.314-11.314z"></path><path d="m392 352a56.063 56.063 0 0 0 56-56h-16a39.98 39.98 0 1 1 -20.006-34.653l8.012-13.85a56 56 0 1 0 -28.006 104.503z"></path><path d="m328 376h16v16h-16z"></path><path d="m360 376h96v16h-96z"></path><path d="m328 408h128v16h-128z"></path></svg>
            <p> Quero emitir notas e gerir finanças</p>
           </div>
          </div>
         </S.Main>

         <S.Main2>
          <div className="left">
            <h2>
            Tudo o que o seu restaurante precisa, o Blue Lite tem!
            </h2>

            <p>Empreender é sempre uma tarefa desafiadora, principalmente quando se trata de administrar uma pequena empresa. E quando o empreendedor precisa assumir várias funções ao mesmo tempo, contar com ferramentas que ajudem a <strong>facilitar a rotina administrativa</strong>, oferecer uma <strong>visão abrangente do negócio</strong> e trazer <strong>praticidade para vendas e controle financeiro</strong> faz toda a diferença.</p>


            <p>É aí que entra o <strong>Blue Lite</strong>, como a aposta de mais de <strong>200 mil empreendedores</strong> em todo o Brasil que decidiram descomplicar a gestão empresarial e apostar em ferramentas para <strong>vender mais</strong>.</p>

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
           <div className="line1">

           </div>

           <div className="column">
            <div className="topic">
             <img src={ C1I1} alt="" />
             <span>App Mobile para Garçom</span>
             <p>Gostaria que o seu garçom anotasse o pedido diretamente na mesa do cliente e que esse registro fosse enviado automaticamente para a cozinha? Com o <strong>Blue Mobi</strong>, isso é possível e está ao seu alcance. Nosso <strong>App de Vendas</strong> conta com um módulo exclusivo para gerenciar vendas no Foods, sendo perfeito para quem deseja <strong>aumentar o faturamento</strong> e otimizar o tempo.</p>
            </div>

            <div className="topic">
             <img src={C1I2} alt="" />
             <span>Blue Loja</span>
             <p>Com o <strong>Blue Lite</strong>, você pode criar um site exclusivo para o seu restaurante. A sua loja virtual estará disponível para que os clientes façam pedidos e acompanhem o status das encomendas de maneira <strong>rápida e prática</strong>. Essa funcionalidade é um <strong>diferencial estratégico</strong> que pode elevar o nível da sua empresa!</p>

            </div>
           </div>

           <div className="column c2">
            <div className="topic">
             <img src={C2I1} alt="" />
             <span>Controle de Mesas e Comandas ou Tele-entrega</span>
             <p>Gerencie o consumo das suas mesas, pedidos ou entregas de forma eficiente, sem depender de comandas manuais e com apenas alguns cliques. Com o <strong>Blue Lite</strong>, você realiza o registro de vendas de maneira totalmente integrada ao ERP, garantindo <strong>mais organização</strong>, economia de tempo e <strong>eliminação de retrabalho</strong>.</p>
            </div>

            <div className="topic">
             <img src={C2I2} alt="" />
             <span>Catálogo virtual</span>
             <p>Expanda as possibilidades de vendas do seu restaurante com um <strong>Catálogo Virtual exclusivo</strong>, que pode ser enviado por e-mail para alcançar toda a sua base de clientes. Além disso, o cliente tem a conveniência de <strong>aprovar a compra diretamente no e-mail</strong>, com um botão que confirma o pedido automaticamente no sistema.</p>

            </div>
           </div>


           <div className="column c3">
            <div className="topic">
             <img src={C3I1} alt="" />
             <span>Integração com o iFood</span>
             <p>Com a parceria com o iFood, suas vendas por delivery se tornam muito mais práticas e eficientes! Ative sua conta no iFood e integre-a ao <strong>Blue Lite</strong> para gerenciar seus pedidos com facilidade. Essa integração oferece <strong>mais visibilidade para seus produtos</strong>, maior controle para <strong>vender mais</strong> e a tranquilidade de acessar todas as informações necessárias com apenas alguns cliques.</p>
            </div>

            <div className="topic">
             <img src={C3I2} alt="" />
             <span>Controle de Pedidos</span>
             <p>Com esse recurso, você pode acessar a <strong>listagem completa de todos os pedidos</strong> realizados no seu restaurante, oferecendo flexibilidade para fechar a conta a qualquer momento. É possível também <strong>aplicar descontos</strong> ou até mesmo dividir o custo entre os clientes da mesa de forma prática. </p>

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
            <span>Quer controlar seu estoque?</span>
            <h2>
             Gerencie todos os produtos que <br />
             entram e saem da sua loja!
            </h2>

            <ul>
             <li>
              <span>
              Produtos do tipo Pizza
              </span>
              <p>Se você tem uma pizzaria e busca um sistema para controlar <strong>dimensões, sabores, bordas e tipos de massa</strong>, o <strong>Blue Lite</strong> é a solução ideal para o seu negócio! Com ele, você pode cadastrar essas e outras características nos produtos, tornando as vendas no Foods ainda mais <strong>práticas e organizadas</strong>.</p>

             </li>

             <li>
              <span>
              Complementos de produtos
              </span>
              <p>Sabemos que seus produtos podem incluir <strong>complementos</strong>, como molhos, saladas ou outros ingredientes extras. Por isso, é essencial contar com um sistema ERP que ofereça esse nível de controle, garantindo <strong>mais organização</strong> e <strong>maiores chances de venda</strong> para o seu restaurante!</p>

             </li>

             <li>
              <span>
              Cardápio de produtos
              </span>
              <p>Além de cadastrar seus produtos com <strong>detalhes completos</strong>, você também pode contar com um <strong>cardápio digital</strong> no Foods. É possível adicionar imagens e categorias aos itens, tornando mais fácil e <strong>rápido para o garçom</strong> localizar o produto ao registrar uma venda.</p>

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
            <span>Quer emitir notas e controlar o financeiro?</span>
            <h2>
            Ajudamos você a cuidar do seu caixa, para a sua loja crescer!
            </h2>

            <h3>
             Contas a pagar e a receber
            </h3>

            <p>Totalmente integrado aos seus pedidos e ao Foods, o <strong>Blue Lite</strong> oferece um módulo de <strong>gestão financeira prática</strong>. Com ele, você pode realizar lançamentos automáticos, cadastrar categorias de despesas, gerenciar o <strong>calendário de pagamentos</strong> e acompanhar todas as suas receitas e despesas de forma eficiente.</p>

            <h3>
            Rateio de pagamento
            </h3>

            <p>Além de oferecer praticidade para realizar vendas de diferentes maneiras, o Foods permite <strong>dividir o valor total</strong> da compra entre quantas pessoas você precisar. Esse recurso torna a negociação com seus clientes <strong>ainda mais simples</strong> e garante um <strong>processo automatizado</strong> para o seu negócio.</p>

            <h3>
             Emissão de NFC-e
            </h3>

            <p>Quando a venda for concluída, que tal <strong>emitir a NFC-e com apenas um clique</strong>? Configure as tributações dos seus produtos e emita o cupom fiscal sem se preocupar com a fiscalização. O <strong>Blue Lite</strong> funciona até mesmo sem internet! Nesse caso, você pode emitir NFC-e em modo offline e gerar suas notas em <strong>contingência</strong>.</p>


            <Link to="/baixar-blue-lite">
             <button>
              Download Gratuito
             </button>
           </Link>
          </div>  

          <img src={Image2} alt="" />
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