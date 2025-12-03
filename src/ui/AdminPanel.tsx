import { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Check } from "@console/nimbus-assets/icons/app";
import { useLocation, useNavigate } from "react-router";

const PAGES = [
  { path: "/", label: "Dashboard" },
  { path: "/service", label: "Service" },
  { path: "/order", label: "Order" },
];

type KeyCombo = string;

export const useGlobalShortcut = (shortcut: KeyCombo, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCmdOrCtrl = event.metaKey || event.ctrlKey;
      if (shortcut === "Cmd+/" && isCmdOrCtrl && event.key === "/") {
        event.preventDefault();
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcut, callback]);
};

const NavItem = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "subtle" : "ghost"}
      justifyContent="space-between"
      width="100%"
      colorScheme={isActive ? "blue" : "gray"}
    >
      <Text>{label}</Text>
      {isActive && <Check width={16} height={16} />}
    </Button>
  );
};

export const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useGlobalShortcut("Cmd+/", () => {
    setIsOpen((prev) => !prev);
  });

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
      closeOnInteractOutside={false}
      modal={false}
    >
      <Portal>
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md" maxWidth="300px">
            <Drawer.Header
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Drawer.Title>Pages</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" variant="ghost" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Stack gap="1">
                {PAGES.map((page) => (
                  <NavItem
                    key={page.path}
                    label={page.label}
                    isActive={location.pathname === page.path}
                    onClick={() => handleNavigation(page.path)}
                  />
                ))}
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
