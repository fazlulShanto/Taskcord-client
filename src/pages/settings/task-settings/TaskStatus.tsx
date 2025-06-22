import { FC } from 'react';

interface TaskStatusProps {}

export const TaskStatus: FC<TaskStatusProps> = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Task Status</h1>
      </div>
    </div>
  );
};
