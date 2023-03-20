import { Button, Link } from '@mui/material'
import React from 'react'
import Posts from '../Components/Posts'

export default function Post() {
  return (
    <div>
        <Link href="/">
        <Button>Back to user</Button>
        </Link>
        <Posts />
    </div>
  )
}
