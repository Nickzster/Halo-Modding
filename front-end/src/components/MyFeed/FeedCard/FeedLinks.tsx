import React from 'react';

interface Props {
  Links: Array<{
    Source: string;
    URL: string;
  }>;
  HelperText: string;
}

const FeedLinks: React.FunctionComponent<Props> = props => {
  const { Links, HelperText } = props;
  if (Links.length === 0) return null;
  return (
    <div className='bg-trim-blue hover-red flex-col items-center flex-shrink-0 p-3'>
      {HelperText}{' '}
      {Links.map(link => {
        if (link === null || link === undefined) return null;
        else
          return (
            <a
              key={link.URL}
              className='p-2 hover:text-blue-500'
              target='_blank'
              href={link.URL}
            >
              {link.Source}
            </a>
          );
      })}
    </div>
  );
};

export default FeedLinks;
