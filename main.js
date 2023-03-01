const message = 'Welcome! Please enter your phrase for submission.'; // welcome message

const codes = ['FSPDHJW', 'GWJRTOC', 'YWJMFIK', 'PWUNFJU'];

const random = Math.floor(Math.random() * codes.length);

function phrase(string = 'Please enter a valid phrase.') {
  if (string === '$SOL is 4 poorz') {
    return console.log(codes[random]);
  } else if (string === 'SOL is 4 poors') {
    return console.log(codes[random]);
  } else if (string === 'sol is for poors') {
    return console.log(codes[random]);
  } else if (string === 'sol is for poorz') {
    return console.log(codes[random]);
  } else {
    return 'Please enter a valid phrase';
  }
}

// Log to console
console.log(message);
console.log(phrase('SOL is 4 poors'));
