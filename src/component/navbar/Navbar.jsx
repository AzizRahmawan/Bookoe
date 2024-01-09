import { useState } from 'react';
import Logo from '../../assets/icon/logo-nav.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // useEffect(() => {
  //   const burger = document.querySelector(".burger");
  //   const navLists = document.querySelector("nav");
  //   const navLinks = document.querySelectorAll('nav a');

  //   const toggleNav = () => {
  //     navLists.classList.toggle("nav-active");
  //     burger.classList.toggle("toggle-burger");
  //   };

  //   const closeNav = () => {
  //     // Tutup nav dan burger
  //     navLists.classList.remove('nav-active');
  //     burger.classList.remove('toggle-burger');
  //   };

  //   burger.addEventListener("click", toggleNav);

  //   navLinks.forEach(link => {
  //     link.addEventListener('click', closeNav);
  //   });

  //   return () => {
  //     // Membersihkan event listener saat komponen di-unmount
  //     burger.removeEventListener("click", toggleNav);

  //     navLinks.forEach(link => {
  //       link.removeEventListener('click', closeNav);
  //     });
  //   };
  // }, []);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchKeyword)}`);
  };
  return (
    <>
    <header>
      <div className="container">
        <div className="navbar">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo" />
            <div className="logo-name">
              <span className="logo-title">Bookoe</span>
              <br />
              <span className="logo-sub-title">Rekomendasi Bukumu</span>
            </div>
          </a>
          <nav>
            <ul>
              <li><Link to="/" className="nav-link">All</Link></li>
              <li><Link to="/latest" className="nav-link">Latest</Link></li>
              <li><Link to="/topList" href="/" className="nav-link">Top Picks</Link></li>
              <li>
                <form onSubmit={handleSearch} className="nav-form">
                  <input
                    type="text"
                    className="nav-input"
                    placeholder="Search book by title or authors.."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button type="submit" className="nav-button">Search</button>
                </form>
              </li>
            </ul>
          </nav>
          <div className="burger">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
          </div>
        </div>
      </div>
    </header>
    <Outlet/>
    </>
  );
};

export default Navbar;


