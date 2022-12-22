import { adjustScale, getRandom, loadJson } from "./utils";

type Dataset = {
    adj1: string;
    adj2: string;
}

(async () => {
    const [templates, adjectives, names] = await Promise.all([
        loadJson("./templates.json"),
        loadJson("./adjectives.json"),
        loadJson("./names.json"),
    ]);

    const template = getRandom(templates);
    const adj1 = getRandom(adjectives);
    const adj2 = getRandom(adjectives, adj1);
    const dataset: Dataset = { adj1, adj2 };
    const sentence = Object.entries(dataset).reduce((acc, [key, value]) => acc.replace(`*${key}*`, value), template);

    const figure = document.querySelector("figure");
    figure.insertAdjacentHTML("beforeend", `<cite>${sentence}</cite>`);

    const name = getRandom(names);
    figure.insertAdjacentHTML("beforeend", `<figcaption>—${name}<br><i>Greek philosopher</i></figcaption>`);

    adjustScale(figure);
})();
