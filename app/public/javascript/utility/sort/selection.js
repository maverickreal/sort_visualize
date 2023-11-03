const getHeight = element => parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

const sort = async list => {
    const originalColor = list[0].style.backgroundColor;
    for (let i = 0; i < list.length; ++i) {
        list[i].style.backgroundColor = 'red';
        let minIndex = i, minHeight = getHeight(list[i]);
        for (let j = i + 1; j < list.length; ++j) {
            const ht = getHeight(list[j]);
            if (ht < minHeight) {
                if (minIndex > i) list[minIndex].style.backgroundColor = originalColor;
                minIndex = j; minHeight = ht;
                list[j].style.backgroundColor = 'blue';
                await new Promise((res, rej) => setTimeout(() => {
                    res();
                }, 250));
            }
        }
        if (minIndex !== i) {
            list[i].style.backgroundColor = list[minIndex].style.backgroundColor = 'purple';
            const tmpHeight = list[i].style.height;
            list[i].style.height = list[minIndex].style.height;
            list[minIndex].style.height = tmpHeight;
            await new Promise((res, rej) => setTimeout(() => {
                res();
            }, 250));
            list[minIndex].style.backgroundColor = originalColor;
        }
        list[i].style.backgroundColor = 'gold';
        await new Promise((res, rej) => setTimeout(() => {
            res();
        }, 250));
    }
}

export const selectionSort = list => sort(list);