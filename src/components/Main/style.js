import styled from "styled-components"

  export const Main = styled.main`
      background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.9%, rgba(255, 255, 255, 0.60) 0.9%, rgba(255, 255, 255, 0.15) 100%);
      border-radius:61px 61px 0px 0px;
      padding: 50px 36px;
      display: flex;
      height: 100%;
      width: 414px;
      flex-direction: column; 
      box-shadow: 2px -7px 1.5em white ;
      min-height: calc(100vh - 170px);

      ${props => props.isBlur && `
      backdrop-filter: blur(22.5px);
      `
  }
`