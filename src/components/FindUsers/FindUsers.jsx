import React from 'react';
import css from "./FindUsers.module.css"
import User from "./User/User";
import Pagination from "./Pagination/Pagination";

const FindUsers = (props) => {
    const usersElements = props.users.map((userData) => {
      return <User
          className={css.findUsers__user}
          key={userData.id}
          photos={userData.photos}
          name={userData.name}
          status={userData.status}
          location={userData.location}
          followed={userData.followed}
          followUnfollow = {() => {
            props.followUnfollow(userData.id)
          }}
      />
    })

    return (
        <section className={css.findUsers}>

          <Pagination
              onPaginationItemClick={props.onPaginationItemClick}
              currentPage={props.currentPage}
              pagesCount={Math.ceil(props.totalUsersCount / props.pageSize)}
          />

          <ul className={css.findUsers__list}>
            {usersElements}
          </ul>
        </section>
    )
}

export default FindUsers;