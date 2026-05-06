const { JWT } = require('google-auth-library');

// Ye values aapke diye huye Service Account JSON se hain
const serviceAccount = {
"client_email": "firebase-adminsdk-fbsvc@icici-rohit-new-apcd006.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtscWDYh6Ntz52\n/GFEmvQrXHY8ruLt7IcXhQl5sBTQGQQn4rCwxF5qAcjbR/JliXP1+A2YvcctsmsG\naXwwYZY/ztgmXLtHDxaRmTBUxIy+ZfCPLkXl9MjObBBEIUM3tjkk0jKJU2rVfpyt\nzJMJgv05ijMJjeSD4RS9c0wTyWiylGKmvDn/hBAMhst2wyvSTTTk784Nub7b6kRF\nJQtTmWBOM3ulZHYD3/KMWCnqlZHYRvbVIA+XIbp3P3Q+TLkBKoEsrnNFwnTJk0Eg\nWQYItAozYjdRbiOtAGmdyykl1NFxVL2r34J73gpKxNc6MXUL8gqz4IWgpD0GoE54\nuB1G6v7lAgMBAAECggEAFZXonl3Ev0bdB+twaRa6rmLUvNDdGcVRuo4Jcep8g6oA\nNra4z5bvxsvG+t1TlePBmflEM02uYZLxMwBL8zVFd1OM0COpEHkjDGAVvgsZFJZV\nkW2mOSA1DlYmpVje4h8OtfE7X46S0cpkzUKFqWJydsKiehb8pZkEu1CHTVQz4zFS\nMXB4OIvZIh8UYM4cXtINkuDp62lC2dKRiQ0TmIW5pGlVCl384XsJlrQE6lJqM0GM\ngi1UE5mdd7oWc/qbBm68MZXQq8SkiB1eyAjuBYmE9Mf7xTIkRwQ7Aq0oYtiSgc05\nsbPzjj07JTD2fyg0DR+RN4o+klAnokww2Mz8mNduVwKBgQDUhPr5E0jFl0t/xvqY\n9XMiNoyNaILEVIf8Wjz2i5jxsFit9pedtHH31QDJWRCbYE5fv0H6OQ/GWRSWfKJ0\nL89hp2Kyk3JZNvbQfU/kbPsDsvE/Pp1I9ciVwcEAWCJJUQxFSPsYPkgVWndF3P9D\nLr7izaQtMvQvHzId2W91/2q2RwKBgQDRO0XUbxDyKmqJ0O3czypet81TtuvQ3N3Q\nbJOqTSeDT3qrXkUUzXm7m72LRi5977BNqxTgrGy6UaLSYD0u3HWFsmaijOYPwwUU\ny3d066dYT3jDOvEe0w0UMEXY5xCE0F//V8rGHG5zOF+uv9sK1KWC7H3w548les5a\nNRRWcOF7cwKBgB8n/8NUWG7fZ2osOcEC+wYhCSoSEFnIKseMUzOx85I7UETwyfmM\n4sh6qcrbC9w7mkHfQET26KEjnikRzJ9MAxNF/uo/Q5xgun6GYJgUghhgu42SGG0B\n245ZAXqTcTNednYR5P4A44B96s6LP8ERsVp+23rk5XejEy3dGsIp1/MxAoGBAKxO\nZtRqXwc/XRt/3tNQHDGCpmpBovQPX/Br6jN+dILT6k7ERJm8GXsh57eRpWn7ATMF\nKB1agfPylOcxcFFuJq5i29kTtcbXMREN+qNkCh1U3TvSB439+rBcjLjymQz3WYc7\n8nayJVdn3oxX3XiO5HrsbU7+M0mHV/a77bK+JUL3AoGBAM+oKM2O42S/k+X3EOnk\n6p7Esv6Gul88kjRD1gjfNQgJJvDxOlNH+pu/AsvGuUphXBAfBi6MYMSzC9bj5pT3\nqhLe6Vw2Y4lUounTTGtjdWNaeJA3wz2+C0qs2/o6mMC2ULtP8bggZsQnCAJyVh65\nBjFbBfI+isfthd50tULTPXkv\n-----END PRIVATE KEY-----\n",
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