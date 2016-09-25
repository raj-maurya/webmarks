/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {

  it('renders children when error', () => {
    const wrapper = shallow(
      <Root context={{ insertCss: () => {} }} error>
        <div className="child" />
      </Root>
    );

    expect(wrapper.contains(<div className="child" />)).to.be.true;
  });

  it('renders no children when no error', () => {
    const wrapper = shallow(
      <Root context={{ insertCss: () => {} }}>
        <div className="child" />
      </Root>
    );

    expect(wrapper.contains(<div className="child" />)).to.be.false;
  });

});
