export default {
  server: {
    hostname: 'localhost',
    port: 4000,
  },
  db: {
    url: 'mongodb://localhost:27017/media-app',
  },
  session: {
    name: 's-id',
    secret: 'media-app-session',
  },
  socket: {
    hostname: 'localhost',
    port: 4001,
    path: '/ws',
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: 'io-id',
  },
}
