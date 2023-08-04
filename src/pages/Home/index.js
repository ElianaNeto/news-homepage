import './styles.js'
import { HomeContainer, MainContainer, SecondContainer, MainContainerA, MainContainerB } from './styles.js';

function Home(){
  return (
    <HomeContainer>
      <MainContainer>
      <MainContainerA></MainContainerA>
      <MainContainerB></MainContainerB>
      </MainContainer>
      <SecondContainer/>
    </HomeContainer>
  )
  

}
export default Home;