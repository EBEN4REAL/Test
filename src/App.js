
import React from 'react';

import './App.css';
import {connect}  from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Layout from './containers/Layout';
import PostWrapper from './containers/PostsContainer/index'
import {fetchPosts} from './store/actions/posts';
import PostDetails  from './components/PostDetails'
import CreateNews  from './components/createNews'

class App extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPosts());
      }

    render() {

      return (

        <div>
          <Layout>
            <Switch>
              <Route path="/" exact  component={PostWrapper}  />
              <Route path="/posts/:id"  component={PostDetails}  />
              <Route path="/createNews"  component={CreateNews}  />
            </Switch>
          </Layout>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer
  }
}

export default connect(mapStateToProps)(App);
