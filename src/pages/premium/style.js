import styled from "styled-components";

import RocketMan from "./assets/plano-starter-topo.svg";
import Back from "./assets/plano-starter-fundo.png";
import PriceText from "./assets/price.svg";

export const Container = styled.div`
padding-top: 7rem;
`

export const Main = styled.main`
height: 70vh;
width: 100%;


background-color: #ffc77e;
padding: 0 8rem 0 10rem;

justify-content: space-between;
align-items: flex-end;
display: flex;
gap: 2rem;

.text {
 width: 25%;

 margin-bottom: 10rem;

 h3 {
  font-size: 2.8rem;
  font-weight: 400;
  color: #0074FF;
 }
}

.center {
 height: 32rem;
 width: 50%;

 border-radius: 1rem 1rem 0rem 0rem;
 overflow: hidden;

 .title {
  width: 100%;
  height: 15%;

  background-color: #ff9100;
  
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1rem;

  span {
   font-size: 1.5rem;
   font-weight: 400;
   color: #fff;
  }

  svg {
   font-size: 2.4rem;
   color: #0074FF;
  }
 }

 .rest {
  height: 85%;
  flex: 1;

  position: relative;

  justify-content: flex-end;
  display: flex;

  background: #0074FF url(${Back}) no-repeat center;
  background-size: cover;
  padding: 3rem 2rem;

  &::after {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 3rem;
 
    height: 4.5rem;
    width: 12rem;
    background-image: url(${PriceText});
    background-size: cover;
  }

  &::before {
    content: '';
    position: absolute;
    left: -.4rem;
    z-index: 1;
    bottom: 0;
 
    height: 20rem;
    width: 30rem;
    background-image: url(${RocketMan});
    background-size: cover;
  }

  .price {
   position: absolute;

   bottom: 1.3rem;
   left: 3rem;
   z-index: 2;

   span {
    font-size: 1.4rem;
    font-weight: 300;
    color: #0074FF;
   }

   h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #0074FF;

    z-index: 3;
    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #0074FF;
    }
   }

   .back {
    position: absolute;
    left: .3rem;
    z-index: 2;
    top: 0;

    h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #fff;

    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #fff;
    }
    }
   }
  }

  .texts {
   height: 100%;
   width: 50%;
   
   justify-content: space-between;
   flex-direction: column;
   display: flex;

   h3 {
    line-height: 2.8rem;
    font-size: 1.9rem;
    font-weight: 300;
    color: #fff;
   }

   button {
   height: 5rem;
   width: 100%;

   background-color: rgb(9, 194, 9);
   border-radius: 6rem;
   border: none;

   font-size: 1.6rem;
   font-weight: 500;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
  }
  }
 }
}

.blueerp {
 height: 32rem;
 width: 21%; 

 border-radius: 1rem 1rem 0rem 0rem;
 padding: 0 1rem;
 background-color: #FFFF;

 flex-direction: column;
 display: flex;

 img {
  width: 60%;
  object-fit: cover;
 }

 h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color:  #8f00fc;
 }
 span {
  line-height: 2.6rem;
  font-size: 1.9rem;
  font-weight: 300;
  color: #8f00fc;
  margin-top: .5rem;
  margin-bottom: 4rem;
 }

 button {
  height: 6rem;
  width: 100%;

  background-color: #5800cc;
  border-radius: .5rem;
  border: none;

  p {
   filter: brightness(150%);
   font-size: 1.2rem;
   font-weight: 600;
   color: #fc00fc;
  }
  strong {
  margin-top: .5rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: #FFFFFF;
  }

  &:hover {
   background-color: #8f00fc;
   transform: scale(103%);
   cursor: pointer;
 }
 }
}
`

