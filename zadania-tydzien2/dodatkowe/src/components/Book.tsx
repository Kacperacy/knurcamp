function Book(props: { title: string }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px black",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{props.title}</p>
    </div>
  );
}

export { Book };
