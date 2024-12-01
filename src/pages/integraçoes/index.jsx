import * as S from "./style";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Preload } from "../../components/preload";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import HeaderImg from "./assets/integracoes-sige-clod.png";
import InputsImg from "./assets/integre-facil-com-o-sige-lite.svg";

import { FaPlus } from "react-icons/fa6";
import { BsMouse } from "react-icons/bs";

import i1 from "./assets/amazon.png";
import i2 from "./assets/extra.png";
import i3 from "./assets/b2w.png";
import i4 from "./assets/marketplace.png";
import i5 from "./assets/magalu.png";
import i6 from "./assets/netshoes.png";
import i7 from "./assets/dafiti.png";
import i8 from "./assets/leroy-merlin.png";
import i9 from "./assets/shoptime.png";
import i10 from "./assets/submarino.png";
import i11 from "./assets/carrefour.png";
import i12 from "./assets/casas-bahia.png";
import i13 from "./assets/americanas.png";
import i14 from "./assets/ponto-frio.png";
import i15 from "./assets/jet-commerce.png";
import i16 from "./assets/loja-integrada.png";
import i17 from "./assets/moovin.png";
import i18 from "./assets/woocommerce.png";
import i19 from "./assets/signa-shop.png";
import i20 from "./assets/sigep-web-dos-correios.png";
import i21 from "./assets/magento-commerce.png";
import i22 from "./assets/pag-hiper.png";

