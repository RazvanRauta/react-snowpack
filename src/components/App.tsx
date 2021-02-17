import { ChakraProvider, Heading, theme } from '@chakra-ui/react'
import React from 'react'

const App: React.FC = () => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<Heading size="lg">Hello! You made it!</Heading>
		</ChakraProvider>
	)
}

export default App
