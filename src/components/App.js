import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home, Login } from '../Pages';
import { Loader, Navbar } from './';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
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

  const Page404 = () => {
    return <h1>404</h1>;
  };

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        {/* enclosed all router inside it and comp*/}
        <Router>
          {/* inside router because Link component in react-router-dom need component that use it inside(enclosed) router component, want to render navbar for each route change*/}
          <Navbar />
          {/*Routes act as switch/if-else-if only once route execute among many that matches first and not execute further  */}
          <Routes>
            {/* Routes that match with url */}
            <Route path="/" element={<Home posts={posts} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
