import s from './Development.module.scss'

export const Development = () => (
    <div className={s.development}>
        <ul className={s.developmentList}>
            <li>Designer:
                <a className={s.link} href='https://t.me/Mrshmalloww'>Anastasia Ilina</a>
            </li>
            <li>Developer:
                <a className={s.link} href='https://github.com/DariaJoy'>Daria Dzhagarian</a>
            </li>
        </ul>      
    </div>
)