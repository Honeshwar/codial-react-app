import { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { styles, Posts } from '.';
import { getPosts } from '../api';
import { Loader } from '../Components';
const Home = () => {
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
    return <Loader />;
  }

  return (
    <div className={styles.postsList}>
      {posts.map(
        (
          post //()jsx return , [jsx,jsx,jsx] display screen
        ) => (
          <Posts post={post} key={`post-${post['_id']}`} />
        )
      )}
    </div>
  );
};

//property write for home comp. ,if props posts must be this type
Home.propsTypes = {
  posts: PropsTypes.array.isRequired,
}; //throw error in console that type is not valid

export default Home;
