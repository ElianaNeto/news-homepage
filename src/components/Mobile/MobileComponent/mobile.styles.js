import styled from "styled-components";


export const HomeContainer = styled.div`
  align-items: center;
  margin: 20px;
  width: 100%;
`;
export const MainContainer = styled.div`
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

export const MainContainerA = styled.div`
  height: 100%;
`;

export const ImageDiv = styled.div`
width: 94%;
  height: 350px;
  margin-bottom: 20px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainContainerAContent = styled.div`
 
  flex-direction: column;
  display: flex;
`;

export const MainContainerAContentTitle = styled.p`
  width: 100%;
  height: 50%;
  float: left;
  font-size: 50px;
  margin-top: 10px;
  font-weight: bolder;
  font-family: "Inter", sans-serif;
  margin-bottom: 5px;

`;

export const MainContainerADiv = styled.div`
  display: block;
  align-items: center;
  width: 45%;
  margin-bottom: 50px;
  margin-top: 0px;

`;

export const MainContainerAContentDesc = styled.p`
  //width: 50%;
  color: hsl(236, 13%, 42%);
  font-family: "Inter", sans-serif;
  font-size: 15px;
  width: 350px;
  letter-spacing: 1px;
  line-height: 25px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: hsl(5, 85%, 63%);
  color: white;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  width: 170px;
  cursor: pointer;
`;

export const MainContainerB = styled.div`
  background-color: hsl(240, 100%, 5%);
  width: 87%;
  text-align: start;
  padding: 10px 0 0 30px;
  flex-direction: column;
  display: flex;
`;

export const ContainerBTitle = styled.h1`
  color: hsl(35, 77%, 62%);
`;

export const NormalTitle = styled.h3`
  color: hsl(36, 100%, 99%);
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 10px;
`;

export const BottomChild = styled.div`
 // background-color: ${(props) => (props.color ? props.color : "orange")};
  width: 330px;
  height: 120px;
  flex-direction: row;
  display: flex;
  margin-bottom: 30px;

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
cursor: pointer;
`;
