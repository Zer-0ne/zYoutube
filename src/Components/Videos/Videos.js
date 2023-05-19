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
            >
                {videos.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            minWidth: {xs:'100%',md:'auto'}
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
