import styled from "styled-components";

export const Container = styled.header`
height: 7rem;
width: 100%;

transition: .3s ease-in-out;
position: fixed;
left: 0;
top: 0;

justify-content: space-between;
align-items: center;
display: flex;
gap: 4rem;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
background-color: #0074FF;
padding: 0 10rem;
z-index: 20;

img {
 height: 5rem;

 cursor: pointer;
}

.Right {
 width: fit-content;
 height: 7rem;

 align-items: center;
 display: flex;
 gap: 1.5rem;

 .Topic {
  width: fit-content;
  height: 100%;

  padding: .5rem;

  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;
  

  a, span {
   color: #FFFFFF;
   font-size: 1.5rem;
   font-weight: 700;
  }
  p {
   color: #FFFFFF;
   font-size: 1.5rem;
   font-weight: 700;
  }
  svg {
   color: #FFFFFF;
   font-size: 1.5rem;
  }


  &:hover {
   cursor: pointer;
  }
 }

 .Premium {
  a {
   color: #ff9100;
  }
 }

 .Clients {
  position: relative;
  
  .Open {
    height: fit-content;
    width: fit-content;

    -webkit-box-shadow: 0px 0px 2px 1px rgba(158,158,158,1);
    -moz-box-shadow: 0px 0px 2px 1px rgba(158,158,158,1);
    box-shadow: 0px 0px 2px 1px rgba(158,158,158,1);
    background-color: #FFFFFF;
    border-radius: .3rem;
    padding: 1rem 0;

    position: absolute;
    top: 6rem;
    left: 0;

    li {
      height: fit-content;
      width: 18rem;

      padding: .6rem 1rem .6rem 2rem;
      list-style: none;

     a {
      font-size: 1.6rem;
      font-weight: 500;
      color: #0074FF;
     }

      &:hover {
        cursor: pointer;
        background-color: #0073ff1a;
      }
    }

    .active {
      background-color: #0073ff1a;
    }
  } 


 }
 .exp {
  width: fit-content;
  height: 4rem;

  outline: none;
  border: none;

  background-color: rgb(9, 194, 9);
  border-radius: 4rem;
  padding: 0 2rem;

  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   filter: brightness(120%);
   transform: scale(105%);
   cursor: pointer;
  }
 }
}

.Mobal {
 display: none;
}

@media (max-width: 450px){
 height: 5rem;
 width: 100%;

 overflow: hidden;
 padding: 0 2rem;
 gap: 2rem;

 img {
   height: 4rem;
 }

 .Right {
  display: none;
 }

 .Mobal {
   display: flex;

   .Topic {
  width: fit-content;
  height: 100%;

  padding: .5rem;

  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;
  

  a, span {
   color: #FFFFFF;
   font-size: 1.2rem;
   font-weight: 700;
  }
  p {
   color: #FFFFFF;
   font-size: 1.2rem;
   font-weight: 700;
  }
  svg {
   color: #FFFFFF;
   font-size: 1.5rem;
  }


  &:hover {
   cursor: pointer;
  }
 }
 }
}
`



