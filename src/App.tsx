import styles from './styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './App.css';






export default function App(): React.ReactElement {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#651fff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <Box sx={styles.parent}>
          <Box sx={styles.header}>
            <Avatar
              src="/faktaalam/faktaalam.png"
              alt="fakta alam"
              sx={styles.avatar}
            />

            <Box typography="subtitle1">
              <b>FAKTA ALAM</b>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={styles.button}
            href="https://youtube.com/@FAKTAALAMSHORTS?sub_confirmation=1"
            fullWidth
          >
            Youtube
          </Button>

          <Button
            variant="contained"
            sx={styles.button}
            href="https://tiktok.com/@faktaalamtiktok"
            fullWidth
          >
            Tiktok
          </Button>

          <Button
            variant="contained"
            sx={styles.button}
            href="https://instagram.com/faktaalamreels"
            fullWidth
          >
            Instagram
          </Button>

          <Button
            variant="contained"
            sx={styles.button}
            startIcon={<FavoriteBorderIcon />}
            href="https://teer.id/xlance"
            fullWidth
          >
            Dukung Kami
          </Button>

          <Box sx={styles.footer}>
            Owned by&nbsp;
            
            <Link
              underline="hover"
              href="/"
            >
              Xlance
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}