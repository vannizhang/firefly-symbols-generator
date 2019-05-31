const importAll =(r)=>{
    const filePathLookup = {};

    r.keys().forEach(path=>{
        const fileName = path.split('/')[1];
        filePathLookup[fileName] = r(path);
    });

    return filePathLookup;
};

export {
    importAll
};