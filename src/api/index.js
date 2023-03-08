import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from '../Utils';

//we use this func so bar bar we don't have to use fetch() repeative code
const customFetch = async (url, { body, ...customConfig }) => {
  //customconfig method,..
  //object destructuring,rest operator , (body=variable ,customConfig= variable(array))
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    //req header
    'content-type': 'application/json', //content send/post type
    Accept: 'application/json', ////content get type
  };

  if (token) {
    //if user browser that token stores in local storage than add header token
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig, //spread operator , spread/fill all key:value of an obj in outside object
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    console.log(url, config);
    const response = await fetch(url, config); //config= configuration, headers,body
    //FETCH return an promise
    const responseData = await response.json(); //promise ==> json convert
    if (responseData.success) {
      return {
        data: responseData.data,
        success: true,
      };
    }
    throw new Error(responseData.message); //else part
  } catch (error) {
    console.log(error);
    console.error(error);

    return {
      message: error.message,
      success: false,
    };
  }
};

//an func create that we use outside where we have to do api req
export const getPosts = (page = 1, limit = 5) => {
  //by default parameter value set
  // post page no and limit = how much post needed
  return customFetch(API_URLS.posts(page, limit), {
    method: 'GET',
  });
};

export const login = (email, password) => {
  return customFetch(API_URLS.login, {
    method: 'POST',
    body: {
      email,
      password,
    },
  });
};
