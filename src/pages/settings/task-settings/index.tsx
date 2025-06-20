import { Separator } from '@radix-ui/react-separator';

const TaskSettings = () => {
  const renderTaskSettingsHeader = () => {
    return (
      <header className="border-b border-border p-2.5">
        <h1 className="text-lg font-bold">Task Settings</h1>
      </header>
    );
  };

  const renderTaskSettingsSidebar = () => {
    return (
      <div id="sidebar" className="h-full w-1/4 p-4">
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">Task Status</p>
          <p className="text-md font-medium">Task Labels</p>
          <p className="text-md font-medium">Task Types</p>
        </div>
      </div>
    );
  };

  const renderTaskSettingsContent = () => {
    return (
      <div id="content" className="w-3/4 p-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Task Types</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {renderTaskSettingsHeader()}
      <main className="flex h-full w-full">
        {renderTaskSettingsSidebar()}
        <Separator orientation="vertical" className="h-full w-px bg-border" />
        {renderTaskSettingsContent()}
      </main>
    </div>
  );
};

export default TaskSettings;
