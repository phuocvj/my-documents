import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
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