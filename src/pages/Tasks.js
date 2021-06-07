import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default function Tasks({
  tasksList,
  handleComplete,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="box">
      <i className="fa fa-th-list" aria-hidden="true" title="tasks list">
        &nbsp;Tasks
      </i>
      <Scrollbars style={{ width: 320, height: 300 }}>
        {tasksList.map((items) => (
          <li key={items.id} className="list-item">
            <input
              type="text"
              name="task"
              className="list"
              value={items.name}
              onChange={(event) => event.preventDefault()}
            />

            <button className="button-complete task-button">
              <i
                className="fa fa-check-circle"
                aria-hidden="true"
                title="Complete"
                onClick={() => handleComplete(items)}
              />
            </button>
            <button className="button-edit task-button">
              <i
                className="fa fa-pencil-square-o"
                aria-hidden="true"
                title="Edit"
                onClick={() => handleEdit(items.id)}
              />
            </button>
            <button className="button-delete task-button">
              <i
                className="fa fa-trash"
                aria-hidden="true"
                title="Delete"
                onClick={() => handleDelete(items)}
              />
            </button>
          </li>
        ))}
      </Scrollbars>
    </div>
  );
}
