import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgressBar from './ProgressBar';

configure({ adapter: new Adapter() });

it('should get width value when min and max are set to default', () => {
  const progressBar = shallow(<ProgressBar value={0} />);
  const progressBarInstance = progressBar.instance();

  expect(progressBarInstance.getValueAsPercentage()).toEqual(0);

  progressBar.setProps({ value: 22.3 });
  expect(progressBarInstance.getValueAsPercentage()).toEqual(22);

  progressBar.setProps({ value: 102 });
  expect(progressBarInstance.getValueAsPercentage()).toEqual(100);
});

it('should width value when custom min and max provided', () => {
  const progressBar = shallow(<ProgressBar value={35} minValue={10} maxValue={60} />);
  const progressBarInstance = progressBar.instance();

  expect(progressBarInstance.getValueAsPercentage()).toEqual(50);

  progressBar.setProps({ value: 55.2 });
  expect(progressBarInstance.getValueAsPercentage()).toEqual(90);

  progressBar.setProps({ value: 9 });
  expect(progressBarInstance.getValueAsPercentage()).toEqual(0);

  progressBar.setProps({ value: 61 });
  expect(progressBarInstance.getValueAsPercentage()).toEqual(100);
});

it('should set width value in element styles', () => {
  const progressBar = shallow(<ProgressBar value={20} />);
  const progressBarDiv = progressBar.find('.progress-bar').prop('style');
  expect(progressBarDiv.width).toEqual('20%');
});