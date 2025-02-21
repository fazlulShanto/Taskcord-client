import { useLandingDashboard } from "@/stores/useLandingDashboard";
import { EmptyDashboard } from "./EmptyDashboard";

function LandingDashboard() {
    const projectList = useLandingDashboard((state) => state.projectList);

    if (projectList.length === 0) {
        return <EmptyDashboard />;
    }
    return (
        <div className="bg-background h-full p-12">
            Landing Dashboard
            <pre className="whitespace-pre bg-background text-primary p-4 rounded">
                {JSON.stringify(projectList, null, 2)}
            </pre>
        </div>
    );
}

export default LandingDashboard;
