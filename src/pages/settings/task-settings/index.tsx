import { Separator } from '@radix-ui/react-separator';
import { useSearch } from '@tanstack/react-router';
import TaskSettingsContent from './TaskSettingsContent';
import TaskSettingsSidebar from './TaskSettingsSidebar';

const TaskSettings = () => {
  const { tab: selectedTab = 'task-status' } = useSearch({ strict: false });

  // const activeTabe = useSearchParams().get('tab');

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <header className="border-b border-border p-2.5">
        <h1 className="text-lg font-bold">Task Settings</h1>
      </header>

      <main className="flex h-full w-full">
        <TaskSettingsSidebar selectedTab={selectedTab} />
        <Separator orientation="vertical" className="h-full w-px bg-border" />
        <TaskSettingsContent selectedTab={selectedTab} />
      </main>
    </div>
  );
};

export default TaskSettings;
