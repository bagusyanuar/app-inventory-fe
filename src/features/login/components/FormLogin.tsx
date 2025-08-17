import React from 'react'
import { Card } from '@/ui/components/container'
import { TextfieldIcon } from '@/ui/components/textfield'
import { PasswordfieldIcon } from '@/ui/components/passwordfield'
import { Button } from '@/ui/components/button'
import { LuMail, LuLock } from 'react-icons/lu'
import { motion } from 'framer-motion'

const FormLogin: React.FC = () => {
  return (
    <Card className='w-[40rem] h-[25rem] flex p-2 shadow-lg rounded-md'>
      <div className='flex-1 rounded-l-md bg-brand-500 h-full'></div>
      <div className='flex-1 h-full flex flex-col justify-between p-4'>
        {/* header */}
        <div className='flex items-center gap-1'>
          <p className='text-neutral-700 font-bold'>Inventory</p>
        </div>

        {/* body */}
        <div className='w-full flex flex-col'>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
          >
            <div className='w-full mb-7'>
              <span className=' mb-0 leading-none text-neutral-700 text-sm font-semibold'>Welcome Back,</span>
              <span className='block text-neutral-700 text-sm'>Please sign in to your account.</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            <TextfieldIcon
              prefixIcon={<LuMail size={16} />}
              placeholder='email'
              className='mb-3'
            />
            <PasswordfieldIcon
              prefixIcon={<LuLock size={16} />}
              placeholder='password'
              className='mb-3'
            />
            <Button text='Login' className='w-full' />
          </motion.div>
        </div>

        {/* footer */}
        <div className='flex items-center justify-center text-xs text-neutral-500'>
          <span>&copy; Copyright</span>
        </div>
      </div>
    </Card>
  )
}

export default FormLogin