// welcome message
const message = 'Welcome! Please enter your phrase for submission.'; 

const codes = ['FSPDHJW', 'GWJRTOC', 'YWJMFIK', 'PWUNFJU'];

const random = Math.floor(Math.random() * codes.length);

function phrase(string = 'Please enter a valid phrase.') {
  if (string === 'I have a fish') {
    return console.log(codes[random]);
  } else if (string === 'I have a bird') {
    return console.log(codes[random]);
  } else if (string === 'I have a cat') {
    return console.log(codes[random]);
  } else if (string === 'I have a dog') {
    return console.log(codes[random]);
  } else {
    return 'Please enter a valid phrase';
  }
}

// Log to console
console.log(message);
phrase('I have a cat');
