import {
  FaAngular,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa';

import cancel from '~/images/cancel.png';
import check from '~/images/check-mark.png';

export const navigationLinks = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About Us',
    hash: '/about',
  },
  {
    name: 'Products',
    hash: '/products',
  },
];

export const features = [
  {
    title: 'Basic',
    value: '150.000',
    featureItem: [
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: cancel },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: cancel },
    ],
  },
  {
    title: 'Standard',
    value: '250.000',
    featureItem: [
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: cancel },
    ],
  },
  {
    title: 'Premium',
    value: '350.000',
    featureItem: [
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
      { title: 'Lorem ipsum dolor sit amet.', imgUrl: check },
    ],
  },
];

export const featuresContent = [
  {
    number: '01',
    icon: FaHtml5,
    title: 'Lorem Ipsum',
  },
  {
    number: '02',
    icon: FaCss3,
    title: 'Lorem Ipsum',
  },
  {
    number: '03',
    icon: FaDocker,
    title: 'Lorem Ipsum',
  },
  {
    number: '04',
    icon: FaReact,
    title: 'Lorem Ipsum',
  },
  {
    number: '05',
    icon: FaAngular,
    title: 'Lorem Ipsum',
  },
  {
    number: '06',
    icon: FaJs,
    title: 'Lorem Ipsum',
  },
];

export const featureDetailContent = [
  {
    icon: FaHtml5,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
  {
    icon: FaCss3,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
  {
    icon: FaDocker,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
  {
    icon: FaReact,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
  {
    icon: FaAngular,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
  {
    icon: FaJs,
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ad omnis odit! Quos natus explicabo repudiandae perspiciatis cum asperiores!',
  },
];
