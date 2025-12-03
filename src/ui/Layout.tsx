import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { AdminPanel } from "./AdminPanel";
import { NavBar } from "@/ui/NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh" bg="white">
      <NavBar />
      <Container fluid height={"auto"} py={8}>
        {children}
      </Container>
      <AdminPanel />
    </Box>
  );
};
