import Icon from '../../../public/assets/icon/folderIcon.png'
import s from './avatar.module.scss'

interface AvatarProps {
    name: string
    surname: string
    imageUrl?: string
}

export const Avatar = ({ name, surname, imageUrl }: AvatarProps) => {

    return (
        <div className={s.avatar}>
            <div className={s.avatarIconWrapper}>
                {
                    imageUrl ? <img className={s.userPhoto} src={imageUrl} /> : <div>{name[0]} {surname[0]}</div>
                }
            </div>
            <div>
                <div className={s.userName}>{name} {surname}</div>
                <div className={s.userLinks}>
                    <a href='https://t.me/ibragimov_yakub' className={s.link}>
                        <img src={Icon} />
                        <span className={s.linkText}>Telegram</span>
                    </a>
                    <a href='https://github.com/BlueAurum' className={s.link}>
                        <img src={Icon} />
                        <span className={s.linkText}>GitHub</span>
                    </a>
                    <a href='https://github.com/BlueAurum/myResume.git' className={s.link}>
                        <img src={Icon} />
                        <span className={s.linkText}>Resume</span>
                    </a>
                </div>
            </div>
        </div>
    )
}