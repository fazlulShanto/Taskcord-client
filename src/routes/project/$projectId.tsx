import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppSidebar } from '@/components/common/navbar/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/project/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  // TODO: handle teamauth here
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
