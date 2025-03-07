import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HttpClient } from "@/lib/httpClient";

import { DiscordAvatar } from "@/components/common/DiscordAvatar";

export interface DiscordUserServer {
    id: string;
    name: string;
    icon: string;
    banner: string;
    owner: boolean;
    permissions: string;
}

export const ConnectDiscordServerV2 = () => {
    const [isFetching, setIsFetching] = React.useState(false);
    const [discordServerList, setDiscordServerList] = React.useState<
        DiscordUserServer[]
    >([]);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const handleFetchUserDiscordServerList = async () => {
        try {
            setIsFetching(true);
            const res = await HttpClient.get("/api/edge/users/discord/guilds");
            setDiscordServerList(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    const renderSelectedServer = () => {
        const selectedServer = discordServerList.find(
            (server) => server.id === value
        );
        if (!selectedServer) {
            return "Select a discord server";
        }
        return (
            <div className="flex items-center gap-3 h-full">
                <DiscordAvatar
                    assetId={selectedServer.icon}
                    serverId={selectedServer.id}
                    size={48}
                    alt={selectedServer.name}
                />
                {selectedServer.name}
            </div>
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
            <div className=" w-full flex flex-col">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-1/2 h-16 justify-between"
                        >
                            {renderSelectedServer()}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popper-anchor-width)] p-0">
                        <Command>
                            <CommandInput
                                placeholder="Search server"
                                className="h-9"
                            />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {discordServerList.map((server) => (
                                        <CommandItem
                                            key={server.id}
                                            value={server.name}
                                            onSelect={(currentValue) => {
                                                console.log(server);
                                                setValue(
                                                    currentValue === value
                                                        ? ""
                                                        : server.id
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            <div className="w-full flex items-center gap-3">
                                                <DiscordAvatar
                                                    assetId={server.icon}
                                                    serverId={server.id}
                                                    size={48}
                                                    alt={server.name}
                                                />

                                                {server.name}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        value === server.id
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            </div>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                            <div className="">
                                <Button
                                    disabled={isFetching}
                                    onClick={handleFetchUserDiscordServerList}
                                    variant={"secondary"}
                                    className="w-full rounded-t-none"
                                >
                                    Refresh Discord Server List
                                </Button>
                            </div>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};
