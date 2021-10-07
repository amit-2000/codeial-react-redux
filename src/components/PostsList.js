import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CreatePost, Post } from './';
import { connect } from 'react-redux';
class PostsList extends Component {
  render() {
    const { posts } = this.props;
    const { isLoggedin } = this.props.auth;
    return (
      <div className="posts-list">
        {isLoggedin && <CreatePost />}
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(PostsList);
