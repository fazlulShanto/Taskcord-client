import { Button } from '@/components/ui/button';
import { FC } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { cn } from '@/lib/utils';
import { DiscordAvatar } from '@/components/common/DiscordAvatar';
import { useProjectCreation } from '@/stores/useProjectCreation';
import { Loader2, Plus } from 'lucide-react';
import { useDiscordServerListQuery } from '@/queries/useProjectQuery';
import { UserServerData } from './interfaces';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface InviteBotProps {
  onNext: () => void;
}

export const InviteBot: FC<InviteBotProps> = ({ onNext }) => {
  const { isLoading, isLoadingError, data } = useDiscordServerListQuery();
  // const discordServerList = useProjectCreation((state) => state.serverList);
  const selectedServer = useProjectCreation((state) => state.selectedServer);
  const updateSelectedServer = useProjectCreation((state) => state.updateSelectedServer);

  const hasSelectedServer = selectedServer !== null && selectedServer?.id;

  const inviteBot = (serverId: string) => {
    window.open(import.meta.env.VITE_BOT_INVITATION_URL + `&guild_id=${serverId}`, '_blank');
  };

  const handleInviteBot = async (currentServer: UserServerData) => {
    // update state
    updateSelectedServer(currentServer);
    inviteBot(currentServer.id);
  };

  const renderInviteServerList = () => {
    return (
      <div className="flex flex-col gap-4">
        <div
          className={cn('flex w-full justify-between', {
            hidden: isLoading,
          })}
        >
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder={selectedServer?.name || 'Server name...'} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {data?.map((server) => (
                  <CommandItem
                    key={server?.id}
                    className="group flex w-full gap-4 rounded-none border-b border-border py-2 data-[selected='true']:bg-gray-950"
                    data-selected={'false'}
                  >
                    <DiscordAvatar
                      assetId={server.icon}
                      serverId={server.id}
                      size={32}
                      alt={server.name}
                    />

                    <div className="flex flex-1 flex-col gap-2 text-left">
                      <h2 className="text-sm font-medium">{server.name}</h2>

                      <div className="w-fit rounded-full bg-green-950 px-1 py-[1px] text-xs text-emerald-400">
                        {server.owner ? 'Owner' : 'Administrator'}
                      </div>
                      <p className="hidden text-xs text-gray-500"> {server.id} </p>
                    </div>

                    <div className="duration-800 -translate-y-4 opacity-0 transition-all group-hover:flex group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        onClick={() => handleInviteBot(server)}
                        className="hidden gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-medium group-hover:flex"
                        size="sm"
                        variant={'outline'}
                      >
                        <Plus strokeWidth={2.5} className="size-4" />
                        Invite
                      </Button>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    );
  };

  const renderServerListView = () => {
    return (
      <div className="flex flex-wrap gap-4 p-2">
        {data?.map((singleServer) => {
          return (
            <Card key={singleServer?.id} className="w-[300px]">
              <CardContent className="flex h-full flex-col justify-between p-0">
                <div className="flex flex-grow items-center gap-2 p-3">
                  <DiscordAvatar
                    assetId={singleServer.icon}
                    serverId={singleServer.id}
                    size={40}
                    alt={singleServer.name}
                  />
                  <p> {singleServer?.name} </p>
                </div>
                <div className="flex h-9 border-t border-border">
                  <Button
                    onClick={() => handleInviteBot(singleServer)}
                    className="w-full gap-1 rounded-none rounded-bl-lg text-sm font-medium"
                    size="sm"
                    variant={'ghost'}
                  >
                    Already Invited
                  </Button>
                  <Button
                    onClick={() => handleInviteBot(singleServer)}
                    className="w-full gap-1 rounded-none rounded-br-lg text-sm font-medium"
                    size="sm"
                    variant={'ghost'}
                  >
                    <Plus strokeWidth={2.5} className="size-4" />
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  const renderStepHeader = () => {
    return (
      <div className="sticky -top-0.5 z-10 bg-background p-3">
        <h2 className="text-xl font-bold text-primary">Bring Task Management to Discord</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Invite our bot to your server and manage projects, tasks, and members directly from
          Discord.
        </p>
      </div>
    );
  };

  const renderLoadingView = () => {
    return (
      <div
        className={cn('flex h-1/2 min-h-[200px] w-full items-center justify-center text-white', {
          hidden: !isLoading,
        })}
      >
        <Loader2 strokeWidth={2} className="mr-2 size-8 animate-spin text-white" />
        Loading you discord servers...
      </div>
    );
  };

  return (
    <div className="relative">
      {renderStepHeader()}
      <Separator />

      {renderLoadingView()}

      {/* {renderInviteServerList()} */}
      {renderServerListView()}

      <div className="pt-8">
        <Button
          variant="ghost"
          onClick={onNext}
          className={cn(
            'hidden border text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
            {
              hidden: isLoadingError || isLoading,
            }
          )}
        >
          I've already invited the bot
        </Button>
      </div>
    </div>
  );
};
