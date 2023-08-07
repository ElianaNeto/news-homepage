import styled from "styled-components";

export const HomeContainer = styled.div`
  align-items: center;
  margin: 40px 140px 0 150px;
  width: 80%;
`;
export const MainContainer = styled.div`
  flex-direction: row;
  display: flex;
  box-sizing: border-box;
  height: 510px;
`;

export const MainContainerA = styled.div`
  height: 100%;
  width: 90%;
  margin-right: 30px;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 25px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MainContainerAContent = styled.div`
  height: 50%;
`;

export const MainContainerAContentTitle = styled.p`
  width: 40%;
  height: 50%;
  float: left;
  font-size: 60px;
  margin-top: 10px;

  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

export const MainContainerADiv = styled.div`
  float: right;
  align-items: center;
  width: 45%;
  margin: 0;
`;

export const MainContainerAContentDesc = styled.p`
  //width: 50%;
  color: hsl(236, 13%, 42%);
  font-family: "Inter", sans-serif;
  font-size: 15px;
  width: 350px;
  letter-spacing: 1px;
  line-height: 25px;
  margin-bottom: 55px;
`;

export const Button = styled.button`
  background-color: hsl(5, 85%, 63%);
  color: white;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
`;

export const MainContainerB = styled.div`
  background-color: hsl(240, 100%, 5%);
  width: 35%;
  text-align: start;
  padding: 30px 0 0 30px;
`;

export const ContainerBTitle = styled.h1`
  color: hsl(35, 77%, 62%);
`;

export const NormalTitle = styled.h3`
  color: hsl(36, 100%, 99%);
`;

export const ContainerBParagraph = styled.p`
  color: hsl(233, 8%, 79%);
  font-size: 14px;
`;
export const ContentDivB = styled.div`
  border-bottom: ${(props) =>
    props.hasBorder ? "solid 0.4px hsl(233, 8%, 79%)" : "none"};
  width: 250px;
  margin-right: 25px;
  padding-bottom: 15px;
  align-items: center;
`;

export const BottomContainer = styled.div`
  margin-top: 55px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
`;

export const BottomChild = styled.div`
 // background-color: ${(props) => (props.color ? props.color : "orange")};
  width: 330px;
  height: 120px;
  flex-direction: row;
  display: flex;
`;

export const ChildDivImg = styled.div`
  width: 30%;
  height: 100%;
  background-color: aliceblue;
`;

export const ChildContent = styled.div`
  flex-direction: column;
  display: flex;
  padding-left: 15px;
  width: 60%;
`;

export const ChildInfo = styled.text`
color: ${(props) => (props.color ? props.color : "hsl(240, 100%, 5%)") };
font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
font-weight:${(props) => (props.fontWeight ? props.fontWeight : "none") };
font-family: 'Inter', sans-serif;
margin-bottom: 10px;
`;
