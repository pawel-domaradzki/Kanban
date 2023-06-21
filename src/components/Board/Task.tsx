import { TaskTypes } from "@/types";
import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps extends TaskTypes {
  index: number;
  task: TaskTypes;
}

const Task: FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            {task.title}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
