import styled from 'styled-components'


export const Button = styled.button`
     width: 342px;
     height: 74px;
     margin-top: 100px;
     border-radius: 14px;
     background: ${props => props.isBack ? 'linear-gradient(to right, rgba(4, 5, 3, 0.3), transparent)' : 'rgba(0,0,0,0.8)'};
     color: #FFF;
     font-size: 17px;
     font-weight: 700;
     line-height: 28px;
     border:none;
     cursor:pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 15px;
     align-self: center;
     &:hover{
          opacity: 0.8;
     }
     &:active{
          opacity: 0.6;
     }     
`