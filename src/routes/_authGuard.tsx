import { AuthGuard } from '@/components/common/AuthGuard';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authGuard')({
  component: RouteComponent,
  beforeLoad: async (ctx) => {
    const authToken = new URLSearchParams(ctx.location.search).get('auth_token');
    if (authToken) {
      localStorage.setItem('token', authToken);
      await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
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
