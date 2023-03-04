import { LOCALSTORAGE_TOKEN_KEY } from '../utils';

//we use this func so bar bar we don't have to use fetch() repeative code
const customFetch = async (url, { body, ...customConfig }) => {
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
    ...customConfig,//spread operator , spread/fill all key:value of an obj in outside object
    headers:{
        ...headers,
        ...customConfig.headers
    }
  };

  if(body){
    config.body=JSON.stringify(body);
  }

  try {
    const response = await fetch(url,config);//config= configuration, headers,body
    //FETCH return an promise
    const responseData=response.json();//promise ==> json convert
    if(responseData.success){
        return{
            data:responseData.data,
            success:true
        }
    }
  } catch (error) {
    console.log(error);
    console.error(error);

    return{
        message:error.message,
        success:false
    }
  }
};


//an func create that we use outside where we have to do api req
const getPost =(page,limit)=>{// post page no and limit = how much post needed
    return customFetch();
}