# Halo Modding V1 Repository

This is the repository used to build the current iteration of [Halo Modding](https://halomodding.org)

# Halo Modding in its current form

This project has a lot of hours put in, and it works fantastically. Currently, the platform allows you to:

- Create a new "post" to share a project that you worked on
- Explore all of the posts on the platform, allowing filters like finding projects for certain halo games, certain project types / game modes, or your favorite author.
- Utilize the links provided in the post to explore the other platforms the project is being shared on, or perhaps a download link so that you can try out the project yourself.

The coolest part about the project, however, happens a user creates a new project. All text fields are passed through the perspective API. That way, little to no admin management as needed, as all of the content is scanned through a machine learning algorithm for toxicity. If the post contains toxicity, it is blocked and forces the user to change the text field(s) that were toxic in the first place.

# Lessons Learned

With that all being said, I feel that the current iteration is not long-term viable.

I really want to create a platform that allows halo modders, like myself, to share their cool projects with the halo community. In order to do this successfully, I am going to build a new version that allows better scalability and easier maintenance in the long haul.

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

# Conclusions

- I hope that this repository can be used for learning purposes, as it is a fully functioning full-stack application, and I hope you enjoy it as much as I did! Thanks for reading!
