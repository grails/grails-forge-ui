// Footer.js
import React, { useState, useEffect } from 'react'
import { Button } from 'react-materialize'
import Icon from 'react-materialize/lib/Icon'
import InfoButton from '../InfoButton'
import Getter from '../Links/GetterLink'
import GitHub from '../Links/GitHubLink'
import MailToLink from '../Links/MailToLink'
import Twitter from '../Links/TwitterLink'
import ShareModal from '../NextSteps/ShareModal'

const Footer = ({ info, theme, onToggleTheme, onShowInfo, sharable }) => {
  const [active, setActive] = useState(false)
  const toggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setActive((a) => !a)
  }

  useEffect(() => {
    const listener = (e) => {
      setActive(false)
    }
    window.addEventListener('click', listener)
    return () => window.removeEventListener('click', listener)
  }, [])
  return (
    <footer className="container mn-footer-container">
      <div className={`icon-wrapper ${active && 'active'}`}>
        <div
          className="mobile-icon-control"
          style={{ zIndex: 4000 }}
          onClick={toggle}
        >
          <Button floating className={`${theme} header-icon`}>
            <Icon>add</Icon>
          </Button>
        </div>
        <div>
          <InfoButton theme={theme} className="header-icon" />
        </div>
        <ShareModal
          sharable={sharable}
          theme={theme}
          trigger={
            <div>
              <Button floating className={`${theme} header-icon`}>
                <Icon className="header-icon">share</Icon>
              </Button>
            </div>
          }
        />
        <div>
          <Button
            floating
            className={`${theme} header-icon`}
            onClick={onToggleTheme}
          >
            <Icon>brightness_medium</Icon>
          </Button>
        </div>
        <div>
          <GitHub theme={theme} className="header-icon" />
        </div>
        <div>
          <Twitter theme={theme} className="header-icon" />
        </div>
        <div>
          <Getter theme={theme} className="header-icon" />
        </div>
        <div>
          <MailToLink theme={theme} className="header-icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
