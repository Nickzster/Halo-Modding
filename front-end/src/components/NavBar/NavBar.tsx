import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 1em;
  background-color: var(--trim-color);
  color: var(--font-color);
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <NavContainer>
        <h1 style={{ background: 'var(--trim-color)' }}>Halo Modding</h1>
      </NavContainer>
    </React.Fragment>
  );
};

export default NavBar;
