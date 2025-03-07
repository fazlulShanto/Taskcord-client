import { createFileRoute } from '@tanstack/react-router'
import LandingDashboard from '@/pages/landingDashboard'

export const Route = createFileRoute(
  '/_authGuard/project/$projectId/dashboard',
)({
  component: LandingDashboard,
})
