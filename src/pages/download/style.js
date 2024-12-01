import styled from "styled-components";

import HexagonBack from "./assets/back-hex-on-blue.png";
import Woman from "./assets/plano-starter-download.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

flex-direction: column;
align-items: center;
display: flex;

header { 
 height: 10rem;
 width: 100%;

 background-color: #fff;

 justify-content: center;
 align-items: center;
 display: flex;

 img {
  transform: scale(70%);
  cursor: pointer;
 }
}

.subHeader {
 height: 4rem;
 width: 100%;

 background-color: #ff9100;

 justify-content: center;
 align-items: center;
 display: flex;


 p {
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
 }
}

.rest {
 height: 100%;
 width: 100%;

 background-color: #0074FF;
 padding: 5rem 20rem 2rem 20rem;

 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 6rem;

 .download {
  height: 100%;
  width: 40%;

  border: 3px solid rgb(9, 194, 9);
  background-color: #FFFFFF;
  border-radius: 1rem;
  padding: 3rem;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 1rem;

  span {
   font-size: 2.4rem;
   font-weight: 400;
   color: #0074FF;
  }

  b {
   font-size: 1.3rem;
   font-weight: 400;
   color: #0074FF;

   margin-bottom: 1rem;

   a {
    font-weight: 700;
    cursor: pointer;
    color: #0074FF;
   }
  }

  h2 {
   font-size: 3rem;
  }

  p {
   font-size: 1.6rem;
   font-weight: 300;
   color: #363636;
  }

 }

 .texts {
  height: 100%;
  width: 45%;

  justify-content: center;
  flex-direction: column;
  align-items: left;
  text-align: left;
  display: flex;
  gap: 2rem;

  h2 {
   font-size: 2.9rem;
   font-weight: 400;
   color: #fff;
  }

  ul {
   li {
    list-style: none;

    align-items: center;
    display: flex;
    gap: 1rem;

    margin-bottom: 1rem;

    p {
     font-size: 1.7rem;
     font-weight: 400;
     color: #fff;
    }
   }
  }

  .box {
    height: 8rem;
    width: 100%;

    border-radius: .7rem 0 .7rem 0;
    border: 1px solid #ff9100;
    margin-top: 2rem;

    align-items: center;
    display: flex;
    gap: 2rem;

    .cart {
     height: 100%;
     width: 20%;

     justify-content: center;
     align-items: center;
     display: flex;

     background-color: #ff9100;
    }

    p {
     font-size: 1.5rem;
     font-weight: 400;
     color: #ffc77e;
    }
  }
 }
}

@media (max-width: 450px) {
 height: fit-content;

 header { 
 height: 8rem;
 img {
  transform: scale(60%);
 }
 }

 .subHeader {
 height: 5rem;

 text-align: center;
 p {
  font-size: 1.4rem;
 }
 }

 .rest {
 height: fit-content;

 flex-direction: column;

 padding: 3rem 2rem 2rem 2rem;
 gap: 4rem;

 .download {
  height: fit-content;
  width: 100%;

  padding: 2rem;

  span {
   font-size: 2.2rem;
  }

  b {
   font-size: 1.1rem;
  }

  h2 {
   font-size: 2.8rem;
  }

  p {
   font-size: 1.4rem;
  }

 }

 .texts {
  height: fit-content;
  width: 100%;

  align-items: center;
  text-align: center;

  h2 {
   font-size: 2.7rem;
   font-weight: 400;
   color: #fff;
  }

  ul {
   li {
    p {
     font-size: 1.5rem;
    }
   }
  }

  .box {
    .cart {
    }

    p {
     font-size: 1.4rem;
    }
  }
 }
}
}
`

export const Main2 = styled.div`
height: 20vh;
width: 100%;

padding: 0 20rem;

justify-content: space-between;
align-items: center;
display: flex;

span {
 font-size: 1.6rem;
 font-weight: 400;
 color: #363636;
}

img {
 opacity: .5;

 &:hover {
  cursor: pointer;
  opacity: 1;
 }
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;

  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "title  title title title title"
  "item1 item2 item3 item4 item5";
  display: grid;
  gap: 2rem;

  span {
    grid-area: title;
    align-self: center;
  }
  img {
   width: 100%;
  }
  .Item1 {
    grid-area: item1;
  }
  .Item2 {
    grid-area: item2;
  }
  .Item3 {
    grid-area: item3;
  }
  .Item4 {
    grid-area: item4;
  }
  .Item5 {
    grid-area: item5;
  }
}
`

export const Main3 = styled.div`
height: 70vh;
width: 100%;

background: linear-gradient(124deg, rgba(228,228,228,1) 0%, rgba(246,246,246,1) 40%);
padding: 5rem 15rem 0 15rem;

justify-content: space-between;
align-items: flex-end;
display: flex;

.text {
 height: 100%;
 width: 20%;

 justify-content: center;
 align-items: center;
 text-align: left;
 display: flex;

 margin-right: 8rem;

 h3 {
  font-size: 3.7rem;
  font-weight: 400;
  color: #0074FF;
 }
}

