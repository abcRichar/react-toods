import { Fragment, useState } from "react";
import "./index.css";

function Ipt({ onChange, list }: { onChange: any; list: any[] }) {
  const [value, setValue] = useState("");
  function add(e: any) {
    e.preventDefault();
    if (e.keyCode !== 13) return;
    if (e.target.value === "") return;
    let ids = (Math.random() * 10000).toFixed(0);
    onChange((list = [...list, { id: ids, name: value, checked: 0 }]));
    setValue("");
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={add}
      placeholder="Add a new todo..."
      style={{
        height: "40px",
        width: "300px",
        borderRadius: "6px",
        fontSize: "16px",
        padding: "0 10px",
      }}
    />
  );
}

function ListCategory({
  onChangeState,
  lists,
}: {
  onChangeState: any;
  lists: any[];
}) {
  type Item = { id: string; name: string; checked: number };
  function CardName({ item }: { item: Item }) {
    return (
      <div
        style={{
          border: "1px solid #000",
          borderRadius: "5px",
          margin: "5px",
          textDecoration: item.checked == 1 ? "line-through" : "none",
        }}
      >
        {item.name} + {item.id}
      </div>
    );
  }
  const ItemList = lists.map((item: any) => {
    return (
      <Fragment key={item.id}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <input
              type="checkbox"
              id={item.id}
              name={item.id}
              value={item.checked}
              onChange={(e) => {
                onChangeState(
                  lists.map((item) => {
                    if (item.id === e.currentTarget.id) {
                      return {
                        ...item,
                        checked: e.currentTarget.checked ? 1 : 0,
                      };
                    }
                    return item;
                  })
                );
              }}
            />
          </div>
          <CardName item={item} />
        </div>
      </Fragment>
    );
  });
  return <div>{ItemList}</div>;
}

function MyButton({ onClick, name }: { onClick: any; name: string }) {
  return <button onClick={onClick}>{name}</button>;
}

function User() {
  const [list, setList] = useState([]);

  function clearSuccess() {
    setList(list.filter((item: any) => item.checked !== 1));
  }

  return (
    <div>
      <h1>Toods</h1>
      <Ipt onChange={setList} list={list} />
      <div style={{ marginTop: "20px" }}>
        <MyButton onClick={clearSuccess} name="清除已完成"></MyButton>
      </div>
      <div style={{ marginTop: "20px" }}>
        <ListCategory onChangeState={setList} lists={list} />
      </div>
    </div>
  );
}

export default User;
