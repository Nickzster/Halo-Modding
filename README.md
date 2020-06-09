# Halo Modding V1 Repository

This is the repository used to build the current iteration of [https://halomodding.org](Halo Modding)

This project has a lot of hours put in, and it works fantastically. However, this implementation makes a few mistakes that I hope to correct in a newer version.

I really want to create a platform that allows halo modders, like myself, to share their cool projects with the halo community. In order to do this successfully, I am going to build a new version that allows better scalability and easier maintenance in the long haul.

# Lessons Learned

### Back End

- Should use a better abstraction for the database, rather than hard coding MongoDB as the solution.
- Should use GraphQL, since the data that is being delivered for this product thrives in this situation.

### Front End

- Not the best use of RxJS
- Coupled too many components together

### DevOps Related

- Storing configuration files in a config.json file, and not in environment variables.

### Overall

- Not enough test coverage.
