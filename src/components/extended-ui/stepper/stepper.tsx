import { Circle, CircleCheck } from "lucide-react";
import "./stepper.scss";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

interface StepperProps<T> {
    steps: T[];
    currentStep: number;
    stepCompleted: number;
    onStepSelect: (id: number) => void;
}

export const Stepper = <
    T extends {
        id: number;
        title: string;
        isDone: boolean;
        icon: React.ElementType;
    }
>({
    steps,
    currentStep,
    stepCompleted,
    onStepSelect,
}: StepperProps<T>) => {
    const renderStepStatusIcon = (step: T) => {
        if (step?.isDone) {
            return (
                <CheckCircleIcon className="text-green-600 w-5 h-5 flex-shrink-0" />
            );
        }
        if (step?.id === currentStep) {
            return (
                <CircleCheck className="text-green-600 w-5 h-5 flex-shrink-0" />
            );
        }
        return (
            <Circle className="text-textPrimary-disable w-5 h-5 flex-shrink-0" />
        );
    };

    return (
        <div className="bg-background relative stepper-step-container">
            <div className="steps">
                {steps.map((step, _) => {
                    const shouldDisableButton =
                        !step?.isDone && step?.id !== stepCompleted + 1;

                    return (
                        <div
                            key={step.id + _ + step.title}
                            className={cn("single-step flex gap-3", {
                                "step-done": !!step.isDone,
                            })}
                        >
                            {renderStepStatusIcon(step)}
                            <button
                                onClick={() => onStepSelect(step?.id)}
                                disabled={shouldDisableButton}
                                className={cn(
                                    "icon-btn  hover:bg-accent w-full px-3 py-2 rounded",
                                    {
                                        "bg-accent": currentStep === step?.id,
                                        "cursor-not-allowed":
                                            shouldDisableButton,
                                    }
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex gap-2 items-center h-full",
                                        {
                                            "text-textPrimary-disable":
                                                shouldDisableButton,
                                        }
                                    )}
                                >
                                    <step.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">
                                        {step.title}
                                    </span>
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
