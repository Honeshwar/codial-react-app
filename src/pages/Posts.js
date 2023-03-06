import { styles, Comments } from './';
import React from 'react';

function Posts(props) {
  //js
  const { name, content, createdAt } = props.post;

  return (
    //jsx
    <div className={styles.postWrapper}>
      <div className={styles.postHeader}>
        <div className={styles.postAvatar}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9883/9883515.png"
            alt="user-pic"
          />
          <div>
            <span className={styles.postAuthor}>{name}</span>
            <span className={styles.postTime}>{createdAt} a minute ago</span>
          </div>
        </div>
        <div className={styles.postContent}>{content}</div>

        <div className={styles.postActions}>
          <div className={styles.postLike}>
            <img
              src="https://t3.ftcdn.net/jpg/03/17/30/46/240_F_317304685_K57ng3eml86uELUK7rMgdI8Mr05KBmfM.jpg"
              alt="likes-icon"
            />
            <span>5</span>
          </div>

          <div className={styles.postCommentsIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
              alt="comments-icon"
            />
            <span>2</span>
          </div>
        </div>
        <div className={styles.postCommentBox}>
          <input placeholder="Start typing a comment" />
        </div>

        <div className={styles.postCommentsList}>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Posts;
