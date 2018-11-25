import styled from 'styled-components';
import { device } from './Device';


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr auto;

@media ${device.mobileS} {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
  }
@media ${device.mobileM} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  `;

export const Item = styled.div`
text-align: left;
padding: 6px 6px;
`
export const Input = styled.input`
display: block;

height: 20px;
padding: 6px 12px;
font-size: 14px;
line-height: 1.42857143;
color: #555;
background-color: #fff;
background-image: none;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
     -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        
        &:focus {
            border-color: #66afe9;
            outline: 0;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
        }
        &:-moz-placeholder {
            color: red;
            opacity: 1;
        }
        @media ${device.mobileS} {
          width: 90%
            height: 20px;
            margin: 0px 0px 0px 1px;
        }
        @media ${device.mobileM} {
          width: 92%
          height: 20px;
          margin: 0px 0px 0px 1px;
          }
          @media ${device.mobileL} {
            width: 94%
            height: 20px;
            margin: 0px 0px 0px 1px;
          }
          @media ${device.tablet} {
            width: 97%
            height: 20px;
            margin: 0px 0px 0px 1px;
          }
          @media ${device.laptop} {
            width: 98%
            height: 20px;
            margin: 0px 0px 0px 1px;
          }
          @media ${device.laptopL} {
            width: 98.5%
            height: 20px;
            margin: 0px 0px 0px 1px;
          
          }
          @media ${device.desktop} {
            width: 100%
            height: 20px;
            margin: 0px 0px 0px 1px;
          }
        
`;

export const Button = styled.button`
display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
        touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    &:focus{
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
        
    text-decoration: none;
    color: #fff;
    background-color: #1e90ff;
    border-color: #8c8c8c;
    
    }
    &:active{
        
        background-image: none;
        outline: 0;
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
                box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }
    &:hover{
        color: #fff;
        background-color: #1e90ff;
        border-color: #adadad;
    }
    @media ${device.mobileS} {
        padding: 6px 12px;
    }
    @media ${device.mobileM} {
        padding: 6px 12px;
      }
      @media ${device.mobileL} {
        padding: 6px 12px;
      }
      @media ${device.tablet} {
        padding: 6px 12px;
      }
      @media ${device.laptop} {
        padding: 6px 12px;
      }
      @media ${device.laptopL} {
        padding: 6px 12px;
      }
      @media ${device.desktop} {
        padding: 6px 12px;
      }
`;