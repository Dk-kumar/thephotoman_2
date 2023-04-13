/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import FooterContainer from "../Footer/Footer.container";
import "./YouTubeWidget.style.scss";

class YouTubeWidget extends Component {
  state = {};

  componentDidMount() {
    (() => {
      if (!window.YT) {
        var tag = document.createElement("script");

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        window.onYouTubeIframeAPIReady();
      }

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player("player", {
          width: "100%",
          videoId: "KsZsLrf_aGg",
          playerVars: {
            autoplay: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            ecver: 2,
          },

          events: {
            onReady: onPlayerReady,
          },
        });
      };

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.mute();
        event.target.stopVideo();
      }
    })();
  }
  render() {
    return (
      <div class="video-player">
        <div id="player"></div>
      </div>
    );
  }
}

export default YouTubeWidget;
