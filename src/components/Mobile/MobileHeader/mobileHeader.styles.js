import styled from "styled-components";

export const Header = styled.header`
display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  justify-content: space-between;
  margin-left: 20px;
`;

export const MobileMenu = styled.div`
  background-color: hsl(36, 100%, 99%);
  padding: 16px;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 50%;
  height: 100%;
  z-index: 2;
`;

export const Overlay = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor semi-transparente */
  z-index: 1;
`;

export const HamburguerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

export const CloseMenu = styled.button`
  background: transparent;
  position: absolute;
  border: none;
  cursor: pointer;
  padding: 8px;
  top: 20px;
  right: 0px;
`;