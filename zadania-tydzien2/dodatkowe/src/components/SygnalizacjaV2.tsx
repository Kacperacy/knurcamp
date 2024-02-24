import { useState } from "react";
import { Light } from "./Light";

function SygnalizacjaV2() {
  type Status = "red" | "yellow" | "green";
  const [status, setStatus] = useState<Status>("red");

  function changeStates() {
    if (status === "red") {
      setStatus("yellow");
    } else if (status === "yellow") {
      setStatus("green");
    } else if (status === "green") {
      setStatus("red");
    }
  }

  return (
    <>
      <div>
        <Light color="red" on={status === "red"} />
        <Light color="yellow" on={status === "yellow"} />
        <Light color="green" on={status === "green"} />
      </div>
      <button onClick={changeStates}>Change lights</button>
    </>
  );
}

export { SygnalizacjaV2 };
