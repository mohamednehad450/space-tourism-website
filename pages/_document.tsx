import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Bellefair" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet" type="text/css"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
