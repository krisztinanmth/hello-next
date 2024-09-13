import React from 'react';
import { readFile, writeFile } from '../helpers/fileHelpers';
import Censored from '../components/Censored/Censored';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Hello Next!</h1>
      <p>
        You are visitor number:
        <Censored>{hits}</Censored>
      </p>
    </main>
  );
}

export default Home;
