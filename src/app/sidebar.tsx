import {
    Avatar,
    Box,
    BoxProps,
    Center,
    CloseButton,
    Flex,
    FlexProps,
    Icon,
    IconButton,
    Link as LinkChakraUI,
    Text,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactText } from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

interface LinkItemProps {
    name: string;
    url: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', url: "/" },
    { name: 'About', url: "/about" },
    { name: 'Contact', url: "/contact" },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('gray.800', 'white')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="40" mt={50} alignItems="center" mx="8" justifyContent="center">
                <VStack>
                    <Avatar size={"xl"} src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
                    <Text fontSize="lg" fontWeight="bold" color={"white"} mt={4}>
                        John Doe
                    </Text>
                    <Text fontSize="xs" color={"white"}>
                        Software Engineer
                    </Text>
                </VStack>

                <CloseButton display={{ base: 'block', md: 'none' }} pos={"absolute"} top={0} right={0} color={"white"} onClick={onClose} />
            </Flex>
            <VStack mt={10}>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} url={link.url}>
                        {link.name}
                    </NavItem>
                ))}

                <Center position={"absolute"} bottom={8} w={"full"}>
                    <Flex color={"white"} p={2}>
                        <Link href={'https://www.youtube.com'} target="__blank">
                            <Icon as={AiFillYoutube} color={"red.600"} fontSize={"3xl"} mx={2} />
                        </Link>
                        <Link href={'https://www.instagram.com'} target="__blank">
                            <Icon as={AiFillInstagram} color={"pink.600"} fontSize={"3xl"} mx={2} />
                        </Link>
                        <Link href={'https://www.linkedin.com'} target="__blank">
                            <Icon as={AiFillLinkedin} color={"blue.600"} fontSize={"3xl"} mx={2} />
                        </Link>
                    </Flex>
                </Center>
            </VStack>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    children: ReactText;
    url: string;
}

const NavItem = ({ url, children, ...rest }: NavItemProps) => {
    const pathName = usePathname();
    return (
        <LinkChakraUI as={Link} href={url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color={pathName === url ? 'yellow.400' : 'white'}
                _hover={{
                    color: 'yellow.500',
                    fontWeight: "bold"
                }}
                {...rest}>
                {children}
            </Flex>
        </LinkChakraUI>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Box ml="8">
                <Text fontSize="xl" fontWeight="bold">
                    John Doe
                </Text>
                <Text fontSize="sm">
                    Software Engineer
                </Text>
            </Box>
        </Flex>
    );
};