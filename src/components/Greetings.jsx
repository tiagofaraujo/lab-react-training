import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting;
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  }

  return (
    <div>
      <p>{greeting} {children}</p>
    </div>
  );
};
export default Greetings;