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
