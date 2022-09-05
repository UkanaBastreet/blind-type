import React, { useEffect, useState } from "react"
import { Input } from "./Input"
import { Keyboard } from "./Keyboard"
import { Modal } from "../../Components/Modal/Modal"
import { useNavigate, useParams } from "react-router-dom"
import { engKeys, startValue } from "../../utils/constants"
import {
  blurHandler,
  downHandler,
  rightKeyHandler,
  upHandler,
} from "../../utils/handlers"
import { pushNewGame_AC } from "../../Redux/actions"
import {
  createValue,
  receiveValue,
  removeEventHandlers,
} from "../../utils/functions"
import { useValue } from "../../hooks/useValue"
import "./TrainingPage.scss"

export const TrainingPage = ({ lessons, dispatch, language, ...props }) => {
  const { id } = useParams()
  // const [fetch, loading] = useValue()

  const [value, setValue] = useState(startValue[language])

  const [isRunning, setIsRunning] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  const [index, setIndex] = useState(null)
  const [time, setTime] = useState(null)
  const [date, setDate] = useState(null)

  const [errors, setErrors] = useState([])
  const [chars, setChars] = useState([])

  const [keys, setKeys] = useState(engKeys)

  // let value = isRunning && !isEnded ? lessons[id].value : startValue
  let currentChar = isRunning && index < value.length ? value[index] : " "
  let accuracy = (index - errors.length) / index

  const navigate = useNavigate()

  function start() {
    setIsRunning(true)
    setDate(Date.now())
    setTime(0)
    setIndex(0)
  }
  function pause() {
    setIsRunning(false)
    setIsModal(true)
  }
  function unpause() {
    setIsRunning(true)
    setIsModal(false)
  }
  function restart() {
    setIsRunning(false)
    setIsEnded(false)

    setIsModal(false)
    setDate(null)
    setTime(null)
    setIndex(null)
    setErrors([])
    setKeys((keys) => {
      Object.values(keys).forEach((key) => key.lightOff())
      return { ...keys }
    })
  }
  function end() {
    setIsRunning(false)
    setIsModal(true)
    setIsEnded(true)

    dispatch(
      pushNewGame_AC({
        time,
        index,
        errors,
        chars,
        accuracy,
        speed: 0,
        date,
      })
    )
  }
  function exit() {
    navigate("/lessons")
  }
  function errorHandler(char, currentChar) {
    if (currentChar !== currentChar.toLowerCase() && char === "Shift") return
    if (char === errors[errors.length - 1]?.char) {
      console.log(char, errors[errors.length - 1]?.char)
      return
    }
    let error = {
      index,
      time: Date.now(),
      errorChar: char,
      currentChar,
    }
    setErrors((errors) => [...errors, error])
  }
  function charHandler(currentChar) {
    let char = {
      index,
      time: Date.now(),
      currentChar,
    }
    setChars((chars) => [...chars, char])
  }

  useEffect(() => {
    // setValue(fetch(lessons[id].type))
    setKeys((keys) => {
      Object.values(keys).forEach((key) => key.lightOff())
      return { ...keys }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let timer
    window.keys = keys
    if (index && index >= value.length) {
      end()
    }
    // [ === OPENED === ]
    if (!isRunning && !isModal) {
      setValue(startValue[language])
      rightKeyHandler(keys, setKeys, currentChar)
      window.onkeydown = (event) => {
        if (event.code === "Space") {
          start()
        }
      }
    }
    // [ === RUNNIG === ]
    if (isRunning) {
      if (value === startValue[language]) {
        setValue(receiveValue(lessons[id].type, language, id))
      }
      timer = setInterval(() => {
        setTime((t) => ++t)
      }, 10)
      window.onkeydown = (event) => {
        if (event.key === "Escape") {
          pause()
        }
        downHandler(
          event,
          setKeys,
          currentChar,
          setIndex,
          charHandler,
          errorHandler
        )
      }
      window.onkeyup = (event) => upHandler(event, setKeys)
      window.onblur = () => blurHandler(setKeys)

      rightKeyHandler(keys, setKeys, currentChar)
    }
    // [ === PAUSED === ]
    if (!isRunning && isModal && !isEnded) {
      window.onkeydown = (event) => {
        if (event.key === "Escape") {
          unpause()
        }
        if (event.key.toLowerCase() === "q" && event.altKey) {
          exit()
        }
      }
    }
    // [ === ENDED === ]
    if (isEnded) {
      window.onkeydown = (event) => {
        if (event.code === "Escape") {
          exit()
        }
        if (event.code === "Enter" && event.ctrlKey) {
          restart()
        }
      }
    }

    return () => {
      clearInterval(timer)
      removeEventHandlers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isEnded, isRunning, isModal, value])

  return (
    <div className="training-page">
      {isModal ? (
        <Modal
          isEnded={isEnded}
          exit={exit}
          restart={restart}
          unpause={!isEnded && unpause}
          info={{
            accuracy:
              index >= errors.length
                ? Math.round(((index - errors.length) / index) * 10000) / 100 ||
                  0
                : 0,
            errors: errors,
            index: index,
            cpm: index !== 0 ? index / (time / 6000) : 0,
            wpm:
              index !== 0
                ? value.slice(0, index).split(" ").length / (time / 6000)
                : 0,
            time: time,
            words: value.slice(0, index).split(" ").length - 1,
          }}
        />
      ) : (
        <>
          <Input value={value} index={index} />
          <Keyboard keys={Object.values(keys)} />
        </>
      )}
      {/* <h1 style={{ display: "inline-block" }}>{getTime(time)}</h1> */}
    </div>
  )
}
