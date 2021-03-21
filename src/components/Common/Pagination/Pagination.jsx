// import css from "./Pagination.module.css";
// import {useState} from "react";
//
// const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {
//
//   const pagesCount = Math.ceil(totalItemsCount / pageSize);
//
//   const allPages = new Array(pagesCount).fill(0).map((_, i) => i + 1);
//
//   const portionCount = Math.ceil(pagesCount / portionSize);
//
//   const [portionNumber, setPortionNumber] = useState(1);
//   let leftPortionBorder = (portionNumber - 1) * portionSize - 1;
//   let rightPortionBorder = portionNumber * portionSize;
//   const portionPages = allPages.slice(leftPortionBorder, rightPortionBorder);
//
//
//   const paginationItems = allPages.map((page) => {
//
//     let className = `${css.pagination__item}${page === currentPage ? " " + css.pagination__itemActive : ""}`;
//
//     return (
//         <li className={className} key={page} >
//           <button
//               onClick={() => onPageChanged(page, pageSize)}>
//             {page}
//           </button>
//         </li>
//     )
//   })
//
//   return (
//     <ul className={css.pagination}>
//       {paginationItems}
//     </ul>
//   )
// }
//
// export default Pagination;