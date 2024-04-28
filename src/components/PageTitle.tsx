'use client'

import { Heading, Text } from "@chakra-ui/react"
import { FC } from "react";

interface Props {
    title: string;
    subtitle?: string;
}
const PageTitle: FC<Props> = ({ title, subtitle }) => {
    return <>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text>{subtitle}</Text>
    </>
}

export default PageTitle;