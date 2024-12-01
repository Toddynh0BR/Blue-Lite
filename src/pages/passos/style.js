import styled from "styled-components";

import BackMain from "./assets/dashboard-passo-a-passo.png";

export const Container = styled.div`
padding-top: 7rem;

.returnTop {
 position: fixed;
 bottom: 4rem;
 right: 4rem;

 height: 5rem;
 width: 5rem;

 background-color: #f1f1f1;
 border-radius: 50%;
 z-index: 10;

 justify-content: center;
 align-items: center;
 display: flex;

 svg {
  font-size: 3.2rem;
  color: #0074FF;
 }

 cursor: pointer;
}

@media (max-width: 450px){
}
`

export const Main = styled.main`
height: 100vh;
width: 100%;

position: relative;

&::before {
 content: ' ';
 height: 75%;
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

 padding: 0 15rem 0 12rem;

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
    font-size: 1.8rem;
    font-weight: 300;
    color: #0074FF;

    margin-bottom: 3rem;
  }

  button {
   height: 6rem;
   width: 26rem;

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

@media (max-width: 450px){
  height: 100vh;
  padding: 7rem 0rem 5rem;

 .text {
  flex-direction: column;
  display: flex;
  gap: 4rem;

  padding: 2rem;

  br {
    display: none;
  }
 }

 &::before {
 display: none;
}

img {
 width: 100%;
}

}
`

export const Main2 = styled.div`
min-height: 100vh;
width: 100%;

flex-direction: column;
align-items: center;
display: flex;
gap: 5rem;

margin-bottom: 10rem;
padding: 0 20rem;

.CardOne {
 height: 50rem;
 width: 100%;
 
 background: linear-gradient(270deg, rgba(44,195,255,1) 0%, rgba(0,116,255,1) 100%);
 border-radius: 2rem 0 2rem 0;
 padding: 7rem 0rem 7rem 7rem;

 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 4rem;

 .texts {
  flex-direction: column;
  display: flex;
  gap: 1rem;

  h3 {
    font-size: 4rem;
    font-weight: 600;
    color: #FFFFFF;
  }
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #FFFFFF;

    width: 25rem;
    display: flex;
  }
  p {
    letter-spacing: .1rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;

    width: 25rem;
    display: flex;
  }
 }

 .video {
  height: 100%;
  width: 55rem;

  border: 3px solid #004798;
  border-radius: 1rem 0;
  margin-right: -2rem;
  overflow: hidden;

  iframe {
   height: 100%;
    width: 100%;
  }
 }
}

.CardTwo {
 height: 50rem;
 width: 100%;

 padding: 7rem 2rem 7rem 0rem;

 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 2rem;

 .texts {
  flex-direction: column;
  display: flex;
  gap: 1rem;

  h3 {
    font-size: 4rem;
    font-weight: 600;
    color: #004798;
  }
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #000000;

    width: 40rem;
    display: flex;
  }
  p {
    letter-spacing: .1rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;

    width: 40rem;
    display: flex;
  }
 }

 .video {
  height: 95%;
  width: 50rem;

  border: 3px solid #004798;
  border-radius: 0rem 1rem;
  margin-left: -2rem;
  overflow: hidden;

  iframe {
   height: 100%;
   width: 100%;
  }
 }
}

@media (max-width: 450px){
  padding: 5rem 0rem;

  .CardOne {
    height: fit-content;

    padding: 5rem 2rem;
    border-radius: 0rem;

    flex-direction: column;
    display: flex;
    gap: 4rem;

    .texts {
      width: 100%;

      h4 {
        width: 100%;
      }
    }
    .video {
      width: 100%;
      height: 25rem;

      margin: 0;
    }
  }

  .CardTwo {
    height: fit-content;

    padding: 3rem 2rem;
    border-radius: none;

    flex-direction: column-reverse;
    display: flex;
    gap: 4rem;

    .texts {
      width: 100%;

      h4, p {
        width: 100%;
      }
    }
    .video {
      width: 100%;
      height: 25rem;

      margin: 0;
    }
  }
}
`

export const Main3 = styled.div`
height: 60vh;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 4rem;

background-color: rgb(9, 194, 9);
padding: 0 12rem;

h2 {
 font-size: 3.4rem;
 font-weight: 300;
 color: #FFFFFF;

 text-align: center;
}

button {
   height: 6rem;
   width: 23rem;

   background-color: #FFFFFF;
   margin-bottom: 1.5rem;
   border-radius: 6rem;
   border: none;

   font-weight: 600;
   font-size: 2rem;
   color: rgb(9, 194, 9);

   &:hover {
    background-color: #ff9100;
    transform: scale(103%);
    cursor: pointer;
    color: #FFFFFF;
   }
}

@media (max-width: 450px){
  height: fit-content;
  padding: 5rem 2rem;
  
}
`