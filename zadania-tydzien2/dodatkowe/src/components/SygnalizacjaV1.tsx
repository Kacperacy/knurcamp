import { useEffect, useState } from "react";
import { Light } from "./Light";

function SygnalizacjaV1() {
  type Status = "red" | "yellow" | "green";
  const [status, setStatus] = useState<Status>("red");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (status === "red") {
        setStatus("yellow");
      } else if (status === "yellow") {
        setStatus("green");
      } else if (status === "green") {
        setStatus("red");
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  return (
    <div>
      <Light color="red" on={status === "red"} />
      <Light color="yellow" on={status === "yellow"} />
      <Light color="green" on={status === "green"} />
    </div>
  );
}

export { SygnalizacjaV1 };
