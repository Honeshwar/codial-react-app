import styles from '../styles/home.module.css';
import { Posts } from './';
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

export default Home;
