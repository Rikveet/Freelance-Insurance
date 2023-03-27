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
            <button  className={style.Button}>
                CALL TODAY 416-557-8080
            </button>
        </div>
    )
}

export default PhoneInfo;