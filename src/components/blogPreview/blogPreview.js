import React from 'react';
import './blogPreview.css'

const blogPreview = (props) => {
  return (
    <div className="blogPreviewContent" >
      <a href={`/blog/${props.data.slug}`}><img src={props.data.featured_image} /></a>
      <div>
        <a href={`/blog/${props.data.slug}`}><h1>{props.data.title}</h1></a>
        <p>{props.data.summary}</p>
      </div>
    </div>
  )
}

export default blogPreview;
