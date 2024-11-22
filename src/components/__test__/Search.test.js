import { fireEvent, render ,screen} from "@testing-library/react"
import Body from "./../Body"
import MOCK_DATA from "../../components/mocks/resBodyMocks.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "@testing-library/react"
import "@testing-library/jest-dom"


/** making global function to work like fetch function besouse jest dont have fetch fun internally */
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});
it("should render the body component with search", async () => {

    await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>))

    const searchButton = screen.getByRole("button",{name:"Search"})
    const searchInput = screen.getByTestId("searchInput")//this is get by id which is provided into html data-testid
    fireEvent.change(searchInput,{target:{value:"burger"}}) //this is used to trigger input field
    fireEvent.click(searchButton)


    const cards = screen.getAllByTestId("resCards")

    // expect(cards.length).toBe(4)

})