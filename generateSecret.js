// generateSecret.js
const crypto = require('crypto');

// Generate a secure random string
const secret = crypto.randomBytes(32).toString('hex');
console.log('Generated secret:', secret);
