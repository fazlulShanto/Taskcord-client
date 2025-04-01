import { useLandingDashboard } from '@/stores/useLandingDashboard';
import { EmptyDashboard } from './EmptyDashboard';

function LandingDashboard() {
  const projectList = useLandingDashboard((state) => state.projectList);

  if (projectList.length === 0) {
    return <EmptyDashboard />;
  }
  return (
    <div className="h-full bg-background p-12">
      Landing Dashboard
      <pre className="whitespace-pre rounded bg-background p-4 text-primary">
        {JSON.stringify(projectList, null, 2)}
      </pre>
    </div>
  );
}

export default LandingDashboard;
