type TaskSettingsContentProps = {
  selectedTab: string;
};
const TaskSettingsContent = ({ selectedTab }: TaskSettingsContentProps) => {
  switch (selectedTab) {
    case 'task-status':
      return 'Task Status will be here';
    case 'task-labels':
      return 'Task Labels will be here';
    case 'task-types':
      return 'Task Types will be here';
    default:
      throw new Error('Invalid tab');
  }
};

export default TaskSettingsContent;
