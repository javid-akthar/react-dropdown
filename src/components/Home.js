import React from "react";
import Dropdown from "./Dropdown";

function Home() {
  //   list of option values that user can select
  let optionList = ["select", "Yes", "Probably Not"];

  return (
    <div>
      <Dropdown optionList={optionList} />
    </div>
  );
}

export default Home;
