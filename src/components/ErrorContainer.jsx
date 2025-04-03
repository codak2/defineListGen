import React from 'react'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const ErrorContainer = (props) => {
    return (
        <>
        <Stack>
            {props.isError &&
                (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {props.ErrMsg}
                    </Alert>
                )}
        </Stack>
        </>
    )
}


export default ErrorContainer