import styled from "styled-components";

import BackBlue from "./assets/bg-loja-online-lite.png";
import Banner from "./assets/banner-top-sige-lite.png";
import TopArrow from "./assets/arrow-bg-top.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 95vh;
width: 100%;

background: #333 url(${Banner}) no-repeat center top;
background-size: cover;
padding-top: 8rem;

flex-direction: column;
align-items: center;
position: relative;
display: flex;
gap: 1rem;

h2 {
 font-size: 4.3rem;
 font-weight: 400;
 color: #fff;

 text-align: center;

 margin: 0 20rem
}

span {
 font-size: 1.6rem;
 font-weight: 400;
 color: #00ffff;

 margin-bottom: 3rem;
}

.buttons {
 align-items: center;
 display: flex;
 gap: 2rem;


 button {
  height: 6rem;
  width: 30rem;

  background-color: #0074FF;
  border: 1px solid #0074FF;
  border-radius: 6rem;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;

  font-size: 1.7rem;
  font-weight: 400;
  color: #fff;

  &:hover {
   background-color: #0061d8;
   cursor: pointer;
  }
 }

 .button {
  height: 6rem;
  width: 32rem;

  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 6rem;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;

  font-size: 1.7rem;
  font-weight: 400;
  color: #fff;
 }
}

.bottom {
 height: 15rem;
 width: 100%;

 position: absolute;
 bottom: 0;
 left: 0;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2rem;

 background-color: #00ffff;
 padding: 0 12rem;

 ul {
  width: 100%;

  margin-top: -5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1rem;

  li {
   height: 12rem;
   flex: 1;

   background-color: #FFFFFF;
   border-radius: .7rem;
   list-style: none;

   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   gap: 1rem;

   span {
    font-size: 1.7rem;
    font-weight: 600;
    color: #0074FF;

    margin-bottom: 0;
   }

   &:hover {
    -webkit-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.75);
box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.75);
    margin-top: -1.5rem;
    cursor: pointer;
   }
  }
 }

 h3 {
  letter-spacing: .4rem;
  font-size: 2.1rem;
  font-weight: 300;
  color: #200DFF;
   
 }
}

@media (max-width: 450px){
 h2 {
  font-size: 3.5rem;
  margin: 0 1rem;
 }

 span {
  margin: 0 2rem 3rem 2rem;
  text-align: center;
 }

 .buttons {
  flex-direction: column;
  gap: 1rem;

  button, .button {
    width: 28rem;
  }
 }

 .bottom {
  text-align: center;
  padding: 2rem;
  ul {
   display: none;
  }
 }
}
`

export const Main2 = styled.div`
min-height: 100vh;
width: 100%;

flex-direction: column;
align-items: center;
position: relative;
display: flex;
gap: 5rem;

background-color: #004798;
padding: 10rem 12rem;

&::before {
 content: "";
 height: 3.3rem;
 width: 100%;
 
 position: absolute;
 left: 0;
 top: -.1rem;

 background-image: url(${TopArrow});
 background-repeat: no-repeat;
 background-size: contain;
}

ul {
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 4rem;

  li {
   height: 12rem;
   flex: 1;

   list-style: none;

   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   gap: 1rem;

   cursor: pointer;

   span {
    font-size: 2.2rem;
    font-weight: 400;
    color: #FFFFFF;
   }

  }
}

.grid { 
 height: 80rem;
 width: 100%;

 background-color: #FFFFFF;
 border-radius: 5rem;
 overflow: hidden;

 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: 1fr 1.2fr 1fr;
 display: grid;

 .box {
  height: 100%;
  flex: 1;

  padding: 3rem;

  flex-direction: column;
  display: flex;
  gap: 2.3rem;

  .title {
    align-items: center;
    display: flex;
    gap: 2rem;

    span {
    font-size: 2.1rem;
    font-weight: 700;
    color: #004798;
    }
  }

  p {
   line-height: 2.4rem;
   font-size: 1.6rem;
   font-weight: 300;
   color: #6d6d6d;

   b {
    line-height: 6rem;
    font-size: 1.2rem;
    font-weight: 300;
   }
  }
  }
 }

 .left {
  border-left: 2px solid #004798;
 }
 .bottom {
  border-bottom: 2px solid #004798;
 }

 @media (max-width: 450px){
  height: fit-content;
  padding: 4rem 2rem;

  ul {
    display: none;
  }

  .grid {
    height: fit-content;

    background-color: transparent;
    border-radius: 0;

    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: none;
    gap: 2rem;

    .box {
      background-color: #FFFFFF;
      border-radius: 1rem;
      height: fit-content;
      min-height: 30rem;
    }
  }
 }

`

export const Main3 = styled.div`
height: 80vh;
width: 100%;

background-color: rgba(85, 240, 85, 0.884);
padding: 0 12rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

img {
 transform: scale(90%);
}

.left {
 flex-direction: column;
 display: flex;
 gap: 3rem;

 h3 {
  font-size: 2.7rem;
  font-weight: 300;
  color: #200DFF;
 }

 .buttons {
  align-items: center;
  display: flex;
  gap: 2rem;

  button {
   height: 5.6rem;
   width: 33rem;

   background-color: #200DFF;
   border-radius: 5.6rem;
   border: none;

   justify-content: center;
   align-items: center;
   display: flex;
   gap: .5rem;

   color: #FFFFFF;

   p {
    font-size: 2rem;
    font-weight: 300;
   }

   svg {
    font-size: 2.5rem;
   }

   &:hover {
    filter: brightness(85%);
    cursor: pointer;
   }
  }
 }

 span {
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  color: #200DFF;
 }
}

@media (max-width: 450px){
height: fit-content;
padding: 4rem 2rem;

flex-direction: column;
align-items: center;
gap: 5rem;

.left {
  text-align: center;

  .buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

img {
 width: 100%;
}
}
`

export const Main4 = styled.div`
height: 100vh;
width: 100%;

background: #0074FF url(${BackBlue}) no-repeat center; 
background-size: cover;
padding: 0 12rem;


align-items: center;
display: flex;


.left {
 flex-direction: column;
 display: flex;
 gap: 3rem;

 h3 {
  font-size: 4.1rem;
  font-weight: 300;
  color: #FFFFFF;
 }

 a {
  font-size: 1.8rem;
  font-weight: 600;
  color: #00ffff;

  cursor: pointer;
 }
}

@media (max-width: 450px){
  height: fit-content;
  padding: 4rem 2rem;

  background: linear-gradient(180deg, rgba(0,116,255,1) 0%, rgba(0,71,152,1) 100%);

  .left {
    h3 {
      font-size: 3rem;
    }
  
    text-align: center;
  }
}
`