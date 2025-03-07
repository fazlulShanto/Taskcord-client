import { AuthGuard } from "@/components/common/AuthGuard";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authGuard")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <AuthGuard>
            <Outlet />
        </AuthGuard>
    );
}
