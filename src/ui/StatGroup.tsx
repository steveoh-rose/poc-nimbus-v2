import {
  Box,
  SimpleGrid,
  Text,
  Button,
  Avatar,
  HStack,
  Flex,
  Icon,
} from "@chakra-ui/react";

import {
  Order,
  ManagedServices,
  Chat,
  Alert,
} from "@console/nimbus-assets/icons/brand";

const icons = {
  orders: Order,
  tickets: ManagedServices,
  messages: Chat,
  alerts: Alert,
};

export function StatsGroup() {
  const stats = [
    { label: "Open orders", value: "10", icon: icons.orders },
    {
      label: "Support tickets",
      value: "10",
      icon: icons.tickets,
      action: "Report an issue",
    },
    { label: "Messages", value: "10", icon: icons.messages },
    { label: "Alerts", value: "10", icon: icons.alerts },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 5 }} gap={4}>
      {stats.map((stat) => (
        <Box
          key={stat.label}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          bg="white"
          _hover={{ borderColor: "gray.300" }}
        >
          <Flex justify="space-between" mb={2}>
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
              {stat.label}
            </Text>
            <Flex
              align="center"
              justify="center"
              bg="gray.100"
              p={1}
              borderRadius="md"
              w={8}
              h={8}
            >
              <Icon as={stat.icon} color="gray.600" boxSize={4} />
            </Flex>
          </Flex>

          <Flex align="flex-end" justify="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              {stat.value}
            </Text>
            {stat.action && (
              <Button size="xs" variant="outline" borderRadius="full">
                + {stat.action}
              </Button>
            )}
          </Flex>
        </Box>
      ))}

      {/* 2. Account Manager Card (Special Layout) */}
      <Box borderWidth="1px" borderRadius="lg" p={4} bg="white">
        <Text fontSize="sm" fontWeight="medium" color="gray.500" mb={3}>
          Chat with your account manager
        </Text>
        <HStack gap={3}>
          <Avatar name="Nathan Bond" size="sm" bg="purple.500" color="white" />
          <Box flex="1">
            <Text fontSize="sm" fontWeight="bold" lineHeight="1.2">
              Nathan Bond
            </Text>
            <Text fontSize="xs" color="green.500" fontWeight="medium">
              Online
            </Text>
          </Box>
          <Button size="xs" borderRadius="full" variant="outline">
            Chat
          </Button>
        </HStack>
      </Box>
    </SimpleGrid>
  );
}
