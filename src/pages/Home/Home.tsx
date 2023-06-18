import { Avatar } from "../../components"
import { FormHome } from "../../components"

import s from './home.module.scss'

export const Home = () => {

    return (
        <div className={s.home}>
            <Avatar name="Якуб" surname="Ибрагимов" />
            <FormHome />
        </div>
    )
}