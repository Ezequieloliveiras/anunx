import {
    Card as CardMUI,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
} from '@mui/material'

const Card = ({ image, title, subtitle, actions }) => {
    return (
        <CardMUI>
            <CardMedia image={image} style={{ paddingTop: '56%' }}
                title={title} />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ? (

                        <CardActions>
                        {actions}
                        </CardActions>
                    ) : null
            }

        </CardMUI>

    )

}

export default Card