import {
    React,
} from 'react'
import {
    Box,
    Button,
} from '@mui/material';
import {
    categories,
} from '../utils/Consttants'
import { Link } from 'react-router-dom';
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Box
            sx={{
                zIndex: 10,
                position: { xs: 'fixed', md: 'fixed' },
                marginTop: { xs: '0px', md: 'calc(50px + 10px)' },
                height: { xs: '40px', md: 'calc(100vh - 53px)' },
                width: { xs: '100vw', md: '80px' },
                bottom: { xs: '0', md: '' },
                backgroundColor: { xs: '#000000a8', md: 'black' },
                color: 'red',
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'row', md: 'column' },
                padding: { xs: '1px 0', md: '0px 12px' },
                overflowY: { xs: 'hidden', md: 'auto' },
                overflowX: { xs: 'auto', md: 'hidden' },
                borderRight: { xs: 'none', md: '1px solid #ffffff59;' },
                borderTop: { xs: '1px solid #ffffff59;', md: 'none' },
            }}
        >
            {categories.map((category) => (
                <Link to='/'>

                    <Button
                        className='category-btn'
                        onClick={() => setSelectedCategory(category.name)}
                        sx={{
                            padding: '5px 20px',
                            alignItems: 'center',
                            display: 'flex',
                            // justifyContent: 'center',
                            margin: { xs: '0px', md: '1em 0' },
                            backgroundColor: 'transparent',
                            color: category.name === selectedCategory ? 'red' : 'white',
                            outline: 'none',
                            border: 'none',
                            borderRadius: '5px',
                            flex: { xs: 1, md: 0 },
                            fontSize: { xs: '1rem', md: '18px' },
                        }}
                    >
                        <span style={{
                            marginRight: '5px',
                            // fontSize: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            opacity: category.name === selectedCategory ? '1' : '0.8'
                        }}>{category.icon}</span>
                    </Button>
                </Link>
            ))}
        </Box>
    )
}

export default SideBar