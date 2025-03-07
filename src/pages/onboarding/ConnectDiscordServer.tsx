import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import React from "react";

import { cn } from "@/lib/utils";
import { HttpClient } from "@/lib/httpClient";

import { DiscordAvatar } from "@/components/common/DiscordAvatar";
import { Input } from "@/components/ui/input";
import { useProjectCreation } from "@/stores/useProjectCreation";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export interface DiscordUserServer {
    id: string;
    name: string;
    icon: string;
    banner: string;
    owner: boolean;
    permissions: string;
}

export interface ConnectDiscordServerProps {
    onNext: () => void;
}

export const ConnectDiscordServer: React.FC<ConnectDiscordServerProps> = ({
    onNext,
}) => {
    const discordServerList = useProjectCreation((state) => state.serverList);
    const selectedServer = useProjectCreation((state) => state.selectedServer);
    const updateServerList = useProjectCreation(
        (state) => state.updateServerList
    );
    const updateSelectedServer = useProjectCreation(
        (state) => state.updateSelectedServer
    );
    const [isFetching, setIsFetching] = React.useState(false);

    const hasSelectedServer =
        selectedServer !== null &&
        discordServerList.length > 0 &&
        selectedServer?.id;

    React.useEffect(() => {
        if (!discordServerList.length) {
            handleFetchUserDiscordServerList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFetchUserDiscordServerList = async () => {
        try {
            setIsFetching(true);
            const res = await HttpClient.get("/api/edge/users/discord/guilds");
            updateServerList(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    const renderSingleServerCard = (serverData: DiscordUserServer) => {
        return (
            <Card
                key={serverData.id}
                onClick={() => {
                    updateSelectedServer(serverData);
                }}
            >
                <CardContent className="relative p-6 flex flex-col gap-3 w-72">
                    <CheckBadgeIcon
                        className={cn(
                            "absolute right-4 top-4 size-7 text-green-500",
                            {
                                hidden: selectedServer?.id !== serverData.id,
                            }
                        )}
                    />
                    <div className="w-full flex justify-center">
                        <DiscordAvatar
                            assetId={serverData.icon}
                            serverId={serverData.id}
                            size={64}
                            alt={serverData.name}
                            className="size-16"
                        />
                    </div>
                    <h2 className="text-lg text-center font-medium">
                        {serverData.name}
                    </h2>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-1">
                <h2 className="text-xl font-bold">Link Discord Server</h2>
                <p className="">
                    Connect your project with a discord server to get updates &
                    manage tasks.
                </p>
            </div>
            <hr />
            <div className="flex w-full justify-between">
                <Input placeholder="Server Name" className="w-96" />
                <div className="space-x-4">
                    <Button
                        disabled={isFetching || !hasSelectedServer}
                        onClick={() => {
                            onNext();
                        }}
                    >
                        Next
                    </Button>
                    <Button
                        disabled={isFetching}
                        onClick={handleFetchUserDiscordServerList}
                        variant={"secondary"}
                    >
                        Refresh Discord Server List
                    </Button>
                </div>
            </div>
            <div className="w-full flex gap-4 flex-wrap">
                {discordServerList.map(renderSingleServerCard)}
            </div>
        </div>
    );
};
