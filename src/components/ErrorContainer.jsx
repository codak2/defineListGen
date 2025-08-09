import React from 'react'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const ErrorContainer = (props) => {
    return (
        <>
            {props.isError &&
                (
                    <Stack sx={{ marginTop: '2rem' }}>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {props.ErrMsg}
                        </Alert>
                    </Stack>
                )
            }
        </>
    )
}


export default ErrorContainer