import css from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
      <section className={css.profileInfo}>
        <div className={css.profileInfo__img}>
          <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"></img>
        </div>

        <div className={css.profileInfo__description}>
          ava + description
        </div>
      </section>
  )
}

export default ProfileInfo