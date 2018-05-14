import React from 'react';
import './blogPreview.css';
import Moment from 'react-moment';
import calendar from '../../images/calendar-alt.svg'

const blogPreview = (props) => {
  return (
    <div className="blogPreviewContent" >
      <a href={`/blog/${props.data.slug}`}><img src={props.data.featured_image} /></a>
      <div>
        <a href={`/blog/${props.data.slug}`}><h2>{props.data.title}</h2></a>
        <p><img src={calendar} style={{height:15 + 'px', width:15 + 'px'}}/> <Moment format="MMMM D, YYYY">{props.data.published}</Moment></p>
        <p><em>{props.data.summary}</em></p>
      </div>
    </div>
  )
}

export default blogPreview;
