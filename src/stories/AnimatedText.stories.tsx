import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AnimatedText from '../components/ui-components/animated-text/AnimatedText';

type AnimatedTextType = typeof AnimatedText;

export default {
  title: 'Example/AnimatedText',
  component: AnimatedText,
} as ComponentMeta<AnimatedTextType>;

const Template: ComponentStory<AnimatedTextType> = (args) => (
  <AnimatedText {...args} />
);

export const BasicText = Template.bind({});

BasicText.args = {
  children: 'Hi, my name is Nikolay',
};
