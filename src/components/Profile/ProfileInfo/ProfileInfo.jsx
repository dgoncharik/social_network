import css from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preoader/Preloader";

const ProfileInfo = (props) => {

  if (props.profile === null) {
    return <Preloader/>
  }

  const getContactElements = (obj) => {
    const arrLi = [];

    for (let [contact, value] of Object.entries(obj)) {

      if (value) {
        arrLi.push(
          <li>
            {`${contact}: `} <a target='_blank' href={value}>{value}</a>
          </li>);
      }

    }

    return arrLi;
  }

  return (
      <section className={css.profileInfo}>
        <div className={css.profileInfo__img}>
          <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"/>
        </div>

        <div className={css.profileInfo__description}>
          <img className={css.avatar} src={props.profile.photos.large}/>
          <p>
            {'Имя: ' + props.profile.fullName}
          </p>
          <p>
            {'Ищу работу: ' +  (props.profile.lookingForAJob ? 'Да' : 'Нет')}
          </p>
          <p>
            {'Описание о работе: ' + props.profile.lookingForAJobDescription}
          </p>

          <ul>
            Контакты: <br/>
            {getContactElements(props.profile.contacts)}
          </ul>
        </div>
      </section>
  )
}

export default ProfileInfo