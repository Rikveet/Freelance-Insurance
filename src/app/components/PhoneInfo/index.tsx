import style from './index.module.css';
const PhoneInfo = () => {
    return (
        <div className={style.Container}>
            <div className={style.BackgroundFilter}/>
            <div className={style.Text}>
                <p className={style.TextTop}>
                    shevinder sidhu - insurance advisor
                </p>
                <p className={style.TextMiddle}>
                    insurance advisor
                </p>
                <p className={style.TextEnd}>
                    you can trust.
                </p>
            </div>
            <a className={style.Button} href={'tel:4265578080'}>
                <p>CALL TODAY 416-557-8080</p>
            </a>
        </div>
    )
}

export default PhoneInfo;