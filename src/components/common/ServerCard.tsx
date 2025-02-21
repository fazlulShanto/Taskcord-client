import { FC } from "react";

interface ServerCardProps {
    name: string;
    logoUrl: string;
    createdAt: Date;
}

export const ServerCard: FC<ServerCardProps> = ({
    name = "The Ultimate Community Hub for Gaming, Chatting, Memes, and More - Join the Fun and Make New Friends Today!",
    logoUrl = "https://i.pravatar.cc/240",
    createdAt = new Date(),
}) => {
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="group w-80 h-fit">
            {/* Card container with gradient border */}
            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-[length:200%_200%] animate-gradient-border">
                <div className="bg-gray-900 rounded-xl p-6 h-44 relative overflow-hidden">
                    {/* Initial state */}
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-between transform transition-all duration-300 group-hover:-translate-x-full">
                        <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/70">
                            <img
                                src={logoUrl}
                                alt={`${name} logo`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center max-w-full">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 overflow-hidden">
                                {name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Created on {formattedDate}
                            </p>
                        </div>
                    </div>

                    {/* Hover state */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between transform transition-all duration-300 translate-y-full group-hover:translate-y-0">
                        {/* Top row: Logo, Title, Date */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                                <img
                                    src={logoUrl}
                                    alt={`${name} logo`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-white truncate">
                                    {name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {formattedDate}
                                </p>
                            </div>
                        </div>

                        {/* Bottom row: Invite button */}
                        <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300">
                            Invite {import.meta.env.VITE_DISCORD_BOT_NAME}
                        </button>
                    </div>

                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl pointer-events-none" />
                </div>
            </div>
        </div>
    );
};
