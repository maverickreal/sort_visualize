import { mergeSort } from './merge.js';
import { bubbleSort } from './bubble.js';
import { quickSort } from './quick.js';
import { selectionSort } from './selection.js';

export const sort = async (list, type) => {
    switch (type) {
        case 'bubble':
            return await bubbleSort(list);
        case 'merge':
            return await mergeSort(list);
        case 'quick':
            return await quickSort(list);
        case 'selection':
            return await selectionSort(list);
        default:
            return await bubbleSort(list);
    }
}