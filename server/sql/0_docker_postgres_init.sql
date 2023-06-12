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
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (employee_id)
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
    status status DEFAULT 'pending',
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

CREATE TABLE IF NOT EXISTS attendance_records (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    punch_in_utc_time TIMESTAMP,
    punch_out_utc_time TIMESTAMP,
    note TEXT,
    state VARCHAR(255) NOT NULL,
    CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_candidates (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(30),
    middle_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(100),
    contact_number VARCHAR(30),
    status INTEGER,
    comment TEXT,
    cv_text_version TEXT,
    keywords VARCHAR(255),
    added_person UUID NOT NULL,
    mode_of_application INTEGER,
    CONSTRAINT fk_added_person FOREIGN KEY (added_person) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_candidate_attachments (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    candidate_id UUID NOT NULL,
    file_name VARCHAR(255),
    file_type VARCHAR(255),
    file_size INTEGER,
    file_content bytea,
    attachment_type VARCHAR(255),
    CONSTRAINT fk_candidate_id FOREIGN KEY (candidate_id) REFERENCES job_candidates (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_vacancy (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID NOT NULL,
    hiring_manager_id UUID NOT NULL,
    name VARCHAR(100),
    description text,
    status INTEGER,
    CONSTRAINT fk_job_id FOREIGN KEY (job_id) REFERENCES job_positions (id),
    CONSTRAINT fk_jhiring_manager_id FOREIGN KEY (hiring_manager_id) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_candidate_vacancy (
    candidate_id UUID NOT NULL,
    vacancy_id UUID NOT NULL,
    name VARCHAR(100),
    description text,
    no_of_positions INTEGER,
    status INTEGER,
    CONSTRAINT fk_candidate_id FOREIGN KEY (candidate_id) REFERENCES job_candidates (id),
    CONSTRAINT fk_vacancy_id FOREIGN KEY (vacancy_id) REFERENCES job_vacancy (id),
    PRIMARY KEY(candidate_id, vacancy_id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS candidate_history (
    id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    candidate_id UUID NOT NULL,
    vacancy_id UUID NOT NULL,
    interview_id UUID NOT NULL,
    action INTEGER,
    performed_by UUID,
    performed_date TIMESTAMP,
    note TEXT,
    CONSTRAINT fk_candidate_id FOREIGN KEY (candidate_id) REFERENCES job_candidates (id),
    CONSTRAINT fk_vacancy_id FOREIGN KEY (vacancy_id) REFERENCES job_vacancy (id),
    CONSTRAINT fk_interview_id FOREIGN KEY (interview_id) REFERENCES employees (id),
    CONSTRAINT fk_performed_by FOREIGN KEY (performed_by) REFERENCES employees (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);