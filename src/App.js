import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './Components/Header';
import { LessonPage } from './Components/LessonPage/LessonPage';
import { Modal } from './Components/Modal';
import { engValue, getTime, keyboardArr, } from './utils';

function App() {
  const [keys, setKeys] = useState([])
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('    Press "Space" to start    ')
  const [isModal, setIsModal] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [errorsCount, setErrorsCount] = useState(0)
  const [timeStart, setTimeStart] = useState(0)
  const [timeEnd, setTimeEnd] = useState(0)
  const keyIndex = 15

  Array.prototype.remove = function (value) {
    delete this[this.indexOf(value)]
  }

  useEffect(() => {
    // console.log('mount')
    setKeys(keyboardArr)
    return () => {
      console.log('unmount')
    }
  }, []);
  useEffect(() => {
    if (isStarted) {
      setValue(engValue.slice(0 + count, 30 + count))
    } else {
      setValue('    Press "Space" to start    ')
    }
    if (isStarted && count === engValue.length - 15) {
      end(new Date())
    }
  }, [count, isStarted])
  useEffect(() => {
    if (isStarted) {
      setKeys(keys => keys.map((key) => {
        key.classList.remove('wrongKey')
        key.classList.remove('rightKey')
        if (key.name === value[keyIndex]) {
          key.classList.push('rightKey')
        }
        return key
      }));
    }
  }, [value])
  useEffect(() => {
    if (isModal) {
      setKeys(keyboardArr)
    }
  }, [isModal])

  function start(timeStamp) {
    setTimeStart(timeStamp)
    setIsStarted(true)
  }
  function pause(){
    
  }
  function end(timeStamp) {
    setTimeEnd(timeStamp)
    setIsStarted(false)
    setIsModalhandler(true)
  }
  function setIsModalhandler(isModal) {
    setIsModal(isModal)
  }
  function setCountHandler(count_) {
    setCount(count_)
  }
  const restart = () => {
    setIsStarted(false)
    setCount(0)
  }

  const onKeyDown = useCallback((e) => {
    // console.log('e', e)
    if (e.code === "Escape") {
      end(new Date())
    }
    if (e.code === 'Space' & !isStarted) {
      start(new Date())
    }
    // console.log(count, engValue.length)
    setKeys(keys.map(key => {
      if (key.classList.indexOf('wrongKey') === -1) {
        if (e.nativeEvent.code === key.code) {
          if (key.name !== value[keyIndex]) {
            setErrorsCount(count => count + 1)
            key.classList.push(isStarted ? 'wrongKey' : 'activeKey')
          }
          if (key.name === value[keyIndex]) {
            key.classList.remove('rightKey')
            key.classList.remove(isStarted ? 'wrongKey' : 'activeKey')
            key.classList.push('activeKey')
            if (isStarted) {
              setCountHandler(count => count + 1)
            }
          }
        }
      }
      return key
    }))
  }, [count, value, keys])

  const onKeyUp = (e = null) => {
    setKeys(keys.map(key => {
      // if (key.code === e.code) {
      key.classList.remove('wrongKey')
      key.classList.remove('activeKey')
      // }
      return key
    }))
  }

  // ====================================================

  return (
    <div className="App"  >
      <Header />
      {count}
      {isModal
        ?
        <Modal
          setIsModal={setIsModal}
          restart={restart}
          errorsCount={errorsCount}
          time={getTime(timeEnd - timeStart)}
        />
        :
        <LessonPage
          restart={restart}
          keys={keys}
          count={count}
          inputValue={value}
          onKeyDownHandler={onKeyDown}
          onKeyUpHandler={onKeyUp}
        // isError={isError}
        // inputValue={value}
        />}
    </div >
  );
}

export default App;
