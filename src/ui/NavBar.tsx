import { ConsoleConnectLogo } from "@/ui/ConsoleConnectLogo";
import { NavItem } from "@/ui/NavItem";
import {
  Avatar,
  Box,
  Circle,
  Float,
  Heading,
  HoverCard,
  HStack,
  IconButton,
  Link,
  Portal,
  Text,
} from "@chakra-ui/react";
import {
  ChevronDown,
  HelpOutline,
  Search,
} from "@console/nimbus-assets/icons/app";
import { People } from "@console/nimbus-assets/icons/brand";

export const NavBar = () => {
  return (
    <Box
      as="nav"
      w="100%"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      py="3"
      px="6"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <HStack justify="space-between" w="100%">
        <HStack gap="8" align="center">
          <Link href="/">
            <ConsoleConnectLogo width="40px" height="40px" />
          </Link>
          <HStack gap="6" display={{ base: "none", md: "flex" }}>
            {["Dashboard", "Solutions", "Marketplace", "Community"].map(
              (item) => (
                <HoverCard.Root
                  key={item}
                  openDelay={50}
                  closeDelay={100}
                  positioning={{
                    placement: "bottom-start",
                    offset: { mainAxis: 10 },
                  }}
                >
                  <HoverCard.Trigger asChild>
                    <HStack cursor="pointer">
                      <Text fontWeight="medium" color="gray.800">
                        {item}
                      </Text>
                      <ChevronDown />
                    </HStack>
                  </HoverCard.Trigger>
                  <Portal>
                    <HoverCard.Positioner>
                      <HoverCard.Content
                        width="auto"
                        minW="sm"
                        bg="bg.panel"
                        borderColor="border.muted"
                        shadow="lg"
                        p="5"
                        borderRadius="md"
                        animationName="fade-in, slide-from-top"
                        animationDuration="200ms"
                      >
                        <NavItem type={item} />
                      </HoverCard.Content>
                    </HoverCard.Positioner>
                  </Portal>
                </HoverCard.Root>
              )
            )}
          </HStack>
        </HStack>

        <HStack gap="4">
          <IconButton variant="ghost" rounded="full" aria-label="Search">
            <Search width={20} />
          </IconButton>
          <IconButton variant="ghost" rounded="full" aria-label="Help">
            <HelpOutline width={20} />
          </IconButton>

          <HoverCard.Root
            openDelay={0}
            closeDelay={200}
            positioning={{ placement: "bottom-end", offset: { mainAxis: 12 } }}
          >
            <HoverCard.Trigger
              display="inline-block"
              position="relative"
              bg="transparent"
              outline="none"
              cursor="pointer"
              rounded="full"
              // The Gradient Ring Logic
              _after={{
                content: '""',
                position: "absolute",
                inset: "-3px",
                borderRadius: "full",
                bgGradient: "to-r",
                gradientFrom: "brand.pink",
                gradientTo: "brand.purple",
                zIndex: -1,
                opacity: 0,
                transition: "opacity 0.2s ease-out, transform 0.1s ease-out",
              }}
              _hover={{ _after: { opacity: 1 }, transform: "scale(0.95)" }}
              _open={{ _after: { opacity: 1 }, transform: "scale(0.95)" }}
              _focusVisible={{ outline: "2px solid sky.500" }}
            >
              <Avatar.Root size="md">
                <Avatar.Fallback name="Alex Price" />
                <Avatar.Image src="src/assets/avatar.svg" />
              </Avatar.Root>

              <Float placement="top-end" offsetX="1" offsetY="1">
                <Circle size="3.5" bg="brand.pink" border="2px solid white" />
              </Float>
            </HoverCard.Trigger>

            <Portal>
              <HoverCard.Positioner>
                <HoverCard.Content shadow="lg" minW="300px">
                  <HStack gap="4" alignItems={"flex-start"}>
                    <People width={40} height={40} />
                    <Box>
                      <Heading size="md" mb="1">
                        Account
                      </Heading>
                      <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                        Manage your preferences and history.
                      </Text>
                    </Box>
                  </HStack>
                </HoverCard.Content>
              </HoverCard.Positioner>
            </Portal>
          </HoverCard.Root>
        </HStack>
      </HStack>
    </Box>
  );
};
