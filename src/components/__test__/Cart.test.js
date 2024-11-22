import { render, screen } from "@testing-library/react";
import RestorentMenu from "../RestorentMenu";
import { MOCK_DATA } from "../../components/mocks/resMenuMocks.json";
import { act } from "@testing-library/react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurent menu component ",async ()=>{
    await act(async()=>{
        render(<RestorentMenu></RestorentMenu>)
    }) 

})