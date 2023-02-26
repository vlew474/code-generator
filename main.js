const message = 'Welcome! Please enter your phrase for submission.' // welcome message

function phrase(string = 'Please enter a valid phrase.') {
  if (string === '$SOL is 4 poorz') {
    return 'FSPDHJW';
  } else if (string === 'SOL is 4 poors') {
    return 'GWJRTOC';
  } else if (string === 'sol is for poors') {
    return 'YWJMFIK';
  } else if (string === 'sol is for poorz') {
    return 'PWUNFJU';
  } else {
    return 'Please enter a valid phrase.';
  }
}

// Log to console
console.log(message);
console.log(phrase('$SOL is 4 poorz'));
