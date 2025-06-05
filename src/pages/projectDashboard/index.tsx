import { useParams } from '@tanstack/react-router';
import { FC } from 'react';

interface ProjectDashboardProps {}

export const ProjectDashboard: FC<ProjectDashboardProps> = () => {
  const { projectId } = useParams({ strict: false });

  return <div>content : {projectId}</div>;
};
