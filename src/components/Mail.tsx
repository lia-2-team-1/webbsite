import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function Mail(props) {
    const { url } = props;

    return (
        <Html lang="en">
            <Button href={url}>Click Me</Button>
        </Html>
    )
}

export default Mail;
