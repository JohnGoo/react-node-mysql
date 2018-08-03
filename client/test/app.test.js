import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LinkButton from './linkButton';

configure({ adapter: new Adapter() });

/**
 * 在这里我们引入了 `shallow` 方法，它是 `Enzyme` 提供的 API 之一，可以实现**浅渲染**。其作用是仅仅渲染至虚拟节点，不会返回真实的节点，能极大提高测试性能。但是它不适合测试包含子组件、需要测试声明周期的组件。
 * Enzyme 还提供了其他两个 API:
 * mount: Full Rendering，非常适用于存在于 DOM API 存在交互组件，或者需要测试组件完整的声明周期
 * render: Static Rendering，用于 将 React 组件渲染成静态的 HTML 并分析生成的 HTML 结构。render 返回的 wrapper 与其他两个 API 类似。不同的是 render 使用了第三方 HTML 解析器和 Cheerio。
 */

function sum(a, b) {
  return a + b;
}


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


describe('<LinkButton/>', () => {
  it('Snapshot', () => {
    const component = shallow(<LinkButton />);

    let snapshot = component;
    expect(snapshot).toMatchSnapshot();

    // snapshot.props.onClick();
    // snapshot = component.toJSON();
    // expect(snapshot).toMatchSnapshot();

    // snapshot.props.onClick();
    // snapshot = component.toJSON();
    // expect(snapshot).toMatchSnapshot()
    // let wrapper = shallow(<LinkButton />);
    // expect(wrapper.find('.abc').text()).toEqual('123456');
  });
});
