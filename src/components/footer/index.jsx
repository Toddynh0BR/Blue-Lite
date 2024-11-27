import * as S from './style';

import { useNavigate, useLocation, Link } from "react-router-dom";

import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

import Logo from "./assets/logo.svg";

export function Footer(){
  const path = location.pathname.split('/').filter(Boolean).pop();

    return(
     <S.Container>
      <div className="about">
       <img src={Logo} alt="" />

       <p>
       <strong>Melhor custo benefício em ERP </strong> para a transformação digital da sua empresa.
       </p>

       <span>Siga-nos:</span>

       <div className='follow'>
          <a href="https://www.instagram.com/blueinnovationbr/profilecard/?igsh=MWVscWxxN2tnYjVoZA%3D%3D" target='blank'>
           <FaInstagram/>
          </a>

          <a href="https://www.facebook.com/people/Blue-Innovation/61568409581809/" target='blank'>
          <FaFacebook/>
          </a>

          <a href="https://www.youtube.com/@blueinnovation-m3g?si=0dFTX812cgdyNQ9W" target='blank'>
          <FaYoutube/>
          </a>

          <a href="https://www.linkedin.com/company/105473549/" target='blank'>
          <FaLinkedin/>
          </a>
       </div>
      </div>

      <ul>
       <span>Mapa do site</span>
<li onClick={()=> path == 'primeiros-passos' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link to="/primeiros-passos">Primeiros Passos</Link>
</li>

<li onClick={()=> path == 'planos' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link to="/planos">Versão Premium</Link>
</li>

<li >
<a href='https://www.youtube.com/playlist?list=PL9pC29avZmiB1wMQLKPfrlolWlD7i0TBz' target='blank'>Vídeos explicativos</a>
</li>

<li>
<a href='https://blueinnovation.freshdesk.com/support/login' target='blank'>Suporte</a>
</li>


<li onClick={()=> path == 'central-de-integracoes' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link to="/central-de-integracoes">Central de Integrações</Link>
</li>

      </ul>

      <ul>
       <span>Soluções Integradas</span>
        <li onClick={()=> path == 'loja-virtual' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
        <Link to="/loja-virtual">Loja Virtual</Link>
        </li>       
      </ul>

      <ul>
       <span>Segmentos</span>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Restaurantes</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Vestuário</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Minimercados</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Lanchonetes</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Pizzarias</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Autopeças</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Assistência Técnica</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Calçados</Link>
</li>

      </ul>

      <ul>
        <span>Funcionalidades</span>
  
<li onClick={()=> path == 'programa-de-caixa' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link to="/conheca/programa-de-caixa">Frente de Caixa (PDV)</Link>
</li>

<li onClick={()=> path == 'emissor-gratuito' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link to="/conheca/emissor-gratuito">Emissor de Notas</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Gestão Financeira</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Programa de Vendas</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Controle de Clientes</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Emissor de Boletos</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Ordens de Serviços</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Gestão de Estoque</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Controle de Caixa</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Emissor de MDF-e</Link>
</li>

<li onClick={()=> path == '' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
<Link>Sistema para Loja</Link>
</li>

      </ul>
     </S.Container>   
    )
}