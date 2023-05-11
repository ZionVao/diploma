SELECT * FROM pg_available_extensions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS departments (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(30) NOT NULL UNIQUE,
    description TEXT,
    root_department_id UUID NULL,
    CONSTRAINT fk_root_department_id FOREIGN KEY (root_department_id) REFERENCES departments (id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_positions (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(30) NOT NULL,
    department_id UUID NULL,
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
    password TEXT NOT NULL, 
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

CREATE TYPE role AS ENUM ('admin', 'manager', 'supervisor', 'user');

CREATE TABLE IF NOT EXISTS assigned_roles (
    employee_id UUID NOT NULL,
    roles role[] DEFAULT ARRAY['user']::role[],
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


CREATE TYPE status AS ENUM ('pending', 'approved', 'denied');

CREATE TABLE IF NOT EXISTS requested_days_off (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    type_id UUID NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES days_off_types (id),
    start_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    description TEXT,
    status denied DEFAULT 'pending',
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
