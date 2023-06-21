import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styles from "@/styles/components/board/Column.module.scss";
import { ColumnTypes } from "@/types";
import Task from "./Task";

interface ColumnProps {
  index: number;

  column: ColumnTypes;
}

const Column: FC<ColumnProps> = ({ column, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={styles.ColumnContainer}
        >
          <div className={snapshot.isDragging ? styles.IsDragging : ""}>
            <h1
              className={snapshot.isDragging ? styles.IsDragging : ""}
              {...provided.dragHandleProps}
              aria-label={`${column.title} tasks list`}
            >
              {column.title}
            </h1>

            <Droppable droppableId={column.id} type="task">
              {(provided) => (
                <div
                  className={styles.TasksList}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} {...task} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
