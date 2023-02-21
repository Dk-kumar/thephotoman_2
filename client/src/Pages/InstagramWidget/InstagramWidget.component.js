import React, { Component } from "react";

class InstagramWidget extends Component {
  state = {
    isScriptLoaded: false,
  };

  componentDidMount() {
    // (function (d, s, id) {
    //   var js;
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://embedsocial.com/cdn/ht.js";
    //   d.getElementsByTagName("head")[0].appendChild(js);
    // })(document, "script", "EmbedSocialHashtagScript");
    // const script = document.createElement("script");
    // script.src = "https://cdn2.woxo.tech/a.js#63e68013f054e8a446789da4";
    // script.async = true;
    // script.setAttribute("data-usrc", "currentSrc");
    // document.head.appendChild(script);

    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }

  render() {
    console.log(document.getElementsByClassName("Romove-Watermark"));
    return (
      <>
        {
          /* <div
          loading="lazy"
          data-mc-src="173bf749-a7e8-4708-bf96-2c7592cf7391#instagram"
          className="Instagram-Widget"
        >
          <div className="Romove-Watermark"></div>
        </div> */
          <div
            class="embedsocial-hashtag"
            data-ref="e6357d13622cc7c5b3b3ca2d541e8cc8f0cb1b63"
          >
            <a
              class="feed-powered-by-es"
              href="https://embedsocial.com/social-media-aggregator/"
              target="_blank"
              title="Widget by EmbedSocial"
            >
              {/* Widget by EmbedSocial<span>→</span> */}
            </a>
          </div>
        }
      </>
    );
  }
}

export default InstagramWidget;
