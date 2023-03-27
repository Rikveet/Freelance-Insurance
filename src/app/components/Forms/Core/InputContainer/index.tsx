import {ReactNode} from "react"
import sharedStyles from "@/app/components/Forms/Core/styles.module.css";
import {motion} from "framer-motion";

type props = {
    children: ReactNode,
    direction: 'col' | 'row'
}
const InputContainer = ({children, direction}: props) => (
    <motion.div className={`${sharedStyles.Inputs} ${direction === 'row' ? sharedStyles.Row : sharedStyles.Col}`}
                layout={'position'}>
        {children}
    </motion.div>
)

export default InputContainer