import "./styles.js";
import mainImag from "../../assets/images/image-web-3-desktop.jpg";
import gameImag from "../../assets/images/image-retro-pcs.jpg";
import keyboardImag from "../../assets/images/image-top-laptops.jpg";
import controlImag from "../../assets/images/image-gaming-growth.jpg";

import {
  HomeContainer,
  MainContainer,
  BottomContainer,
  MainContainerA,
  MainContainerB,
  ContainerBTitle,
  ContainerBParagraph,
  NormalTitle,
  ContentDivB,
  StyledImage,
  MainContainerAContent,
  MainContainerAContentTitle,
  MainContainerAContentDesc,
  Button,
  MainContainerADiv,
  ImageDiv,
  BottomChild,
  ChildDivImg,
  ChildContent,
  ChildInfo,
} from "./styles.js";

function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <MainContainerA>
          <ImageDiv>
            <StyledImage src={mainImag} alt="Imagem" />
          </ImageDiv>

          <MainContainerAContent>
            <MainContainerAContentTitle>
              The Bright Future of Web 3.0?
            </MainContainerAContentTitle>

            <MainContainerADiv>
              <MainContainerAContentDesc>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </MainContainerAContentDesc>
              <Button>READ MORE</Button>
            </MainContainerADiv>
          </MainContainerAContent>
        </MainContainerA>
        <MainContainerB>
          <ContainerBTitle>New</ContainerBTitle>
          <ContainerBParagraph></ContainerBParagraph>

          <ContentDivB hasBorder={true}>
            <NormalTitle>Hydrogen VS Electric Cars</NormalTitle>
            <ContainerBParagraph>
              Will hydrogen-fueled cars ever catch up to EVs?
            </ContainerBParagraph>
          </ContentDivB>

          <ContentDivB hasBorder>
            <NormalTitle>The Downsides of AI Artistry</NormalTitle>
            <ContainerBParagraph>
              What are the possible adverse effects of on-demand AI image
              generation?
            </ContainerBParagraph>
          </ContentDivB>

          <ContentDivB>
            <NormalTitle>Is VC Funding Drying Up?</NormalTitle>
            <ContainerBParagraph>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </ContainerBParagraph>
          </ContentDivB>
        </MainContainerB>
      </MainContainer>
      <BottomContainer>
        <BottomChild>
          <ChildDivImg>
            <StyledImage src={gameImag} alt="Imagem" />
          </ChildDivImg>

          <ChildContent>
            <ChildInfo
              color="hsl(233, 8%, 79%)"
              fontWeight="800"
              fontSize="25px"
            >
              01
            </ChildInfo>
            <ChildInfo fontWeight="800" fontSize="15px">
              Reviving Retro PCs
            </ChildInfo>
            <ChildInfo color="hsl(236, 13%, 42%)">
              What happens when old PCs are given modern upgrades?
            </ChildInfo>
          </ChildContent>
        </BottomChild>

        <BottomChild>
          <ChildDivImg>
            <StyledImage src={keyboardImag} alt="Imagem" />
          </ChildDivImg>

          <ChildContent>
            <ChildInfo
              color="hsl(233, 8%, 79%)"
              fontWeight="800"
              fontSize="25px"
            >
              02
            </ChildInfo>
            <ChildInfo fontWeight="800" fontSize="15px">
              Top 10 Laptops of 2022
            </ChildInfo>
            <ChildInfo color="hsl(236, 13%, 42%)">
              {" "}
              Our best picks for various needs and budgets.
            </ChildInfo>
          </ChildContent>
        </BottomChild>

        <BottomChild>
          <ChildDivImg>
            <StyledImage src={controlImag} alt="Imagem" />
          </ChildDivImg>

          <ChildContent>
            <ChildInfo
              color="hsl(233, 8%, 79%)"
              fontWeight="800"
              fontSize="25px"
            >
              03
            </ChildInfo>
            <ChildInfo fontWeight="800" fontSize="15px">
              The Growth of Gaming
            </ChildInfo>
            <ChildInfo color="hsl(236, 13%, 42%)">
              How the pandemic has sparked fresh opportunities.
            </ChildInfo>
          </ChildContent>
        </BottomChild>
      </BottomContainer>
    </HomeContainer>
  );
}
export default Home;
