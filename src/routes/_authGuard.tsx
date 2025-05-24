import { AuthGuard } from '@/components/common/AuthGuard';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authGuard')({
  component: RouteComponent,
  beforeLoad: (ctx) => {
    const authToken = ctx.location.search?.auth_token;
    if (authToken) {
      localStorage.setItem('token', authToken);
    }
    return true;
  },
});

function RouteComponent() {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  );
}
