import { createFileRoute } from '@tanstack/react-router'
import LandingDashboard from '@/pages/landingDashboard'

export const Route = createFileRoute('/project/$projectId/dashboard')({
  component: LandingDashboard,
})
