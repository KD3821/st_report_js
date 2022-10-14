import React from 'react';
import {getPagesArray} from "../../../utils/pages";


const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            <span className="page" onClick={ () => changePage(page>1 ? page-1: page) }>PREV</span>
            {pagesArray.map(p =>
                <span
                    onClick={ () => changePage(p) }
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
            <span className="page" onClick={ () => changePage(page < totalPages ? page+1: page)}>NEXT</span>
        </div>
    );
};

export default Pagination;