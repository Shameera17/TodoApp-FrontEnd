import React from 'react'
import {
    
    Typography,
    Card,
    CardContent,
    
  } from "@material-ui/core";
const Header = () => {
    return (
        <div >
            <Card className="topHeader">
                <CardContent className="header">
                    <Typography className="headerText" variant="h3">Todo App</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Header
