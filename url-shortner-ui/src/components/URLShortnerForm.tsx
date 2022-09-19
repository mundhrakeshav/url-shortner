import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { SERVER_ENDPOINT } from "../config";


const URLShortnerForm = () => {
    
    const [destination, setDestination] = useState("");
    const [shortURL, setShortURL] = useState<String | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        debugger;
        const resp = await axios.post(`${SERVER_ENDPOINT}/api/url`, {
            destination
        })
        console.log(resp);
        setShortURL(resp.data.shortID.toString())
    }

    return (<Box pos="relative">
        <form onSubmit={handleSubmit}>
            <Input onChange={(e: any)=> {setDestination(e.target.value)}}/>
            <Button type="submit">
                CREATE SHORT URL
            </Button>
            {shortURL && <a href={`${SERVER_ENDPOINT}/${shortURL}`}>Click Me</a>}        </form>
    </Box>);
}
 
export default URLShortnerForm;