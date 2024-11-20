import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "./../../utils/appStore"
import "@testing-library/jest-dom"


it("should load header component with login button", () => {
    /** in header component we used redux there for need to add component in provider did same for router  */
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole("button",{name:'login'})

    expect(button).toBeInTheDocument()
})

it("should load header component with cart button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const button = screen.getByText("Cart0") //here u can use regex as well when u use text

    expect(button).toBeInTheDocument()
})

it("should change login button to logout button on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:'login'})

    fireEvent.click(loginButton) //this event is use for click the button
    const logoutButton = screen.getByRole("button",{name: 'logout'})

    expect(logoutButton).toBeInTheDocument()
})