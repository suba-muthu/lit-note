import React from 'react'
import Link from 'next/link'
import Todos from '../Components/Todos'
import { Button } from '@mui/material';

export default function Todo() {
  return (
    <div>
      <Link href="/">
        <Button type="button" size="small">Back to user</Button>
      </Link>
      <Todos />
    </div>
  )
}
