import TaskSettings from '@/pages/settings/task-settings';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authGuard/project/$projectId/settings/task-settings')({
  component: TaskSettings,
});
