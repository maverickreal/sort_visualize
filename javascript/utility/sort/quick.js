const getHeight = element => parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

const sort = async (list, start, end, switchTheme) => {
    if (start > end) {
        return;
    }
    if (start == end) {
        list[start].style.backgroundColor = 'gold';
    }
    const pivot = getHeight(list[start]), leftlist = [], rightlist = [];
    list[start].style.backgroundColor = 'purple';
    await new Promise((res, rej) => setTimeout(() => res(), 500));
    for (let i = start + 1; i <= end; ++i) {
        const lih = getHeight(list[i]);
        if (lih < pivot) {
            list[i].style.backgroundColor = switchTheme ? 'pink' : 'red';
            leftlist.push(lih);
        } else {
            list[i].style.backgroundColor = switchTheme ? 'wheat' : 'blue';
            rightlist.push(lih);
        }
    }
    await new Promise((res, rej) => setTimeout(() => res(), 500));
    const pivotInd = start + leftlist.length;
    for (let i = 0; i < leftlist.length; ++i) {
        list[start + i].style.height = `${leftlist[i]}px`;
        list[start + i].style.backgroundColor = switchTheme ? 'pink' : 'red';
    }
    list[pivotInd].style.height = `${pivot}px`;
    list[pivotInd].style.backgroundColor = 'purple';
    for (let i = 0; i < rightlist.length; ++i) {
        list[pivotInd + i + 1].style.height = `${rightlist[i]}px`;
        list[pivotInd + i + 1].style.backgroundColor = switchTheme ? 'wheate' : 'blue';
    }
    await new Promise((res, rej) => setTimeout(() => res(), 500));
    await sort(list, start, pivotInd - 1, !switchTheme);
    await sort(list, pivotInd + 1, end, !switchTheme);
    list[pivotInd].style.backgroundColor = 'gold';
};

export const quickSort = list => sort(list, 0, list.length - 1, false);