export const Main2 = styled.div`
height: fit-content;
width: 100%;

padding: 0 8rem 5rem 10rem;

justify-content: space-between;
align-items: flex-start;
display: flex;
gap: 2rem;

.ads {
 width: 25%;

 .banner {
  opacity: 1;
  position: fixed;
  left: 10rem;
  top: 15rem;

  height: 40rem;
  width: 20%;

  background: #0074FF url(${Back}) no-repeat center;
  background-size: cover;
  padding: 2rem;

  flex-direction: column;
  display: flex;
  gap: 1rem;

  h3 {
   font-size: 1.8rem;
   font-weight: 600;
   color: #FFFFFF;
  }

  p {
   font-size: 1.6rem;
   font-weight: 300;
   color: #FFFFFF;

   margin-bottom: 1rem;
  }

  button {
   height: 5rem;
   width: 100%;

   background-color: rgb(9, 194, 9);
   border-radius: 6rem;
   border: none;

   font-size: 1.6rem;
   font-weight: 500;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 17rem;
    left: 3rem;
 
    height: 4.5rem;
    width: 12rem;
    background-image: url(${PriceText});
    background-size: cover;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
 
    height: 18rem;
    width: 100%;
    background-image: url(${RocketMan});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .price {
   position: absolute;

   bottom: 1.3rem;
   left: 3rem;
   z-index: 2;

   span {
    font-size: 1.4rem;
    font-weight: 300;
    color: #0074FF;
   }

   h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #0074FF;

    z-index: 3;
    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #0074FF;
    }
   }

   .back {
    position: absolute;
    left: .3rem;
    z-index: 2;
    top: 0;

    h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #fff;

    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #fff;
    }
    }
   }
  }
 }

 .hide {
  opacity: 0;
  position: fixed;
  left: 10rem;
  top: 15rem;

  height: 40rem;
  width: 20%;

  background: #0074FF url(${Back}) no-repeat center;
  background-size: cover;
  padding: 2rem;

  flex-direction: column;
  display: flex;
  gap: 1rem;

  h3 {
   font-size: 1.8rem;
   font-weight: 600;
   color: #FFFFFF;
  }

  p {
   font-size: 1.6rem;
   font-weight: 300;
   color: #FFFFFF;

   margin-bottom: 1rem;
  }

  button {
   height: 5rem;
   width: 100%;

   background-color: rgb(9, 194, 9);
   border-radius: 6rem;
   border: none;

   font-size: 1.6rem;
   font-weight: 500;
   color: #FFFFFF;

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
   }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 17rem;
    left: 3rem;
 
    height: 4.5rem;
    width: 12rem;
    background-image: url(${PriceText});
    background-size: cover;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
 
    height: 18rem;
    width: 100%;
    background-image: url(${RocketMan});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .price {
   position: absolute;

   bottom: 1.3rem;
   left: 3rem;
   z-index: 2;

   span {
    font-size: 1.4rem;
    font-weight: 300;
    color: #0074FF;
   }

   h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #0074FF;

    z-index: 3;
    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #0074FF;
    }
   }

   .back {
    position: absolute;
    left: .3rem;
    z-index: 2;
    top: 0;

    h2 {
    font-family: "Jaro", sans-serif;
    font-size: 5.5rem;
    font-weight: 500;
    color: #fff;

    strong {
     font-size: 2rem;
     font-weight: 500;
     color: #fff;
    }
    }
   }
  }
 }
}

.plans {
 height: 100%;
 width: 50%;

 border-bottom: 1px solid #e7e7e7;
 border-right: 1px solid #e7e7e7;
 border-left: 1px solid #e7e7e7;

 li {
  min-height: 6rem;
  width: 100%;

  list-style: none;

  justify-content: space-between;
  align-items: center;
  display: flex;

  .name {
   height: 100%;
   flex: 1;

   padding: 0 0 0 1.5rem;

   justify-content: center;
   flex-direction: column;
   display: flex;

   span {
    font-size: 1.4rem;
    font-weight: 500;
    color: #0074FF;
   }
   p {
    font-size: 1.3rem;
    font-weight: 300;
    opacity: .6;
   }
  }

  .icon {
   height: 100%;
   flex: 1;

   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 1.9rem;
   font-weight: 500;
   color: rgb(9, 194, 9);
  }
 }

 li:nth-child(odd) {
  background-color: #fdf9f3;
 }
}

.blueerp {
 min-height: 32rem;
 width: 21%; 

 border-radius: 0 0 1rem 1rem;
 background-color: #e7e7e7;
 padding: 2rem;

 flex-direction: column;
 display: flex;
 gap: 1.5rem;

 p {
  font-size: 1.8rem;
  font-weight: 600;
  color: #004798;
 }

 button {
  height: 6rem;
  width: 100%;

  background-color: #5800cc;
  border-radius: .5rem;
  border: none;

  p {
   filter: brightness(150%);
   font-size: 1.2rem;
   font-weight: 600;
   color: #fc00fc;
  }
  strong {
  margin-top: .5rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: #FFFFFF;
  }

  &:hover {
   background-color: #8f00fc;
   transform: scale(103%);
   cursor: pointer;
 }
 }
}
`