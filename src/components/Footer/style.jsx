import styled from 'styled-components';
import { patternTheme as theme } from '../../globalstyle/pattern';

export const FooterStyle = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow:  0px 6px 6px rgba(0, 0, 0, 0.15);
    background-color: ${theme.colors.darkGreen};
    color: #FFFFFF;
    font-size: 18px;
    height: 70px;
    font-weight: 400;
  `