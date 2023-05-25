import React from "react";
import "./MainAbout.css";

export default function MainAbout() {
  return (
    <div className="About">
      <h1>Our features and benefits</h1>
      <div className="AboutContent">
        <p>
          Welcome to our online shoe store, where style and comfort come
          together in perfect harmony! We offer a wide selection of footwear
          that not only looks fabulous but also feels like a true superstar on
          your feet. We stay up-to-date with the latest fashion trends to bring
          you the most current styles. Our shoes are crafted from high-quality
          materials to provide unparalleled comfort and durability. You deserve
          nothing but the best! And remember, when you slip into our shoes,
          you're not only adding style to your look but also taking a step into
          a world where fashion and humor go hand in hand. Your shoes are your
          passport to a realm of fun and stylish adventures.
        </p>
      </div>
      <div className="YouTubeVideo">
        <div className="YouTubeVideoWrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="gift">Thanks for choosing us</div>
    </div>
  );
}
