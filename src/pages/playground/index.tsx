import { ServerCard } from "@/components/common/ServerCard";
import { FC } from "react";

interface PlaygroundProps {}

export const PlayGround: FC<PlaygroundProps> = () => {
    return (
        <div className="flex gap-8 p-8 flex-col sm:flex-row">
            <ServerCard
                logoUrl="https://gravatar.com/avatar/5ca863c337224ecfa01f02de36995b79?s=400&d=robohash&r=x"
                name="My Awesome Server"
                createdAt={new Date()}
            />
            <ServerCard
                logoUrl="https://i.pravatar.cc/240"
                createdAt={new Date()}
                name="My Awesome Server"
            />
        </div>
    );
};
