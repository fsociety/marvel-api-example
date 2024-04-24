import React, {useContext} from 'react'
import AppContext from "@/context/store";

type Props = {
    numberOfPages: number
}

export default function Pagination({numberOfPages}: Props) {
    const {page, setPage} = useContext(AppContext);

    const Pages = (): JSX.Element[] => {
        let pages: JSX.Element[] = [];
        const maxPageToShow: number = 10;
        let startPage: number = page > Math.ceil(maxPageToShow / 2) ? page - Math.ceil(maxPageToShow / 2) : 0;
        let endPage: number = startPage + (maxPageToShow - 1);
        if (endPage > numberOfPages) {
            endPage = numberOfPages;
            startPage = Math.max(1, endPage - (maxPageToShow - 1));
        }
        
        for (let i = startPage; i < endPage; i++) {
            pages.push(<li key={i} className={`page-item ${i + 1 === page ? 'active' : ''}`}> <a className="page-link" onClick={() => setPage(i + 1)} href="#">{i + 1}</a></li>);
        }
        return pages;
    }

    return (
    <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation">
        <ul className="pagination">
            <li className="page-item" onClick={() => setPage(1)}>
            <a className="page-link" href="#" aria-label="First Page">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <Pages />
            <li className="page-item" onClick={() => setPage(numberOfPages)}>
            <a className="page-link" href="#" aria-label="Last Page">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
        </nav>
    </div>
    )

}