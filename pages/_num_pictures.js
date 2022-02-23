import React from "react"

function NumPictures(props) {
  return (
    <span>There are {props.count} pictures in {new Date().getFullYear()}...</span>
  );
}

export default NumPictures
