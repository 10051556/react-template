import * as React from "react";
import { Box, ThemeProvider, FormGroup, TextInput } from '@primer/components';
export default function Home() {
    return (

        <Box
            bg="canvas.default"
            width="100%"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
        ><div>
                <p>This is the home page.</p>
            </div></Box>
    )
}
