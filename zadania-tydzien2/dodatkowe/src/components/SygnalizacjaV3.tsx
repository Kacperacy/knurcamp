import { useEffect, useState } from "react";
import { Light } from "./Light";

function SygnalizacjaV3() {
  type Status = "red" | "yellow" | "green";
  const [status, setStatus] = useState<Status>("red");
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    if (!on) {
      return;
    }

    const interval = setInterval(() => {
      if (status === "red") {
        setStatus("yellow");
      } else if (status === "yellow") {
        setStatus("green");
      } else if (status === "green") {
        setStatus("red");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [on, status]);

  return (
    <div>
      <div>
        <Light color="red" on={status === "red"} />
        <Light color="yellow" on={status === "yellow"} />
        <Light color="green" on={status === "green"} />
      </div>
      <button
        style={{
          backgroundColor: on ? "red" : "green",
          color: "white",
          padding: "10px",
          margin: "10px",
          fontSize: "20px",
          width: "100px",
        }}
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "STOP" : "START"}
      </button>
    </div>
  );
}

export { SygnalizacjaV3 };
