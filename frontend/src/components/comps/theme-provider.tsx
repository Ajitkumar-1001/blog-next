"use client"

import  React from "react";
import { ThemeProvider as Theme } from "next-themes";



export  function ThemeProvider({children, ...props} : React.ComponentProps<typeof Theme>) { 

    return( 
        <Theme {...props}>
            {children}
        </Theme>
    )
}
