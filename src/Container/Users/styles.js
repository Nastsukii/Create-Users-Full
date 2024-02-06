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

export const H1 = styled.h1`
     margin-bottom: 70px;
     text-align: center;
     font-size: 34px;
     font-style: normal;
     font-weight: 700;
     line-height: normal;
     width: 400px; 
     align-self: center;
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
export const Button = styled.button`
     width: 342px;
     height: 74px;
     margin-top:120px;
     border-radius: 14px;
     background: linear-gradient(to right, rgba(4, 5, 3, 0.3), transparent);
     color: #FFF;
     font-size: 17px;
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
     img{
          transform: rotateY(180deg);
          border:none;
          
     }

`


export const User = styled.li`
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-radius: 14px;
     background: linear-gradient(to left, rgba(4, 5, 3, 0.5), rgba(240,248,255, 0.6)) ;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
     border:none;
     outline: none;
     width: 342px;
     height: 58px;
     margin-top: 20px;
     
     
     
     p{
     color: #FFF;
     font-size: 24px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     }

     button{
     background: url(<path-to-image>), lightgray 50% / cover no-repeat;
     width: 24px;
     height: 28px;
     flex-shrink: 0;
     border:none;
     background: none;
     cursor:pointer;

     &:hover{
          opacity: 0.8;
     }
     &:active{
          opacity: 0.6;
     }
     }


`

