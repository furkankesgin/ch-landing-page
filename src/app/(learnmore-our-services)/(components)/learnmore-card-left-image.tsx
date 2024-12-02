import { Box, Container, Typography, Grid2 as Grid } from '@mui/material'
import React from 'react'
import { LearnMoreCardImageProps } from './card-definitions'



const learnmoreCardLeftImage = (props: LearnMoreCardImageProps) => {
    return (
        <Box gap={3} display={'flex'}>
            <Container>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={3}
                    bgcolor={'grey.200'}
                    p={5}
                >
                    <Grid container spacing={2}>
                    <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                            <img width={'100%'} src={props.image} />
                        </Grid>
                        <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                            <Box display="flex" flexDirection="column" gap={3}>
                                <Typography component="h5" variant="h5" fontWeight={900}>{props.title}</Typography>
                                <Typography variant="body1" color="text.secondary">{props.description}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}

export default learnmoreCardLeftImage