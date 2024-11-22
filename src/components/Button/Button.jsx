import s from './Button.module.css'

export default function Button({ buttonText, clickHandler }) {
    return (
        <div>
            <button className={s.btn} onClick={clickHandler}>
                {buttonText}
            </button>
        </div>
    )
}
