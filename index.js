const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const crypto = require('crypto');

const FILE_PATH = './data.json';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = n => {
  if (n === 0) return simpleGit().push();

  const x = getRandomInt(0, 2);
  const y = getRandomInt(1, 30);

  const commitMessage = "added packages"

  const DATE = moment('2023-01-01').add(x, 'M').add(y, 'd').format()

  const data = {
    date: DATE,
  };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add(FILE_PATH).commit(commitMessage, { '--date': DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(1);