import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Roboto', sans-serif;
 transition: .3s ease-in-out;

 ::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: rgb(0%, 0%, 77.598572%);
}

::-webkit-scrollbar-thumb {
  background: #0074FF; 
  border-radius: 1rem;
}


}

:root {
 font-size: 62.5%;
}

body {
 background-color:  #f1f1f1;
 overflow-y: scroll;
 overflow-x: hidden;

}

a {
 text-decoration: none;
}
`

