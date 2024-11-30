import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FaCaretDown } from "react-icons/fa";

import Icon from "./assets/Icon.png";

export function Header(){
    const path = location.pathname.split('/').filter(Boolean).pop();
    const [open, setOpen] = useState('');
    const navigate = useNavigate();
    const divRef = useRef(null);

    const handleClickOutside = (event) => {

    if (divRef.current && !divRef.current.contains(event.target)) {
    
     setOpen(false)
    }
    };

    useEffect(() => {
    // Adiciona o evento de clique no documento
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o evento ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

    function abriNovaRota(route) {
      navigate(route)
    };

    function abrirNovaAba(url) {
      window.open(url, '_blank');
    };

    return( 
     <S.Container > 
      <img src={Icon} className="Icon" onClick={()=> navigate('/')}/>

      <div className="Right"> 
      <div className="Topic Premium" onClick={()=> path == 'planos' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
        <Link to="/planos">Versão Premium</Link> 
       </div>

      <div className="Topic" onClick={()=> path == 'loja-virtual' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
        <Link to="/loja-virtual">Loja Online</Link> 
       </div>
       
       <div className="Topic" onClick={()=> path == 'central-de-integracoes' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}>
        <Link to="/central-de-integracoes">Integrações</Link> 
       </div>

       <div className="Topic Clients" >
        <span ref={divRef} onClick={()=> { open ? setOpen(false) : setOpen(true)}}>Clientes</span> <FaCaretDown/>

        { open ? 
                 <ul className="Open" ref={divRef}>
                 <Link to="/sistema-para-restaurantes">
                  <li>Restaurantes</li>
                 </Link>
                 <Link to="/sistema-de-gestao-para-lojas-de-roupa">
                  <li>Vestuário</li>
                 </Link>
                 <Link to="/sistema-de-gestao-para-minimercados">
                  <li>Minimercados</li>
                 </Link>
                 <Link to="/sistema-para-restaurantes">
                  <li>Lanchonetes</li>
                 </Link>
                 <Link to="/sistema-para-restaurantes">
                 <li>Pizzarias</li>
                 </Link>
                 <Link to="/sistema-de-gestao-para-autopecas">
                  <li>Autopeças</li>
                 </Link>
                 <Link to="/sistema-de-gestao-para-assistencia-tecnica">
                  <li>Assistência Técnica</li>
                 </Link>
                 <Link to="/sistema-de-gestao-para-lojas-de-calcados">
                  <li>Calçados</li>
                 </Link>
                </ul>
         :
         null
        }
       </div>

       <Link to="/baixar-blue-lite">
        <button className="exp" >
         Baixe Grátis
        </button>
       </Link>
      </div>

     </S.Container>
    )
};