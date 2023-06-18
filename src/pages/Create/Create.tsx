import { useParams } from 'react-router-dom'
//@ts-ignore
import { ProgressBar, Step } from 'react-step-progress-bar'

import { FormBaseInfo, FormOtherInfo, FormAboutInfo } from '../../components'

import 'react-step-progress-bar/styles.css'
import cn from 'classnames'
import s from './create.module.scss'

export const Create = () => {
    const path = useParams()

    const getPercent = () => {
        let percent = 0
        if (path.step === 'step-1') {
            percent = 0
        }
        if (path.step === 'step-2') {
            percent = 50
        }
        if (path.step === 'step-3') {
            percent = 100
        }
        return percent
    }

    return (
        <div className={s.create}>
            <ProgressBar percent={getPercent()} filledBackground='#5558FA'>
                <Step transition='scale'>
                    {() => (
                        <div
                            className={cn(s.progressLevelIndicator, {
                                [s.notDone]: 0 > getPercent(),
                            })}
                        >
                            {getPercent() > 0 ? (
                                <span className={s.icon}>✔</span>
                            ) : (
                                <span className={s.point}></span>
                            )}
                        </div>
                    )}
                </Step>
                <Step transition='scale'>
                    {() => (
                        <div
                            className={cn(s.progressLevelIndicator, {
                                [s.notDone]: 50 > getPercent(),
                            })}
                        >
                            {getPercent() > 50 ? (
                                <span className={s.icon}>✔</span>
                            ) : (
                                <span className={s.point}></span>
                            )}
                        </div>
                    )}
                </Step>
                <Step transition='scale'>
                    {() => (
                        <div
                            className={cn(s.progressLevelIndicator, {
                                [s.notDone]: 100 > getPercent(),
                            })}
                        >
                            {getPercent() === 100 ? (
                                <span className={s.icon}>✔</span>
                            ) : (
                                <span className={s.point}></span>
                            )}
                        </div>
                    )}
                </Step>
            </ProgressBar>
            {path.step === 'step-1' && <FormBaseInfo />}
            {path.step === 'step-2' && <FormOtherInfo />}
            {path.step === 'step-3' && <FormAboutInfo />}
        </div>
    )
}
