import styled from "styled-components";

import Line1 from "../assets/line-back-system.svg";
import Happy from "../assets/happy-people.png";
import Sad from "../assets/people-line.png";

import EspecialBack from "../assets/cta-back-sige-lite.png";

export const Container = styled.div`
padding-top: 7rem;

.subheader {
 height: 7rem;
 width: 100%;

 position: fixed;
 z-index: 10;
 top: -7rem;
 left: 0;

 background: #004798;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 5rem;

 .topic {
  height: 100%;
  width: 20rem;
  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
   height: 4rem;
   width: 4rem;
   fill: #ff9100;
   flex-shrink: 0;
  }

  p {
    white-space: nowrap;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    
    p {
     color: #ff9100;
    }
  }
 }
}

&[data-subHeader="true"] {
  .subheader {
 height: 6rem;
 width: 100%;

 position: fixed;
 z-index: 10;
 top: 7rem;
 left: 0;

 background: #004798;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 5rem;

 .topic {
  height: 100%;
  width: 20rem;
  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
   height: 4rem;
   width: 4rem;
   fill: #ff9100;
   flex-shrink: 0;
  }

  p {
    white-space: nowrap;
    font-size: 1.7rem;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    
    p {
     color: #ff9100;
    }
  }
 }
}
}

@media (max-width: 450px) {
padding-top: 5rem;

&[data-subHeader="true"] {
  .subheader {
 display: none;
}
}
}
`

export const Main = styled.main`
height: 110vh;
width: 100%;

background: linear-gradient(0deg, rgba(0,116,255,1) 0%, rgba(0,71,152,1) 100%);
padding: 0 10rem;
position: relative;

.Background {
 height: 100%;
 width: 80%;

 position: absolute;
 z-index: 1;
 right: 0;
 top: 0;

}

.left {
 height: 90%;
 width: 50%;

 position: relative;
 z-index: 2;

 justify-content: center;
 flex-direction: column;
 display: flex;

 h1 {
  font-size: 5.5rem;
  font-weight: 700;
  color: #fff;

  margin-bottom: 3rem;

  strong {
   color: #ff9100;
  }
 }

 ul {
  margin-bottom: 3rem;
  li {
    margin-bottom: 1rem;
    list-style: none;

    align-items: center;
    display: flex;
    gap: 1rem;

    p {
     font-size: 2.1rem;
     font-weight: 400;
     color: #fff;
    }
  }
 }

 button {
  height: 6.2rem;
  width: 20rem;

  background: rgb(9, 194, 9);
  border-radius: 6.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }

 span {
  align-items: center;
  display: flex;

  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
 }
}

.bottom {
 height: 10rem;
 width: 100%;

 position: absolute;
 z-index: 2;
 bottom: 0;
 left: 0;

 background: #004798;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 5rem;

 .topic {
  height: 100%;
  width: 20rem;
  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
   height: 5rem;
   width: 5rem;
   fill: #ff9100;
   flex-shrink: 0;
  }

  p {
    white-space: nowrap;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    
    p {
     color: #ff9100;
    }
  }
 }
}

@media (max-width: 450px) {
  height: fit-content;

  padding: 2rem 2rem 5rem 2rem;

  .Background {
    display: none;
  }

  .left {
    height: fit-content;
    width: 100%;

    ul {
  li {

    p {
     font-size: 1.6rem;
    }
  }
 }
  }

  .bottom {
    display: none;
  }
}
`

export const Main2 = styled.div`
height: 100vh;
width: 100%;

border-bottom: .4rem solid #0074FF;
padding: 0 10rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

img {
 height: 100%;
 width: 50%;

}

.left {
 height: 100%;
 width: 40%;

 justify-content: center;
 flex-direction: column;
 display: flex;
 gap: 2rem;

 h2 {
  font-size: 3.5rem;
  font-weight: 500;
  color: #0074FF;
 }

 p {
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #363636;

  strong {
   color:  #0074FF;
  }
 }

 button {
  height: 6.2rem;
  width: 20rem;

  background: rgb(9, 194, 9);
  border-radius: 6.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }
}

@media (max-width: 450px) {
 height: fit-content;

 padding: 2rem;

 img {
  display: none
 }

 .left {
 height: fit-content;
 width: 100%;
}
}
`

