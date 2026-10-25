import React, {useEffect} from 'react'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useAppDispatch} from "../hw10/useAppDispatch"
import {useAppSelector} from "../hw10/useAppSelector"
import {changeThemeId} from './bll/themeReducer'
import s from './HW12.module.css'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
  {id: 1, value: 'light'},
  {id: 2, value: 'blue'},
  {id: 3, value: 'bark'},
]

const HW12 = () => {
  // взять ид темы из редакса
  // const themeId = 1
  const themeId = useAppSelector(state => state.theme.themeId)
  const dispatch = useAppDispatch()

  const selectStyles: Record<number, string> = {
    1: s.selectLight,
    2: s.selectBlue,
    3: s.selectDark,
  }

  const change = (id: number) => { // дописать функцию
    dispatch(changeThemeId(id))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  return (
      <div id={'hw12'}>
        <div id={'hw12-text'} className={s2.hwTitle}>
          Homework #12
        </div>

        <div className={s2.hw}>
          <span className={s.label}>Выберите тему</span>
          <SuperSelect
              id={'hw12-select-theme'}
              className={selectStyles[themeId]}
              // сделать переключение тем
              value={themeId}
              options={themes}
              onChangeOption={change}
          />
        </div>
      </div>
  )
}

export default HW12
