import { Study } from '../types';
import { holbertonschool, school42 } from './companies';

export const studies: Study[] = [
  {
    company: holbertonschool,
    label: 'Specialization in full-stack web development',
    details: [
      'The first year was a reminder of the basics that I had acquired in my first school',
      'We recoded a shell, the printf function, a basic instruction interpreter, and in the final project, a web application based on the operation of the AirBnB platform',
      'In the second year, I specialized in full-stack web development',
      "We've implemented mockups, created end-to-end ReactJS applications, and learned to become highly adaptable to easily learn future technologies.",
    ],
    tag: 'Bac +4',
    startDate: new Date(2020, 8, 7),
    endDate: new Date(2022, 6, 10),
  },
  {
    company: school42,
    label: 'Fundamentals of software development',
    details: [
      'I had never developed before joining this school.',
      'I have successfully passed the very selective test period of 30 consecutive days',
      'I have greatly developed my abilities to learn code, working only by practice',
    ],
    tag: 'Bac +2',
    startDate: new Date(2018, 6, 2),
    endDate: new Date(2020, 8, 6),
  },
];
