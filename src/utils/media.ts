import { api_config } from "@/config/api_config";

export const media = (url: string) => {
    if (url) {
        return api_config.base_url + url;
    }
    return url;
}