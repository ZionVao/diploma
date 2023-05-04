INSERT INTO employee_positions (job_position_id, employee_id)
SELECT
    job_positions.id,
    employees.id
FROM
    job_positions
    CROSS JOIN employees
WHERE
    employees.identification_number LIKE 'ID00%'
ORDER BY
    random()
LIMIT
    (SELECT count(*) FROM employees)