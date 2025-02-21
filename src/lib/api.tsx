export const getBaseApiUrl = (): string => {
    if (import.meta.env.MODE === "production") {
        return import.meta.env.VITE_PROD_API_URL;
    }
    return import.meta.env.VITE_DEV_API_URL;
};

export const API_URL = getBaseApiUrl();

export const APIs = {
    auth: {
        initDiscordAuth: () => `${API_URL}/api/edge/auth/discord/init`,
        me: () => `${API_URL}/api/edge/users/@me`,
    },
};
