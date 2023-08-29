import {render, screen} from '@testing-library/react'
import App from "./App"

test('should show login form', () => {
render(<App />)

const inputNode = screen.getAllByRole()
expect(inputNode).toBeInTheDocument();
})