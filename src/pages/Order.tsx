import { PriceBox } from "@/ui/PriceBox";
import {
  Alert,
  Box,
  Breadcrumb,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Field,
  Fieldset,
  Heading,
  Input,
  Link,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Cancel } from "@console/nimbus-assets/icons/app";

const Order = () => {
  return (
    <>
      <Breadcrumb.Root size={"md"}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Marketplace</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Layer 2 (Point-to-Point)</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>New order</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Container maxW={"2xl"} gap={8}>
        <Stack mt={8} align={"center"}>
          <Heading size={"3xl"} textTransform={"uppercase"}>
            Configure your order
          </Heading>
          <Text>
            Select product details to calculate a price before proceeding to
            payment.
          </Text>
          <Stack mt={8} px={[0, 0, 10]} gap={4} w={"100%"}>
            <Box>
              <Heading>Order details</Heading>
              <Separator />
            </Box>
            <Text fontSize={"sm"}>
              Please provide some details to help you identify your order.{" "}
            </Text>
            <Field.Root invalid={false} required>
              <Field.Label>
                Order name <Field.RequiredIndicator />
              </Field.Label>
              <Input />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={false}>
              <Field.Label>Customer reference number</Field.Label>
              <Input />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
          </Stack>
          <Stack mt={8} px={[0, 0, 10]} gap={4} w={"100%"}>
            <Box>
              <Heading>Connection details</Heading>
              <Separator />
            </Box>
            <PriceBox />
          </Stack>
          <Stack mt={8} px={[0, 0, 10]} gap={4} w={"100%"}>
            <Box>
              <Heading>Payment method</Heading>
              <Separator />
            </Box>
            <Box mt={2} display={"flex"} flexDirection={"column"} gap={2}>
              <Text fontSize={"md"} fontWeight={"semibold"}>
                Invoice
              </Text>
              <Text fontSize={"sm"}>
                An invoice will be issued at the start of each month.
              </Text>
            </Box>
          </Stack>
          <Stack mt={8} px={[0, 0, 10]} gap={4} w={"100%"}>
            <Box>
              <Heading>Terms and Conditions</Heading>
              <Separator />
            </Box>
            <Fieldset.Root>
              <CheckboxGroup defaultValue={["react"]} name="framework">
                <Fieldset.Legend fontSize="sm" my="4">
                  I have read, understood and accept the following:
                </Fieldset.Legend>
                <Fieldset.Content>
                  <Checkbox.Root
                    key={"1"}
                    value={"1"}
                    alignItems={"flex-start"}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>
                      <Link href="/">Terms of use;</Link>
                    </Checkbox.Label>
                  </Checkbox.Root>
                  <Checkbox.Root
                    key={"2"}
                    value={"2"}
                    alignItems={"flex-start"}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>
                      <Link href="/">
                        The specific Terms for Console Connect [insert service];
                      </Link>
                    </Checkbox.Label>
                  </Checkbox.Root>
                  <Checkbox.Root
                    key={"3"}
                    value={"3"}
                    alignItems={"flex-start"}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>
                      The ordering or purchase of any products or services
                      through this online account is subject to: (i) any
                      existing service contract between Console Connect and
                      Customer (i.e.: the registered company); or (ii) in the
                      absence of an existing service contract, Console Connect’s
                      general terms and conditions set out at{" "}
                      <Link href="www.consoleconnect.com">
                        https://www.consoleconnect.com/legal/msa-terms-and-conditions/
                      </Link>
                      in effect as of the date that the order is placed, and I
                      agree to be bound by the terms of the existing service
                      contract or the general terms and conditions, as the case
                      may be.`
                    </Checkbox.Label>
                  </Checkbox.Root>
                </Fieldset.Content>
              </CheckboxGroup>
              <Alert.Root status="info" mt={4}>
                <Alert.Indicator />
                <Alert.Title>
                  By clicking 'Order', I agree to be billed 300 per month by
                  invoice from HKT starting on service commencement.
                </Alert.Title>
              </Alert.Root>
            </Fieldset.Root>
          </Stack>
          <VStack w={"full"} px={[0, 0, 10]} gap={4} mt={8}>
            <Button colorPalette={"primary"} variant={"solid"} width={"full"}>
              Order
            </Button>
            <Button colorPalette="secondary" variant={"ghost"} width={"full"}>
              <Cancel height={16} width={16} />
              <>Cancel</>
            </Button>
          </VStack>
        </Stack>
      </Container>
    </>
  );
};

export { Order };
