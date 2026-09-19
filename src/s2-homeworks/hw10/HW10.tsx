import React from 'react'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer'
import {Loader} from './Loader'
import {useAppDispatch} from "./useAppDispatch";
import {useAppSelector} from "./useAppSelector";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.loading.isLoading);

  let isLoading = false

  const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    dispatch(loadingAC(true))

    // setTimeout
    setTimeout(() => {
      dispatch(loadingAC(false))
    },1500)
  }

  return (
      <div id={'hw10'}>
        <div className={s2.hwTitle}>Homework #10</div>

        <div className={s2.hw}>
          {loading ? (
              <div id={'hw10-loading'}>
                <Loader/>
              </div>
          ) : (
              <SuperButton
                  id={'hw10-button-start-loading'}
                  onClick={setLoading}
              >
                Set loading...
              </SuperButton>
          )}
        </div>
      </div>
  )
}

export default HW10
