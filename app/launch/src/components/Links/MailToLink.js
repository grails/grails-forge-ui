// MailToLink.js
import React from 'react'

import MailToIcon from '@material-ui/icons/MailOutline'

export const MailToLink = ({ className, theme }) => {
  const backgroundColor =
    theme === 'dark' ? 'var(--theme-light)' : 'var(--theme-dark)'
  const color = theme === 'dark' ? 'var(--theme-dark)' : 'white'

  return (
    <a
      href="mailto:info@grails.org"
      aria-label="Email the Grails Team"
      title="Email the Grails Team"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor,
      }}
      className={className}
    >
      <MailToIcon className="mailto" style={{ color }} />
    </a>
  )
}
export default MailToLink
