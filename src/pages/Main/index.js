import React, { useState, useMemo } from 'react';

import './styles.css';

export default function Main() {
  const [quantities, setQuantities] = useState({
    t0t1: '0',
    t1t2: '0',
    t2t3: '0',
    t3t4: '0',
    t4t5: '0',
  });

  const weights = useMemo(
    () => ({
      t0t1: 800 * Number(quantities.t0t1),
      t1t2: 2400 * Number(quantities.t1t2),
      t2t3: 2700 * Number(quantities.t2t3),
      t3t4: 2000 * Number(quantities.t3t4),
      t4t5: 1000 * Number(quantities.t4t5),
    }),
    [quantities]
  );

  const total = useMemo(() => {
    return (
      weights.t0t1 + weights.t1t2 + weights.t2t3 + weights.t3t4 + weights.t4t5
    );
  }, [weights]);

  function changeQuantity(e) {
    const { name, value } = e.target;

    setQuantities({ ...quantities, [name]: value });
  }

  return (
    <div className="page-calculator">
      <div className="calculator">
        <h1>BDO - Calculator</h1>

        <ul>
          <li>
            <strong>Tier 0 &gt; Tier 1</strong>

            <input
              type="number"
              min={0}
              name="t0t1"
              value={quantities.t0t1}
              onChange={changeQuantity}
            />

            <strong className="total">{weights.t0t1} LT</strong>
          </li>

          <li>
            <strong>Tier 1 &gt; Tier 2</strong>

            <input
              type="number"
              min={0}
              name="t1t2"
              value={quantities.t1t2}
              onChange={changeQuantity}
            />

            <strong className="total">{weights.t1t2} LT</strong>
          </li>

          <li>
            <strong>Tier 2 &gt; Tier 3</strong>

            <input
              type="number"
              min={0}
              name="t2t3"
              value={quantities.t2t3}
              onChange={changeQuantity}
            />

            <strong className="total">{weights.t2t3} LT</strong>
          </li>

          <li>
            <strong>Tier 3 &gt; Tier 4</strong>

            <input
              type="number"
              min={0}
              name="t3t4"
              value={quantities.t3t4}
              onChange={changeQuantity}
            />

            <strong className="total">{weights.t3t4} LT</strong>
          </li>

          <li>
            <strong>Tier 4 &gt; Tier 5</strong>

            <input
              type="number"
              min={0}
              name="t4t5"
              value={quantities.t4t5}
              onChange={changeQuantity}
            />

            <strong className="total">{weights.t4t5} LT</strong>
          </li>
        </ul>

        <footer>
          <div>
            <strong>Total weight: </strong>
            <span>{total} LT</span>
          </div>

          <p>
            Created by <br /> Leonardo Maron
          </p>
        </footer>
      </div>
    </div>
  );
}
