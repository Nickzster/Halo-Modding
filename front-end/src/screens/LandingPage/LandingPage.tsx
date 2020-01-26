import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  padding: 1em;
  background-color: var(--primary-color);
  color: var(--font-color);
`;

const LandingPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <h1>Landing Page</h1>
      <p>WIP</p>
    </LandingPageContainer>
  );
};

export default LandingPage;
