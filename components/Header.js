import Image from 'next/image'
import React from 'react'
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

import HeaderItem from './HeaderItem'

const Header = () => {
  return <header className='flex flex-col sm:flex-row m-5 items-center justify-between h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image  className='object-contain'
                    src="https://links.papareact.com/ua6"
                    height={100}
                    width={200}
            />
        </header>
}

export default Header