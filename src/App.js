import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { Header } from './Components/Header';
import { Info } from './Components/Info';
import { LessonPage } from './Components/LessonPage/LessonPage';
import { Modal } from './Components/Modal';
import { Button } from './Components/UI/Button/Button';
import { engKeys, engValue, getTime, keyboardArr, } from './Helpers/utils/utils';
import { initialState, reducer, setKeys_AC } from './Reducers/LessonCycleReducer';

function App() {
  Array.prototype.remove = function (value) {
    delete this[this.indexOf(value)]
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(dispatch)
  const onKeyDown = (e) => {
    e.preventDefault()
    let newKeys = state.keys.map(key => {
      if (key.classList.indexOf(state.isStarted ? 'wrongKey' : 'activeKey') === -1) {
        if (e.nativeEvent.code === key.code) {
          if (key.name !== state.value[state.keyIndex]) {
            if (state.isStarted) {
              // setErrors(count => count + 1)
            }
            // setIsError((state.isStarted && !state.isModal) ? true : false)
            key.classList.push(state.isStarted ? 'wrongKey' : 'activeKey')
          } else {
            key.classList.remove('rightKey')
            key.classList.remove(state.isStarted ? 'wrongKey' : 'activeKey')
            key.classList.push('activeKey')
            if (state.isStarted) {
              // incrementCount()
            }
          }
        }
      }
      return key
    })
    dispatch(setKeys_AC(newKeys))
  }
  const onKeyUp = (e) => {
    let newKeys = state.keys.map(key => {
      // if (e.code === key.code) {
        key.classList.remove(state.isStarted ? 'wrongKey' : 'activeKey')
      // }
      return key
    })
    dispatch(setKeys_AC(newKeys))
  }

  const setLanguage = (lang) => {
    console.log(lang)
  }
  return (
    <div className="App"  >
      <Header
        setLanguage={setLanguage}
      />
      <Info
        // isInfo={isInfo}
        // setIsInfo={setIsInfo}
        info={state}
      />
      {/* {isModal
        ?
        <Modal
          // pause={pause}
          // unpause={unpause}
          // isStarted={isStarted}
          // enteredSymbols={count}
          // setIsModal={setIsModal}
          // errors={errors}
          // time={getTime(time - pauseTime)}
          // accuracy={(((engValue.length - errors) / engValue.length) * 100).toFixed(2)}
          // restart={restart}
        />
        : */}
      <LessonPage
        keys={state.keys}
        count={state.count}
        inputValue={state.value}
        onKeyDownHandler={onKeyDown}
        onKeyUpHandler={onKeyUp}
        isError={state.isError}
      />
      {/* } */}
    </div >
  );
}

export default App;
