import { createFileRoute } from "@tanstack/react-router";
import Onboarding from "@/pages/onboarding";

export const Route = createFileRoute("/onboarding")({
    component: RouteComponent,
});

function RouteComponent() {
    return <Onboarding />;
}
