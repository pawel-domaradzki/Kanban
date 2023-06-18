import React, { FC } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

interface BoardProps {}

const Board: FC<BoardProps> = ({}) => {
  return (
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
    <></>
  );
};

export default Board;
