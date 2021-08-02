import React from "react"; //reactを使うには必要だったが、React17より必須でなくなった。
//DOM:HTMLにコンポーネントを反映させるために必要
import ReactDom from "react-dom";
//他ファイルから関数読み込み
import App from "./App";

// //reactでは関数を使ってコンポーネントを表現
// const App = () => {
//   //JSX記法：divタグで囲まないとエラー
//   //  →divだとレンダリングされるので、エラー回避策としてReact.Fragmentが使える
//   //  →React.Fragmentだと長いので<>でいけるようになった
//   return (
//     // <div>
//     // <React.Fragment>
//     <>
//       <h1>こんにちは!</h1>
//       <p>お元気ですか?</p>
//       {/*  </div> */}
//       {/* </React.Fragment> */}
//     </>
//   );
// };

//画面に反映 1:レンダリングするもの、2:どこに反映するか
ReactDom.render(<App />, document.getElementById("root"));
