function WinnerTab(props: {
  name: string;
  nationality: string;
  category: string;
  achievements: string[];
}) {
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
      <h2 style={{ fontWeight: "bold" }}>{props.name}</h2>
      <p>
        <b>Nationality: </b>
        {props.nationality}
      </p>
      <p>
        <b>Category: </b>
        {props.category}
      </p>
      <p>
        <b>Number of achievements: </b>
        {props.achievements.length}
      </p>
    </div>
  );
}

export { WinnerTab };
