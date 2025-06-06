import { AppSidebar } from '@/components/common/navbar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import LandingDashboard from '@/pages/overview';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authGuard/overview')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <LandingDashboard />
    </SidebarProvider>
  );
}
