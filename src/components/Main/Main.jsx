import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { CustomTypography } from '../Typography';
import { CustomButton } from '../Button';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/index.routes';
import { CustomAvatar } from '../Avatar/CustomAvatar';
import { CustomFab } from '../Fab/CustomFab';
import { CustomIconButton } from '../IconButton/CustomIconButton';
import { CustomTableList } from '../TableList/CustomTableList';

const rows = [
  { name: 'Marcus joelheira', age: 22, job: 'Developer' },
  { name: 'Tiago Oliveira', age: 24, job: 'Designer' },
  { name: 'Lucas Santana', age: 30, job: 'Manager' }
];

export const Main = () => {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 }
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <CustomTypography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)'
            }}
          >
            Projeto &nbsp;
            <CustomTypography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.main'
              }}
            >
              AT Mobile First
            </CustomTypography>
          </CustomTypography>
          <CustomTypography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Ótimo projeto desenvolvido com fins de estudo e aprendizado.
            Aproveite para conhecer mais sobre o projeto e o que ele pode
            oferecer.
          </CustomTypography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <NavLink to={routes.login.path}>
              <Box display={'flex'} justifyContent={'center'}>
                <CustomButton variant="contained" color="primary">
                  Comece agora!
                </CustomButton>
              </Box>
            </NavLink>
          </Stack>
          <CustomTypography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            Clicando em &quot;Comece agora&quot; você concorda com nossos &nbsp;
            <Link href="/" color="primary">
              Termos & Condições
            </Link>
            .
          </CustomTypography>
        </Stack>
        <Box
          sx={{
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor: alpha('#BFCCD9', 0.5),
            boxShadow: `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 4,
              gap: 2
            }}
          >
            <CustomAvatar
              src="https://th.bing.com/th/id/OIP.CyK2AnZjMBTrZdv2HfkajwHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile Picture"
            />
            <CustomFab />
            <CustomIconButton />
            <Box sx={{ width: '100%', marginTop: 4 }}>
              <CustomTableList rows={rows} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
