import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { TaskStatus } from '@/types/tasks';

export const taskStatusTableColumns: ColumnDef<TaskStatus>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
        className="h-4 w-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'color',
    header: 'Color',
    cell: ({ row }) => (
      <div className="h-4 w-4 rounded-full" style={{ backgroundColor: row.original.color }} />
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'order',
    header: 'Order',
  },
  {
    accessorKey: 'projectId',
    header: 'Project',
    cell: ({ row }) => {
      return <div>{row.original.projectId.slice(0, 8)}</div>;
    },
  },
  {
    accessorKey: 'creatorId',
    header: 'Creator',
    cell: ({ row }) => {
      return <div>{row.original.creatorId.slice(0, 8)}</div>;
    },
  },
];
