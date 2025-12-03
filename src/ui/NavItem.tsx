import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import {
  Community,
  MarketPlace,
  Services,
  Software,
} from "@console/nimbus-assets/icons/brand";

const DashboardMenu = () => {
  return (
    <Stack>
      <HStack gap="4" alignItems={"flex-start"}>
        <Software width={80} height={80} />
        <Box>
          <Heading size="md" mb="1">
            Dashboard
          </Heading>
          <Text fontSize="sm" color="fg.muted" lineHeight="tall">
            Home to all of your services, tools and information.
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

const SolutionsMenu = () => {
  return (
    <Stack>
      <HStack gap="4" alignItems={"flex-start"}>
        <Services width={80} height={80} />
        <Box>
          <Heading size="md" mb="1">
            Solutions
          </Heading>
          <Text fontSize="sm" lineHeight="tall">
            Console Connect’s suite of core networking services make it easy to
            interconnect your clouds, applications and devices.
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

const MarketplaceMenu = () => {
  return (
    <Stack>
      <HStack gap="4" alignItems={"flex-start"}>
        <MarketPlace width={80} height={80} />
        <Box>
          <Heading size="md" mb="1">
            Marketplace
          </Heading>
          <Text fontSize="sm" lineHeight="tall">
            Explore products and businesses
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

const CommunityMenu = () => {
  return (
    <Stack>
      <HStack gap="4" alignItems={"flex-start"}>
        <Community width={80} height={80} />
        <Box>
          <Heading size="md" mb="1">
            Community
          </Heading>
          <Text fontSize="sm" lineHeight="tall">
            Connect with people, companies and content
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

export const NavItem = ({ type }: { type: string }) => {
  switch (type) {
    case "Dashboard":
      return <DashboardMenu />;

    case "Solutions":
      return <SolutionsMenu />;

    case "Community":
      return <CommunityMenu />;

    case "Marketplace":
      return <MarketplaceMenu />;

    default:
      return (
        <Box p="4">
          <Text color="fg.muted">No content defined for {type}</Text>
        </Box>
      );
  }
};
