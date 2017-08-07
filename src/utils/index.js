const parseData = dataStr => {
    let date = new Date(dataStr),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export {
    parseData
};