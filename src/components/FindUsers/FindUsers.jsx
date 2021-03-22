import React from 'react';
import css from "./FindUsers.module.css"
// import Pagination from "../Common/Pagination/Pagination";
import User from "./User/User";
import Pagination from "react-js-pagination";

const FindUsers = (props) => {

    //const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const handlePageClick = (page) => {
      props.getUsers(page, props.pageSize);
    }

    const usersElements = props.users.map((userData) => {

      return <User
          className={css.findUsers__user}
          id={userData.id}
          key={userData.id}
          photos={userData.photos}
          name={userData.name}
          status={userData.status}
          location={userData.location}
          followed={userData.followed}
          followUnfollow={props.followUnfollow}
          followingProcess={props.followingProcess}
      />
    })

    return (
        <section className={css.findUsers}>

          {/*<Pagination*/}
          {/*    onPageChanged={props.getUsers}*/}
          {/*    currentPage={props.currentPage}*/}
          {/*    totalItemsCount={props.totalUsersCount}*/}
          {/*    pageSize = {props.pageSize}*/}
          {/*/>*/}

          <Pagination
              activePage={props.currentPage}
              itemsCountPerPage={10}
              totalItemsCount={props.totalUsersCount}
              pageRangeDisplayed={10}
              hideNavigation={props.totalUsersCount < 1}
              hideFirstLastPages={props.totalUsersCount < 1}
              onChange={handlePageClick}
              innerClass={css.pagination}
              activeClass={css.paginationItem__active}
              itemClass={css.paginationItem}
              linkClass={css.paginationItem__link}
          />

          <ul className={css.findUsers__list}>
            {usersElements}
          </ul>
        </section>
    )
}

export default FindUsers;