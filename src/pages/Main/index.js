import React from 'react';

import './styles.css';

export default function Main() {
  return (
    <div className="page-calculator">
      <div className="calculator">
        <h1>DBO - Calculator</h1>

        <ul>
          <li>
            <strong>Tier 0 &gt; Tier 1</strong>

            <input type="number" min={0} />

            <strong className="total">800</strong>
          </li>

          <li>
            <strong>Tier 1 &gt; Tier 2</strong>

            <input type="number" min={0} />

            <strong className="total">2400</strong>
          </li>
        </ul>

        <footer>
          <div>
            <strong>Total weight</strong>
            <p>3200</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
