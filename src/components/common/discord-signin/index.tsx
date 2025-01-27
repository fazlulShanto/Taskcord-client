import { Button } from "@/components/ui/button";
import { FC } from "react";

interface DiscordSigninProps {}

export const DiscordSignIn: FC<DiscordSigninProps> = () => {
    return (
        <Button variant={"secondary"} size={"lg"} className="mt-4">
            Login with Discord
        </Button>
    );
};
