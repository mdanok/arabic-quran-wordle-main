/*
import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
*/
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="الأعدادات" isOpen={isOpen} handleClose={handleClose}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
      </style>
      <div
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="mt-2 flex flex-col divide-y"
      >
        <SettingsToggle
          settingName="المستوى الصعب"
          flag={isHardMode}
          handleFlag={handleHardMode}
          /*description={HARD_MODE_DESCRIPTION}*/
        />
        <SettingsToggle
          settingName="الوضع الليلي"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="وضع التباين العالي"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          /*description={HIGH_CONTRAST_MODE_DESCRIPTION}*/
        />
      </div>
    </BaseModal>
  )
}
