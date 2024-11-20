import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact us page test cases",()=>{ //grouping the test cases 
    test("should load contact us component",()=>{
        render(<Contact></Contact>)
        const header = screen.getByRole("heading")
    
        expect(header).toBeInTheDocument()
    })
    
    test("test for button",()=>{
        render(<Contact></Contact>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    
    test("test all input ",()=>{
        render(<Contact></Contact>)
        const input = screen.getAllByRole('textbox') //to select multiple 
        expect(input[1]).toBeInTheDocument()
    })
})

