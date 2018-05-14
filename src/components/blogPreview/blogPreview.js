import React from 'react';
import './blogPreview.css';
import Moment from 'react-moment';

const blogPreview = (props) => {
  return (
    <div className="blogPreviewContent" >
      <a href={`/blog/${props.data.slug}`}><img src={props.data.featured_image} /></a>
      <div>
        <a href={`/blog/${props.data.slug}`}><h2>{props.data.title}</h2></a>
        <p> <Moment format="MMMM D, YYYY">{props.data.published}</Moment></p>
        <p>{props.data.summary}</p>
      </div>
    </div>
  )
}

export default blogPreview;
