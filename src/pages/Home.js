import PropsTypes from 'prop-types';
import { styles, Posts } from '.';
const Home = ({ posts }) => {
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
