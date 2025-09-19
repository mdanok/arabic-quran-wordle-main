import { useEffect } from 'react'

import { DELETE_TEXT, ENTER_TEXT } from '../../constants/strings'
import { getStatuses } from '../../lib/statuses'
import { localeAwareUpperCase } from '../../lib/words'
import { Key } from './Key'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
  isBackSpace?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
  isBackSpace,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'Enter') {
      onEnter()
    } else if (value === 'Backspace') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (
          (key.length === 1 && key !== 'ـ' && key >= 'ا' && key <= 'ي') ||
          key === 'ئ' ||
          key === 'ء' ||
          key === 'أ' ||
          key === 'ء' ||
          key === 'ؤ' ||
          key === 'آ' ||
          key === 'إ'
        ) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="mb-1 flex justify-center">
        {['آ', 'أ', 'إ', 'ئ', 'ؤ', 'ء'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="mb-1 flex justify-center">
        {['ج', 'ح', 'خ', 'ه', 'ع', 'غ', 'ف', 'ق', 'ث', 'ص', 'ض'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="mb-1 flex justify-center">
        {['ط', 'ك', 'م', 'ن', 'ت', 'ا', 'ل', 'ب', 'ي', 'س', 'ش'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Key
          width={65.4}
          color="white"
          bgcolor="rgb(220, 53, 69)"
          value="Backspace"
          onClick={onClick}
          isBackSpace={true}
        >
          {DELETE_TEXT}
        </Key>

        {['د', 'ظ', 'ز', 'و', 'ة', 'ى', 'ر', 'ذ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key
          width={65.4}
          color="white"
          bgcolor="rgb(0, 123, 255)"
          value="Enter"
          onClick={onClick}
        >
          {ENTER_TEXT}
        </Key>
      </div>
    </div>
  )
}
