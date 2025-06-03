import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Typography, createTheme } from '@mui/material'
import { Card, CardMedia, CardContent, CardActions } from "@mui/material"
import { Home, Dashboard, Settings, Person, Logout } from '@mui/icons-material'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

function App() {

	const options = [
		{
			id: 1,
			name: "Inicio",
			icon: Home
		},
		{
			id: 2,
			name: "Dashboard",
			icon: Dashboard
		},
		{
			id: 3,
			name: "Configuración",
			icon: Settings
		},
		{
			id: 4,
			name: "Perfil",
			icon: Person
		},
		{
			id: 5,
			name: "Cerrar Sesión",
			icon: Logout
		}
	]

	const cards = [
		{
			image: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1",
			title: "Perro",
			description: "Esta es la descripción",
		},
		{
			image: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1",
			title: "Perro",
			description: "Esta es la descripción",
		},
		{
			image: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1",
			title: "Perro",
			description: "Esta es la descripción",
		},
	]

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box height={"100vh"} width={"100%"} display={"flex"}>
				<Box sx={{ width: 250 }}>
					<List>
						{
							options.map((option) => (
								<ListItem>
									<ListItemButton>
										<ListItemIcon>
											<option.icon />
										</ListItemIcon>
										<ListItemText>
											{option.name}
										</ListItemText>
									</ListItemButton>
								</ListItem>
							))
						}
					</List>
				</Box>
				<Box 
					flexGrow={1} 
					display={"grid"} 
					gridTemplateColumns={"repeat(auto-fill, minmax(30%, 1fr))"} 
					gridTemplateRows={"repeat(2, 1fr)"}
					gap={"5%"}
					marginTop={"1rem"}
				>
					{
						cards.map((card) => (
							<Card>
								<CardMedia 
									sx={{ height: "50%" }}
									image={card.image}
									title={card.title}
									
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">{card.title}</Typography>
									<Typography variant="body2" sx={{ color: "text.secondary" }}>
										{card.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button variant={'outlined'}>Ver más</Button>
								</CardActions>
							</Card>
						))
					}
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default App
