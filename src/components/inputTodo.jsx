import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "95%",
  height: "30px",
  marginRight: "2.5%",
  marginLeft: "2.5%",
  marginBottom: "5px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
