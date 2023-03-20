import { Card } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function Todos() {

    const router = useRouter();
    const data = router.query;
    console.log(data);

    const [todoData, setTodoData] = useState([]);
 
    async function fetchTodoData() {
        const user = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${data.id}`);
        const jsonData = await user.json();
        setTodoData(jsonData);
    }

    useEffect(() => {
        fetchTodoData();
    },[])

  return (
    <div>
        {todoData.map((item,key) => {
            return(
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }}>
                            {item.userId}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {item.id}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {item.completed}
                        </Typography>
                    </CardContent>
                </Card>
            )
        })}
    </div>
  )
}
