import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostStore, useThemeStore } from "../../app/hooks";
import { getAllPost, getPostSuccess } from "../../store/Post/actions";
import { callAPI } from "../../utils/axios";
import { dateFormat, limitText } from "../../utils/format";

import "./Post.css";

const Post = (props) => {
  const [state, dispatch] = useThemeStore();
  const { isLightTheme, light, dark } = state;
  const [postReducer, postDispatch] = usePostStore();
  const { posts, error, loading } = postReducer;
  useEffect(() => {
    postDispatch(getAllPost(null));
    callAPI("/posts").then((response) => {
      postDispatch(getPostSuccess(response));
    });
  }, [postDispatch]);
  return (
    <div className="post">
      <h2 className="post-header">Post</h2>
      <ul className="post-list">
        {!error &&
          posts.map((post) => {
            return (
              <li className="post-item" key={post.id}>
                <div className="post-date">{dateFormat(post.createdAt)}</div>
                <div className="post-content">
                  <h4 className="post-title">{post.title}</h4>
                  <Link to={post.id} style={isLightTheme ? light : dark}>
                    <p>{limitText(post.content, 30)}</p>
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Post;
