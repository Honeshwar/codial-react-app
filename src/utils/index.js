export * from './constants';
//all const code in constant file fill and here
//all import variable  and an obj fill/store {API_URLS,LOCALSTORAGE_TOKEN_KEY} export to outside

export const getFormBody = (params) => {
  //params= body as js obj/json obj
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name'==>'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 ==> aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); //'username=shawn&password=12352'//single string covert all element of array separated by & each element in single string
};

//we create here helper function
export const setTokenToLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("not a valid key ,so can't store in local storage");
  }
  //local storage value only string contain
  const valueTOStore =
    typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, valueTOStore);
};

export const getTokenFromLocalStorage = (key) => {
  if (!key) {
    return console.error("not a valid key ,so can't store in local storage");
  }
  localStorage.getItem(key);
};

export const removeTokenFromLocalStorage = (key) => {
  if (!key) {
    return console.error("not a valid key ,so can't store in local storage");
  }
  localStorage.removeItem(key);
};
