import { APIs } from '@/lib/api';
import { FC } from 'react';

interface DiscordSigninProps {}

export const DiscordSignIn: FC<DiscordSigninProps> = () => {
  const currentHost = `${window.location.protocol}//${window.location.host}`;
  return (
    <a className="mt-4" href={APIs.auth.initDiscordAuth(currentHost)}>
      Login with Discord
    </a>
  );
};
