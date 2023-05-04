INSERT INTO departments (title, description)
VALUES ('Sales', 'Responsible for selling products or services to customers.'),
       ('Marketing', 'Responsible for promoting products or services to potential customers.'),
       ('Finance', 'Responsible for managing the company finances.'),
       ('Human Resources', 'Responsible for managing the company employees.');

-- IT department
INSERT INTO departments (title, description)
VALUES ('IT', 'Responsible for managing the company’s technological infrastructure.');

-- IT Manager
INSERT INTO job_positions (title, department_id, description)
VALUES ('IT Manager', (SELECT id FROM departments WHERE title = 'IT'), 'Responsible for overseeing all IT initiatives and managing the IT department.');

-- Software Developer
INSERT INTO job_positions (title, department_id, description)
VALUES ('Software Developer', (SELECT id FROM departments WHERE title = 'IT'), 'Responsible for developing software programs that meet the company’s needs.');

-- Network Administrator
INSERT INTO job_positions (title, department_id, description)
VALUES ('Network Administrator', (SELECT id FROM departments WHERE title = 'IT'), 'Responsible for managing the company’s computer network systems.');

-- insert sub-department under IT department
INSERT INTO departments (title, description, root_department_id)
VALUES ('Software Development', 'Software development team under IT', (SELECT id FROM departments WHERE title = 'IT'));

-- Insert the sub-department for Software Development
INSERT INTO departments (title, description, root_department_id)
VALUES ('Web Development', 'This sub-department is responsible for developing web applications.', (SELECT id FROM departments WHERE title = 'Software Development')),
       ('Mobile Development', 'Sub-department for mobile app development', (SELECT id FROM departments WHERE title = 'Software Development'));

-- Insert some job positions for the Software Development department and its sub-department
INSERT INTO job_positions (title, department_id, description)
VALUES ('Software Engineer', (SELECT id FROM departments WHERE title = 'Software Development'), 'This position involves developing software products and services.');

INSERT INTO job_positions (title, department_id, description)
VALUES ('Front-end Developer', (SELECT id FROM departments WHERE title = 'Web Development'), 'This position involves developing client-side web applications using HTML, CSS, and JavaScript.');

INSERT INTO job_positions (title, department_id, description)
VALUES ('Back-end Developer', (SELECT id FROM departments WHERE title = 'Web Development'), 'This position involves developing server-side web applications using frameworks such as Node.js or Django.');

INSERT INTO job_positions (title, department_id, description)
VALUES ('Full-stack Developer', (SELECT id FROM departments WHERE title = 'Web Development'), 'This position involves developing both client-side and server-side web applications.'); 

-- Sales department
INSERT INTO job_positions (title, department_id, description)
VALUES ('Sales Manager', (SELECT id FROM departments WHERE title = 'Sales'), 'Responsible for leading and managing the sales team.'),
       ('Sales Representative', (SELECT id FROM departments WHERE title = 'Sales'), 'Responsible for selling products or services to customers.'),
       ('Sales Coordinator', (SELECT id FROM departments WHERE title = 'Sales'), 'Responsible for coordinating sales activities and supporting the sales team.'),
       ('Account Manager', (SELECT id FROM departments WHERE title = 'Sales'), 'Responsible for managing and growing customer accounts.');

-- Marketing department
INSERT INTO job_positions (title, department_id, description)
VALUES ('Marketing Manager', (SELECT id FROM departments WHERE title = 'Marketing'), 'Responsible for leading and managing the marketing team.'),
       ('Marketing Coordinator', (SELECT id FROM departments WHERE title = 'Marketing'), 'Responsible for coordinating and executing marketing campaigns.'),
       ('Social Media Coordinator', (SELECT id FROM departments WHERE title = 'Marketing'), 'Responsible for managing social media accounts and creating content.'),
       ('Brand Strategist', (SELECT id FROM departments WHERE title = 'Marketing'), 'Responsible for developing and executing brand strategies.');

-- Finance department
INSERT INTO job_positions (title, department_id, description)
VALUES ('Chief Financial Officer', (SELECT id FROM departments WHERE title = 'Finance'), 'Responsible for overseeing the company finances and making financial decisions.'),
       ('Financial Controller', (SELECT id FROM departments WHERE title = 'Finance'), 'Responsible for managing financial reporting and analysis.'),
       ('Financial Analyst', (SELECT id FROM departments WHERE title = 'Finance'), 'Responsible for analyzing financial data and making financial recommendations.'),
       ('Accounts Payable Specialist', (SELECT id FROM departments WHERE title = 'Finance'), 'Responsible for managing accounts payable and processing vendor payments.');

-- Human Resources department
INSERT INTO job_positions (title, department_id, description)
VALUES ('HR Manager', (SELECT id FROM departments WHERE title = 'Human Resources'), 'Responsible for leading and managing the HR team.'),
       ('HR Generalist', (SELECT id FROM departments WHERE title = 'Human Resources'), 'Responsible for various HR-related tasks such as recruiting, training, and performance management.'),
       ('Recruiter', (SELECT id FROM departments WHERE title = 'Human Resources'), 'Responsible for recruiting and hiring new employees.'),
       ('Training Coordinator', (SELECT id FROM departments WHERE title = 'Human Resources'), 'Responsible for coordinating and delivering employee training programs.');

-- Insert job positions
INSERT INTO job_positions (title, department_id, description) VALUES
('Mobile Developer', (SELECT id FROM departments WHERE title = 'Mobile Development'), 'Responsible for developing and maintaining mobile applications.');

-- Insert job positions for Front-End Development sub-department
INSERT INTO job_positions (title, department_id, description) VALUES
('UI/UX Designer', (SELECT id FROM departments WHERE title = 'Web Development'), 'Responsible for designing user interfaces and user experiences for web applications and websites.');

-- Insert job positions for Back-End Development sub-department
INSERT INTO job_positions (title, department_id, description) VALUES
('Database Administrator', (SELECT id FROM departments WHERE title = 'Web Development'), 'Responsible for maintaining the performance, security, and reliability of databases.');