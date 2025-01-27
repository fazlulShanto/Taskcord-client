import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId/team-settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/team/$teamId/team-settings"!</div>
}
