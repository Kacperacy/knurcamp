function List(props: {
  title: string;
  items: string[];
  selected: string[];
  handleCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => void;
}) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px black",
          width: "300px",
        }}
      >
        <h2>Lista: {props.title}</h2>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={props.selected.includes(item)}
                id={item}
                onChange={(event) => props.handleCheckboxChange(event, item)}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export { List };