export const Main3 = styled.div`
min-height: 100vh;
width: 100%;


padding: 15rem 10rem 95rem 10rem;
position: relative;

justify-content: center;
flex-direction: column;
display: flex;

.title {
width: 40%;

flex-direction: column;
text-align: right;
display: flex;

position: absolute;
right: 10rem;
top: 13rem;

h3 {
 font-size: 2.5rem;
 font-weight: 600;
 color: #ff9100;
}
h2 {
 font-size: 3.6rem;
 font-weight: 600;
 color: #0074FF;
}
}

.columns {
 height: fit-content;
 width: 100%;

 position: relative;

 grid-template-columns: repeat(3, 1fr);
 display: grid;
 gap: 10rem;

 .line1 {
  height: 40rem;
  width: 70%;

  background: url(${Line1});
  background-size: contain;
  background-repeat: no-repeat;

  transform: translateX(-50%);
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 10rem;
 }

 .column {
  height: fit-content;
  flex: 1;

  flex-direction: column;
  display: flex;
  z-index: 2;
  gap: 20rem;

  .topic {
   height: 100%;
   width: 100%;

   flex-direction: column;
   display: flex;
   gap: 3rem;

   img {
    width: 100%;
   }

   span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ff9100;
   }

   p {
    line-height: 2.3rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: #6d6d6d;

    strong {
     color:  #0074FF;
    }
   }
  }
 }

 .c2 {
  margin-top: 10rem;
 }
 .c3 {
  margin-top: 20rem;
 }
}

.image {
 height: 110vh;
 width: 100%;

 position: absolute;
 top: 160rem;
 left: 0;

 flex-direction: column;
 display: flex;
 gap: 3rem;

 background-image: url(${EspecialBack});
 background-size: cover;
 padding: 16rem 5rem;

 h2 {
  font-size: 2.8rem;
  font-weight: 600;
  color: #fff;

  strong {
   color: #ff9100;
  }
 }

 button {
  height: 6.2rem;
  width: 20rem;

  background: rgb(9, 194, 9);
  border-radius: 6.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }

 img {
  width: 40rem;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 32%;
 }
}

.rest {
 height: 100vh;
 width: 100%;

 position: absolute;
 bottom: 0;
 left: 0;

 padding: 5rem 10rem;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ff9100;
 }

 h2 {
  font-size: 3.6rem;
  font-weight: 600;
  color: #0074FF;  

  margin-bottom: 2rem;
 }

 ul {
  justify-content: space-between;
  display: flex;
  gap: 3rem;
  
  margin-bottom: 3rem;

  li {
   list-style: none;
   height: 100%;
   width: 100%;

   flex-direction: column;
   display: flex;
   gap: 3rem;

   span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ff9100;
   }

   p {
    line-height: 2.3rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: #6d6d6d;

    strong {
     color:  #0074FF;
    }
   }


  }
 }

 button {
    height: 6.2rem;
    width: 20rem;

    background: rgb(9, 194, 9);
    border-radius: 6.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }
}

@media (max-width: 450px) {
 padding: 15rem 2rem;


 .title {
  width: 100%;

  justify-content: center;
  flex-direction: column;
  text-align: left;

  left: 2rem;
  top: 1rem;

  h3 {
   font-size: 1.8rem;
  }
  h2 {
   font-size: 2.4rem;
  }
 }

 .columns {
 grid-template-columns: repeat(1, 1fr);
 gap: 1rem;

 .line1 {
  display: none;
 }

 .column {
  gap: 5rem;

  .topic {
   height: fit-content;
   span {
    font-size: 1.6rem;
   }

   p {
    line-height: 2rem;
    font-size: 1.4rem;
   }
  }
 }

 .c2 {
  margin-top: 2rem;
 }
 .c3 {
  margin-top: 2rem;
 }
 }

 .image {
 display: none;
 }

 .rest {
 height: fit-content;
 position: relative;
 padding: 2rem;
 gap: 1rem;

 span {
  font-size: 2.2rem;
 }

 h2 {
  font-size: 2.5rem;
 }

 ul {
  justify-content: center;
  flex-direction: column;

  li {
   height: fit-content;

   span {
    font-size: 1.6rem;
   }

   p {
    line-height: 2rem;
    font-size: 1.4rem;
   }


  }
 }

 button {
    height: 6.2rem;
    width: 20rem;

    background: rgb(9, 194, 9);
    border-radius: 6.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }
}

}
`

export const Main4 = styled.div`
height: 200vh;
width: 100%;

background: linear-gradient(180deg, rgba(0,116,255,1) 0%, rgba(0,71,152,1) 100%);

padding: 0 10rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

img {
 height: 100%;
 width: 50%;

}

.left {
 height: 100%;
 width: 45%;

 justify-content: center;
 flex-direction: column;
 display: flex;

 span {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ff9100;
 }

 h2 {
  font-size: 3.6rem;
  font-weight: 600;
  color: #fff;  

  margin-bottom: 4rem;
 }

 h3 {
  font-size: 2.1rem;
  font-weight: 600;
  color: #fff;

  margin-bottom: 2rem;
 }

 p {
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;

  margin-bottom: 4rem;

  strong {
   color:  #ff9100;
  }
 }

 button {
  height: 6.2rem;
  width: 20rem;

  background: rgb(9, 194, 9);
  border-radius: 6.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
 }
}

@media (max-width: 450px) {
height: fit-content;

padding: 2rem;

img {
 display: none;
}

.left {
 width: 100%;
 span {
  font-size: 2.2rem;
 }

 h2 {
  font-size: 2.5rem;

  margin-bottom: 2rem;
 }

 h3 {
  font-size: 1.9rem;
  margin-bottom: 1rem;
 }

 p {
  line-height: 2rem;
  font-size: 1.4rem;


  margin-bottom: 2rem;
 }

 button {
  height: 6.2rem;
  width: 20rem;

  background: rgb(9, 194, 9);
  border-radius: 6.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: none;

  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;

  &:hover {
   background-color: #ff9100;
   cursor: pointer;
  }
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