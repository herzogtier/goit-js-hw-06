// (array, gender) =>  array.filter((usergend) => usergend.gender === gender).map(({ name }) => name);

const getUsersWithGender = (array, usergender) =>
  array.filter(({ gender }) => gender === usergender).map(({ name }) => name);

console.log(getUsersWithGender(users, "male"));
