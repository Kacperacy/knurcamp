function Light(props: { color: string; on: boolean }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid black",
        margin: "10px",
        backgroundColor: props.on ? props.color : "white",
      }}
    ></div>
  );
}

export { Light };
