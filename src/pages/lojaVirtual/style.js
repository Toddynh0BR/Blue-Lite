import styled from "styled-components";

import BackMain from "./assets/backend-programa-de-caixa.png";
import BackG2 from "./assets/loja-virtual-para-pequenos-negocios.jpg"
import BackG from "./assets/backGeral.svg";
import BackE from "./assets/gerencie-suas-entregas-com-o-sige-lite.svg";
import Cheap from "./assets/erp-barato.svg";

import Happy from "./assets/happy-people.png";
import Sad from "./assets/people-line.png";

export const Container = styled.div`
padding-top: 7rem;

@media (max-width: 450px) {
  padding-top: 5rem;
}
`

export const Main = styled.main`
max-height: 105vh;
height: 105vh;
width: 100%;

position: relative;

&::before {
 content: ' ';
 height: 70%;
 width: 35vw;

 background-image: url(${BackMain});
 background-repeat: no-repeat;
 background-position: right;
 border-radius: 0 0 0 6rem;
 background-size: cover;

 position: absolute;
 z-index: 2;
 right: 0;
 top: 0;
}

.text {
 height: 41rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 background-color: #FFFFFF;
 padding: 0 12rem;

 .texts {
  flex-direction: column;
  display: flex;

  h2 {
    font-size: 3.4rem;
    line-height: 4rem;
    font-weight: 300;
    color: #0074FF;
   
    margin-bottom: 2rem;

    strong {
        color:#ff9100 ;
    }
  }

  span {
    font-size: 1.7rem;
    font-weight: 400;
    color: #0074FF;

    margin-bottom: 3rem;
  }

  button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
  }

  ul {
   li {
    align-items: center;
    display: flex;
    gap: .5rem;

    padding: .5rem 0;

    p {
     font-size: 1.4rem;
     font-weight: 400;
     color: #a5a4a4;
    }

    svg {
     font-size: 1.5rem;
     color: rgb(9, 194, 9);
    }
   }
  }
 }
}

img {
 width: 55rem;
 z-index: 3;
}

.rest {
 height: 40vh;
 width: 100%;

 justify-content: center;
 align-items: flex-start;
 flex-direction: column;
 display: flex;
 gap: 3rem;

 padding: 0 12rem;

 h3 {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 300;
    color: #0074FF;

    margin-top: 1rem;
  }

 .cards {
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 1rem;

  .card {
   height: 15rem;
   width: 100%;

   background-color: #FFFFFF;
   border-radius: .4rem;
   text-align: center;
   padding: 1rem;

   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   gap: 1rem;

   span {
    font-size: 1.5rem;
    font-weight: 300;
    color: #0074FF;

   }

   &:hover {
    -webkit-box-shadow: 0px 5px 10px 1px rgba(158,158,158,1);
    -moz-box-shadow: 0px 5px 10px 1px rgba(158,158,158,1);
    box-shadow: 0px 5px 10px 1px rgba(158,158,158,1);
    cursor: pointer;
   }
  }
 }
}

@media (max-width: 450px) {
  height: fit-content;

 &::before {
    display: none;
 }

 img {
  display: none;
 }

 .text {
 height: fit-content;
 padding: 5rem 2rem;

 .texts {

  h2 {
    font-size: 3.1rem;
    line-height: 3.7rem;
  }

  span {
    font-size: 1.6rem;
  }

  button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
  }

 }
}

.rest {
 height: fit-content;

 padding: 0 2rem;

 h3 {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 300;
    color: #0074FF;

    margin-top: 1rem;
  }

 .cards {
  display: none;
 }
}
}
`

export const Main2 = styled.div`
height: 90vh;
width: 100%;

margin-top: 1rem;

display: flex;

.left {
 height: 100%;
 width: 50%;

 background-image: url(${BackG});
 padding: 12rem 12rem 0 12rem;
 background-size: cover;

 flex-direction: column;
 display: flex;
 gap: 2rem;

 h3 {
  font-size: 2.8rem;
  font-weight: 300;
  color: #FFFFFF;
 }

 span {
  font-size: 1.7rem;
  font-weight: 300;
  color: #FFFFFF;
 }

 button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   margin-top: 2rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
 }
}

.right {
 height: 100%;
 width: 50%;

 background-image: url(${BackG2});
 background-position: center;
 background-size: cover;
}

@media (max-width: 450px) {
  height: fit-content;

  .right {
    display: none;
  }

  .left {
 width: 100%;

 padding: 2rem;
}
}
`

export const Main3 = styled.div`
height: 90vh;
width: 100%;

padding: 0 12rem 4rem 12rem;
position: relative;
margin-top: 10rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 3rem;

&::before {
 content: ' ';
 height: 100%;
 width: 100%;

 position: absolute;
 z-index: 1;
 bottom: 0;
 left: 0;

 background-image: url(${BackE});
 background-position: bottom;
 background-repeat: no-repeat;
}

.left {
 height: 100%;
 flex: 1;

 z-index: 2;

 h2 {
  font-size: 2.8rem;
  font-weight: 300;
  color: #0074FF;
 }
}


.right {
 height: 100%;
 flex: 1;

 background-color: #f1f1f1;
 border-radius: 2rem;
 padding: 3rem;
 z-index: 2;

 grid-template-columns: repeat(2, 1fr);
 display: grid;
 gap: 2rem;

 .card {
  height: 100%;
  width: 100%;

  flex-direction: column;
  display: flex;
  gap: 2rem;

  .title {
   align-items: center;
   display: flex;
   gap: 2rem;

   span {
    font-size: 1.6rem;
    font-weight: 300;
    color: #0074FF;
   }
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    color: #6d6d6d;
   }
 }
}


@media (max-width: 450px) {
  height: fit-content;
  padding: 0 2rem;

  margin-top: 5rem;

  flex-direction: column;

  &::before {
  display: none;
 }

 .left {
 height: fit-content;
 }

 .right {
 background-color: transparent;
 grid-template-columns: repeat(2, 1fr);
 display: grid;
 gap: 2rem;

 .card {
  .title {
   gap: 1rem;

   span {
    font-size: 1.4rem;
   }
  }

  p {
    font-size: 1.4rem;
   }
 }
}

}
`

export const Main4 = styled.div`
height: 80vh;
width: 100%;

margin-top: 10rem;
padding: 0 12rem;

flex-direction: column;
align-items: center;
display: flex;
gap: 2rem;

h2 {
 font-size: 3rem;
 color: #0074FF;

 position: relative;
 margin-bottom: 5rem;

 &::after {
  content: ' ';
  height: 4rem;
  width: 20rem;

  background-image: url(${Cheap});
  background-repeat: no-repeat;
  background-size: contain;

  position: absolute;
  bottom: -3rem;
  right: 6rem;
 }
}

ul {
  width: 100%;

  justify-content: space-between;
  display: flex;
  gap: 3rem;

  li {
    list-style: none;

    flex-direction: column;
    display: flex;
    gap: .5rem;

    svg {
      margin-bottom: 1.5rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 300;
      color: #0074FF;
    }
    p {
     font-size: 1.6rem;
     font-weight: 300;
     color: #6d6d6d;
    }
  }
}

button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   margin-top: 2rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 0 2rem;

  margin-top: 5rem;

  ul {
  width: 100%;

  flex-direction: column;
  gap: 3rem;

  li {
    list-style: none;

    flex-direction: column;
    display: flex;
    gap: .5rem;

    svg {
      margin-bottom: 1.5rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 300;
      color: #0074FF;
    }
    p {
     font-size: 1.6rem;
     font-weight: 300;
     color: #6d6d6d;
    }
  }
}
}
`

export const Main5 = styled.div`
min-height: 100vh;
width: 100%;

justify-content: space-between;
flex-direction: row-reverse;
align-items: center;
display: flex;
gap: 10rem;

padding: 0 12rem;
position: relative;

.back {
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}



.left {
 z-index: 2;
 img {

 }
}

.right {
 flex-direction: column;
 display: flex;
 gap: 1rem;

 z-index: 2;

 h2 {
  font-weight: 400;
  font-size: 3rem;
  color: #FFFFFF;

  margin-bottom: 2rem;
 }

 h4 {
  font-size: 1.8rem;
  color: #FFFFFF;

  margin-top: 1rem;
 }

 p {
  font-size: 1.6rem;
  color: #FFFFFF;
 }

 button {
   height: 6rem;
   width: 22rem;

   background-color: #FFFFFF;
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   margin-top: 2rem;
   border: none;

   font-weight: 600;
   font-size: 2rem;
   color:  rgb(9, 194, 9);

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
    color: #FFFFFF;
   }
}
}

@media (max-width: 450px) {
  justify-content: flex-start;
  flex-direction: column;

  min-height: fit-content;
  height: fit-content;
  padding: 2rem;
  
  .left {
   display: none;
  }

  .right {
    align-items: center;
   h2 {
    font-size: 2rem;
   }

   h4 {
    font-size: 1.7rem;
   }

   p {
    font-size: 1.2rem;
   }
  }
}
` 

