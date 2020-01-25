const debug = (...message) => {
  if (process.env.NODE_ENV !== 'production') console.log(...message);
};

export default debug;
