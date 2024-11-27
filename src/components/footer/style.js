import styled from "styled-components";

import Back from "./assets/backGeral.svg";

export const Container = styled.footer`
height: 85vh;
width: 100%;

background-color: #FFFFFF;
background-image: url(${Back});
padding: 10rem 12rem;

justify-content: space-between;
display: flex;
position: relative;
z-index: 100;
gap: 3rem;

.about {
  flex-direction: column;
  display: flex;
  flex: 1;

  img {
   width: 15rem;
   margin-bottom: 1.5rem;
  }

  p {
   font-size: 1.5rem;
   font-weight: 400;
   color: #0074FF;

   margin-bottom: 2rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ff9100;
    margin-bottom: .3rem;
  }

 .follow {
  align-items: center;
  display: flex;

  gap: 1.5rem;

  svg {
   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 2.7rem;
   color: #0074FF;

   &:hover {
    transform: scale(105%);
   }
  }
 }  
}

ul {
  flex-direction: column;
  display: flex;
  flex: 1;

  span {
   font-size: 1.6rem;
   font-weight: 600;
   color: #ff9100;
   margin-bottom: 1.5rem;
  }

  li {
    list-style: none;
    margin-top: 1rem;

    a {     
     font-size: 1.6rem;
     color: #0074FF;

     &:hover {
      cursor: pointer;
      color: #ff9100;
     }
    }
  }
}
`
