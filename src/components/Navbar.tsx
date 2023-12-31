'use client'
import { useState, useEffect } from 'react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { NavItems, handleClickScroll, NavButtons } from './Data'

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <div
      className={`w-full mb-20 mx-auto shadow fixed top-0 z-50 px-10 md:px-4 bg-white dark:bg-black dark:border-b dark:border-slate-500`}
    >
      <div className='justify-between py-4 md:items-center md:flex'>
        <div className='flex items-center justify-between text-2xl'>
          <h2 className='font-bold'>Chao, Long</h2>
          <button className='md:hidden' onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <div
          className={`md:block transition-all transform duration-300 ${
            !navbar && 'hidden'
          }`}
        >
          <div className='gap-14 text-end space-y-4 pt-2 md:space-y-0 md:flex items-center justify-center'>
            {NavItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='hover:text-neutral-500 hover:scale-105 duration-300 block cursor-pointer'
                  onClick={(event) => handleClickScroll(event, item.target)}
                >
                  {item.link ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </div>
              )
            })}
            <div className='flex gap-4 justify-end'>
              {NavButtons.map((button, idx) => {
                return (
                  <Link
                    href={button.link}
                    key={idx}
                    className='bg-amber-500 p-1 rounded hover:scale-105 duration-300'
                  >
                    {button.label}
                  </Link>
                )
              })}
            </div>
            <button
              className={`rounded-3xl px-2 ${
                currentTheme !== 'dark'
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              } `}
              onClick={() => setTheme(`${theme === 'dark' ? 'light' : 'dark'}`)}
            >
              {currentTheme === 'dark' ? 'Light mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
