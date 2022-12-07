import { Experience } from '../types';
import {
  disneylandparis,
  hifield,
  holbertonschool,
  mcdonalds,
  vence,
} from './companies';

export const experiences: Experience[] = [
  {
    company: hifield,
    positions: [
      {
        label: 'Full-stack Developer',
        startDate: new Date(2022, 8, 5),
        details:
          "I work for Paonia, a company entity intended to be a publisher of innovative cyber security products.",
        tags: ['Permanent Contract'],
      },
    ],
  },
  {
    company: holbertonschool,
    positions: [
      {
        label: 'Software Engineer - Technical Support',
        startDate: new Date(2021, 7, 16),
        endDate: new Date(2022, 7, 31),
        details:
          "Technical support for the Students in their learning of the Holberton School's program. Answering their questions and advising them on the best way to learn, according to their results. Providing them with the best possible support, in a friendly and professional way. Technical point of contact for the Lille campus.",
        tags: ['Permanent Contract'],
      },
    ],
  },
  {
    company: disneylandparis,
    positions: [
      {
        label: 'Disney VoluntEars',
        startDate: new Date(2020, 0, 14),
        details:
          'Assistance in supervision and organization of charity events. Help of underprivileged childrens, mainly in the Disneyland Paris Resort.',
        tags: ['Volunteering'],
      },
      {
        label: 'Community Chat Expert',
        startDate: new Date(2020, 0, 14),
        endDate: new Date(2021, 11, 31),
        details:
          'Assistance to future guests on the official Disneyland Paris website. Learning about customer relationship aspects, interactions with visitors. Formation of a cohesive team, especially during the covid-19 pandemic.',
        tags: ['Volunteering'],
      },
    ],
  },
  {
    company: mcdonalds,
    positions: [
      {
        label: 'Crew Member',
        startDate: new Date(2018, 2, 1),
        endDate: new Date(2018, 4, 31),
        details:
          'Preparation of orders at the counter. Order taking and cash management. Drive, table service, and Barista at McCafé.',
        tags: ['Permanent Contract'],
      },
    ],
  },
  {
    company: vence,
    positions: [
      {
        label: 'Administration Assistant',
        startDate: new Date(2017, 11, 1),
        endDate: new Date(2018, 0, 31),
        details:
          'Invoice management, document digitisation, payroll entry, sick leave and expenses.',
        tags: ['Fixed-term Contract'],
      },
    ],
  },
];
