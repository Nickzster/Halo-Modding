//TODO: Update this for production
export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.hmapi.dev"
    : "http://localhost:5000";

export const copyURL =
  process.env.NODE_ENV === "production"
    ? "https://halomodding.org"
    : "http://localhost:3000";

// export const baseURL = "https://api.hmapi.dev";
