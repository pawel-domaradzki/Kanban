import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styles from "@/styles/components/board/Column.module.scss";
import { ColumnTypes, KanbanTypes } from "@/types";
import Task from "./Task";
import ViewTaskModal from "../ViewTaskModal";
import ColorPicker from "../ColorPicker";

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
          <div
            className={
              snapshot.isDragging ? styles.IsDragging : styles.isSleeping
            }
          >
            <div className={styles.ColumnHeader}>
              <ColorPicker key={column.id} columnId={column.id} />
              <h4
                className={
                  snapshot.isDragging ? styles.IsDragging : styles.isSleeping
                }
                {...provided.dragHandleProps}
                aria-label={`${column.title} tasks list`}
              >
                {column.title} ({column.tasks.length})
              </h4>
            </div>

            <Droppable droppableId={column.id} type={KanbanTypes.Task}>
              {(provided) => (
                <div
                  className={styles.TasksList}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.tasks.map((task, index) => (
                    <ViewTaskModal
                      key={task.id}
                      activeTask={task}
                      activeColumn={column}
                    >
                      <button>
                        <Task
                          key={task.id}
                          task={task}
                          index={index}
                          {...task}
                        />
                      </button>
                    </ViewTaskModal>
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
