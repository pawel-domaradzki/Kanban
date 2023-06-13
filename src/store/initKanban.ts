export const boards = [
  {
    id: "board1",
    title: "PlatformLaunch",
    columns: [
      {
        id: "column1",
        title: "To Do",
        tasks: [
          {
            id: "task1",
            title: "Task 1",
            description: "Description for Task 1",
            subtasks: [
              { id: "subtask1", title: "Subtask 1" },
              { id: "subtask2", title: "Subtask 2" },
            ],
          },
          {
            id: "task2",
            title: "Task 2",
            description: "Description for Task 2",
            subtasks: [],
          },
        ],
      },
      {
        id: "column2",
        title: "Doing",
        tasks: [
          {
            id: "task3",
            title: "Task 3",
            description: "Description for Task 3",
            subtasks: [],
          },
        ],
      },
      {
        id: "column3",
        title: "Done",
        tasks: [
          {
            id: "task4",
            title: "Task 4",
            description: "Description for Task 4",
            subtasks: [],
          },
        ],
      },
    ],
  },
  {
    id: "board2",
    title: "Empty",
    columns: [],
  },
];
