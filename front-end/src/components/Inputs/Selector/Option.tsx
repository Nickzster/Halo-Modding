import React from 'react';

interface Props {
  value: string;
  display: string;
}

const Option: React.FC<Props> = props => {
  const { value, display } = props;
  return <option value={value}>{display}</option>;
};

export default Option;
