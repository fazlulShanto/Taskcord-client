import { FC } from "react";
import { PackageOpen } from "lucide-react";
import { CreateProjectForm } from "@/components/project-form";

interface EmptyDashboardProps {
    onCreateProject?: () => void;
}

export const EmptyDashboard: FC<EmptyDashboardProps> = () => {
    return (
        <div className="flex h-full w-full items-center justify-center p-8">
            <div className="flex flex-col items-center justify-center max-w-md text-center space-y-6">
                <PackageOpen className="w-20 h-20 text-blue-500 opacity-80" />

                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Start Your First Project
                </h1>
                <p className="text-lg text-muted-foreground">
                    Create a new project and begin your journey. Your workspace
                    is ready for amazing ideas.
                </p>

                <CreateProjectForm />

                <p className="text-sm text-muted-foreground mt-4">
                    Need help getting started? Check out our{" "}
                    <a
                        href="/docs"
                        className="text-blue-500 hover:text-blue-600 underline"
                    >
                        documentation
                    </a>
                </p>
            </div>
        </div>
    );
};
