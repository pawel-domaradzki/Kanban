export interface IconProps {
  className?: string;
  onClick?: () => void;
}

export interface SubtaskTypes {
  id: string;
  title: string;
}

export interface TaskTypes {
  id: string;
  title: string;
  description: string;
  subtasks: SubtaskTypes[];
}

export interface ColumnTypes {
  id: string;
  title: string;
  tasks: TaskTypes[] | [];
}

export interface BoardTypes {
  id: string;
  title: string;
  columns: ColumnTypes[];
}
