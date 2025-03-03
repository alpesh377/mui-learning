import * as React from "react";
import { useColorScheme } from "@mui/material/styles";
import Select, { SelectProps } from "@mui/material/Select";
import IconButton, { IconButtonOwnProps } from "@mui/material/IconButton";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { Box, Toolbar, Tooltip } from "@mui/material";

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );
  if (!mode) {
    return null;
  }
  return (
    <Toolbar>
      <Box flex={1}></Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={`Activate ${activateName} Mode`}>
          <IconButton
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            sx={{
              p: 1,
              border: `1px ${theme.palette.text.disabled} solid`,
            }}
            size="large"
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined color="action" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  );
}
