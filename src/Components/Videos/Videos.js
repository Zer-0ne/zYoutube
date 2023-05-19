import { React, } from 'react'
import {
    Stack,
    Box
} from '@mui/material';
import { VideoCard, ChannelCard } from '../Index';

const Videos = ({ videos }) => {
    return (
        <>
            <Stack
                direction='row'
                flexWrap='wrap'
                justifyContent='center'
                gap={2}
                sx={{
                    flexWrap:'wrap',
                    padding: {md: '2vh 0 10vh 0', xs:'2vh 0 13vh 0'}
                }}
            >
                {videos.map((item, idx) => (
                    <Box
                        key={idx}
                        flex='1 0 130px'
                        sx={{
                            minWidth: {xs:'100%',md:'auto',sm:'40%'}
                        }}
                    >
                        {
                            item.id.videoId &&
                            <VideoCard
                                video={item}
                            />
                        }
                        {
                            item.id.channelId &&
                            <ChannelCard
                                channelDetail={item}
                            />
                        }
                    </Box>
                ))}
            </Stack>
        </>

    )
}

export default Videos
