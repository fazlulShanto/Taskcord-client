import { ClientDataTable } from '@/components/common/client-data-table';
import { Button } from '@/components/ui/button';
import { TaskStatus } from '@/types/tasks';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FC, useState } from 'react';
import { taskStatusTableColumns } from './taskStatusTableColumns';

interface TaskStatusSettingsProps {}

export const TaskStatusSettings: FC<TaskStatusSettingsProps> = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const table = useReactTable<TaskStatus>({
    state: {
      pagination,
      rowSelection,
    },
    data: [],
    columns: taskStatusTableColumns,
    enableMultiRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  });

  return (
    <div id="task-status-settings" className="flex h-full w-full flex-col overflow-hidden p-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">Task Status</h1>
        <p className="text-sm text-muted-foreground">Manage the statuses of your tasks.</p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold"></h2>
          <Button size="sm" className="h-7">
            Add Status
          </Button>
        </div>
        <div className="rounded-md border">
          <ClientDataTable<TaskStatus> table={table} />
        </div>
      </div>
    </div>
  );
};
