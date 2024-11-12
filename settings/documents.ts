import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Introduction 1",
        href: "/introduction1",
        heading: "Getting started 1",
        items: [
          {
            title: "Installation 1",
            href: "/installation1",
          },
        ]
      },
      // {
      //   title: "Setup",
      //   href: "/setup",
      // },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "C# Programing",
    href: "/CSharpPrograming",
    heading: "Programing Notes",
    items: [
      {
        title: "Ghi chú thứ nhất",
        href: "/note1",
      },
    ],
  },
];