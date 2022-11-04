import ContentContainer from '@/components/elements/ContentContainer'
import { Button } from '@mantine/core'
import { useEffect } from 'react'

interface Props {
  logout: () => void
  visible?: boolean
}

const NavigationDropdown = ({ logout, visible }: Props) => {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('fixed', 'w-full')
    } else {
      document.body.classList.remove('fixed', 'w-full')
    }
  }, [visible])

  return (
    <>
      {visible && (
        <div className='inset-x-0 top-[56px] pt-1.5 bottom-0 block fixed bg-white z-[2000] overflow-y-scroll'>
          <ContentContainer>
            <div className='flex flex-col w-full'>
              <Button variant='subtle' color='red' onClick={logout}>
                Logout
              </Button>
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  )
}

export default NavigationDropdown
