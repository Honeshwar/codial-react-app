import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home } from '../pages';
import { Loader, Navbar } from './';
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //async also this above func
    const fetchPosts = async () => {
      //create it async so synchronized call func/api call wait first to grt response
      const response = await getPosts();
      console.log('response', response);

      if (response.success) {
        //api req is fine true
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []); //only mounted comp(DOM create/html render completely) , line of code run once

  if (loading) {
    //true
    //return jsx
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Home posts={posts} />;
    </div>
  );
}

export default App;
