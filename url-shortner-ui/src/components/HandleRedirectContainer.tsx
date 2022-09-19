import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { SERVER_ENDPOINT } from "../config";


const HandleRedirectContainer = () => {
    const [destination, setDestination] = useState<null | string>(null);
    const [error, setError] = useState();
    const { params: { shortID } } = useRouteMatch<{shortID: string}>()

    useEffect(() => {
        const getData = async () => {
            console.log("getting data");
            const resp = await axios.get(SERVER_ENDPOINT + "/api/url/" + shortID)
            console.log("recieved data", resp.data.destination);
            setDestination(resp.data.destination);
        }
        getData();
    }, [shortID])


    useEffect(() => {
        if (destination) {
            window.location.replace(destination)
        }
    }, [destination])

    return (<Box pos="relative">
        {shortID}
    </Box>);
}
 
export default HandleRedirectContainer;