import {
    React,
    useState
} from 'react'
import {
    AppBar,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import {
    logo,
} from '../utils/Consttants'
import { Link } from 'react-router-dom';
import { SideBar } from '../Index';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = ({ selectedCategory, setSelectedCategory }) => {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('Search...');

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                }}
            >
                <AppBar
                    positionSticky
                    sx={{
                        color: 'red',
                        backgroundColor: 'black',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px 12px',
                        flexDirection: 'row',
                        alignItems: 'center',
                        boxShadow: '0 0 1px #ffffff59 ',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component='img'
                            sx={{
                                height: '50px',
                                width: '50px',
                                maxHeight: { xs: '50px', md: '50px' },
                                maxWidth: { xs: '50px', md: '50px' }
                            }}
                            alt='Youtube'
                            src={logo}
                        />
                        <Typography
                            variant='h5'
                            sx={{
                                marginLeft: '2px'
                            }}
                        >zubtube</Typography>
                    </Box>
                    <TextField
                        placeholder={search}
                        variant="standard"
                        color="error"
                        focused
                        fullWidth
                        onChange={(e) => {
                            const Input = e.target.value
                            setInput(Input)
                        }}
                        inputProps={{
                            style: {
                                color: 'white !important',
                                justifyContent: 'center',
                                width: { xs: '100%', md: '60%' },

                            }
                        }}
                        sx={{
                            color: 'white !important',
                            caretColor: 'white !important',
                            width: { xs: '100%', md: '25%' },
                            margin: '0 0 0 2rem ',
                        }}
                    />
                    <Link 
                        to='/'
                        style={{
                            color: 'red',
                            fontSize: '18px',
                            zIndex: 100,
                            position: 'absolute',
                            right: '0',
                        }}
                    >

                        <Button
                            onClick={
                                () => {
                                    if(input === ''){
                                        setTimeout(() => {
                                            setSearch('Search...');
                                        }, 5000);
                                        setSearch('Invalid Input...')
                                    }
                                    else{
                                        setSearch('Search...');
                                        setSelectedCategory(input)
                                    }
                                }
                            }
                            sx={{
                                color:'red',
                            }}                            
                        >
                            <SearchOutlinedIcon/>
                        </Button>
                    </Link>
                </AppBar>
            </Box>
            <SideBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    )
}
export default Navbar