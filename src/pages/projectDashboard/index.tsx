import { useProjectListQuery } from '@/queries/useProjectQuery';
import { useParams } from '@tanstack/react-router';
import { FC } from 'react';

interface ProjectDashboardProps {}

export const ProjectDashboard: FC<ProjectDashboardProps> = () => {
  const { projectId } = useParams({ strict: false });
  const { data } = useProjectListQuery();
  const project = data?.find((project) => project.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  return <div>content : {JSON.stringify(project, null, 2)}</div>;
};
