export default (process.env.NODE_ENV === "development"
  ? {
      server: "https://localhost:3094",
    }
  : {
      server: "https://195.248.241.33:3094",
    })
