import { About } from '@/components/about'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Preach Technologies LLC | About",
};

const page = () => {
  return (
    <About />
  )
}

export default page