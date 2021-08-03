import React from 'react'
import {
    
    Typography,
    Card,
    CardContent,
    
  } from "@material-ui/core";
const Header = () => {
    return (
        <div >
            <Card >
                <CardContent className="header">
                    <Typography variant="h3">Todo App</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Header
