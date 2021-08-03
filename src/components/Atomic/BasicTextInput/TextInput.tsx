import React, {ReactNode} from 'react'
import {TextField, } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
interface Props {
childres : ReactNode

}

const useStyles = makeStyles((theme)=>{

})

export const TextInput = (props : Props) => {
    const root = useStyles()
    return (
        <TextField {...props}>
            
        </TextField>
    )
}



