export const loadJson = (path: string): Promise<string[]> => fetch(path).then(r => r.json());

export const getRandom = (list: string[], exception?: string): string => {
    const result = list[Math.round(Math.random() * list.length)];
    return result === exception ? getRandom(list, exception) : result;
};

export const adjustScale = (element: HTMLElement): void => {
    const adjustScaleOnce = () => {
        const { innerHeight, innerWidth } = window;
        const { clientHeight, clientWidth } = element;
        const scale = Math.min(innerHeight/clientHeight, innerWidth/clientWidth);
        element.style.transform = `scale(${scale})`;
    }
    adjustScaleOnce();
    window.addEventListener("resize", adjustScaleOnce);
}

