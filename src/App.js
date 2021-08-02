import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//コンポーネント化（Reactではファイルごとにコンポーネント化を行う
//コンポーネントはは「パスカルケース」で命名（先頭および単語区切りが大文字）
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //State：条件によって動的に変わるもの
  // →配列の分割代入でuseStateから変数を取得
  // →1:stateの変数名(任意の名前)、2:stateを変更する関数名(set + 変数名　が一般的)
  const [num, setNum] = useState(0); //初期値を設定できる

  return (
    <>
      {/* 外：JS、内：JSのオブジェクト（スタイルはオブジェクト）*/}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* props名=値　　props名は何でもいい */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* タグっぽく書く場合 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です!" />
      {/* htmlタグがキャメルケースで判別され、その{}の中はJSとして判断される */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

//ほかのファイルでも関数を使えるように
export default App;
