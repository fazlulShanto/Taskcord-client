import { useProjectListQuery } from '@/queries/useProjectQuery';
import { CircleCheckBig, FolderKanban, GitPullRequestDraft, ListTodo } from 'lucide-react';
import { ActiveProjects } from './ActiveProjects';
import { EmptyDashboard } from './EmptyDashboard';
import { LandingDashboardCard } from './LandingDashboardCard';
import { DashboardProjectList } from './ProjectList';

export const LandingDashboard = () => {
  const { data } = useProjectListQuery();
  const projectList = data?.projects || [];

  if (projectList.length === 0) {
    return <EmptyDashboard />;
  }

  return (
    <div className="flex h-full min-h-screen flex-col gap-8 bg-background p-8">
      <h1 className="text-2xl font-semibold">Welcome Back, User Name!</h1>
      <div className="flex flex-wrap gap-3">
        <LandingDashboardCard
          title="Total Projects"
          statData={projectList?.length || 0}
          icon={<FolderKanban className="size-10 text-muted-foreground" />}
        />
        <LandingDashboardCard
          title="Total Task"
          statData={2343}
          icon={<FolderKanban className="size-10 text-muted-foreground" />}
        />
        <LandingDashboardCard
          title="Completed"
          statData={15}
          icon={<CircleCheckBig className="size-10 text-muted-foreground" />}
        />
        <LandingDashboardCard
          title="In Progress"
          statData={15}
          icon={<GitPullRequestDraft className="size-10 text-muted-foreground" />}
        />
        <LandingDashboardCard
          title="In Todo"
          statData={15}
          icon={<ListTodo className="size-10 text-muted-foreground" />}
        />
      </div>
      <ActiveProjects projectList={projectList} />
      <DashboardProjectList projectList={projectList} />
    </div>
  );
};

export default LandingDashboard;
