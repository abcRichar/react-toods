import { useState } from "react";

function Items({ names }: { names: any }) {
  return <div>{names}</div>;
}

function MyButton({ handler, children }: { handler: any; children: any }) {
  return <button onClick={handler}>{children}</button>;
}

function ShowTime() {
  const [time, setTime] = useState(new Date());
  setTimeout(() => {
    setTime(new Date());
  }, 1000);
  return <div>{time.toLocaleTimeString()}</div>;
}

function SDA() {
  return <div>123456</div>;
}

function Card() {
  return (
    <div style={{ border: "1px solid red" }}>
      <SDA />
    </div>
  );
}
function Squer(props: any) {
  return (
    <div>
      <div>{...props.name}</div>
      <div>
        <Card />
      </div>
    </div>
  );
}
// Squer({ name: "squer" });
export default function home({ num = 1 }: { num: number }) {
  const [name, setName] = useState("测试");

  let list = [
    {
      id: 0,
      name: "凯瑟琳·约翰逊",
      profession: "数学家",
      accomplishment: "太空飞行相关数值的核算",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "马里奥·莫利纳",
      profession: "化学家",
      accomplishment: "北极臭氧空洞的发现",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "穆罕默德·阿卜杜勒·萨拉姆",
      profession: "物理学家",
      accomplishment: "关于基本粒子间弱相互作用和电磁相互作用的统一理论",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "珀西·莱温·朱利亚",
      profession: "化学家",
      accomplishment: "开创性的可的松药物、类固醇和避孕药的研究",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "苏布拉马尼扬·钱德拉塞卡",
      profession: "天体物理学家",
      accomplishment: "白矮星质量计算",
      imageId: "lrWQx8l",
    },
  ];
  const listItem = list.map((sk) => {
    return (
      <div key={sk.id}>
        <Items names={sk.name} />
      </div>
    );
  });
  console.log(listItem, "1");

  let styleC = {
    color: "#fff",
    background: "#000",
    width: "100px",
    height: "100px",
    transition: "all .3s",
  };

  let styleB = {
    color: "#000",
    background: "#fff",
    width: "100px",
    height: "100px",
    transition: "all .3s",
  };

  const change = () => {
    if (name === "变化") {
      setName("测试");
    } else {
      setName("变化");
    }
  };

  return (
    <div>
      <ShowTime />
      <MyButton handler={change}>
        <Squer name={"测试"} />
      </MyButton>
      <div style={name === "测试" ? styleB : styleC}>
        <p>世界之最</p>
      </div>
      <h1>{name}</h1>
      {listItem}
      <div></div>
      <h2>{num}</h2>
    </div>
  );
}
