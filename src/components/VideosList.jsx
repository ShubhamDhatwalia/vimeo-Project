import React, { useEffect, useState } from "react";
import moment from 'moment';
import { API_KEY, value_converter } from "../data.js";


function VideosList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&videoCategoryId=0&key=${API_KEY}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="outer-most px-0 py-5 d-flex gap-3 flex-wrap justify-content-center">
        {data.map((item, index) => (
          <div className="card" 
               key={index}
               onMouseEnter={(e) => {
                const iframe = e.currentTarget.querySelector('iframe');
                iframe.src = iframe.dataset.src;
              }}
              onMouseLeave={(e) => {
                const iframe = e.currentTarget.querySelector('iframe');
                iframe.src = '';
              }}
          >
            <div className="video-container">
              <img src={item.snippet.thumbnails.high.url} alt="" className="img-fluid video-thumbnail" />
              <iframe
                data-src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="video-frame"
              ></iframe>
            </div>
            <div className="card-body p-2 pb-0">
              <h4 className="card-title">{item.snippet.title}</h4>
              <h5><i>{item.snippet.channelTitle}</i></h5>
              <div className="d-flex justify-content-between ">
                <p>{value_converter(item.statistics.viewCount)} views</p>
                <p>&bull; {moment(item.snippet.publishedAt).fromNow()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideosList;
