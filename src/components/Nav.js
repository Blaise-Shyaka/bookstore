import * as navStyles from '../styles/Nav.module.css';
import avatar from '../assets/avatar.png';

const {
  navWrapper,
  displayFlex,
  logo,
  navLinks,
  listItemOne,
  listItemTwo,
  userAvatar,
} = navStyles;

function Nav() {
  return (
    <nav className={navWrapper}>
      <div className={displayFlex}>
        <h1 className={logo}>BookStore CMS</h1>
        <ul className={navLinks}>
          <li className={listItemOne}>BOOKS</li>
          <li className={listItemTwo}>CATEGORIES</li>
        </ul>
      </div>
      <div className={userAvatar}>
        <img alt="user avatar" src={avatar} />
      </div>
    </nav>
  );
}

export default Nav;
