import { createFileRoute } from '@tanstack/react-router'
import Onboarding from '@/pages/onboarding'

export const Route = createFileRoute('/_authGuard/onboarding')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Onboarding />
}
