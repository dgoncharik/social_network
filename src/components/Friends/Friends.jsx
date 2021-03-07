import css from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friendElements = props.friends.map( (friend) => {

    return <Friend
        key={friend.id}
        className={css.friends__listItem}
        data={friend}
    />
      }
  );

  const number_of_displayed_objects = 3;

  return (
      <section className={css.friends}>
        <h3 className={css.friends__title}>Друзья</h3>

        <ul className={css.friends__list}>
          {friendElements.slice(number_of_displayed_objects - 1)}
        </ul>

      </section>
  )
}

export default Friends