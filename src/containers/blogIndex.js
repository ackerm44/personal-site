import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter('c2ecaf9f0a04614d2fd327f91151ef19ebbb61d6');

class BlogIndex extends Component {
  constructor(props) {
  super(props);

  this.state = {
    loaded: false
  };
}

fetchPosts(page) {
  butter.post.list({page: page, page_size: 10}).then((resp) => {
    this.setState({
      loaded: true,
      resp: resp.data
    })
  })
  .then((resp) => console.log('HI'));
}

componentWillMount() {
  let page = this.props.match.params.page || 1;
  // let page = 1;

  this.fetchPosts(page)
}

componentWillReceiveProps(nextProps) {
  this.setState({loaded: false});

  let page = nextProps.params.page || 1;

  this.fetchPosts(page)
}

render() {
  if (this.state.loaded) {
    const { next_page, previous_page } = this.state.resp.meta;

    return (
      <div>
        <h1>This is BlogIndex</h1>
        {this.state.resp.data.map((post) => {
          return (
            <div key={post.slug}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          )
        })}

        <br />

        <div>
          {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

          {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}
}

export default BlogIndex;
