import css from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friendElements = props.friends.map( (friend) => {
    return <Friend data={friend}/>
      }
  );

  let number_of_displayed_objects = 3;

  return (
      <section className={css.friends}>
        <h3 className={css.friends__title}>Друзья</h3>

        <ul className={css.friends__list}>
          {friendElements.slice(number_of_displayed_objects - 1).map( (element) => <li className={css.friends__listItem}>{element}</li> )}
        </ul>

      </section>
  )
}

export default Friends