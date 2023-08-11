import { useMediaQuery } from 'react-responsive';

import DesktopComponent from "../../components/DesktopComponent";
import MobileComponent from "../../components/MobileComponent";
import "./home.css";

function Home() {

const isMobile = useMediaQuery({query: ' (max-width: 425px)'});

  return (
    <div>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}
export default Home;
