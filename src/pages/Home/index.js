import './styles.js'
import mainImag from '../../assets/images/image-web-3-desktop.jpg'
import {
  HomeContainer, MainContainer, SecondContainer,
  MainContainerA, MainContainerB,
  ContainerBTitle, ContainerBParagraph,
  NormalTitle, ContentDivB, StyledImage, MainContainerAContent, MainContainerAContentTitle, MainContainerAContentDesc, Button, MainContainerADiv, ImageDiv
} from './styles.js';

function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <MainContainerA>
          <ImageDiv>
            <StyledImage src={mainImag} alt="Imagem" />
          </ImageDiv>


          <MainContainerAContent>

            <MainContainerAContentTitle>The Bright Future of Web 3.0?</MainContainerAContentTitle>

            <MainContainerADiv>
              <MainContainerAContentDesc>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?</MainContainerAContentDesc>
              <Button>READ MORE</Button>

            </MainContainerADiv>



          </MainContainerAContent>
        </MainContainerA>
        <MainContainerB>
          <ContainerBTitle>New</ContainerBTitle>
          <ContainerBParagraph></ContainerBParagraph>

          <ContentDivB hasBorder={true}>
            <NormalTitle>Hydrogen VS Electric Cars</NormalTitle>
            <ContainerBParagraph>Will hydrogen-fueled cars ever catch up to EVs?</ContainerBParagraph>
          </ContentDivB>

          <ContentDivB hasBorder>
            <NormalTitle>The Downsides of AI Artistry</NormalTitle>
            <ContainerBParagraph>What are the possible adverse effects of on-demand AI image generation?
            </ContainerBParagraph>
          </ContentDivB>

          <ContentDivB>
            <NormalTitle>Is VC Funding Drying Up?</NormalTitle>
            <ContainerBParagraph>
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </ContainerBParagraph>
          </ContentDivB>



        </MainContainerB>
      </MainContainer>
      <SecondContainer />
    </HomeContainer>
  )


}
export default Home;