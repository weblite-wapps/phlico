export default (process.env.NODE_ENV === "development"
  ? {
    server: "http://localhost/3094"
  }
  : {
    server: "https://wapp.weblite.me/phlico"
  });
