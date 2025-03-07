import { DiscordUserServer } from "@/pages/onboarding/ConnectDiscordServer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ProjectCreationStore = {
    projectName: string;
    projectDescription: string;
    updateProjectDetails: (values: {
        projectName: string;
        projectDescription: string;
    }) => void;
    serverList: DiscordUserServer[];
    selectedServer: DiscordUserServer | null;
    updateSelectedServer: (server: DiscordUserServer | null) => void;
    updateServerList: (serverList: DiscordUserServer[]) => void;
};

export const useProjectCreation = create<ProjectCreationStore>()(
    devtools(
        (set) => ({
            projectName: "",
            projectDescription: "",
            serverList: [],
            selectedServer: null,
            updateServerList: (serverList: DiscordUserServer[]) => {
                set((oldState) => ({
                    ...oldState,
                    serverList,
                }));
            },
            updateSelectedServer: (server: DiscordUserServer | null) => {
                set((oldState) => ({
                    ...oldState,
                    selectedServer: server,
                }));
            },
            updateProjectDetails: (
                values: ProjectCreationStore["updateProjectDetails"]
            ) => {
                set((oldState) => ({
                    ...oldState,
                    ...values,
                }));
            },
        }),
        {
            name: "project-creation-store",
        }
    )
);
