import { mergeSort } from './merge.js';
import { bubbleSort } from './bubble.js';

export const sort = async (list, type) => {
    switch (type) {
        case 'bubble':
            return await bubbleSort(list);
        case 'merge':
            return await mergeSort(list);
        default:
            return await bubbleSort(list);
    }
}