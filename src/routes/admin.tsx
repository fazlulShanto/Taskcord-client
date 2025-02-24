import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminComponent,
});

function AdminComponent() {
  return (
    <div className="text-white bg-gray-900">
      <Outlet />
    </div>
  );
}
