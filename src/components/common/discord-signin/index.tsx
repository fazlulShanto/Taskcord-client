import { APIs } from "@/lib/api";
import { FC } from "react";

interface DiscordSigninProps {}

export const DiscordSignIn: FC<DiscordSigninProps> = () => {
    return (
        <a className="mt-4" href={APIs.auth.initDiscordAuth()}>
            Login with Discord
        </a>
    );
};