.ecosystem {
 height: 90%;
 flex: 1;

 border-radius: 2rem 2rem 0 0;
 overflow: hidden;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .card {
  height: 100%;
  flex: 1;

  padding: 0rem 2rem;

  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;

  .Logo {
   width: 100%;
  }

  ul {
    width: 100%;

    li {
     margin-bottom: 1rem;
     list-style: none;

     align-items: center;
     display: flex;
     gap: 1rem;

     p {
      font-size: 1.5rem;
      font-weight: 400;
      color: #fff;
     }
    }
  }

  .bottom {
   width: 100%;
  }
 }

 .loja {
  background: linear-gradient(120deg, rgb(115, 0, 204) 0%, rgb(0, 0, 198) 100%);
 }

 .mobi {
  background: linear-gradient(120deg, rgb(0, 179, 30) 20%, rgb(0, 97, 5) 100%);   
 }

 .lite {
    background: linear-gradient(120deg, #0074FF 20%, #200DFF 100%);   
 }
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;

  flex-direction: column;
  align-items: center;
  gap: 4rem;

  .text {
 height: fit-content;
 width: 100%;

 margin-right: 0rem;

 h3 {
  font-size: 3.4rem;

 }
  }

  .ecosystem {
 height: fit-content;
 flex: 1;

 border-radius: 0rem;
 overflow: hidden;

 flex-direction: column;
 gap: 2rem;

 .card {
  height: fit-content;
  flex: 1;

  border-radius: 1rem;
  padding: 2rem 2rem 0 2rem;

 }
  }
}
`

export const Main4 = styled.div`
height: 100vh;
width: 100%;

padding: 0 12rem;

justify-content: space-between;
align-items: center;
display: flex;

background: #0074FF url(${HexagonBack}) center no-repeat;

.left {
 height: 100%;
 width: 40%;

 justify-content: center;
 flex-direction: column;
 display:flex;
 gap: 4rem;

 h2 {
  font-size: 3rem;
  font-weight: 600;
  color: #fff;

  strong {
    font-size: 2.3rem;
    color: #ff9100;
  }
 }

 p {
  line-height: 2rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;

  strong{ 
    color: #ffc77e;
  }
 }

 ul {
  li {
   margin-bottom: 1rem;
   list-style: none;

   align-items: center;
   display: flex;
   gap: 1rem;

   p {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;

    strong {
      color: #fff;
    }
   }
  }
 }
}

.right {
 height: 60%;
 width: 35%;

 background-image: url(${Woman});
 background-size: cover;
 margin-right: 10rem;

 justify-content: flex-end;
 align-items: center;
 display: flex;

 .text {
  width: 40%;

  margin-right: -15rem;
  text-align: right;

  font-size: 2.2rem;
  font-weight: 400;
  color: #fff;

  strong {
   color: #ffc77e;
  }
 }
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;

  .left {
 height: fit-content;
 width: 100%;
  }

 .right {
  display: none;
 }
}
`

export const Main5 = styled.div`
min-height: 100vh;
width: 100%;

padding: 10rem 33rem;

flex-direction: column;
display: flex;
gap: .5rem;

span {
 font-size: 2.5rem;
 font-weight: 600;
 color: #ff9100;
}

h3 {
 font-size: 3.5rem;
 color: #0074FF;

 margin-bottom: 3rem;
}

.topic {
 height: fit-content;
 width: 100%;

 flex-direction: column;
 display: flex;
 gap: .5rem; 

 .card {
  height: 5rem;
  width: 100%;

  background-color: #f1f1f1;
  border: 1px solid #0074FF;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem;
  z-index: 2;

  align-items: center;
  display: flex;
  gap: 2rem;

  svg {
   font-size: 2.2rem;
   color: #0074FF;
  }
  p {
  font-size: 1.9rem;
  font-weight: 600;
  color: #0074FF;
  }

  .active {
    transform: rotate(45deg);
  }
 }

 .response {
  transition: .4s ease-in-out;
  margin-top: 1.5rem;
  height: 10rem;
  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: #363636;
  }
 }

 .hide {
  transition: .7s ease-in-out;
  overflow: hidden;
  height: 0;
  z-index: 1;

  p {
  font-size: 1.5rem;
  opacity: 0;
  }
 }
}

h4 {
 font-size: 2.4rem;
 font-weight: 600;
 color: #000;
}

b {
 font-size: 1.7rem;
 font-weight: 400;
 color: #363636;
}

@media (max-width: 450px){
  padding: 5rem 2rem;

  .topic {
    .card {
      p {
        font-size: 1.4rem;
      }


    }

    .response {
      height: 15rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
}
`

export const Main6 = styled.div`
height: 23vh;
width: 100%;

background: linear-gradient(180deg, rgba(0,116,255,1) 0%, rgba(0,71,152,1) 100%);
padding: 0 3rem;

justify-content: space-between;
align-items: center;
display: flex;

h2 {
 font-size: 2.4rem;
 font-weight: 600;
 color: #fff;
}

img {
  cursor: pointer;
}

@media (max-width: 450px){
  height: fit-content;
  padding: 4rem 2rem;

  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  "title title"
  "item1 item2"
  "item3 item4"
  "item5 item6"
  ;
  display: grid;
  gap: 2rem;

  h2 {
    grid-area: title;
    align-self: center;
  }
  .item1 {
    grid-area: item1;
  }
  .item2 {
    grid-area: item2;
  }
  .item3 {
    grid-area: item3;
  }
  .item4 {
    grid-area: item4;
  }
  .item5 {
    grid-area: item5;
  }
  .item6 {
    grid-area: item6;
  }
}
`