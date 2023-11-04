const getHeight = element => parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

const sort = async list => {
    for (let i = 0; i < list.length; ++i) {
        list[i].style.backgroundColor = 'red';
        await new Promise((res, rej) => setTimeout(() => res(), 250));
        let preInd = i - 1, curHt = getHeight(list[i]);
        while (preInd > -1 && getHeight(list[preInd]) > curHt) {
            await new Promise((res, rej) => setTimeout(() => res(), 250));
            list[preInd + 1].style.height = list[preInd].style.height;
            const tmp = list[preInd + 1].style.backgroundColor;
            list[preInd + 1].style.backgroundColor = list[preInd].style.backgroundColor;
            list[preInd].style.backgroundColor = tmp;
            --preInd;
        }
        await new Promise((res, rej) => setTimeout(() => res(), 250));
        list[preInd + 1].style.height = `${curHt}px`;
        list[preInd + 1].style.backgroundColor = 'gold';
    }
};

export const insertionSort = list => sort(list);