import { NEXT_BUILD_SHORTCUT } from '../../constants/shortcuts'
import useKeyboardShortcuts from '../../hooks/useKeyboardShortcuts'
import { useServlet } from '../../state/store'
import RadioGroup from '../RadioGroup'
import { useOptHandler } from './useStarterFormKeyboardEvents'

export default function StarterFormServlet() {
  const [value, setter, select] = useServlet()
  const handleChange = (event) => setter(event.target.value)

  const next = useOptHandler(
    'servlet',
    value,
    select?.options ?? [],
    handleChange
  )
  useKeyboardShortcuts(NEXT_BUILD_SHORTCUT.keys, next)

  return (
    <RadioGroup
      tabIndex={1}
      label="Embedded Servlet"
      id="servlet"
      name="servlet"
      value={value}
      onChange={handleChange}
      options={select?.options ?? []}
      loading={!select}
      expected={3}
    />
  )
}
