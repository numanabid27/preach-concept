import { Services } from '@/components/services'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Preach Concepts LLC | Services",
};

const ServciesPage = () => {
  return (
    <Services />
  )
}

export default ServciesPage