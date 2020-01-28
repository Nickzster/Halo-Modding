import React from 'react';
import ReleaseStateOutput from './ReleaseStateOutput';

interface Props {
  ProjectState: string;
}

const ReleaseState: React.FC<Props> = props => {
  const { ProjectState } = props;
  switch (ProjectState) {
    case 'RELEASE':
      return <ReleaseStateOutput Text='RELEASE' Color='#009905' />;
    case 'BETA':
      return <ReleaseStateOutput Text='BETA' Color='#b0a50e' />;
    case 'ALPHA':
      return <ReleaseStateOutput Text='ALPHA' Color='#ff0000' />;
    case 'UPDATE':
      return <ReleaseStateOutput Text='UPDATE' Color='#0000ff' />;
    default:
      return null;
  }
};

export default ReleaseState;
