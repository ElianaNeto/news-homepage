import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.svg'
import { Header } from "./desktopHeader.styles";

function DesktopHeader() {
  return (
    <Header>
      <Link className="logo" to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      <div className="navigation">
        <Link className="home" to="/">Home</Link>
        <Link className="new" to="/">New</Link>
        <Link className="popular" to="/">Popular</Link>
        <Link className="trending" to="/">Trending</Link>
        <Link className="categories" to="/">Categories</Link>
      </div>
    </Header>
  )

} export default DesktopHeader;