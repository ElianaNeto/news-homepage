import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import './header.css'

function Header() {
  return (
    <header className="App-header">

      <Link className="logo" to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      <div className="navigation">
        <Link className="home" to="/">Home</Link>
        <Link className="new" to="/">New</Link>
        <Link className="popular" to="/">Popular</Link>
        <Link className="trending" to="/">Trending</Link>
        <Link className="categories" to="/">Categories</Link>
      </div>

    </header>
  )

}

export default Header;