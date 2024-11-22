import s from './TextField.module.css'

export default function TextField({ placeholder, helpText = '', errorText = '', label, size = 'small' }) {

    // задача 5. передача размера label
    let sizeTemp = 'auto'
    switch (size) {
        case 'small': sizeTemp = '30%'
            break;
        case 'medium': sizeTemp = '65%'
            break;
        case 'large': sizeTemp = '100%'
            break;
        default:
            break;
    }

    return (


        <div style={{ width: sizeTemp }}>

            {/* задача 4. если передан label - рендерим параграф перед полем ввода */}
            {label && <p className={s.textFieldLabel} >{label}</p>}


            {/* задача 1. само поле ввода*/}
            <input className={s.textField} type="text" placeholder={placeholder} />

            {/*задача 3. рендер ошибки или поля подсказки */}
            {errorText !== '' ?
                <span className={s.errorField}>{errorText}</span>
                :
                helpText !== '' && <p className={s.helpText}>{helpText}</p>
            }



        </div>
    )
}
