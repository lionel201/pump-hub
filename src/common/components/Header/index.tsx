import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { Button, Drawer } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ModalConnectWallet } from '@/common/components/modals/ModalConnectWallet'
import appActions from '@/stores/app/actions'
import { RootState } from '@/stores/rootReducer'
import { ellipseAddress } from '@/utils'

interface ISideMenuProps {
  currentPageName: any
  onRouteSelected: () => void
}

const PageHeader: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const app = useSelector((sate: RootState) => sate.app)
  const router = useRouter()
  const dispatch = useDispatch()
  const { connected, account } = useWallet()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const h = window.scrollY
      setScrollY(h)
    })
  }, [])

  const handleCloseModalConnect = () => {
    dispatch(appActions.SET_SHOW_CONNECT(false))
  }

  const handleShowConnect = () => {
    dispatch(appActions.SET_SHOW_CONNECT(true))
  }

  const SideMenu = ({ currentPageName, onRouteSelected }: ISideMenuProps) => {
    return (
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center px-5">
          <div className="dark:text-white text-xl font-bold">Menu</div>
          <i onClick={onRouteSelected} className="fa-regular fa-circle-xmark text-gray-500 text-2xl"></i>
        </div>
        <div className="w-full flex flex-col"></div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`z-20 w-full flex fixed items-center pb-0 ${scrollY > 10 ? 'bg-[#000]' : 'bg-[#00000080]'} top-0 right-0 h-[60px]  sm:h-[75px] px-0 mobile:py-2`}
      >
        <div className="md:container max-w-[1980px] md:mx-auto w-full px-4 lg:px-8">
          <div className="mx-auto h-full w-full top-0 left-0 flex items-center justify-between relative">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="h-full flex items-center justify-center">
                <Image className="w-[140px] h-auto" src={require('@/common/assets/images/logo.png')} alt="" />
              </Link>
              <input
                className="hidden md:flex flex-1 max-w-[680px] placeholder:text-[#FF5811] text-[#FF5811] border h-[47px] border-[#FF5811] p-3 mx-16  bg-transparent"
                placeholder="Search for token..."
              />
              <div className=" items-center hidden md:flex">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link href="" className="text-[#FF5811] underline font-bold text-base">
                      Start a new coin
                    </Link>
                  </li>
                  <div className="w-[1px] h-[22px] bg-[#FF5811]"></div>
                  <li>
                    <Link href="" className="text-[#FF5811] underline font-bold text-base">
                      How it works
                    </Link>
                  </li>
                  <div className="w-[1px] h-[22px] bg-[#FF5811]"></div>
                  <li>
                    {connected ? (
                      <Button className="text-[#FF5811] border-0 bg-transparent font-bold text-base">
                        <span className="underline">{ellipseAddress(account?.address, 4)}</span>
                      </Button>
                    ) : (
                      <Button
                        onClick={handleShowConnect}
                        className="text-[#FF5811] border-0 bg-transparent font-bold text-base"
                      >
                        <span className="underline">Connect wallet</span>
                      </Button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Drawer open={isSideMenuOpen} anchor="right" onClose={() => setIsSideMenuOpen(false)}>
          <SideMenu currentPageName={router.asPath} onRouteSelected={() => setIsSideMenuOpen(false)} />
        </Drawer>
        <ModalConnectWallet isModalOpen={app.showConnect} handleClose={handleCloseModalConnect} />
      </div>
    </>
  )
}

export default PageHeader
