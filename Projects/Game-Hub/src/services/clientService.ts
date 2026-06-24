import apiClient , {CanceledError} from "./apiClient";

export type Game = {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: Date,
    freetogame_profile_url: string
};

class Service {
    getAll() {
        const controller = new AbortController();
        const response = apiClient.get<Game[]>('/games', {signal: controller.signal});
        return { response, abort: () => controller.abort() };
    }

    selectGenre(genre:string) {
        const url = `/games?category=${genre}`.replace(' ','');
        return apiClient.get(url);
    }

    filterPlatform(platform:string) {
        const url = `/games?platform=${platform}`.replace(' ','');
        return apiClient.get(url);
    }

    arrangeInOrder(order:string) {
        const url = `/games?sort-by=${order}`.replace(' ','');
        return apiClient.get(url);
    }
}

export default new Service();
export {CanceledError};