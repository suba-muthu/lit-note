import { Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Posts() {

    const router = useRouter();
    const data = router.query;
    console.log(data);

    const [postData, setPostData] = useState([]);

    async function fetchPostData() {
        const user = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`);
        const jsonData = await user.json();
        setPostData(jsonData);
    }

    useEffect(() => {
        fetchPostData();
    }, []);

  return (
    <div>
        {postData.map((item) => {
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
                            {item.body}
                        </Typography>
                    </CardContent>
                </Card>
            )
        })}
    </div>
  )
}
