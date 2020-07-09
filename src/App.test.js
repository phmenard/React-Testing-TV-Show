import React from "react";
import App from './App';
import { render, useEvent, waitFor, getAllByTestId, findAllByAltText, queryAllByText } from '@testing-library/react';
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

test("App fetches show data and renders it", async () => {
    // Render app - should show "Get Data" button
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { queryAllByText } = render(<App />);
    
    // grab the dropdown
    /*const dropDown = await findByText(/select a season/i);
    useEvent.click(dropDown);
    await findByText(/fetching data.../i)*/

    // grab a season
    /*const season1 = await findByText(/season1/i)
    useEvent.click(season1);*/

    // test for fetching data
    expect(queryAllByText(/fetching data.../i)).toHaveLength(1);

    // wait for responce
    await waitFor(() => {
        expect(queryAllByText(/Episode 1/i)).toHaveLength(1);

    })
});