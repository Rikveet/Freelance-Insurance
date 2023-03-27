import {ReactNode, useContext} from "react";
import styles from './index.module.css';
import {useRouter} from "next/navigation";
import {CurrentSection} from "@/app/context/CurrentSection";

type props = {
    children: ReactNode,
    className?: string,
    id?: string,
    height?: string
}
const Section = ({children, className='', height = '100vh', id}: props) => {
    const router = useRouter();
    const {setSection} = useContext(CurrentSection);
    return (
        <div
            onMouseEnter={async ()=>{
              if(id){
                  await router.push('#' + id)
                  setSection('#' + id)
              }
            }}
            {...{id}}
            className={`${styles.Section} ${className}`}
            style={className===''?{...{height}}:{}}>
            {children}
        </div>
    )
}
export default Section;