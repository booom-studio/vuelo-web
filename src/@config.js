const isDevelopment = process.env.NODE_ENV !== 'production';

export default {
  graphql: {
    uri: isDevelopment
      ? 'http://localhost:3001/graphql'
      : 'https://booom-vuelo.herokuapp.com/graphql'
  },
  google: {
    clientId:
      '645715169329-kgminegvl9qd88g1e2b36a5j1phkqsf6.apps.googleusercontent.com'
  }
};
