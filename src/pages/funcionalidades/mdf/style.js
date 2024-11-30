import styled from "styled-components";

import BackMain from "./assets/backend-emissor-mdfe-gratuito.png";


export const Container = styled.div`
padding-top: 7rem;
`

export const Main = styled.main`
height: 110vh;
width: 100%;

position: relative;

&::before {
 content: ' ';
 height: 65%;
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
 height: 60%;
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
    font-size: 4.5rem;
    line-height: 4rem;
    font-weight: 600;
    color: #ff9100;
   
    margin-bottom: 2rem;
  }

  span {
    font-size: 2.5rem;
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
 width: 60rem;
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
    font-size: 2.4rem;
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

   background-color: #ffbb00;
   border-radius: 1rem;
   text-align: center;
   padding: 1rem;

   justify-content: center;
   align-items: center;
   display: flex;
   gap: 2rem;

   span {
    font-size: 2.5rem;
    font-weight: 300;
    color: #0074FF;
    text-align: left;
   }

   img {
    width: 10rem;
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
`

export const Main2 = styled.div`
height: 90vh;
width: 100%;

padding: 10rem 12rem;

justify-content: space-between;
align-items: center;
display: flex;

.left {
 height: 100%;
 width: 50%;

 flex-direction: column;
 display: flex;
 gap: 4rem;

 h2 {
  font-size: 2.8rem;
  font-weight: 400;
  color: #0074FF;
 }

 button {
  height: 6rem;
  width: 30rem;

  background-color: rgb(9, 194, 9);
  border-radius: 6rem;
  border: none;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;

  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }
}

.right {
 height: 100%;
 width: 55%; 

 display: flex;

 p {
  line-height: 2.6rem;
  font-size: 1.9rem;
  font-weight: 300;
  color: #363636;
 }
}
`

export const Main3 = styled.div`
height: 30vh;
width: 100%;

background-color: #00ffff;
padding: 0 12rem;

flex-direction: column;
align-items: center;
display: flex;
gap: 3rem;

ul {
  width: 100%;

  margin-top: -5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 1rem;

  li {
   height: 12rem;
   flex: 1;

   background-color: #FFFFFF;
   border-radius: .7rem;
   list-style: none;
   padding: 1rem;

   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   gap: 1rem;

   span {
    font-size: 1.7rem;
    font-weight: 600;
    color: #0074FF;
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
 letter-spacing: .3rem;
 font-size: 2.2rem;
 font-weight: 300;
 color: #200DFF;
}
`

export const Main4 = styled.div`
height: 100vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;
gap: 8rem;

padding: 0 12rem;

.left, .right {
 flex-direction: column;
 display: flex;
 gap: 3rem;
}

.right {
 justify-content: right;
 text-align: right;
}

h3 {
   font-size: 3rem;
   font-weight: 300;
   color: #0074FF;
}

p {
 font-size: 1.8rem;
 font-weight: 300;
 color: #363636;
}

img {
 width: 40rem;
}
`