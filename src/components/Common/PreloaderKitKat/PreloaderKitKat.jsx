import css from './PreloaderKitKat.module.css';

const PreloaderKitKat = (props) => {
  return (
      <figure>
        <div className={`${css.dot} ${css.white}`}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </figure>
  )
}

export default PreloaderKitKat