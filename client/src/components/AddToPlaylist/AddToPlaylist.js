import React from "react";
import { addSongToPlaylistView } from "../../redux/playlist/action";
import "./style/addToPlaylist.scss";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { useDispatch } from "react-redux";

function AddToPlaylist({
  show,
  close,
  text = "",
  currentData,
  user,
  displayData,
  isPlaylist,
}) {
  const dispatch = useDispatch();
  function handleClick(playlistId, userId, songId) {
    if (!isPlaylist) {
      dispatch(addSongToPlaylistView(playlistId, userId, songId));
    }
    close();
  }

  useLockBodyScroll();
  return (
    <>
      {show ? (
        <div className="add-to-playlist-container" onClick={() => close()}>
          <div
            className="add-to-playlist-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="add-to-playlist-title">
              {" "}
              <p>{text}</p>
            </div>
            {displayData.map((list) => {
              return (
                <div
                  className="playlists-list-box"
                  onClick={() =>
                    handleClick(list._id, user.uid, currentData._id)
                  }
                >
                  {list.title}
                </div>
              );
            })}
            {/* <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div> */}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AddToPlaylist;