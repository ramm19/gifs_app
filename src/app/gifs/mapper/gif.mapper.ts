import { GiphyItem } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/git.interface";

export class GifMapper {
    static mapGifhyItemToGif( item: GiphyItem ): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        };
    }

    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
        return items.map(this.mapGifhyItemToGif);
    }
}