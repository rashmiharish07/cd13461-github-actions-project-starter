const crypto = require('crypto');

moduleexports = {
  random() {
    return crypto.randomUUID();
  },
  year() {
    const date = new Date();
    return date.getFullYear();
  },
};
