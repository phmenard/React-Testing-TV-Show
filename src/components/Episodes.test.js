import React from "react";
import Episodes from "./Episodes";
import { render, getAllByTestId } from "@testing-library/react";

const mockData = [
    {
        id: 553946,
        url:
          "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
        },
        summary:
          "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/553946",
          },
        },
      },
      {
        id: 578664,
        url:
          "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
        name: "Chapter Three: Holly, Jolly",
        season: 1,
        number: 3,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
        },
        summary:
          "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/578664",
          },
        },
      },
      {
        id: 578666,
        url:
          "http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
        name: "Chapter Five: The Flea and the Acrobat",
        season: 1,
        number: 5,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg",
        },
        summary:
          "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/578666",
          },
        },
      }
];

test("render list of episodes", () => {
    const { rerender, getAllByTestId, queryAllByTestId } = render(<Episodes episodes={[]} />);
    // check to see that there are no episodes
    const episodes = queryAllByTestId(/episodes/i)
    expect(episodes).toHaveLength(0);
    expect(episodes).toStrictEqual([]);

    // simulate the api call
    rerender(<Episodes episodes={mockData} />)
    const moreEpisodes = getAllByTestId(/episodes/i);

    // Assert
    expect(moreEpisodes).toHaveLength(3);


  
  });