export const Main6 = styled.div`
height: 100vh;
width: 100%;

padding: 0 12rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

img {
  transform: scale(90%);
}

.texts {
 flex-direction: column;
 display: flex;
 gap: 1.5rem;

 h2 {
  font-size: 3rem;
  font-weight: 300;
  color: #0074FF;
 }

 p {
  font-size: 1.6rem;
  font-weight: 300;
  color: #6d6d6d;
 }
 
 button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   margin-top: 1rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
 }
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 5rem 2rem;

  img {
    display: none;
  }

}
`

export const Main7 = styled.div`
min-height: 100vh;
width: 100%;

padding: 10rem 12rem;

flex-direction: column;
align-items: center;
display: flex;
gap: 4rem;

h2 {
 font-size: 3.2rem;
 font-weight: 600;
 color: #0074FF;

 strong {
  font-weight: 600;
  color: #ff9100;
 }
}

.cardLeft {
 height: 27rem;
 width: 100%;

 justify-content: center;
 flex-direction: column;
 display: flex;
 gap: 1rem;

 border-radius: 5rem 0 5rem 0;
 background-color: #ffb451;
 padding: 0 5rem 0 30%;
 overflow: hidden;

 position: relative;

 .Image {
  height: 100%;
  width: 27rem;

  position: absolute;
  left: 0;
  top: 0;

  justify-content: center;
  align-items: center;
  display: flex;

  background: rgb(0,116,255);
  border-radius: 0 0 5rem 0;
  background: linear-gradient(0deg, rgba(0,116,255,1) 0%, #004798 100%);
 }

 h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #0074FF;
 }

 p {
  font-size: 1.5rem;
  font-weight: 300;
  color: #363636;
 }
}

.cardRight {
  height: 27rem;
 width: 100%;

 justify-content: center;
 flex-direction: column;
 display: flex;
 gap: 1rem;

 border-radius: 0rem 5rem 0rem 5rem;
 background-color: #ffb451;
 padding: 0 30% 0 5rem;
 overflow: hidden;

 position: relative;

 .Image {
  height: 100%;
  width: 27rem;

  position: absolute;
  right: 0;
  top: 0;

  justify-content: center;
  align-items: center;
  display: flex;

  background: rgb(0,116,255);
  border-radius: 0 0 0 5rem;
  background: linear-gradient(0deg, rgba(0,116,255,1) 0%, #004798 100%);
 }

 h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #0074FF;
 }

 p {
  font-size: 1.5rem;
  font-weight: 300;
  color: #363636;
 }
}

@media (max-width: 450px) {
padding: 5rem 2rem;

.cardLeft {
 border-radius: 3rem 0 3rem 0;
 padding: 0 2rem;

 .Image {
  display: none;
 }
}

 .cardRight {
  border-radius: 3rem 0 3rem 0;
  padding: 0 2rem;

  .Image {
  display: none;
 }


}

}
`

export const Main8 = styled.div`
height: 60vh;
width: 100%;

background: rgb(0,116,255);
padding: 2.5rem 5rem 2.5rem 0rem;
background: linear-gradient(180deg, rgba(0,116,255,1) 0%, #004798 100%);

align-items: center;
position: relative;
display: flex;


.image {
 height: 100%;
 width: 50%;

 background-image: url(${Sad});
 background-size: cover;


}

.texts {
 padding: 0 0 0 20rem;

 flex-direction: column;
 display: flex;
 gap: 1.5rem;

 h2 {
  font-size: 2.6rem;
  color: #FFFFFF;

  strong {
    color: #ff9100;
  }
 }

 button {
   height: 6rem;
   width: 22rem;

   background-color: rgb(9, 194, 9);
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   margin-top: 1rem;
   border: none;

   font-weight: 100;
   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
 }
}

.center {
 height: 30rem;
 width: 30rem;

 background-color: #ff9100;

 transform: translate(-50%, -50%);
 position: absolute;
 left: 50%;
 top: 50%;

 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;

 h3 {
  font-size: 4.2rem;
  font-weight: 700;
  color: #FFFFFF;

  strong {
   color: #0074FF;
  }
 }

 span {
  font-size: 2.6rem;
  font-weight: 700;
  color: #FFFFFf;
 }
}

&:hover {
 .image {
  background-image: url(${Happy});
 }
}

@media (max-width: 450px){
  height: fit-content;

  padding: 2rem;

  .image {
    display: none;
  }

  .center {
    display: none;
  }

  .texts {
    padding: 0;
  }
}
`

export const Main9 = styled.div`
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