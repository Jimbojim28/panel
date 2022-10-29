import ContentContainer from '@/components/elements/ContentContainer'
import FlashMessageRender from '@/components/elements/FlashMessageRenderer'
import { useStoreActions, useStoreState } from '@/state'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { Switch } from '@mantine/core'
import { ReactNode, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

export interface PageContentBlockProps {
  title?: string
  className?: string
  showFlashKey?: string
  children?: ReactNode
}

const PageContentBlock = ({
  title,
  showFlashKey,
  className,
  children,
}: PageContentBlockProps) => {
  const theme = useStoreState((state) => state.settings.data!.theme)
  const setTheme = useStoreActions((actions) => actions.settings.setTheme)
  const nodeRef = useRef(null)

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  return (
    <CSSTransition nodeRef={nodeRef} timeout={150} classNames='fade' appear in>
      <>
        <ContentContainer className={className}>
          {showFlashKey && (
            <FlashMessageRender byKey={showFlashKey} className='mb-4' />
          )}
          {children}
        </ContentContainer>
        <ContentContainer>
          <div className='flex justify-between'>
            <p className='text-xs text-stone-500'>
              &copy; 2020 - {new Date().getFullYear()}{' '}
              <a href='https://performave.com' target='_blank'>
                Performave
              </a>
            </p>

            <Switch
              size='md'
              checked={theme === 'dark'}
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              onLabel={<MoonIcon className='w-4 h-4' />}
              offLabel={<SunIcon className='w-4 h-4 text-black' />}
            />
          </div>
        </ContentContainer>
      </>
    </CSSTransition>
  )
}

export default PageContentBlock
