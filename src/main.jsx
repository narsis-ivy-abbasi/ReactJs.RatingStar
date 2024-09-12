import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/starRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <StarRating defaultValue="3"></StarRating>
  </div>
);
