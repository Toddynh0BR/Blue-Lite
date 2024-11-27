import styled from "styled-components";

import CircleBack from "./assets/circulo-background-cta-integracoes.svg";
import WomanBack from "./assets/venda-online-com-o-sige-lite.png";

import Happy from "./assets/happy-people.png";
import Sad from "./assets/people-line.png";

export const Container = styled.div`
padding-top: 7rem;
`

export const Main = styled.div`
height: 100vh;
width: 100%;

background-image: 
linear-gradient(
    180deg,
    hsl(213deg 100% 50%) 7%,
    hsl(213deg 100% 56%) 35%,
    hsl(210deg 100% 58%) 49%,
    hsl(206deg 100% 59%) 62%,
    hsl(202deg 100% 59%) 77%,
    hsl(197deg 100% 59%) 100%
);
padding: 0 6rem 0 12rem;

justify-content: flex-start;
align-items: center;
display: flex;

img {
 position: absolute;
 right: 5rem;
 top: 14rem;
}

.left {
 width: 40%;

 flex-direction: column;
 display: flex;

 h2 {
 font-size: 3.7rem;
 font-weight: 300;
 color: #fff;

 margin-bottom: 3rem;
}

span {
 line-height: 2.4rem;
 font-size: 1.6rem;
 font-weight: 300;
 color: #fff;

 margin-bottom: 3rem;
}

button {
  height: 6rem;
  width: 24rem;

  background-color: rgb(9, 194, 9);
  border: 1px solid rgb(9, 194, 9);
  margin-bottom: 2rem;
  border-radius: 6rem;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;

  font-size: 2.2rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
}

.icon {
 align-items: center;
 display: flex;
 gap: .5rem;

 cursor: pointer;

 svg {
  font-size: 3.5rem;
  color: #fff;
 }
 p {
  font-size: 1.3rem;
  font-weight: 300;
  color: #fff;
 }
}
}
`

export const Main2 = styled.div`
height: 40vh;
width: 100%;

background-color: #ffc77e;
padding: 5rem 30rem;

justify-content: space-between;
align-items: center;
display: flex;

span {
 font-family: "Caveat", cursive;
 font-size: 2.4rem;
 font-weight: 100;
 color: #0074FF;

 transform: rotate(350deg);
}

ul {
 justify-content: space-between;
 align-items: center;
 position: relative;
 display: flex;
 gap: 2rem;

 height: 100%;

 &::after {
   content: "";
   height: 1px;
   width: 80%;

   position: absolute;
   margin: auto;
   z-index: 1;
   top: 4rem;
   right: 0;
   left: 0;

   background-color: #0074FF;
  }

 li {
  list-style: none;
  height: 100%;

  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  z-index: 2;




  .circle {
   height: 8rem;
   width: 8rem;

   justify-content: center;
   align-items: center;
   display: flex;

   border: 2px solid #0074FF;
   background-color: #fff;
   border-radius: 50%;
  }

  p {
   font-size: 1.6rem;
   font-weight: 300;
   color: #0074FF;
  }
 }
}
`

export const Main3 = styled.div`
height: 70vh;
width: 100%;

position: relative;

.left {
 height: 100%;
 width: 80%;

 position: absolute;
 left: -30%;
 z-index: 2;
 top: 0;
 
 background-image: url(${CircleBack});
 background-size: cover;
 padding: 0 20rem 0 0;

 justify-content: flex-end;
 align-items: center;
 display: flex;

 img {
  width: 34rem;
 }
}

.right {
 height: 100%;
 width: 55%;

 background: #0074FF  url(${WomanBack}) center no-repeat;
 justify-self: flex-end;
 padding: 0 12rem 0 0;

 justify-content: center;
 flex-direction: column;
 align-items: flex-end;
 text-align: right;
 display: flex;
 gap: 3rem;

 h2 {
  font-size: 3.5rem;
  font-weight: 300;
  color: #fff;
 }

 button {
  height: 5.4rem;
  width: 25rem;

  background-color: #fff;
  border-radius: .8rem;
  border: none;

  font-size: 1.7rem;
  font-weight: 700;
  color: #0074FF;

  &:hover {
   transform: scale(105%);
   cursor: pointer;
  }
 }
}
`

export const Main4 = styled.div`
min-height: 100vh;
width: 100%;

padding: 10rem 12rem;

flex-direction: column;
display: flex;
gap: 4rem;

h3 {
 font-size: 2.2rem;
 font-weight: 600;
 color: #ff9100;
}

ul {
 height: fit-content;
 width: 100%;

 grid-template-columns: repeat(4, 1fr);
 column-gap: 2rem;
 display: grid;
 row-gap: 3rem;

 li {
  height: 30rem;
  flex: 1;

  flex-direction: column;
  display: flex;
  gap: 1rem;

  .image {
   height: 15rem;
   width: 100%;

   border: 1px solid #0074FF;
   background-color: #fff;
   border-radius: .6rem;
   padding: 3rem;

   justify-content: center;
   align-items: center;
   display: flex;
  }

  span {
   font-size: 1.8rem;
   font-weight: 600;
   color: #0074FF;

   margin-top: 1rem;
  }
  p {
   line-height: 2rem;
   font-size: 1.5rem;
   font-weight: 300;
   color: #363636;
  }
 }
}
`

export const Main5 = styled.div`
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
`

export const Main6 = styled.div`
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
`