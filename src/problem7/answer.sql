WITH denom_values AS (
  SELECT 'usdc' AS denom, 0.000001 AS usd_value
  UNION ALL
  SELECT 'swth' AS denom, 0.00000005 AS usd_value
  UNION ALL
  SELECT 'tmz' AS denom, 0.003 AS usd_value
)
SELECT DISTINCT t.address
FROM trades AS t
JOIN balances AS b ON t.address = b.address
JOIN denom_values AS d ON b.denom = d.denom
WHERE t.block_height > 730000
GROUP BY t.address
HAVING SUM(b.amount * d.usd_value) >= 500;
