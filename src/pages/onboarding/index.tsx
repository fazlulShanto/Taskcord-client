import { CheckCircle } from "lucide-react";

import { ProjectDetails } from "./CreateProject";
import { ConnectDiscordServer } from "./ConnectDiscordServer";
import { Stepper } from "@/components/extended-ui/stepper/stepper";
import { useState } from "react";
import { ConnectGithub } from "./ConnectGithub";
import { InviteBot } from "./InviteBot";
import { AddTeamMember } from "./AddTeamMember";

const steps = [
    {
        title: "Project Informations",
        isDone: false,
        icon: CheckCircle,
        content: ProjectDetails,
    },
    {
        title: "Connect Discord Server",
        isDone: false,
        icon: CheckCircle,
        content: ConnectDiscordServer,
    },

    {
        title: "Connect Github",
        isDone: false,
        icon: CheckCircle,
        content: ConnectGithub,
    },
    {
        title: "Add Bot to Server",
        isDone: false,
        icon: CheckCircle,
        content: InviteBot,
    },
    {
        title: "Invite Team Members",
        isDone: false,
        icon: CheckCircle,
        content: AddTeamMember,
    },
];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [stepCompleted, setStepCompleted] = useState(0);
    const [formSteps, setFormSteps] = useState(
        steps.map((s, idx) => ({ ...s, id: idx + 1 }))
    );

    const handleStep = () => {
        setCurrentStep(currentStep + 1);
        setStepCompleted(Math.max(stepCompleted, currentStep));
        setFormSteps(
            formSteps.map((step) => {
                if (step.id === currentStep) {
                    return { ...step, isDone: true };
                }
                return step;
            })
        );
    };

    const renderStep = () => {
        const Content = formSteps.find(
            (step) => step.id === currentStep
        )?.content;
        if (!Content) {
            return null;
        }
        return <Content onNext={handleStep} />;
    };

    return (
        <div className="flex flex-col sm:flex-row mx-auto gap-4 min-h-screen p-12">
            <div className="min-w-fit border-0 sm:border-r border-r-borderPrimary-disable p-4">
                <Stepper
                    steps={formSteps}
                    currentStep={currentStep}
                    stepCompleted={stepCompleted}
                    onStepSelect={setCurrentStep}
                />
            </div>
            <div className="flex flex-col gap-4 w-full">{renderStep()}</div>
        </div>
    );
}
