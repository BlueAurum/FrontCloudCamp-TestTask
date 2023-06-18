import { Button } from '..'
import SuccessIcon from '../../../public/assets/icon/successIcon.png'
import ErrorIcon from '../../../public/assets/icon/errorIcon.png'
import CloseIcon from '../../../public/assets/icon/closeIcon.png'
import s from './warningModal.module.scss'

interface WarningModalProps {
    isSuccess: boolean | null
    isLoading: boolean
    isOpen: boolean
    onClick: () => void
    errorHandler: () => void
    successHandler: () => void
}

export const WarningModal = ({
    isSuccess,
    isOpen,
    onClick,
    errorHandler,
    successHandler,
    isLoading,
}: WarningModalProps) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div className={s.modalHeader}>
                            {isSuccess ? (
                                <div className={s.title}>Форма успешно отправлена</div>
                            ) : (
                                <div className={s.closeBlock}>
                                    <span className={s.title}>Ошибка</span>{' '}
                                    <img
                                        onClick={onClick}
                                        className={s.closeIcon}
                                        src={CloseIcon}
                                        alt='close'
                                    />
                                </div>
                            )}
                        </div>
                        <div className={s.modalBody}>
                            <img src={isSuccess ? SuccessIcon : ErrorIcon} />
                        </div>
                        <div className={s.modalFooter}>
                            <Button
                                onClick={isSuccess ? successHandler : errorHandler}
                                className={isSuccess ? s.successBtn : s.errorBtn}
                            >
                                {isSuccess ? 'На главную' : 'Закрыть'}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
