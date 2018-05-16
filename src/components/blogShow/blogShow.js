import React, { Component } from 'react';
import Butter from 'buttercms'
import './blogShow.css'
import Moment from 'react-moment';
// import { Helmet } from "react-helmet";

const butter = Butter('c2ecaf9f0a04614d2fd327f91151ef19ebbb61d6');

class BlogShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;
      console.log(post.published)
      return (
        <div className="blogContent">
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />

          <h1>{post.title}</h1>
          <h5>by {post.author.first_name} on <Moment format="MMMM D, YYYY">{post.published}</Moment></h5>
          <h5> --- {post.categories.map(category => <h5 style={{display: "inline", textAlign: "center"}}>{category.name}  </h5>)} --- </h5>
          <br />
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default BlogShow;
