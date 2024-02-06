import styled from 'styled-components'
import Background from '../../assets/2b76fe32-0379-47ec-b777-dd371b98fb91.jpeg'


export const Box = styled.div`
     background: url("${Background}");
     background-size: cover;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 44px;
     height: 100%;
     min-height: 100vh;
`
export const Imagem = styled.img`
     margin-top:30px; 
`


export const SpanH1 = styled.span`
     color: #cc3300;
     font-size: 45px; 
`
export const Label = styled.p`
     color: #EEE;
     font-size: 18px;
     font-weight: 700;
     line-height: 22px;
     letter-spacing: -0.408px; 
     margin-left: 25px;
     
`
export const Input = styled.input`
     border-radius: 14px;
     background: linear-gradient(to right, rgba(4, 5, 3, 0.5), rgba(240,248,255, 0.6)) ;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
     border:none;
     width: 342px;
     height: 58px;
     outline: none;
     padding: 15px 20px 15px 25px;
     font-size:18px;
     font-weight: 400;
     padding-left: 25px;
     color:#fff;
     margin-bottom: 34px;
     align-self: center;
     &::placeholder{
          color: #1C1C1C;
     }
`

export const ButtonUsers = styled.button`
     width: 300px;
     height: 50px;
     margin-top:40px;
     border-radius: 14px;
     background: linear-gradient(to right, rgba(4, 5, 3, 0.8), transparent);
     color: black;
     font-size: 20px;
     font-weight: 700;
     line-height: 28px;
     border:1px solid #FFF;
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



