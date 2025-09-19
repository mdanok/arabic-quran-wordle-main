export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['عمل جيد!', 'رائع', 'احسنت!']
export const GAME_COPIED_MESSAGE = 'تم نسخ اللعبة إلى الحافظة'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'يجب أن تكون الكلمة من 5 حروف'
export const WORD_NOT_FOUND_MESSAGE = 'هذا التخمين غير موجود في قاموس اللعبة'
export const HARD_MODE_ALERT_MESSAGE =
  'يمكنك تفعيل المستوى الصعب في بداية اللعبة فقط'
export const HARD_MODE_DESCRIPTION =
  'يجب استخدام أي تلميحات تم الكشف عنها في التخمينات اللاحقة'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'لتحسين رؤية الألوان'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `الكلمة كانت ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `يجب عليك استخدام حرف الـ ${guess} في الموضع رقم ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `التخمين يجب ان يتضمن الحرف الـ ${letter}`
export const ENTER_TEXT = '↵'
export const DELETE_TEXT = 'مسح'
export const STATISTICS_TITLE = 'إحصائيات'
export const GUESS_DISTRIBUTION_TEXT = 'توزيع التخمينات'
export const NEW_WORD_TEXT = 'الكلمة القادمة بعد'
export const SHARE_TEXT = 'شارك'
export const SHARE_FAILURE_TEXT =
  'غير قادر على مشاركة النتائج. هذه الميزة متاحة فقط في السياقات الآمنة (HTTPS) ، في بعض أو كل المتصفحات الداعمة.'
export const MIGRATE_BUTTON_TEXT = 'نقل'
export const MIGRATE_DESCRIPTION_TEXT = 'انقر هنا لنقل إحصائياتك إلى جهاز جديد.'
export const TOTAL_TRIES_TEXT = 'عدد المحاولات'
export const SUCCESS_RATE_TEXT = 'نسبة النجاح'
export const CURRENT_STREAK_TEXT = 'تتالي مرات الربح الحالية'
export const BEST_STREAK_TEXT = 'أفضل تتالي ربح'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'أنت تستخدم مستعرضًا مضمنًا وقد تواجه مشكلات في مشاركة نتائجك أو حفظها. نحن نشجعك بدلاً من ذلك على استخدام المتصفح الافتراضي لجهازك.'
export const DATEPICKER_TITLE = 'اختر تاريخًا في الماضي'
export const DATEPICKER_CHOOSE_TEXT = 'اختار'
export const DATEPICKER_TODAY_TEXT = 'اليوم'
export const ARCHIVE_GAMEDATE_TEXT = 'تاريخ اللعب'
