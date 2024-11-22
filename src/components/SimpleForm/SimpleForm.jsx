import Button from "../Button/Button";
import TextField from "../TextField/TextField";

export default function SimpleForm() {
    const btnPress = (event) => {
        event.preventDefault()
        console.log(`Форма отправлена.`);
    }

    return (
        <form style={{
            border: '1px solid red',
            margin: '8px',
            padding: '8px'
        }}>
            <TextField placeholder='Пожалуйста, укажите имя' label='Имя' />
            <TextField placeholder='Укажите Вашу должность' label='Должность' />
            <Button buttonText='КНЁПЪКА' clickHandler={btnPress} />
        </form>
    )
}
