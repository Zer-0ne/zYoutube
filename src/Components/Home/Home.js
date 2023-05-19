import {
    React,
    useState,
    useEffect
} from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
import {
    Videos
} from '../Index';
import { FetchFromAPI } from '../utils/FetchFromAPI'
const Home = ({ selectedCategory }) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => { setVideos(data.items) }).catch((err) => {
                console.log(err);
            });
    }, [selectedCategory])
    return (
        <Box
            sx={{
                width: 'calc(100%)',
                height: 'calc(100vh)',
                backgroundColor: 'black',
                position: 'absolute',
                color: 'white',
                display: 'flex',

            }}
        >
            <Box
                sx={{
                    flex: 1,
                    // bgcolor: 'red',
                    margin: { xs: '60px 0 0 0', md: '60px 0 0 81px' },
                    padding: { xs: '0rem 5px', md: '0rem 1rem' },
                    overflowX: 'auto',
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        background: 'black',
                        width: { xs: '98%', md: '95%' },
                        // margin: '.5rem 0 0 1rem ',
                        padding: '.5rem 0 0 0',
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: {}
                        }}
                    >
                        <Typography
                            variant='h4'
                            fontWeight='bold'
                            mb={2}
                        >
                            {selectedCategory}
                            <span
                                style={{
                                    color: 'red',
                                    marginLeft: '10px',
                                }}
                            >videos </span>
                        </Typography>
                    </Box>
                    <Videos
                        videos={videos}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Home