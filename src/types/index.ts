export interface IconProps {
  className?: string;
}

export interface Subtask {
  id: string;
  title: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  subtasks: Subtask[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}
