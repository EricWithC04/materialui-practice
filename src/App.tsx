import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Dashboard, Settings, Person, Logout } from '@mui/icons-material'
import './App.css'

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

	return (
		<div>
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
			<Box>
				
			</Box>
		</div>
	)
}

export default App
