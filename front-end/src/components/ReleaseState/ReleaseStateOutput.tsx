import React from 'react';

interface Props {
  Text: string;
  Color: string;
}

const ReleaseStateOutput: React.FunctionComponent<Props> = props => {
  const { Color, Text } = props;
  return (
    <span style={{ backgroundColor: Color }} className='p-2 rounded-lg'>
      {Text}
    </span>
  );
};

export default ReleaseStateOutput;
