import LandingDashboard from '@/pages/landingDashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authGuard/landingDashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  return <LandingDashboard />;
  // return (
  //   <div className="flex h-screen w-screen">
  //     <div className="m-2 rounded-md border border-r p-4">side bar here</div>
  //     <LandingDashboard />
  //   </div>
  // );
}
