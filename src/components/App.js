import React, { useEffect } from 'react';
import { getPosts } from '../api';
import { Home } from '../pages';
function App() {
  useEffect(() => {
    //async also this above func
    const fetchPosts = async () => {
      //create it async so synchronized call func/api call wait first to grt response
      const response = await getPosts();
      console.log('response', response);
    };
    fetchPosts();
  }, []); //only mounted comp(DOM create/html render completely) , line of code run once

  return <Home />;
}

export default App;
