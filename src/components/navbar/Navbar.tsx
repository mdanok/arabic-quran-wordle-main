import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  isGameLost: boolean
  correctWord: string
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
  isGameLost,
  correctWord,
}: Props) => {
  return (
    <div
      style={{ width: '18rem' }}
      className="mx-auto mt-1 mb-1 flex items-center"
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap');
      </style>
      <p
        style={{ fontFamily: 'Amiri Quran, serif', fontSize: '1.40rem' }}
        className="grow dark:text-white"
      >
        <a href={window.location.href} target="_blank" rel="noreferrer">
          {GAME_TITLE}
        </a>
      </p>
      {isGameLost && (
        <div className="flex">
          <p className="ml-16 grow dark:text-white">
            <div className="pointer-events-auto left-1/2 z-20 mt-2 max-w-sm -translate-x-1/2 transform overflow-hidden rounded-lg bg-rose-500 text-white ring-1 ring-black ring-opacity-5">
              <div className="p-2">
                <p className="text-center text-sm font-medium">
                  الكلمة كانت {correctWord}
                </p>
              </div>
            </div>
          </p>
        </div>
      )}
      <div className="flex">
        <CogIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsSettingsModalOpen(true)}
        />
        <ChartBarIcon
          className="mr-0 h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsStatsModalOpen(true)}
        />
      </div>
      <div className="flex">
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        {ENABLE_ARCHIVED_GAMES && (
          <CalendarIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsDatePickerModalOpen(true)}
          />
        )}
      </div>
    </div>
  )
}
