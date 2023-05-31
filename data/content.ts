export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Chief Executive Officer at ACME",
        subTitle: "Remote",
        date: "1920 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Remote",
        date: "2010 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Master's Degree in International Legal Studies",
        subTitle: "Harvard University",
        date: "2015 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Master's Degree in Computer Science",
        subTitle: "Massachusetts Institute of Technology",
        date: "2012 - 2015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project Name",
  //         subTitle: "Sub Title",
  //         date: "2020 - 2023",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
