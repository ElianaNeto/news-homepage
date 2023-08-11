import { useMediaQuery } from 'react-responsive';

import DesktopComponent from "../../components/Desktop/DesktopComponent";
import MobileComponent from "../../components/Mobile/MobileComponent";

function Home() {

const isMobile = useMediaQuery({query: ' (max-width: 425px)'});

  return (
    <div>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}
export default Home;
