export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let pagesResult = []
    for (let i=0; i<totalPages; i++) {
        pagesResult.push(i+1);
    }
    return pagesResult;
}