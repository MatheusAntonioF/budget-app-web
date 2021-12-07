import React, { useState } from 'react';

import { IoExitOutline } from 'react-icons/io5';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import logoIcon from '../../assets/images/logo.png';
import profileUserPhoto from '../../assets/images/profile_user.png';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, ButtonDropdown, Dropdown } from './styles';

const Navbar: React.FC = () => {
  const [toggleDropdown, setToggleDrodown] = useState(false);

  const {
    loggedUser: { name: loggedUserName },
  } = useAuth();

  return (
    <Container>
      <img src={logoIcon} alt="Logo" />
      <Profile>
        <p>{loggedUserName}</p>

        <div className="user">
          <img src={profileUserPhoto} alt="Profile user" />
        </div>
        <ButtonDropdown
          dropdownIsOpen={toggleDropdown}
          onClick={() => setToggleDrodown(oldState => !oldState)}
        >
          <MdOutlineArrowBackIosNew />
        </ButtonDropdown>
        <Dropdown open={toggleDropdown}>
          <button type="button">
            Sair <IoExitOutline />
          </button>
        </Dropdown>
      </Profile>
    </Container>
  );
};

export default Navbar;
