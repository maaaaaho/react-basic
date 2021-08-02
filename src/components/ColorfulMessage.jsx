import React from "react";

const ColorfulMessage = (props) => {
  // console.log(props);
  //分割代入（propsから）
  const { color, children } = props;
  const contentStyle = {
    //値は文字列！
    // color: color,
    color, //JSではプロパティ名=オブジェクト名の時、オブジェクト名(コロン以下)を省略できる。
    fontSize: "18px"
  };

  //JSなのでpropsは{}
  // return <p style={contentStyle}>{props.message}</p>;
  //タグで囲った中身を受け取るchildren
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
