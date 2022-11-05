import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnimatedText from '@ui/animated-text/AnimatedText';

import WithTransition from './WithTransition';

type WithTransitionType = typeof WithTransition;

export default {
  title: 'Example/WithTransition',
  component: WithTransition,
} as ComponentMeta<WithTransitionType>;

const Template: ComponentStory<WithTransitionType> = (args) => (
  <WithTransition {...args} />
);

const children = (
  <AnimatedText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </AnimatedText>
);

export const BasicTransition = Template.bind({});

BasicTransition.args = {
  children: children,
};

export const TopTransition = Template.bind({});
TopTransition.args = {
  children: children,
  type: 'transition',
  fade: true,
  direction: 'top',
};
