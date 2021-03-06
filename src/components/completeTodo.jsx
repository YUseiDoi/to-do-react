import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div class="complete-area">
      <p class="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
