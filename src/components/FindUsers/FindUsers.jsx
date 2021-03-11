import React from 'react';
import css from "./FindUsers.module.css"
import Pagination from "./Pagination/Pagination";
import User from "./User/User";

const FindUsers = (props) => {
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
          setFollowingProcess={props.setFollowingProcess}
          followingProcess={props.followingProcess}
      />
    })

    return (
        <section className={css.findUsers}>

          <Pagination
              getUsers={props.getUsers}
              currentPage={props.currentPage}
              pagesCount={Math.ceil(props.totalUsersCount / props.pageSize)}
              pageSize = {props.pageSize}
          />

          <ul className={css.findUsers__list}>
            {usersElements}
          </ul>
        </section>
    )
}

export default FindUsers;