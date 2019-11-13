import React from "react";

const tasks = [
  {
    id: 1,
    name: "learn JS"
  },
  {
    id: 2,
    name: "learn React"
  }
];

const TodoItem = props => {
  return (
    <div>
      <input type="checkbox" checked="true" />
      <span> {props.task.name}</span>
    </div>
  );
};

const MainContent = () => {
  const todoItems = tasks.map(task => <TodoItem key={task.id} task={task} />);

  console.log(todoItems);

  return <main>{todoItems}</main>;
};

export default MainContent;
