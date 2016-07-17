/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Worldbrain</li>
          <li>
            <a href="#">About us</a>
          </li>
          <li><a href="#">Concat</a></li>
          <li><a href="#">F.A.Q</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
