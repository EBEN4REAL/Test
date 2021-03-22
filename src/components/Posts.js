import React from 'react'
import Post from './Post'
import {connect}  from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class Posts extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        posts: [],
        loading: false
      };
  
    }
  
   componentDidMount() {
       this.state.loading = true
       axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            this.state.loading = false
            this.state.posts = res.data
        }).catch(err => {
            throw new Error(err)
        });
   }
   goToPostDetails = (postId) => {
        this.props.history.push({pathname: '/posts/' + postId});
    }
    render() {
      return (
        <div>
          {!this.state.loading ? this.state.posts.map((post) => (
            <Post
                key={post.id}
                body={post.body}
                title={post.title}
                clickHandler={() => this.goToPostDetails(post.id)}
            />
          )) : <p>Loading</p>}
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
      posts: state.postsReducer
    }
}

export default withRouter(Posts);