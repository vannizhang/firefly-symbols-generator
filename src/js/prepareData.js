import { importAll } from './helper';

const allFireflyImgs = importAll(require.context('../static/Firefly_PointSymbols', false, /\.(png|jpe?g|svg)$/));

const firsflySymbols = Object.keys(allFireflyImgs).map(filename=>{
    const styleName = filename.split('.')[0];
    return {
        name: styleName,
        url: allFireflyImgs[filename]
    }
});

const regroupData = (data=[])=>{
    const groupNames = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];
    const groups = [];

    data.forEach((d,i)=>{

        const groupIdx = parseInt(i / 20);
        const symbolIdx = +d.name.slice(8) - 1;

        if(!groups[groupIdx]){
            groups[groupIdx] = {
                groupName: groupNames[groupIdx],
                symbols: []
            };
        }

        groups[groupIdx].symbols[symbolIdx] = d;

    });

    return groups;
};

const getFireflySymbolsData = ()=>{
    return regroupData(firsflySymbols)
}

export {
    getFireflySymbolsData
};