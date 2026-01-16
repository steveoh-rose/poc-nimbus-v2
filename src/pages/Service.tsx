import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Tabs,
  Card,
  Grid,
  Breadcrumb,
  Container,
  Status,
  VStack,
  HStack,
  Button,
  Group,
  Link,
  Editable,
  Menu,
  Portal,
} from "@chakra-ui/react";
import {
  ArrowDropDown,
  Cancel,
  Check,
  Edit,
  HelpOutline,
  MarketPlaceProducts,
  Support,
  Terms,
} from "@console/nimbus-assets/icons/app";

const ServiceDetailsPage = () => {
  return (
    <Box minH="100vh" p={8}>
      <Container maxW="1200px" mx="auto">
        <ServiceHeader />
        <Container bg={"gray.50"}></Container>
      </Container>
    </Box>
  );
};

// --- Sub-components ---

const ServiceHeader = () => {
  return (
    <Box>
      <Breadcrumb.Root size={"md"}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Marketplace services</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>[Service Name]</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Box mt={6} width={"full"}>
        <HStack justifyContent={"space-between"} width={"full"}>
          <VStack align="flex-start">
            <HStack gap={2} css={{ "--color": "colors.blue.500" }}>
              <MarketPlaceProducts
                width={24}
                height={24}
                color="var(--color)"
              />
              <Text fontWeight="semibold">Service</Text>
            </HStack>
            <Editable.Root defaultValue="Pimlico 1G" activationMode="none">
              <Editable.Preview
                textStyle={"xl"}
                fontWeight={"semibold"}
                cursor="default"
                _hover={{ background: "transparent", textDecoration: "none" }}
              />
              <Editable.Input fontSize={"xl"} fontWeight={"semibold"} />
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton
                    variant="ghost"
                    size="xs"
                    css={{ "--color": "colors.fg.muted" }}
                  >
                    <Edit color="var(--color)" />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton variant="outline" size="xs">
                    <Cancel />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton variant="outline" size="xs">
                    <Check />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
            <Status.Root>
              <Status.Indicator bg="green.400" />
              Active
            </Status.Root>
          </VStack>
          <VStack align={"flex-end"}>
            <Menu.Root positioning={{ placement: "bottom-end" }}>
              <Menu.Trigger asChild>
                <Button colorPalette={"primary"}>
                  Actions <ArrowDropDown />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item
                      value="delete"
                      color="fg.error"
                      _hover={{ bg: "bg.error", color: "fg.error" }}
                    >
                      Terminate service
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <HStack gap={6} align="center">
              <Link>
                <Terms width={20} height={20} /> Ts and Cs
              </Link>
              <Link>
                <Support width={20} height={20} /> Product support
              </Link>
              <Link>
                <HelpOutline width={20} height={20} /> Help
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export const Service = () => {
  return <ServiceDetailsPage />;
};
