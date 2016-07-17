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
    <div className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logoUrl} width="38" height="38" alt="Worldbrain"/>
        <span className="header__logo-txt">Worldbrain</span>
      </div>
      <div>
        <div className="header-right">
          Right side
        </div>
        <div className="header-left">
          Left
        </div>
      </div>
    </div>
  );
}

export default Header;
