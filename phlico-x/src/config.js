export default process.env.NODE_ENV === 'development' ? {
  server: 'https://localhost:3094',
} : {
  server: 'https://weblite.me:3094',
}
