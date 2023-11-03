const getHeight = element => parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

const merge = async (list, start, mid, end) => {
    let lind = start, rind = mid + 1, sortedList = [];
    while (lind <= mid && rind <= end) {
        const originalColor = list[lind].style.backgroundColor;
        list[lind].style.backgroundColor = 'red';
        list[rind].style.backgroundColor = 'blue';
        const lh = getHeight(list[lind]), rh = getHeight(list[rind]), inc = lh < rh;
        sortedList.push(inc ? lh : rh);
        await new Promise((res, rej) => setTimeout(() => {
            list[lind].style.backgroundColor = list[rind].style.backgroundColor = originalColor;
            res();
        }, 250));
        inc ? lind++ : rind++;
    }
    while (lind <= mid) {
        const originalColor = list[lind].style.backgroundColor;
        list[lind].style.backgroundColor = 'purple';
        sortedList.push(getHeight(list[lind++]));
        await new Promise((res, rej) => setTimeout(() => {
            list[lind - 1].style.backgroundColor = originalColor;
            res();
        }, 250));
    }
    while (rind <= end) {
        const originalColor = list[rind].style.backgroundColor;
        list[rind].style.backgroundColor = 'purple';
        sortedList.push(getHeight(list[rind++]));
        await new Promise((res, rej) => setTimeout(() => {
            list[rind - 1].style.backgroundColor = originalColor;
            res();
        }, 250));
    }
    for (let i = start; i <= end; i++) {
        list[i].style.height = `${sortedList[i - start]}px`;
        list[i].style.backgroundColor = 'gold';
    }
}
const sort = async (list, start, end) => {
    if (start >= end) {
        return;
    }
    const midInd = start + Math.floor((end - start) / 2);
    await sort(list, start, midInd);
    await sort(list, midInd + 1, end);
    await merge(list, start, midInd, end);
}

export const mergeSort = async list => sort(list, 0, list.length - 1);