import { useState } from "react";
import {
  Collapsible,
  Stack,
  Box,
  HStack,
  Text,
  Separator,
} from "@chakra-ui/react";
import { Add, Subtract } from "@console/nimbus-assets/icons/app";

export const PriceBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box w="full">
      <Text fontSize="sm" fontWeight="semibold" mb="2">
        Recurring charges
      </Text>
      <Box
        bg="bg.subtle"
        borderColor="border"
        borderWidth="1px"
        rounded="md"
        overflow="hidden"
      >
        <HStack p="4" gap="4" align="center">
          <Stack
            align="flex-start"
            gap="0.5"
            lineHeight="1"
            position={"relative"}
            pl="2"
          >
            <Text
              fontSize="lg"
              fontWeight="medium"
              mt="1"
              position={"absolute"}
              left="-1"
            >
              $
            </Text>
            <HStack gap="0">
              <Text fontSize="4xl" fontWeight={"semibold"}>
                240
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                .00
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.600">
              per month
            </Text>
          </Stack>
          <Separator orientation={"vertical"} height="16" size="md" />
          <Stack gap="0">
            <Text fontWeight="semibold" fontSize="md">
              Billed monthly in advance
            </Text>
            <Text fontSize={"sm"}>Prices in US dollars</Text>
          </Stack>
        </HStack>

        <HStack
          as="button"
          onClick={() => setOpen(!open)}
          color="slate.600"
          bg="bg.muted"
          w="full"
          px="3"
          py="2"
          cursor="pointer"
        >
          {open ? (
            <Subtract width={16} height={16} />
          ) : (
            <Add width={16} height={16} />
          )}
          <Text>{open ? "Hide" : "Show"} individual charges</Text>
        </HStack>

        <Collapsible.Root open={open}>
          <Collapsible.Content>
            <Stack gap="6" px="4" pb="4" bg={"bg.muted"}>
              <HStack gap="4" align="center">
                <Stack
                  align="flex-start"
                  gap="0.5"
                  lineHeight="1"
                  position={"relative"}
                  pl="2"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    mt="1"
                    position={"absolute"}
                    left="-1"
                  >
                    $
                  </Text>
                  <HStack gap="0">
                    <Text fontSize="4xl" fontWeight={"semibold"}>
                      120
                    </Text>
                    <Text fontSize="lg" fontWeight="medium">
                      .00
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    per month
                  </Text>
                </Stack>
                <Separator orientation={"vertical"} height="16" size="md" />
                <Stack gap="0">
                  <Text fontWeight="semibold" fontSize="md">
                    Port A-end
                  </Text>
                  <Text fontSize={"sm"}>My port, Hong Kong, 50Mbps</Text>
                </Stack>
              </HStack>
              <HStack gap="4" align="center">
                <Stack
                  align="flex-start"
                  gap="0.5"
                  lineHeight="1"
                  position={"relative"}
                  pl="2"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    mt="1"
                    position={"absolute"}
                    left="-1"
                  >
                    $
                  </Text>
                  <HStack gap="0">
                    <Text fontSize="4xl" fontWeight={"semibold"}>
                      120
                    </Text>
                    <Text fontSize="lg" fontWeight="medium">
                      .00
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    per month
                  </Text>
                </Stack>
                <Separator orientation={"vertical"} height="16" size="md" />
                <Stack gap="0">
                  <Text fontWeight="semibold" fontSize="md">
                    Port Z-end
                  </Text>
                  <Text fontSize={"sm"}>My port, Singapore, 50Mbps</Text>
                </Stack>
              </HStack>
            </Stack>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    </Box>
  );
};
