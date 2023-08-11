import { useMediaQuery } from 'react-responsive';
import DesktopHeader from '../Desktop/DesktopHeader';
import MobileHeader from '../Mobile/MobileHeader';


function Header() {
  const isMobile = useMediaQuery({query: ' (max-width: 425px)'});

  return (
    <div>
      {isMobile ? <MobileHeader/> : <DesktopHeader/>}
    </div>
  );

}

export default Header;