SELECT * FROM pg_available_extensions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS departments (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(30) NOT NULL UNIQUE,
    description TEXT,
    root_department_id UUID,
    CONSTRAINT fk_root_department_id FOREIGN KEY (root_department_id) REFERENCES departments (id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_positions (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(30) NOT NULL,
    department_id UUID NOT NULL,
    CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES departments (id),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS employees (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    identification_number VARCHAR(20) NOT NULL UNIQUE,
    address VARCHAR(100),
    phone_number VARCHAR(15),
    avatar_url VARCHAR(80),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS employee_positions (
    job_position_id UUID NOT NULL,
    employee_id UUID NOT NULL,
    CONSTRAINT fk_job_position_id FOREIGN KEY (job_position_id) REFERENCES job_positions (id),
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (job_position_id, employee_id)
);

CREATE TABLE IF NOT EXISTS roles (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(30) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS assigned_roles (
    employee_id UUID NOT NULL,
    role_id UUID NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES roles (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (employee_id, role_id)
);

CREATE TABLE IF NOT EXISTS training (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    training_name VARCHAR(200) NOT NULL,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    completion_date DATE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS days_off_types (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS assigned_days_off (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    assigned_by_id UUID NOT NULL,
    type_id UUID NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT fk_assigned_by_id FOREIGN KEY (assigned_by_id) REFERENCES employees (id),
    CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES days_off_types (id),
    description TEXT,
    available_from TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    available_to TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS requested_days_off (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    CONSTRAINT employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    start_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS approved_days_off (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    request_id UUID NOT NULL,
    approved_by_id UUID,
    CONSTRAINT fk_request_id FOREIGN KEY (request_id) REFERENCES requested_days_off (id),
    CONSTRAINT fk_approved_by_id FOREIGN KEY (approved_by_id) REFERENCES employees (id) ON DELETE SET NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
)

CREATE TABLE IF NOT EXISTS benefit_types (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS benefits (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    benefit_type_id UUID NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT fk_benefit_type_id FOREIGN KEY (benefit_type_id) REFERENCES benefit_types (id),
    benefit_start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    benefit_end_date DATE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    end_date DATE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_teams (
    project_id UUID NOT NULL,
    employee_id UUID NOT NULL,
    CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES projects (id),
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (project_id, employee_id)
);

INSERT INTO employees (first_name, last_name, date_of_birth, email, identification_number, address, phone_number, avatar_url)
VALUES ('Alice', 'Smith', '1985-06-10', 'alice.smith@example.com', 'ID001', '123 Main St', '555-1234', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Bob', 'Johnson', '1990-02-14', 'bob.johnson@example.com', 'ID002', '456 Elm St', '555-5678', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Charlie', 'Lee', '1988-08-22', 'charlie.lee@example.com', 'ID003', '789 Oak Ave', '555-9012', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('David', 'Davis', '1976-04-01', 'david.davis@example.com', 'ID004', '246 Maple St', '555-3456', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Emma', 'Wong', '1995-12-31', 'emma.wong@example.com', 'ID005', '135 Pine St', '555-7890', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Frank', 'Garcia', '1982-11-15', 'frank.garcia@example.com', 'ID006', '579 Cedar Rd', '555-2345', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Grace', 'Kim', '1992-09-03', 'grace.kim@example.com', 'ID007', '802 Walnut St', '555-6789', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Henry', 'Martinez', '1987-05-25', 'henry.martinez@example.com', 'ID008', '864 Oak Ln', '555-1234', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Isabella', 'Lopez', '1998-07-17', 'isabella.lopez@example.com', 'ID009', '579 Elm St', '555-5678', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('John', 'Brown', '1979-03-08', 'john.brown@example.com', 'ID010', '246 Pine St', '555-9012', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Karen', 'Chen', '1991-11-20', 'karen.chen@example.com', 'ID011', '135 Maple Rd', '555-3456', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Larry', 'Nguyen', '1983-01-30', 'larry.nguyen@example.com', 'ID012', '802 Cedar St', '555-7890', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Megan', 'Gonzalez', '1994-08-14', 'megan.gonzalez@example.com', 'ID013', '579 Oak Ave', '555-2345', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Nancy', 'Ramirez', '1986-06-11', 'nancy.ramirez@example.com', 'ID014', '864 Maple St', '555-6789', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Oliver', 'Perez', '1997-04-03', 'oliver.perez@example.com', 'ID015', '246 Pine Rd', '555-1234', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Quincy', 'Liu', '1993-12-08', 'quincy.liu@example.com', 'ID016', '135 Oak Ln', '555-5678', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Rachel', 'Gupta', '1989-10-02', 'rachel.gupta@example.com', 'ID017', '579 Pine St', '555-9012', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Samantha', 'Singh', '1984-07-06', 'samantha.singh@example.com', 'ID018', '802 Elm St', '555-3456', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Tom', 'Chang', '1975-05-19', 'tom.chang@example.com', 'ID019', '864 Pine Rd', '555-7890', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Uma', 'Patel', '1996-03-13', 'uma.patel@example.com', 'ID020', '246 Cedar St', '555-2345', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Victor', 'Kim', '1981-01-27', 'victor.kim@example.com', 'ID021', '579 Oak Ln', '555-6789', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Wendy', 'Hernandez', '1990-09-23', 'wendy.hernandez@example.com', 'ID022', '864 Cedar Rd', '555-1234', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Xavier', 'Nguyen', '1988-06-12', 'xavier.nguyen@example.com', 'ID023', '246 Maple St', '555-5678', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Yolanda', 'Lee', '1977-04-05', 'yolanda.lee@example.com', 'ID024', '135 Pine Rd', '555-9012', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Zachary', 'Garcia', '1992-02-18', 'zachary.garcia@example.com', 'ID025', '802 Oak Ave', '555-3456', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Alexis', 'Rodriguez', '1986-12-06', 'alexis.rodriguez@example.com', 'ID026', '579 Maple St', '555-7890', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Benjamin', 'Kim', '1997-10-30', 'benjamin.kim@example.com', 'ID027', '246 Pine Rd', '555-2345', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Catherine', 'Lopez', '1978-08-22', 'catherine.lopez@example.com', 'ID028', '864 Cedar Rd', '555-6789', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Daniel', 'Chen', '1993-06-03', 'daniel.chen@example.com', 'ID029', '135 Oak Ln', '555-1234', 'https://www.w3schools.com/howto/img_avatar2.png'),
       ('Frank', 'Smith', '1980-01-01', 'frank.smith@example.com', 'ID030', '246 Oak Ln', '555-5678', 'https://www.w3schools.com/howto/img_avatar2.png');