#Find the different warehouses in "Pune".
SELECT DISTINCT WNAME 
FROM WAREHOUSES 
WHERE LOCATION = 'Pune'; 

#Find a Warehouse that has the maximum number of stores.
SELECT WID, WNAME, COUNT(*) AS StoreCount
FROM WAREHOUSES w
JOIN STORE s ON w.WID = s.SID
GROUP BY WID, WNAME
ORDER BY StoreCount DESC
LIMIT 1;

#Find the item that has the minimum weight.
SELECT * FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

#Find an item that is ordered for a minimum number of times.
SELECT i.ITEMNO, i.DESCRIPTION, COUNT(o.ONO) AS OrderCount
FROM ITEMS i
LEFT JOIN ORDERS o ON i.ITEMNO = o.ONO
GROUP BY i.ITEMNO, i.DESCRIPTION
ORDER BY orderCount ASC
LIMIT 1;
