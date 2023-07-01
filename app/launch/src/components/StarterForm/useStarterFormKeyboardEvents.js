import { useCallback } from 'react'
import {
  NEXT_APP_TYPE_SHORTCUT,
  NEXT_GORM_SHORTCUT,
  NEXT_JDK_SHORTCUT,
  NEXT_SERVLET_SHORTCUT,
  NEXT_TEST_SHORTCUT,
  NEXT_VERSION_SHORTCUT,
} from '../../constants/shortcuts'

import useKeyboardShortcuts from '../../hooks/useKeyboardShortcuts'

export const useOptHandler = (name, value, opts, handleChange) => {
  return useCallback(() => {
    if (opts.length <= 1 || !value) return // One or less opt, nothing to do here

    const idx = opts.findIndex((l) => l.value === value)
    if (idx === opts.length - 1) {
      handleChange({ target: { name, value: opts[0].value } })
    } else {
      handleChange({
        target: { name, value: opts[idx + 1].value },
      })
    }
  }, [name, value, opts, handleChange])
}

export function useStarterVersionKeyboardEvents(
  handleVersionChange,
  version,
  versions
) {
  const nextVersion = useOptHandler(
    'version',
    version?.value,
    versions,
    handleVersionChange
  )
  useKeyboardShortcuts(NEXT_VERSION_SHORTCUT.keys, nextVersion)
}

export function useStarterFormKeyboardEvents(
  handleChange,
  form,
  { TEST_OPTS, APP_TYPES, JAVA_OPTS, GORM_OPTS, SERVLET_OPTS }
) {
  const nextType = useOptHandler('type', form.type, APP_TYPES, handleChange)
  useKeyboardShortcuts(NEXT_APP_TYPE_SHORTCUT.keys, nextType)

  const nextJavaVersion = useOptHandler('javaVersion', form.javaVersion, JAVA_OPTS, handleChange)
  useKeyboardShortcuts(NEXT_JDK_SHORTCUT.keys, nextJavaVersion)

  const nextGormImpl = useOptHandler('gorm', form.gorm, GORM_OPTS, handleChange)
  useKeyboardShortcuts(NEXT_GORM_SHORTCUT.keys, nextGormImpl)

  const nextServlet = useOptHandler('servlet', form.servlet, SERVLET_OPTS, handleChange)
  useKeyboardShortcuts(NEXT_SERVLET_SHORTCUT.keys, nextServlet)

  const nextTest = useOptHandler('test', form.test, TEST_OPTS, handleChange)
  useKeyboardShortcuts(NEXT_TEST_SHORTCUT.keys, nextTest)
}
