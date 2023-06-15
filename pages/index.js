import dynamic from "next/dynamic";
import generateMuiTheme from "../src/mui/theme";
import { ThemeProvider } from "@mui/material";

const MeetingAppContainer = dynamic(
  () => import("../src/containers/MeetingAppContainer"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <ThemeProvider theme={generateMuiTheme()}>
      <MeetingAppContainer />
    </ThemeProvider>
  );
}
