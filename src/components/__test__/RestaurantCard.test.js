import { render ,screen} from "@testing-library/react"
import RestorentCard from "../RestorentCard"
import MOCK_DATA from "../mocks/resCardMocks.json"
import "@testing-library/jest-dom"


test("should render restaurent cad with prop data",()=>{
    
    render(<RestorentCard resData={MOCK_DATA.resData}></RestorentCard>)

    const name = screen.getByText('Chinese Wok')
    
    expect(name).toBeInTheDocument()
})