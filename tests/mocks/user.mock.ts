const validUserName = 'Hagar';
const validPassword = 'terrível';
const noPassword = {
  id: 1,
  username: validUserName,
  vocation: 'Guerreiro',
  level: 10,
  password: ''
};
const notExistingUser = {
  id: 1,
  username: 'notfound',
  vocation: 'Guerreiro',
  level: 10,
  password: validPassword,
};

const noUserName = {
  id: 1,
  username: '',
  vocation: 'Guerreiro',
  level: 10,
  password: validPassword,
};

const existingUser = {
  dataValues: {
    id: 1,
    username: validUserName,
    vocation: 'Guerreiro',
    level: 10,
    password: validPassword,
  }
};

export default {
  noPassword,
  noUserName,
  notExistingUser,
  existingUser,
};