export const nameFormater = (email) => {
  const name = email;
  const array = email.split("");
  const index = array.indexOf("@");
  const newName = name.slice(0, index);
  return newName;
};
