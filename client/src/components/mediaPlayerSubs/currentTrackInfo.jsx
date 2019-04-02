import React from 'react';
import DownArrowInCircleIcon from '../../../icons/downArrowInCircleIcon';
import style from '../../../styles/currentTrackInfo';

const TrackInfo = props => {
  return (
    <div className={style.trackInfoDiv}>
      {!props.enlargedArtwork && (
        <a href={`localhost:3737?id=${props.track.id}`}>
          <img className={style.albumArt} src={props.track.albumArt} />
        </a>
      )}
      {props.queueOpen && (
        <div className={style.artworkToggle}>
          <a className={style.arrowUp} href="">
            <DownArrowInCircleIcon />
          </a>
        </div>
      )}
      <div
        className={props.queueOpen ? style.songInfoWithQueue : style.songInfo}
      >
        <span className={style.title}>
          <a href={`localhost:3737?id=${props.track.id}`}>
            <span>{props.track.title}</span>
            <span className={style.version}>{props.track.version}</span>
          </a>
        </span>
        <span className={style.artist}>{props.track.artist}</span>
      </div>
    </div>
  );
};

export default TrackInfo;
