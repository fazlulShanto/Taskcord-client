import { EmptyDashboard } from './EmptyDashboard';
import { useProjectListQuery } from '@/queries/useProjectQuery';

function LandingDashboard() {
  const { data } = useProjectListQuery();
  const projectList = data?.projects || [];

  if (projectList.length === 0) {
    return <EmptyDashboard />;
  }

  return (
    <div className="flex h-full flex-col gap-8 bg-background p-12">
      <h1 className="text-3xl font-semibold">All Projects</h1>
      <div className="flex gap-3">
        {projectList.map((project) => {
          return (
            <div className="flex flex-col gap-2 rounded-md border p-4" key={project.id}>
              <p className="text-lg font-medium">{project.title}</p>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(project.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingDashboard;
