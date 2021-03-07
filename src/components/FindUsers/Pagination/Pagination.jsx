import css from "./Pagination.module.css";

const Pagination = (props) => {

  const pages = [];

  for (let i=1; i<=props.pagesCount; i++) {
    pages.push(i);
  }

  const paginationItems = pages.map((page) => {

    let className = `${css.pagination__item}${page === props.currentPage ? " " + css.pagination__itemActive : ""}`;

    return (
        <li className={className} key={page} >
          <button
              onClick={() => {
                props.onPaginationItemClick(page);
              }}>
            {page}
          </button>
        </li>
    )
  })

  return (
    <ul className={css.pagination}>
      {paginationItems}
    </ul>
  )
}

export default Pagination;