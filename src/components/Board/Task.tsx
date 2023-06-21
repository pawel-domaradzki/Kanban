import { TaskTypes } from "@/types";
import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "@/styles/components/board/Task.module.scss";
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
            className={styles.Task}
          >
            {task.title}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
