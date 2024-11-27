import * as S from "./style";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components/footer";

import { GiShoppingCart } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

import Logo from "./assets/logo.svg";

import p1 from "./assets/parceiro-1.png";
import p2 from "./assets/parceiro-2.png";
import p3 from "./assets/parceiro-3.png";
import p4 from "./assets/parceiro-4.png";
import p5 from "./assets/parceiro-5.png";

import l1 from "./assets/logo-exame.png";
import l2 from "./assets/logo-diolinux.png";
import l3 from "./assets/logo-profissionaisti.png";
import l4 from "./assets/administradores.png";
import l5 from "./assets/logo-contabeis.com.br.png";
import l6 from "./assets/logo-r7.png";

import loja from "./assets/loja.png";
import mobi from "./assets/mobi.png";
import lite from "./assets/lite.png";

import logo1 from "./assets/lojaLogo.png";
import logo2 from "./assets/mobiLogo.png";
import logo3 from "./assets/liteLogo.png";

export function Download(){ 
    const [selected, SetSelected] = useState('');

    useEffect(() => {
      // URL do arquivo ZIP
      const fileUrl = "https://s3.sa-east-1.amazonaws.com/pdvoffline2.aprendaerp.com.br/Instaladores/PDV+Offline.zip";
      const fileName = "PVD+Offline.zip"; // Nome do arquivo no download
  
      // Criar um link programaticamente
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
  
      // Simula o clique no link
      link.click();
    }, []);

    return(
     <S.Container>
      <S.Main>
       <header>
        <Link to="/">
         <img src={Logo} alt="" />
        </Link>
       </header>
       <div className="subHeader">
        <p>
        Somente hoje, pequenos empreendedores já começaram a <strong> vender com o Blue Lite!</strong>
        </p>
       </div>

       <div className="rest">
        <div className="download">
         <span><strong>O seu download do Blue Lite </strong> já está começando...</span>
         <b>Se seu download não iniciou, <a href="https://s3.sa-east-1.amazonaws.com/pdvoffline2.aprendaerp.com.br/Instaladores/PDV+Offline.zip" download>clique aqui!</a></b>

         <h2>😊</h2>

         <p>Ficamos muito felizes com a sua chegada... <strong>Bons negócios!</strong></p>

        
        </div>

        <div className="texts">
         <h2>
         Quando o download terminar, <strong> instale o Blue Lite no seu computador e comece à...</strong>
         </h2>

         <ul>
          <li>
            <GoShieldCheck size={20} color="#fff" />
            <p>Vender mais com um <strong> PDV Offline </strong> super ágil;</p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#fff" />
            <p> Emitir <strong> notas e cupons fiscais </strong> facilmente;</p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#fff" />
            <p> Gerenciar seu <strong> Financeiro e Estoque </strong> integrados.</p>
          </li>

          


         </ul>

         <div className="box">
          <div className="cart">
            <GiShoppingCart size={50} color="#0074FF"/>
          </div>

          <p>
          <strong>E ainda integre com marketplaces gigantes,</strong><br />
          para suas vendas online decolarem de vez!
          </p>
         </div>

        </div>
       </div>
      </S.Main>

      <S.Main2>
        <span>
        <strong>Parceiros </strong> que geram confiança:
        </span>

        <img src={p1} alt="" />

        <img src={p2} alt="" />

        <img src={p3} alt="" />

        <img src={p4} alt="" />

        <img src={p5} alt="" />
      </S.Main2>

      <S.Main3>
       <div className="text">
        <h3>
         Um <strong> kit de ferramentas </strong> para pequenos empreendedores que buscam inovação!
        </h3>
       </div>

       <ul className="ecosystem">
        <li className="card loja">
         <img src={logo1} alt="" className="Logo"/>

         <ul>
          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Layout <strong> Responsivo;</strong></p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Sistema de <strong> pagamento;</strong></p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Gestão de <strong> entregas;</strong></p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Chat via <strong> WhatsApp.</strong></p>
          </li>
          



         </ul>

         <img src={loja} alt="" className="bottom"/>
        </li>

        <li className="card mobi">
         <img src={logo2} alt="" className="Logo"/>

         <ul>
          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p> Leitor de
           Codigo de Barras;</p>



          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Vendas
           Externas;</p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Painel de
           Caixa;</p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>
PDV
Mobile.</p>
          </li>
         </ul>

         <img src={mobi} alt="" className="bottom"/>
        </li>

        <li className="card lite">
         <img src={logo3} alt="" className="Logo"/>

         <ul>
          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>          Notas em
           Contigência;</p>
          </li>






          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>Pedidos e
           Orçamentos;</p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>BackUp
           Automático;</p>
          </li>

          <li>
           <GoShieldCheck size={18} color="#fff" />
           <p>PDV
           Offline</p>
          </li>
         </ul>

         <img src={lite} alt=""className="bottom" />
        </li>

       </ul>
      </S.Main3>

      <S.Main4>
        <div className="left">
         <h2>
          <strong>
          Você precisa de mais? <br />
          </strong>
          Escalamos com seu negócio.
         </h2>

         <p>
         Caso a versão gratuita do Blue Lite torne-se pouco para sua empresa, você tem a opção de contratar o <strong> versão premium, </strong> que por <strong> R$ 89,90/mês, </strong> te trará os seguintes benefícios:
         </p>

         <ul>
          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> <strong>Suporte Premium </strong> via chat;

</p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> Emissões, vendas e cadastros <strong> ilimitados;</strong></p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> <strong>Sincronia </strong> e <strong> Backup </strong> na nuvem.</p>
          </li>
         </ul>
        </div>

        <div className="right">
         <div className="text">
         Acompanhamos o crescimento da sua empresa com <strong> soluções completas para gerenciar todos os processos do seu negócio.</strong>
         </div>
        </div>
      </S.Main4>

      <S.Main5>
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

      <h4>
      Dados na Nuvem
      </h4>
      <b>Na prática, isso quer dizer que se houver qualquer problema no seu computador, os dados da sua empresas estarão seguros e poderão ser acessados em qualquer outro computador, garantindo que você não perca nenhum cadastro.</b>
      </S.Main5>
     
      <S.Main4>
        <div className="left">
         <h2>
          <strong>
          Você precisa de mais? <br />
          </strong>
          Escalamos com seu negócio.
         </h2>

         <p>
         Caso a versão gratuita do Blue Lite torne-se pouco para sua empresa, você tem a opção de contratar o <strong> versão premium, </strong> que por <strong> R$ 89,90/mês, </strong> te trará os seguintes benefícios:
         </p>

         <ul>
          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> <strong>Suporte Premium </strong> via chat;

</p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> Emissões, vendas e cadastros <strong> ilimitados;</strong></p>
          </li>

          <li>
            <GoShieldCheck size={20} color="#ffc77e" />
            <p> <strong>Sincronia </strong> e <strong> Backup </strong> na nuvem.</p>
          </li>
         </ul>
        </div>

        <div className="right">
         <div className="text">
         Acompanhamos o crescimento da sua empresa com <strong> soluções completas para gerenciar todos os processos do seu negócio.</strong>
         </div>
        </div>
      </S.Main4>

      <S.Main6>
        <h2>Blue Lite na Mídia:</h2>

        <img src={l1} alt="" />
        <img src={l2} alt="" />
        <img src={l3} alt="" />
        <img src={l4} alt="" />
        <img src={l5} alt="" />
        <img src={l6} alt="" />
      </S.Main6>

      <Footer/>
     </S.Container>
    )
}