import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'


class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head><title>Adam Tretera</title></Head>
                <body
                    className="text-primary-900 dark:text-primary-100 transition-colors duration-400 ease bg-primary-0 dark:bg-primary-900">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument