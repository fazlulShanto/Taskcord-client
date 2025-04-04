export const getBaseApiUrl = (): string => {
  if (import.meta.env.MODE === 'production') {
    return import.meta.env.VITE_PROD_API_URL;
  }
  return import.meta.env.VITE_DEV_API_URL;
};

export const API_URL = getBaseApiUrl();

export const APIs = {
  auth: {
    initDiscordAuth: () => `${API_URL}/api/edge/auth/discord/init`,
    me: () => `${API_URL}/api/edge/users/@me`,
    createProject: () => `${API_URL}/api/edge/project`,
  },
  project: {
    get: (projectId: string) => `${API_URL}/api/edge/project/${projectId}`,
    update: (projectId: string) => `${API_URL}/api/edge/project/${projectId}`,
  },
  user: {
    get: (userId: string) => `${API_URL}/api/edge/users/${userId}`,
    userGuilds: () => `${API_URL}/api/edge/users/discord/guilds`,
  },
  discord: {
    guilds: () => `${API_URL}/api/edge/users/discord/guilds`,
  },
  bot: {
    botServerVerification: (serverId: string) =>
      `${API_URL}/api/edge/project/${serverId}/is-bot-in-server`,
  },
};