export function Integraçoes() {
    const [selected, SetSelected] = useState('');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
 
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    }, []);

    const handleScrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
    };

    return(
     <S.Container>
       <Preload/>
      <Header/>
      <S.Main>
       <div className="left">
        <h2>
       <strong> Integre sua loja </strong> com as maiores plataformas de e-commerce e marketplaces do Brasil!
        </h2>

        <span>
        Além de um sistema para <strong> loja física </strong>  você pode integrar sua <strong>loja 
        virtual </strong> com as gigantes do comércio eletrônico.
        </span>

        <Link to="/baixar-blue-lite">
        <button>
         Download Gratuito
        </button>
        </Link>

        <div className="icon" onClick={() => handleScrollToSection(section1Ref)}>
         <BsMouse/>
         <p>
          <strong>Role</strong> para <br />
          saber mais
         </p>
        </div>
       </div>

       <img src={HeaderImg} alt="" />
      </S.Main>

      <S.Main2 ref={section1Ref}>
       <span>
        O bLue Lite é o caminho <br />
        que liga a sua loja à <br />
        clientes em todo Brasil!
       </span>

       <ul >
        <li>
         <div className="circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="40.03" height="40" viewBox="0 0 40.03 40">   <g id="packages_1_" data-name="packages (1)" transform="translate(0 -0.192)">     <path id="Caminho_36978" data-name="Caminho 36978" d="M39.009,27.777H33.556V18.806a.586.586,0,1,0-1.173,0v8.971H22.194V25.236a.586.586,0,0,0-.586-.586H15.719V10.672h6.66v2.412a.937.937,0,0,0,.936.936h1.472a.937.937,0,0,0,.936-.936V10.672h6.66v5.79a.586.586,0,1,0,1.173,0V10.52A1.022,1.022,0,0,0,32.535,9.5H20.193V1.213A1.022,1.022,0,0,0,19.172.192H8.4A1.022,1.022,0,0,0,7.381,1.213V4.92a.586.586,0,1,0,1.173,0V1.365h3.561V3.777a.937.937,0,0,0,.936.936h1.472a.937.937,0,0,0,.936-.936V1.365H19.02V9.5H15.133a.586.586,0,0,0-.586.586v4.886H8.554V7.265a.586.586,0,0,0-1.173,0v7.707H3.929a1.022,1.022,0,0,0-1.021,1.021V24.65H1.021A1.022,1.022,0,0,0,0,25.671V39.606a.586.586,0,0,0,.586.586H6.8a.586.586,0,1,0,0-1.173H1.173v-13.2H9.425v2.412a.937.937,0,0,0,.936.936h1.472a.937.937,0,0,0,.936-.936V25.823h8.252v13.2H9.14a.586.586,0,1,0,0,1.173h30.3a.586.586,0,0,0,.586-.586V28.8A1.022,1.022,0,0,0,39.009,27.777ZM14.286,3.541h-1V1.365h1Zm10.264,7.131v2.176h-1V10.672ZM8.814,16.144h1V18.32h-1Zm-4.734,0H7.641v2.412a.937.937,0,0,0,.936.936h1.472a.937.937,0,0,0,.936-.936V16.144h3.561V24.65H4.08ZM11.6,28h-1V25.823h1Zm19.429.952v2.176h-1V28.95Zm7.832,10.069H22.194V28.95h6.66v2.412a.937.937,0,0,0,.936.936h1.472a.937.937,0,0,0,.936-.936V28.95h6.66V39.019Z" fill="#0074FF"></path>   </g> </svg>
         </div>

         <p>
         <strong> Cadastre seus <br /> produtos </strong> no Blue Lite<br /><br />
         </p>
        </li>

        <li>
         <div className="circle">
          <svg id="integration" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">   <path id="Caminho_36988" data-name="Caminho 36988" d="M149.032,146.114,147.6,144.68a7.34,7.34,0,0,0,.584-1.338h2.106a.586.586,0,0,0,.586-.586v-3.387a.586.586,0,0,0-.586-.586h-2.106a7.342,7.342,0,0,0-.584-1.338l1.434-1.434a.586.586,0,0,0,0-.829l-2.2-2.2a.586.586,0,0,0-.829,0l-1.489,1.489a7.363,7.363,0,0,0-1.1-.456v-2.106a.586.586,0,0,0-.586-.586h-3.114a.586.586,0,0,0-.586.586v2.027a7.331,7.331,0,0,0-1.359.534l-1.489-1.489a.586.586,0,0,0-.829,0l-2.2,2.2a.586.586,0,0,0,0,.829l1.434,1.434a7.341,7.341,0,0,0-.584,1.338h-2.106a.586.586,0,0,0-.586.586v3.387a.586.586,0,0,0,.586.586H134.1a7.34,7.34,0,0,0,.584,1.338l-1.434,1.434a.586.586,0,0,0,0,.829l2.2,2.2a.586.586,0,0,0,.829,0l1.489-1.489a7.336,7.336,0,0,0,1.359.534v2.028a.586.586,0,0,0,.586.586h3.114a.586.586,0,0,0,.586-.586v-2.106a7.368,7.368,0,0,0,1.1-.456L146,149.145a.586.586,0,0,0,.829,0l2.2-2.2A.586.586,0,0,0,149.032,146.114Zm-2.616,1.788-1.387-1.387a.586.586,0,0,0-.714-.089,6.188,6.188,0,0,1-1.633.677.586.586,0,0,0-.441.568v1.96H140.3v-1.9a.586.586,0,0,0-.464-.573,6.176,6.176,0,0,1-1.87-.732.586.586,0,0,0-.714.089l-1.387,1.387-1.373-1.373,1.344-1.344a.586.586,0,0,0,.077-.733,6.181,6.181,0,0,1-.806-1.84.586.586,0,0,0-.568-.441h-1.96v-2.215h1.96a.586.586,0,0,0,.568-.441,6.188,6.188,0,0,1,.806-1.84.586.586,0,0,0-.077-.733l-1.344-1.344,1.373-1.373,1.387,1.387a.586.586,0,0,0,.714.089,6.173,6.173,0,0,1,1.87-.732.586.586,0,0,0,.464-.573v-1.9h1.942v1.96a.586.586,0,0,0,.441.568,6.188,6.188,0,0,1,1.633.677.586.586,0,0,0,.714-.089l1.387-1.387,1.373,1.373-1.344,1.344a.586.586,0,0,0-.077.733,6.183,6.183,0,0,1,.806,1.84.586.586,0,0,0,.568.441h1.96v2.215h-1.96a.586.586,0,0,0-.568.441,6.187,6.187,0,0,1-.806,1.84.586.586,0,0,0,.077.733l1.344,1.344Z" transform="translate(-121.14 -121.062)" fill="#0074FF"></path>   <path id="Caminho_36989" data-name="Caminho 36989" d="M221.15,218.2a2.978,2.978,0,0,0-.448.034.586.586,0,1,0,.177,1.158,1.8,1.8,0,0,1,.272-.02,1.779,1.779,0,1,1-1.761,1.508.586.586,0,0,0-1.158-.178,2.954,2.954,0,1,0,2.919-2.5Z" transform="translate(-201.15 -201.149)" fill="#0074FF"></path>   <path id="Caminho_36990" data-name="Caminho 36990" d="M423.009,45.457a1.77,1.77,0,1,0,1.77,1.77A1.772,1.772,0,0,0,423.009,45.457Zm0,2.368a.6.6,0,1,1,.6-.6A.6.6,0,0,1,423.009,47.825Z" transform="translate(-388.33 -41.906)" fill="#0074FF"></path>   <path id="Caminho_36991" data-name="Caminho 36991" d="M385.836,3.551h-1a4.119,4.119,0,0,0-1.969-1.969v-1A.586.586,0,0,0,382.285,0h-2.368a.586.586,0,0,0-.586.586v1a4.119,4.119,0,0,0-1.969,1.969h-1a.586.586,0,0,0-.586.586V6.5a.586.586,0,0,0,.586.586h1a4.12,4.12,0,0,0,1.97,1.97v1a.586.586,0,0,0,.586.586h2.368a.586.586,0,0,0,.586-.586v-1a4.119,4.119,0,0,0,1.969-1.969h1a.586.586,0,0,0,.586-.586V4.137A.586.586,0,0,0,385.836,3.551Zm-.586,2.368h-.8a.586.586,0,0,0-.552.39,3,3,0,0,1-1.808,1.808.586.586,0,0,0-.39.552v.8h-1.2v-.8a.586.586,0,0,0-.39-.552,3,3,0,0,1-1.808-1.808.586.586,0,0,0-.552-.39h-.8v-1.2h.8a.586.586,0,0,0,.552-.39,3,3,0,0,1,1.808-1.808.586.586,0,0,0,.39-.552v-.8h1.2v.8a.586.586,0,0,0,.39.552A3,3,0,0,1,383.9,4.333a.586.586,0,0,0,.552.39h.8Z" transform="translate(-346.422)" fill="#0074FF"></path>   <path id="Caminho_36992" data-name="Caminho 36992" d="M424.778,423.009a1.77,1.77,0,1,0-1.77,1.77A1.772,1.772,0,0,0,424.778,423.009Zm-2.368,0a.6.6,0,1,1,.6.6A.6.6,0,0,1,422.411,423.009Z" transform="translate(-388.33 -388.33)" fill="#0074FF"></path>   <path id="Caminho_36993" data-name="Caminho 36993" d="M385.836,379.331h-1a4.119,4.119,0,0,0-1.969-1.969v-1a.586.586,0,0,0-.586-.586h-2.368a.586.586,0,0,0-.586.586v1.042a.586.586,0,0,0,.643.951q.068-.028.138-.053a.586.586,0,0,0,.39-.552v-.8h1.2v.8a.586.586,0,0,0,.39.552,3,3,0,0,1,1.808,1.808.586.586,0,0,0,.552.39h.8v1.2h-.8a.586.586,0,0,0-.552.39,3,3,0,0,1-1.808,1.808.586.586,0,0,0-.39.552v.8h-1.2v-.8a.586.586,0,0,0-.39-.552,3,3,0,0,1-1.808-1.808.586.586,0,0,0-.552-.39h-.8v-1.2h.8a.586.586,0,0,0,.552-.39q.026-.074.056-.146a.586.586,0,0,0-.959-.636h-1.037a.586.586,0,0,0-.586.586v2.368a.586.586,0,0,0,.586.586h1a4.119,4.119,0,0,0,1.969,1.969v1a.586.586,0,0,0,.586.586h2.368a.586.586,0,0,0,.586-.586v-1a4.119,4.119,0,0,0,1.969-1.969h1a.586.586,0,0,0,.586-.586v-2.368A.586.586,0,0,0,385.836,379.331Z" transform="translate(-346.422 -346.422)" fill="#0074FF"></path>   <path id="Caminho_36994" data-name="Caminho 36994" d="M49,47.227A1.77,1.77,0,1,0,47.227,49,1.772,1.772,0,0,0,49,47.227Zm-2.368,0a.6.6,0,1,1,.6.6A.6.6,0,0,1,46.629,47.227Z" transform="translate(-41.906 -41.906)" fill="#0074FF"></path>   <path id="Caminho_36995" data-name="Caminho 36995" d="M.586,7.091h1A4.119,4.119,0,0,0,3.551,9.06v1a.586.586,0,0,0,.586.586H6.5a.586.586,0,0,0,.586-.586v-1a4.12,4.12,0,0,0,1.97-1.97h1a.586.586,0,0,0,.586-.586V4.137a.586.586,0,0,0-.586-.586h-1A4.119,4.119,0,0,0,7.091,1.582v-1A.586.586,0,0,0,6.5,0H4.137a.586.586,0,0,0-.586.586V1.628a.586.586,0,0,0,.643.951q.068-.028.138-.053a.586.586,0,0,0,.39-.552v-.8h1.2v.8a.586.586,0,0,0,.39.552A3,3,0,0,1,8.117,4.333a.586.586,0,0,0,.552.39h.8v1.2h-.8a.586.586,0,0,0-.552.39A3,3,0,0,1,6.309,8.117a.586.586,0,0,0-.39.552v.8h-1.2v-.8a.586.586,0,0,0-.39-.552A3,3,0,0,1,2.526,6.309a.586.586,0,0,0-.552-.39h-.8v-1.2h.8a.586.586,0,0,0,.552-.39q.026-.074.056-.145a.586.586,0,0,0-.959-.636H.586A.586.586,0,0,0,0,4.137V6.5a.586.586,0,0,0,.586.586Z" transform="translate(0)" fill="#0074FF"></path>   <path id="Caminho_36996" data-name="Caminho 36996" d="M10.056,379.331h-1a4.12,4.12,0,0,0-1.97-1.97v-1a.586.586,0,0,0-.586-.586H4.137a.586.586,0,0,0-.586.586v1a4.119,4.119,0,0,0-1.969,1.969h-1a.586.586,0,0,0-.586.586v2.368a.586.586,0,0,0,.586.586h1a4.119,4.119,0,0,0,1.969,1.969v1a.586.586,0,0,0,.586.586H6.5a.586.586,0,0,0,.586-.586v-1a4.119,4.119,0,0,0,1.969-1.969h1a.586.586,0,0,0,.586-.586v-2.368A.586.586,0,0,0,10.056,379.331ZM9.47,381.7h-.8a.586.586,0,0,0-.552.39A3,3,0,0,1,6.309,383.9a.586.586,0,0,0-.39.552v.8h-1.2v-.8a.586.586,0,0,0-.39-.552,3,3,0,0,1-1.808-1.808.586.586,0,0,0-.552-.39h-.8v-1.2h.8a.586.586,0,0,0,.552-.39,3,3,0,0,1,1.808-1.808.586.586,0,0,0,.39-.552v-.8h1.2v.8a.586.586,0,0,0,.39.552,3,3,0,0,1,1.808,1.808.586.586,0,0,0,.552.39h.8Z" transform="translate(0 -346.422)" fill="#0074FF"></path>   <path id="Caminho_36997" data-name="Caminho 36997" d="M47.227,421.238a1.77,1.77,0,1,0,1.77,1.77A1.772,1.772,0,0,0,47.227,421.238Zm0,2.368a.6.6,0,1,1,.6-.6A.6.6,0,0,1,47.227,423.606Z" transform="translate(-41.906 -388.329)" fill="#0074FF"></path>   <path id="Caminho_36998" data-name="Caminho 36998" d="M112.119,111.29a.586.586,0,1,0-.829.829l1.683,1.683h-.479a.586.586,0,0,0,0,1.172h1.894a.592.592,0,0,0,.586-.586v-1.894a.586.586,0,0,0-1.172,0v.479Z" transform="translate(-102.437 -102.437)" fill="#0074FF"></path>   <path id="Caminho_36999" data-name="Caminho 36999" d="M351.54,114.446a.592.592,0,0,0,.583.528h1.894a.586.586,0,0,0,0-1.172h-.479l1.683-1.683a.586.586,0,0,0-.829-.829l-1.683,1.683v-.479a.586.586,0,1,0-1.172,0v1.894A.557.557,0,0,0,351.54,114.446Z" transform="translate(-324.073 -102.438)" fill="#0074FF"></path>   <path id="Caminho_37000" data-name="Caminho 37000" d="M114.97,350.045a.592.592,0,0,0-.583-.528h-1.894a.586.586,0,0,0,0,1.172h.479l-1.683,1.683a.586.586,0,0,0,.829.829l1.683-1.683V352a.586.586,0,0,0,1.172,0V350.1C114.973,350.084,114.972,350.064,114.97,350.045Z" transform="translate(-102.436 -322.211)" fill="#0074FF"></path>   <path id="Caminho_37001" data-name="Caminho 37001" d="M354.391,353.2a.586.586,0,0,0,.829-.829l-1.683-1.683h.479a.586.586,0,0,0,0-1.172h-1.894a.592.592,0,0,0-.586.586V352a.586.586,0,0,0,1.172,0v-.479Z" transform="translate(-324.072 -322.211)" fill="#0074FF"></path> </svg>
         </div>

         <p>
         <strong>Integre </strong> com o <br /> e-commerce ou <br />marketplace escolhido 
         </p>
        </li>

        <li>
         <div className="circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="40.015" height="40" viewBox="0 0 40.015 40">   <g id="box" transform="translate(0.001 -0.089)">     <g id="Grupo_6603" data-name="Grupo 6603" transform="translate(12.671 12.079)">       <g id="Grupo_6602" data-name="Grupo 6602">         <path id="Caminho_36979" data-name="Caminho 36979" d="M166.649,148.408a.511.511,0,0,0-.025-.06.7.7,0,0,0-.041-.1.671.671,0,0,0-.046-.061.635.635,0,0,0-.058-.075.748.748,0,0,0-.062-.049.756.756,0,0,0-.067-.054l-6.669-4a.667.667,0,0,0-.687,0l-6.669,4a.586.586,0,0,0-.07.054.761.761,0,0,0-.063.049.7.7,0,0,0-.057.075.592.592,0,0,0-.047.062.706.706,0,0,0-.04.1.673.673,0,0,0-.025.063.644.644,0,0,0-.023.173v6.669a.667.667,0,0,0,.323.572l6.669,4,.007,0,.007.005a.648.648,0,0,0,.109.045c.015.005.03.014.046.019a.656.656,0,0,0,.347,0c.016,0,.031-.013.046-.019a.647.647,0,0,0,.109-.045l.007-.005.007,0,6.669-4a.667.667,0,0,0,.323-.572v-6.669A.653.653,0,0,0,166.649,148.408Zm-7.313-3.05,2.038,1.223L156,149.8l-2.038-1.223Zm-.667,12.716-5.335-3.2v-5.113l5.335,3.2Zm.667-6.268-2.038-1.223,5.373-3.224,2.038,1.223Zm6,3.068-5.335,3.2V152.96l5.335-3.2Z" transform="translate(-152 -143.913)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6605" data-name="Grupo 6605" transform="translate(17.473 0.089)">       <g id="Grupo_6604" data-name="Grupo 6604">         <path id="Caminho_36980" data-name="Caminho 36980" d="M212.668.341A.691.691,0,0,0,211.7.246a.684.684,0,0,0-.095.095l-2,2.668,1.067.8.8-1.067V8.077H212.8V2.742l.8,1.067,1.067-.8Z" transform="translate(-209.6 -0.089)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6607" data-name="Grupo 6607" transform="translate(17.473 32.086)">       <g id="Grupo_6606" data-name="Grupo 6606">         <path id="Caminho_36981" data-name="Caminho 36981" d="M213.6,388.179l-.8,1.067v-5.335h-1.334v5.335l-.8-1.067-1.067.8,2,2.668a.667.667,0,0,0,1.067,0l2-2.668Z" transform="translate(-209.6 -383.911)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6609" data-name="Grupo 6609" transform="translate(19.34 9.411)">       <g id="Grupo_6608" data-name="Grupo 6608">         <rect id="Retângulo_4110" data-name="Retângulo 4110" width="1.334" height="1.334" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6611" data-name="Grupo 6611" transform="translate(19.34 29.418)">       <g id="Grupo_6610" data-name="Grupo 6610">         <rect id="Retângulo_4111" data-name="Retângulo 4111" width="1.334" height="1.334" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6613" data-name="Grupo 6613" transform="translate(-0.001 17.547)">       <g id="Grupo_6612" data-name="Grupo 6612">         <path id="Caminho_36982" data-name="Caminho 36982" d="M8,211.378H2.667l1.067-.8-.8-1.067-2.668,2a.667.667,0,0,0,0,1.067l2.668,2,.8-1.067-1.067-.8H8Z" transform="translate(0.001 -209.511)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6615" data-name="Grupo 6615" transform="translate(32.011 17.547)">       <g id="Grupo_6614" data-name="Grupo 6614">         <path id="Caminho_36983" data-name="Caminho 36983" d="M391.87,211.645a.669.669,0,0,0-.133-.133l-2.668-2-.8,1.067,1.067.8H384v1.334h5.335l-1.067.8.8,1.067,2.668-2A.667.667,0,0,0,391.87,211.645Z" transform="translate(-384 -209.511)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6617" data-name="Grupo 6617" transform="translate(9.336 19.414)">       <g id="Grupo_6616" data-name="Grupo 6616">         <rect id="Retângulo_4112" data-name="Retângulo 4112" width="1.334" height="1.334" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6619" data-name="Grupo 6619" transform="translate(29.344 19.414)">       <g id="Grupo_6618" data-name="Grupo 6618">         <rect id="Retângulo_4113" data-name="Retângulo 4113" width="1.334" height="1.334" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6621" data-name="Grupo 6621" transform="translate(5.661 5.735)">       <g id="Grupo_6620" data-name="Grupo 6620">         <path id="Caminho_36984" data-name="Caminho 36984" d="M74.242,73.209,70.47,69.437l1.32.188.189-1.32-3.3-.474a.667.667,0,0,0-.758.758l.472,3.3,1.32-.189-.188-1.32L73.3,74.152Z" transform="translate(-67.913 -67.823)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6623" data-name="Grupo 6623" transform="translate(28.024 28.1)">       <g id="Grupo_6622" data-name="Grupo 6622">         <path id="Caminho_36985" data-name="Caminho 36985" d="M342.488,341.658l-.471-3.3-1.322.19.188,1.32-3.772-3.772-.943.943,3.772,3.772-1.318-.189-.189,1.32,3.3.471a.667.667,0,0,0,.762-.66A.653.653,0,0,0,342.488,341.658Z" transform="translate(-336.168 -336.095)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6625" data-name="Grupo 6625" transform="translate(11.99 12.065)">       <g id="Grupo_6624" data-name="Grupo 6624" transform="translate(0 0)">         <rect id="Retângulo_4114" data-name="Retângulo 4114" width="1.334" height="1.334" transform="translate(0 0.943) rotate(-45)" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6627" data-name="Grupo 6627" transform="translate(26.138 26.211)">       <g id="Grupo_6626" data-name="Grupo 6626" transform="translate(0 0)">         <rect id="Retângulo_4115" data-name="Retângulo 4115" width="1.334" height="1.334" transform="translate(0 0.943) rotate(-45)" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6629" data-name="Grupo 6629" transform="translate(5.661 28.098)">       <g id="Grupo_6628" data-name="Grupo 6628">         <path id="Caminho_36986" data-name="Caminho 36986" d="M70.472,340.794l3.772-3.772-.94-.943-3.772,3.772.188-1.32-1.32-.189-.474,3.3a.667.667,0,0,0,.66.762.656.656,0,0,0,.095-.007l3.3-.471-.189-1.32Z" transform="translate(-67.918 -336.079)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6631" data-name="Grupo 6631" transform="translate(28.024 5.738)">       <g id="Grupo_6630" data-name="Grupo 6630">         <path id="Caminho_36987" data-name="Caminho 36987" d="M342.3,68.053a.66.66,0,0,0-.566-.189l-3.3.472.189,1.32,1.32-.188-3.772,3.772.943.943,3.772-3.772L340.7,71.73l1.32.19.471-3.3A.667.667,0,0,0,342.3,68.053Z" transform="translate(-336.168 -67.857)" fill="#0074FF"></path>       </g>     </g>     <g id="Grupo_6633" data-name="Grupo 6633" transform="translate(11.991 26.212)">       <g id="Grupo_6632" data-name="Grupo 6632" transform="translate(0 0)">         <rect id="Retângulo_4116" data-name="Retângulo 4116" width="1.334" height="1.334" transform="translate(0 0.943) rotate(-45)" fill="#0074FF"></rect>       </g>     </g>     <g id="Grupo_6635" data-name="Grupo 6635" transform="translate(26.138 12.063)">       <g id="Grupo_6634" data-name="Grupo 6634" transform="translate(0 0)">         <rect id="Retângulo_4117" data-name="Retângulo 4117" width="1.334" height="1.334" transform="translate(0 0.943) rotate(-45)" fill="#0074FF"></rect>       </g>     </g>   </g> </svg>
         </div>

         <p>
        <strong> Anuncie e venda </strong> seus <br /> produtos para muito <br /> mais clientes 
 
         </p>
        </li>
       </ul>
      </S.Main2>

      <S.Main3>
       <div className="left">
        <img src={InputsImg} alt="" />
       </div>

       <div className="right">
        <h2>
         Integramos com <strong> plataformas de <br />
         e-commerce, pagamento, <br />
         entrega e marketplaces.</strong>
        </h2>

        <button onClick={() => handleScrollToSection(section2Ref)}>
         Ver Integrações
        </button>
       </div>
      </S.Main3>

      <S.Main4  ref={section2Ref}>
       <h3>Marketplaces</h3>

       <ul>
        <li>
         <div className="image">
          <img src={i1} alt="" />
         </div>

         <span>Amazon</span>
         <p>Este é Marketplace mais movimentado do mundo, ideal para venda de livros, discos e produtos de tecnologia;</p>
        </li>

        <li>
         <div className="image">
          <img src={i2} alt="" />
         </div>

         <span>Extra</span>
         <p>Plataforma especialmente voltada para venda de produtos de eletro, telefonia e móveis;</p>
        </li>

        <li>
         <div className="image">
          <img src={i3} alt="" />
         </div>

         <span>B2W</span>
         <p>Plataforma que reúne as lojas Americanas, Submarino e Shoptime</p>
        </li>

        <li>
         <div className="image">
          <img src={i4} alt="" />
         </div>

         <span>Marketplace
         </span>
         <p>As gigantes Extra, Ponto Frio e Casas Bahia fazem parte das operações da Via Varejo (antiga Cnova);</p>
        </li>

        <li>
         <div className="image">
          <img src={i5} alt="" />
         </div>

         <span>Magalu</span>
         <p>Plataforma ideal para venda de móveis e eletrodomésticos, mas que está diversificando os nichos de produtos;</p>
        </li>

        <li>
         <div className="image">
          <img src={i6} alt="" />
         </div>

         <span>Netshoes</span>
         <p>Plataforma ideal para comercializar artigos esportivos;</p>
        </li>

        <li>
         <div className="image">
          <img src={i7} alt="" />
         </div>

         <span>Dafiti</span>
         <p>Plataforma ideal para comercializar roupas, calçados e acessórios;</p>
        </li>

        <li>
         <div className="image">
          <img src={i8} alt="" />
         </div>

         <span>Leroy Merlin</span>
         <p>Ideal para venda de materiais de construção e artigos de decoração;</p>
        </li>

        <li>
         <div className="image">
          <img src={i9} alt="" />
         </div>

         <span>Shoptime</span>
         <p>Plataforma diversificada, para comercializar artigos de cama, mesa e banho, além de móveis e eletro;</p>
        </li>

        <li>
         <div className="image">
          <img src={i10} alt="" />
         </div>

         <span>Submarino</span>
         <p>Uma das precursoras do e-commerce a Submarino vende de tudo, eletro, livros, jogos e mais.</p>
        </li>

        <li>
         <div className="image">
          <img src={i11} alt="" />
         </div>

         <span>Carrefour</span>
         <p>Marketplace para venda de uma enorme variedade de produtos, eletro, smartphones, pneus e mais;</p>
        </li>

        <li>
         <div className="image">
          <img src={i12} alt="" />
         </div>

         <span>Casas Bahia</span>
         <p>Marketplace voltado para comércio de móveis, decoração e eletrodomésticos.</p>
        </li>

        <li>
         <div className="image">
          <img src={i13} alt="" />
         </div>

         <span>Americanas</span>
         <p>Marketplace para anunciar produtos de beleza, moda, brinquedos, papelaria e muito mais.</p>
        </li>

        <li>
         <div className="image">
          <img src={i14} alt="" />
         </div>

         <span>Ponto</span>
         <p>Marketplace para comercializar artigos de informática, eletro, utilidades domésticas e mais.</p>
        </li>

       </ul>

       <h3>Plataformas de e-commerce, entregas e pagamentos</h3>

       <ul>
       <li>
         <div className="image">
          <img src={i15} alt="" />
         </div>

         <span>Jet e-business</span>
         <p>Plataforma para loja virtual e que integra sua loja com diversos marketplaces.</p>
        </li>

        <li>
         <div className="image">
          <img src={i16} alt="" />
         </div>

         <span>Loja Integrada</span>
         <p>Plataforma de lojas virtuais com mais de um milhão de lojas, totalmente customizável;</p>
        </li>

        <li>
         <div className="image">
          <img src={i17} alt="" />
         </div>

         <span>Moovin</span>
         <p>Plataforma com estrutura, layout e recursos exclusivos para micro e pequenas empresas;</p>
        </li>

        <li>
         <div className="image">
          <img src={i18} alt="" />
         </div>

         <span>WooCommerce</span>
         <p>Plataforma de loja virtual totalmente customizável, com toda a facilidade comum das soluções da WordPress;</p>
        </li>

        <li>
         <div className="image">
          <img src={i19} alt="" />
         </div>

         <span>SignaShop</span>
         <p>Plataforma criada pela Magento com taxa 0% de comissão de vendas;</p>
        </li>

        <li>
         <div className="image">
          <img src={i20} alt="" />
         </div>

         <span>SIGEP Web Correios</span>
         <p>Integração para cálculo de frete e envio de mercadorias;</p>
        </li>

        <li>
         <div className="image">
          <img src={i21} alt="" />
         </div>

         <span>Magento</span>
         <p>Plataforma mais avançada para para vendas B2B e B2C;</p>
        </li>

        <li>
         <div className="image">
          <img src={i22} alt="" />
         </div>

         <span>PagHiper</span>
         <p>Plataforma especializada na emissão de boletos;</p>
        </li>
       </ul>
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
      <Footer/>
     </S.Container>
    )
}