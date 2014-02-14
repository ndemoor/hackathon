'use strict';

module.exports = {
  
  port: 80,
  baseUrl: 'http://example.com',
  mountDist: true,
  
  mongodb: {
    uri: null,
    options: {
      user: null,
      pass: null
    }
  },
  
  redis: {
    host: null,
    port: null
  }
  
};
