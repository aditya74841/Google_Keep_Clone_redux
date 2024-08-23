
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


//components
import Archive from './Archive';
import { useSelector } from 'react-redux';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {
    const { todos, archives, trash } = useSelector((state) => state.keep);


    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archives.map(archive => (
                            <Grid item key={archive.id}>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;