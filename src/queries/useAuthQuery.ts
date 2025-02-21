import { useQuery } from "@tanstack/react-query";
import { APIs } from "../lib/api";
import { HttpClient } from "@/lib/httpClient";

export interface AuthenticatedUser {
    id: string;
    discordId: string;
    fullName: string;
    nickName: string;
    avatar: string;
    email: string;
    lastAuth: string;
    isVerified: boolean;
    updatedAt: string;
    createdAt: string;
}
export const useAuthQuery = () => {
    const { isError, data, isLoading } = useQuery({
        queryKey: ["auth", "me"],
        staleTime: Infinity,
        retry: false,
        queryFn: async () => {
            const res = await HttpClient.get(APIs.auth.me());
            return res.data as AuthenticatedUser;
        },
    });
    return { data, isLoading, isAuthenticated: !isError && !isLoading };
};
