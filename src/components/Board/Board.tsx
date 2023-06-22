"use client";

import { useBoardStore } from "@/store/BoardStore";
import React, { FC } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import styles from "@/styles/components/board/Board.module.scss";
import Column from "./Column";
import { KanbanTypes } from "@/types";

interface BoardProps {}

const Board: FC<BoardProps> = ({}) => {
  const { boards, activeBoardId, moveTask, moveColumn } = useBoardStore();

  const activeBoard = boards.find(({ id }) => id === activeBoardId);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (type === KanbanTypes.Task) {
      moveTask(
        activeBoardId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    } else if (type === KanbanTypes.Column) {
      moveColumn(activeBoardId, source.index, destination.index);
    }
  };

  return activeBoard ? (
    <div className={styles.BoardWrapper}>
      {activeBoard.columns.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="board"
            direction="horizontal"
            type={KanbanTypes.Column}
          >
            {(provided) => (
              <div
                className={styles.BoardContainer}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {activeBoard.columns.map((column, index) => (
                  <Column key={column.id} column={column} index={index} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h1>Add Columns</h1>
      )}
    </div>
  ) : (
    <h1>+Create New Board</h1>
  );
};

export default Board;
