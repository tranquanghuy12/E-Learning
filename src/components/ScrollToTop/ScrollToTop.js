import React from "react";
import "./ScrollToTop.scss";

export default function ScrollToTop() {
  //Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo(0, 0);
  }
  return (
    <button onClick={topFunction} id="myBtn" title="Go to top">
      <i className="fa fa-angle-up"></i>
    </button>
  );
}
