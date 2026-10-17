import './style.css'

function Header() {

  return (
    <div className="header-wrapper">
        <div className="logo">
            <a href="">Logo</a>
        </div>
        <ul>
            <li><a href="">Головна</a></li>
            <li><a href="">Сторінка 1</a></li>
            <li><a href="">Сторінка 2</a></li>
            <li><a href="">Сторінка 3</a></li>
        </ul>
    </div>
  )
}

export default Header
