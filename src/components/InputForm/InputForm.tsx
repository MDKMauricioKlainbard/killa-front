import style from './style.module.scss'

export default function InputForm({ name, value, onChange, type, placeholder }: {
    name: string,
    value: string | number | undefined | readonly string[] | boolean,
    onChange: any,
    type: 'password' | 'checkbox' | 'email' | 'name',
    placeholder: string,
}) {
    return (
        <input
            className={style.input}
            name={name}
            value={type === 'checkbox' ? '' : value as string | number | undefined | readonly string[]}
            checked={type === 'checkbox' ? value as boolean : false}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        >
        </input>
    )
}