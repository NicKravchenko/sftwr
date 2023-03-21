import React, { useEffect } from "react";

const NoFrame = () => {
  useEffect(() => {
    if (window.self !== window.top) {
      window.top.location.replace("https://www.somepage.com");
    }
  }, []);

  return <div></div>;
};

export default NoFrame;
