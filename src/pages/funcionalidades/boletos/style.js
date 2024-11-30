import styled from "styled-components";

import BackBoleto from "./assets/bgBoleto.jpg";
import Boletos from "./assets/boletos.png";

import BackArcos from "./assets/bg.png";

import Photo1 from "./assets/fotoCarlosSigeLite.jpg";
import Photo2 from "./assets/fotoMatheusSigeLite.jpg";

export const Container = styled.div`
background-color: #fff;
padding-top: 7rem;

.social {
  transform: translateY(-50%);
  position: fixed;
  z-index: 10;
  right: 2rem;
  top: 50%;
  
  height: fit-content;
  width: fit-content;

  -webkit-box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.38);
  -moz-box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.38);
  box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.38);
  background-color: #fff;
  padding-bottom: 3rem;
  border-radius: 4rem;

  flex-direction: column;
  align-items: center;
  display: flex;

  .icon {
    height: 4rem;
    width: 4rem;

    justify-content: center;
    align-items: center;
    display: flex;

    border-radius: 50%;

    svg {
     transition: .0s ease-in-out;
     font-size: 1.6rem;
     color: #0074FF;
    }

    &:hover {
     background-color: #0074FF;
     cursor: pointer;

     svg {
      transition: .0s ease-in-out;
      color: #fff;
     }
    }
  }
}
`

export const Main = styled.main`
height: 100vh;
width: 100%;

background-image: url(${BackBoleto});
background-size: cover;

padding: 0 10rem;

justify-content: space-between;
align-items: flex-end;
display: flex;

.left {
 width: 30%;

 margin-bottom: 3rem;

 flex-direction: column;
 display: flex;
 gap: 2rem;

 h3 {
  font-size: 3.2rem;
  font-weight: 600;
  color: #fff;
 }

 ul {
  li {
   margin-bottom: .8rem;
   list-style: none;

   align-items: center;
   display: flex;
   gap: 1rem;

   svg {
    color: rgb(9, 194, 9);
    font-size: 1.9rem;
   }
   p {
    font-size: 1.5rem;
    font-weight: 300;
    color: #fff;
   }
  }
 }

 button {
  height: 5.7rem;
  width: 17rem;

  background-color: rgb(9, 194, 9);
  border-radius: 5.7rem;
  border: none;

  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;

  &:hover {
   background-color: #fff;
   cursor: pointer;
   color: #200DFF;
  }
 }

 .button {
  height: 4rem;
  width: 20rem;

  border: 1px solid #e7e7e78e;
  border-radius: 4rem;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;

  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;

  p, svg {
    transition: .0s ease-in-out;
    color: #fff;
  }

  &:hover {
   background-color: #fff;
   cursor: pointer;
   color: #200DFF;

   p, svg {
    transition: .0s ease-in-out;
    color: #200DFF;
  }
  }
 }
}

.right {
 width: 55%;
 height: 80%;

 position: relative;

 background-image: url(${Boletos});
 background-size: cover;

 img {
  height: 18rem;
  width: 18rem;

  position: absolute;
  right: 4rem;
  top: 1rem;
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

padding: 20rem 5rem;

.title {
 flex-direction: column;
 align-items: center;
 text-align: center;
 display: flex;

 width: 80%;

 span {
  letter-spacing: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #363636;
 }

 h2 {
  font-size: 2.6rem;
  font-weight: 300;
  color: #0074FF;
 }
}

h3 {
 letter-spacing: .7rem;
 font-size: 1.6rem;
 font-weight: 600;
 color: #363636;
}

header {
 height: 6.4rem;
 width: 100%;

 grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr 1.1fr;
 display: grid;

 border-radius: 1rem 1rem 0 0;
 background-color: #363636;

 .topic {
  height: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  padding: 1rem 2rem;

  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
 }

 .border {
  border-right: 1px solid #6d6d6d;
 }
}

nav {
 height: 12rem;
 width: 100%;

 grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr 1.1fr;
 display: grid;
 z-index: 2;
 
 -webkit-box-shadow: 0px 5px 23px -6px rgba(0,0,0,0.42);
 -moz-box-shadow: 0px 5px 23px -6px rgba(0,0,0,0.42);
 box-shadow: 0px 5px 23px -6px rgba(0,0,0,0.42);
 background-color: #fff;
 border-radius: 1rem;
 margin-top: -5.5rem;

 .topic {
  height: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  padding: 1rem 2rem;

  span {
   margin-top: -2rem;
   font-size: 1.4rem;
   font-weight: 500;
   color: rgb(9, 194, 9);
  }
  strong {
   font-size: 4rem;
   font-weight: 500;
   color: rgb(9, 194, 9);
  }
  p {
   margin-top: 1rem;
   font-size: 1.4rem;
   font-weight: 500;
   color: rgb(9, 194, 9);
  }
 }

}

ul {
 height: fit-content;
 width: 100%;

 flex-direction: column;
 display: flex;

 margin-top: -5rem;

 li {
  height: 10rem;
  width: 100%;

  grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr 1.1fr;
  display: grid;

  border-radius: 1rem;
  list-style: none;

  .topic {
  height: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  display: flex;


  padding: 1rem 2rem;

  img {
    width: 15rem;
  }
  span {
   margin-top: -2rem;
   font-size: 1.4rem;
   font-weight: 300;
   color: #363636;
  }
  strong {
   font-size: 4rem;
   font-weight: 300;
   color: #363636;
  }
  p {
   margin-top: 1rem;
   font-size: 1.4rem;
   font-weight: 300;
   color: #363636;
  }
  b {
   margin-left: .5rem;
   font-size: 1.1rem;
   font-weight: 300;
  }

  .font {
   position: absolute;
   bottom: 1rem;
   right: 1rem;

   a {
    align-items: center;
    display: flex;
    gap: .3rem;

    font-size: 1.4rem;
    font-weight: 300;
    color: #363636;

    svg {
      transition: .0s ease-in-out;
      color: #363636;
    }

    &:hover {
     color: #200DFF;
     svg {
      transition: .0s ease-in-out;
      color: #200DFF;
     }
    }
   }
  }
  }

  .border {
   border-right: 1px solid #e7e7e7;
  }
 }

 li:nth-child(even){
  background-color: #f5f5f5;
 }
}

h5 {
 font-size: 1.4rem;
 font-weight: 300;
 color: #363636;
}
`

