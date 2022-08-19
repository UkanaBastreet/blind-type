import React, { useEffect, useState } from "react"
import { Input } from "./Input"
import { Keyboard } from "./Keyboard"
import { Modal } from "../../Components/Modal"
import { useNavigate, useParams } from "react-router-dom"
import { engKeys, startValue } from "../../utils/constants"
import {
  blurHandler,
  downHandler,
  rightKeyHandler,
  upHandler,
} from "../../utils/handlers"
import { pushNewGame_AC } from "../../Redux/actions"
import { removeEventHandlers } from "../../utils/functions"

export const TrainingPage = ({ lessons, dispatch, ...props }) => {
  const { id } = useParams()

  const [isRunning, setIsRunning] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  const [index, setIndex] = useState(null)
  const [time, setTime] = useState(null)
  const [date, setDate] = useState(null)

  const [errors, setErrors] = useState([])
  const [chars, setChars] = useState([])

  const [keys, setKeys] = useState({ ...engKeys })

  let value = isRunning && !isEnded ? lessons[id].value : startValue
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
  function repeat() {
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
        accuracy,
        speed: 0,
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
      time: Date.now(),
      char,
      currentChar,
    }
    setErrors((errors) => [...errors, error])
  }
  function charHandler(currentChar) {
    let char = {
      time: Date.now(),
      currentChar,
    }
    setChars((chars) => [...chars, char])
  }

  useEffect(() => {
    window.keys = keys
    if (index >= value.length) {
      end()
    }
    // [ === OPENED === ]
    if (!isRunning && !isModal) {
      rightKeyHandler(keys, setKeys, currentChar)
      window.onkeydown = (event) => {
        if (event.code === "Space") {
          start()
        }
      }
    }
    // [ === RUNNIG === ]
    if (isRunning) {
      rightKeyHandler(keys, setKeys, currentChar)
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
    }
    // [ === PAUSED === ]
    if (!isRunning && isModal && !isEnded) {
      window.onkeydown = (event) => {
        if (event.key === "Escape") {
          unpause()
        }
      }
    }
    // [ === ENDED === ]
    if (isEnded) {
    }

    return () => {
      removeEventHandlers()
    }
  }, [index, isEnded, isRunning, isModal])

  return (
    <div className="training-page">
      {isModal ? (
        <Modal
          exit={exit}
          repeat={repeat}
          unpause={!isEnded && unpause}
          info={{
            accuracy: Math.floor((index - errors.length) / index) * 100,
            errors: errors,
            index: index,
            speed: 1,
            time: time,
          }}
        />
      ) : (
        <>
          <Input value={value} index={index} />
          <Keyboard keys={Object.values(keys)} />
        </>
      )}
    </div>
  )
}
