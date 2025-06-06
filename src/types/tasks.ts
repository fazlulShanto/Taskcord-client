export type TaskTabsType = 'kanban' | 'list' | 'table' | 'calendar' | 'timeline';
export type Task = {
  title: string;
  description: string;
  label: string;
  issueType: string;
  assignee: string;
  milestone: string;
  status: string;
  priority: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};