export const Main3 = styled.div`
height: 70vh;
width: 100%;

padding: 0rem 5rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 8rem;

.left, .right {
 width: 50%;
 height: 100%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

}

.left {
 align-items: flex-start;
 h2 {
  font-size: 2.9rem;
  font-weight: 700;
  color: #0074FF;
 }

 p {
  line-height: 2.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: #363636;

  margin-bottom: 2rem;
 }

 button {
  height: 5.6rem;
  width: 15rem;

  background-color: rgb(9, 194, 9);
  border-radius: 5.6rem;
  border: none;

  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;
 }
}

.right {
 align-items: center;
 img {
  width: 30rem;
 }
}
`

export const Main4 = styled.div`
height: 100vh;
width: 100%;

flex-direction: column;
align-items: center;
display: flex;

background-color: #f2f2f2;
position: relative;
padding: 10rem 5rem 10rem 5rem;

span {
 letter-spacing: 1rem;
 font-size: 1.5rem;
 font-weight: 600;
 color: #363636;
}

h2 {
 font-size: 2.9rem;
 font-weight: 600;
 color: #0074FF;

 margin-bottom: .3rem;
 margin-top: 1rem;
}

.swiper {
 width: 100%;

 
.swiper-wrapper {
 margin: none;

 z-index: 2;

 .swiper-slide {
  height: 30rem;

  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 3rem;

  padding: 0 5rem;

  p {
    font-weight: 400;
    font-size: 2rem;
    color: #6d6d6d;
  }

  .photo {
    height: 12rem;
    width: 12rem;

    -webkit-box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);
    box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);

    border: 3px solid #0074FF;
    background-color: #fff;
    border-radius: 50%;
  }

  .p1 {
    background-image: url(${Photo1});
    background-position: center;
    background-size: cover;
  }

  .p2 {
    background-image: url(${Photo2});
    background-position: center;
    background-size: cover;
  }

  h5 {
   letter-spacing: .1rem;
   font-size: 1.4rem;
   font-weight: 600;
   color: #0074FF;
   margin-top: -1rem;
  }

 }
}

 .swiper-pagination {
  display: none;
 }
}

&::before {
  content: "";
  height: 50%;
  width: 100%;

  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;

  background-image: url(${BackArcos});
  background-position: center;
  background-size: cover;
}
`

export const Main5 = styled.div`
height: 100vh;
width: 100%;

padding: 3rem 5rem;

justify-content: space-between;
display: flex;
gap: 5rem;

.left {
  height: 100%;
  width: 28%;

  flex-direction: column;
  align-items: center;
  display: flex;
  gap: .5rem;

  span {
   letter-spacing: 1rem;
   font-size: 1.4rem;
   font-weight: 600;
   color: #363636;
  }

  h3 {
   font-size: 2.8rem;
    font-weight: 600;
    color: #0074FF;
  }

  .card {
   height: fit-content;
   width: 90%;

   
   -webkit-box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);
   -moz-box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);
   box-shadow: 0px 3px 84px 0px rgba(0,0,0,0.32);
   background-color: #0074FF;
   position: relative;
   margin-top: 1.5rem;
   overflow: hidden;

   flex-direction: column;
   display: flex;
   gap: 1rem;

   img {
    height: 18rem;
    width: 150%;
    align-self: center;
   }

   h4 {
    margin-left: 2.5rem;
    margin-top: 2rem;
    font-size: 2.2rem;
    font-weight: 300;
    color: #fff;
   }

   p {
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 200;
    color: #fff;
   }

   button {
    height: 4rem;
    width: 14rem;

    margin-bottom: 3rem;
    margin-left: 2.5rem;
    margin-top: 1rem;

    background-color: rgb(9, 194, 9);
    border-radius: .4rem;
    border: none;

    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;

    &:hover {
     filter: brightness(90%);
     cursor: pointer;
    }
   }

   .value {
    height: 12rem;
    width: 12rem;

    position: absolute;
    top: 7rem;
    border: 1px solid #fff;
    border-radius: 50%;
   }
  }

}

ul {
  max-height: 60rem;
  min-height: 60rem;
  flex: 1;

  overflow: auto;

  li {
    height: fit-content;
    width: 100%;

    list-style: none;

    flex-direction: column;
    display: flex;

    header {
      height: 5rem;
      width: 100%;

      border-bottom: 2px solid #e7e7e78e;
      cursor: pointer;
      padding: 0 2rem;

      justify-content: space-between;
      align-items: center;
      display: flex;

      span {
       font-size: 1.4rem;
       font-weight: 300;
       color: #0074FF;
      }
      svg {
        font-size: 2rem;
        color: #0074FF;
      }
    };

    .text {
      height: fit-content;
      width: 100%;

      padding: 2rem;

      p {
        line-height: 2.4rem;
        font-size: 1.6rem;
        font-weight: 300;
        color: #6d6d6d;
      }
    }
  }
}
`
