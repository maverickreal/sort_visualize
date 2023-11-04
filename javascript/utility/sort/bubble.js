const getHeight = element => parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

const sort = async list => {
    let flag = false;
    for (let i = 0; i < list.length; ++i) {
        flag = false;
        const randColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        for (let j = 0; j < list.length - i - 1; ++j) {
            const lh = getHeight(list[j]), rh = getHeight(list[j + 1]), originalColorJ = list[j].style.backgroundColor, originalColorJ1 = list[j + 1].style.backgroundColor;
            list[j].style.backgroundColor = 'red';
            list[j + 1].style.backgroundColor = 'blue';
            if (lh > rh) {
                flag = true;
                await new Promise((res, rej) => setTimeout(() => {
                    list[j + 1].style.height = `${lh}px`;
                    res();
                }, 125));
                await new Promise((res, rej) => setTimeout(() => {
                    list[j].style.height = `${rh}px`;
                    list[j].style.backgroundColor = randColor;
                    list[j + 1].style.backgroundColor = originalColorJ1;
                    res();
                }, 125));
            } else {
                await new Promise((res, rej) => setTimeout(() => {
                    list[j].style.backgroundColor = originalColorJ;
                    list[j + 1].style.backgroundColor = originalColorJ1;
                    res();
                }, 250));
            }
        }
        if (!flag) {
            break;
        }
    }
    for (const element of list) {
        element.style.backgroundColor = 'gold';
    }
}

export const bubbleSort = list => sort(list);