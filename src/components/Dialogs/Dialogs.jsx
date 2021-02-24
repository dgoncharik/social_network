import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => {
      return <DialogItem state={dialog}/>
    })

  let messageselements = props.state.messages.map(el => {
    return <Message message={el.message} myMessage={el.myMessage}/>
  })


  return (
      <section className={css.dialogs}>

        <ul className={css.dialogs__list}>
          {dialogsElements.map(dialog => <li>{dialog}</li>)}
        </ul>

        <section className={css.messages}>
          {messageselements}
        </section>

      </section>
  )
}

export default Dialogs