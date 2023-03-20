import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Router from 'next/router';
import Link from 'next/link' 
import Todo from '../Router/Todo';
import Todos from './Todos';

export default function ShowData({ data }) {
  return (
    <div>
        {data.map((item, key) => {
          return(
            <Card>
                <CardContent>
                  {/* <Typography sx={{ fontSize: 14 }}>
                    {item.id}
                  </Typography> */}
                  <Typography sx={{ fontSize: 14 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    {item.username}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    {item.email}
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href={{ pathname: "/Router/Todo", query: {id: item.id}}}>
                  <Button type="button" size="small">Todo</Button>
                </Link>
                  {/* <Button size='small'>POST</Button>
                  <Button size='small'>ALBUM</Button> */}
                </CardActions>
              </Card>
            )
        })}
    </div>
  )
}
