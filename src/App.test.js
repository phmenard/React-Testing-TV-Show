import React from "react";
import App from './App';
import { render, fireEvent, waitFor, getAllByTestId, findAllByAltText, queryAllByText, getByText } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';

const mockData = {
    image: { original: "original"},
    name: "EP1",
    summary: "<p>Episode 1</p>",
    _embedded: {
        episodes: [{
            id: "1",
            image: { medium: "medium_image"},
            name: "Episode 1",
            season: 1,
            number: 3,
            summary: "<p>Episode 1</p>",
            runtime: 60
        }]
    }
  };

jest.mock("./api/fetchShow");

test("it should show responce from api", async () => { 

    mockFetchShow.mockResolvedValueOnce(mockData)

    const {getAllByTestID, findByText} = render(<App />) 
    //const dropDown = await findByText(/select a season/i)

    //fireEvent.click(dropDown)
    // await findByText(/Fetching Data.../i) 

    const episode1 = await findByText(/episode 1/i)
    //console.log(episode1);
    expect(episode1).toHaveTextContent(/episode 1/i)
    expect(episode1).not.toHaveTextContent(/I hate testing/i)
     
})
