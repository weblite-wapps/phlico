export default process.env.NODE_ENV === 'development' ? {
  server: 'http://localhost:3000',
} : {
  server: 'https://weblite.me:3000',
}
