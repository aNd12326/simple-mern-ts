import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import * as videoService from "./VideoService";

import "./VideoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4" key={video._id}>
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            x
          </span>
        </div>
        <p>{video.description}</p>
        {/* <div></div> */}
        <ReactPlayer url={video.url} width={300} height={360} />
      </div>
    </div>
  );
};

export default VideoItem;
