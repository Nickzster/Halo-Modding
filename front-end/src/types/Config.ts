export const getPostsString =
  process.env.NODE_ENV === 'production'
    ? 'localhost:5000/posts'
    : 'localhost:5000/posts';
