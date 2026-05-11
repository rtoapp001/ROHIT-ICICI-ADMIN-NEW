const { JWT } = require('google-auth-library');

// Ye values aapke diye huye Service Account JSON se hain
const serviceAccount = {
"client_email": "firebase-adminsdk-fbsvc@icici-rohit-new-apcd006.iam.gserviceaccount.com",
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQO5Y9ldPOB/fe\nYven21kGmwxKBdQdYyKGgiwW2lD/GyhuOuwv/ILuBV4+68FtQyIqYZ20kUuYkNg/\n/PoJAuLolYQZZwxN+gkKwKOjLJl9AbdwL02gse6WfIsmPXT9Ns+2aXPjTivohP+8\ngKWBgzi29+StndVSS3SX62pde8OsCCk5aqGzE0xHfdyhUZAXOi6t2DpbnzvjDQNW\nzSVqqOU/yZjhu7UnG2vIebuTsMxzexAehEIPCKy3HJ63KjqJN7ZgvkmvBLQTbD2z\n9M+l4yPc/9J3G4TqyQg/i6o2Gj63xD/vsbBy+CwjQpFBATcmkMwPW2oTBwsc5FLI\nhJEqmsZpAgMBAAECggEAAdVPQ6D8unSNJ1J8+zr19mlM4x8+9uUrNfhLqdK+EfVK\nRo7DF7WPOm5gHhyLSVPx2mIELMvdXxbOw2Dam5PaGk5yeVqtq+D5IMF7Koa46uky\n1TYJAFkMrUG9sMZrllNorvxDVbN+NR4sCU8JiS5viraiPZaO0BpWtZDJ10NnJyEV\nTHlEaIIMEE0lMdDYNkim0WH5+A2LWCfXih2qyJvmH8Kj4QDimiEqZu7Oh2JMSfSs\n7d/TIrUP/bJqSUeuV7EEOEy/2aechV8PtRvmQ/kxJ6TFvxsDpay2uDxH7nK6BcGR\nx/+gDqMNw/YkDV0bDJuIVvszchAHrQC5PqwbzqEXAQKBgQDoL5jlHbEwvxSrrmyB\nMuzHa7bfcgqKqMBVKB650U/VTeSmmhlqL3L6FLoGpfARA6qktASXak0k3PYUxhuY\n3dOc8xkRDwy58dZ6mGGQWbXXjCfDsv5T3oqn4ZTpbQHK2FYti3wITJS5XfoAsv0a\nGE6J5dfcxKzHyLqV0E5q1OBVaQKBgQDllw/fclcVT4wwd4fWQLqNGel4oHn42di+\n1u1KuIlEGNJ105/C5v1MLW2HkK/2JZbEr+yC4qxKYqZrMiDS9C+dzt9KIHIuVuFj\nU9UaSIvhiUffbwrJyHnKHFGz5PeLKckUNrS6ZDZYh86TgNiSAeYgb3GucaXt0IIl\nJo3EIPPJAQKBgDQhC5jVM8UYAZISFTZkspiLbIF6XzeGb7guy8c4YU4osN9e1bnr\ncUsIgEOh2eZYBmX4LNe5/Bv8qBs951BI7YvdYJFd6aON0nOv5qe8HIGKbBsaAtPd\nsQ/EK+TEnpRmQeLz4CMU3odHvCuQBBdpwahgPDjKx2gLfyjHnfOKW9uRAoGBAJpy\nN6xSJ8DfRWhpUIjR/GzlTIjoM4UzTzp6LSEB6N1VcWbwGN4tM6JmQPNcYvLMMJNZ\n4VnfEJXtrRQZobknqUyYmN8t2oHP0klWYNoQiYEML7xf37sEUOGkkVXaJqiIUIt3\njbaBqYl+unnByG7YNi4Fqkz2iO/lP1esituway8BAoGAUmszVj0E7jjH0NKBv9uo\nLwbmnJvkZFC+uTzlxJvalCRjigf0SMPg/ByF9KcBRqoAJpkvLEFKy7aq1J9aq+so\nzzvZZWK2xZ1ElGBnB4saX86gGD9jjy+f1j0alvUkqMGZ7LYUNXzFX+WDfmcSV8DF\nF2nQrKr23BoD/9w/rM5z3CU=\n-----END PRIVATE KEY-----\n",
};

async function getAccessToken() {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });

  try {
    const tokens = await client.authorize();
    console.log('\n--- AAPKA NAYA FCM ACCESS TOKEN ---');
    console.log(tokens.access_token);
    console.log('------------------------------------\n');
    console.log('Is token ko copy karein aur script.js mein FCM_ACCESS_TOKEN ki jagah paste karein.');
    console.log('Yaad rahe: Ye token 1 ghante baad expire ho jayega.');
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
}

getAccessToken();
