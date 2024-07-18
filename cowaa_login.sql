use coins_db;
CREATE TABLE cowaa_login (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Designation VARCHAR(100),
    Password VARCHAR(255),
    Department VARCHAR(100),
    Address VARCHAR(255)
);
INSERT INTO cowaa_login (EmployeeID, Name, Email, Designation, Password, Department, Address) VALUES
(1, 'John Doe', 'john.doe@example.com', 'Software Engineer', 'p@ssw0rd1', 'Engineering', '123 Elm St, Springfield' ),
(2, 'Jane Smith', 'jane.smith@example.com', 'Data Analyst', 'p@ssw0rd2', 'Data Science', '456 Oak St, Springfield'),
(3, 'Jim Brown', 'jim.brown@example.com', 'Project Manager', 'p@ssw0rd3', 'Management', '789 Pine St, Springfield'),
(4, 'Lisa White', 'lisa.white@example.com', 'HR Specialist', 'p@ssw0rd4', 'Human Resources', '101 Maple St, Springfield'),
(5, 'Mark Green', 'mark.green@example.com', 'DevOps Engineer', 'p@ssw0rd5', 'Engineering', '202 Birch St, Springfield'),
(6, 'Sara Blue', 'sara.blue@example.com', 'UX Designer', 'p@ssw0rd6', 'Design', '303 Cedar St, Springfield'),
(7, 'Tom Black', 'tom.black@example.com', 'QA Engineer', 'p@ssw0rd7', 'Quality Assurance', '404 Ash St, Springfield'),
(8, 'Anna Grey', 'anna.grey@example.com', 'Marketing Specialist', 'p@ssw0rd8', 'Marketing', '505 Elm St, Springfield'),
(9, 'Chris Red', 'chris.red@example.com', 'Product Manager', 'p@ssw0rd9', 'Product', '606 Oak St, Springfield'),
(10, 'Pat Yellow', 'pat.yellow@example.com', 'Customer Support', 'p@ssw0rd10', 'Support', '707 Pine St, Springfield'),
(11, 'Kim Violet', 'kim.violet@example.com', 'Finance Manager', 'p@ssw0rd11', 'Finance', '808 Maple St, Springfield'),
(12, 'Alex White', 'alex.white@example.com', 'Legal Advisor', 'p@ssw0rd12', 'Legal', '909 Birch St, Springfield'),
(13, 'Sam Green', 'sam.green@example.com', 'Operations Manager', 'p@ssw0rd13', 'Operations', '101 Cedar St, Springfield'),
(14, 'Robin Blue', 'robin.blue@example.com', 'Business Analyst', 'p@ssw0rd14', 'Business Analysis', '202 Ash St, Springfield'),
(15, 'Taylor Brown', 'taylor.brown@example.com', 'Content Writer', 'p@ssw0rd15', 'Content', '303 Elm St, Springfield'),
(16, 'Jordan Black', 'jordan.black@example.com', 'Sales Executive', 'p@ssw0rd16', 'Sales', '404 Oak St, Springfield'),
(17, 'Morgan Grey', 'morgan.grey@example.com', 'IT Support', 'p@ssw0rd17', 'IT', '505 Pine St, Springfield'),
(18, 'Riley Red', 'riley.red@example.com', 'Administrative Assistant', 'p@ssw0rd18', 'Administration', '606 Maple St, Springfield'),
(19, 'Charlie Yellow', 'charlie.yellow@example.com', 'Logistics Manager', 'p@ssw0rd19', 'Logistics', '707 Birch St, Springfield'),
(20, 'Drew Violet', 'drew.violet@example.com', 'Research Scientist', 'p@ssw0rd20', 'Research', '808 Cedar St, Springfield'),
(21, 'Casey Pink', 'casey.pink@example.com', 'SEO Specialist', 'p@ssw0rd21', 'Marketing', '909 Ash St, Springfield'),
(22, 'Jamie Orange', 'jamie.orange@example.com', 'Network Administrator', 'p@ssw0rd22', 'IT', '1010 Elm St, Springfield'),
(23, 'Dylan Cyan', 'dylan.cyan@example.com', 'Systems Analyst', 'p@ssw0rd23', 'Data Science', '1111 Oak St, Springfield'),
(24, 'Quinn Lime', 'quinn.lime@example.com', 'Technical Writer', 'p@ssw0rd24', 'Content', '1212 Pine St, Springfield'),
(25, 'Reese Tan', 'reese.tan@example.com', 'Database Administrator', 'p@ssw0rd25', 'IT', '1313 Maple St, Springfield'),
(26, 'Taylor Amber', 'taylor.amber@example.com', 'Graphic Designer', 'p@ssw0rd26', 'Design', '1414 Birch St, Springfield'),
(27, 'Jordan Teal', 'jordan.teal@example.com', 'Scrum Master', 'p@ssw0rd27', 'Management', '1515 Cedar St, Springfield'),
(28, 'Morgan Magenta', 'morgan.magenta@example.com', 'Solutions Architect', 'p@ssw0rd28', 'Engineering', '1616 Ash St, Springfield'),
(29, 'Riley Lavender', 'riley.lavender@example.com', 'Mobile Developer', 'p@ssw0rd29', 'Engineering', '1717 Elm St, Springfield'),
(30, 'Blake Indigo', 'blake.indigo@example.com', 'Security Analyst', 'p@ssw0rd30', 'IT', '1818 Oak St, Springfield'),
(31, 'Sky Blue', 'sky.blue@example.com', 'Cloud Engineer', 'p@ssw0rd31', 'Engineering', '1919 Pine St, Springfield'),
(32, 'Robin Chartreuse', 'robin.chartreuse@example.com', 'Social Media Manager', 'p@ssw0rd32', 'Marketing', '2020 Maple St, Springfield'),
(33, 'Alex Jade', 'alex.jade@example.com', 'Machine Learning Engineer', 'p@ssw0rd33', 'Data Science', '2121 Birch St, Springfield'),
(34, 'Charlie Gold', 'charlie.gold@example.com', 'Financial Analyst', 'p@ssw0rd34', 'Finance', '2222 Cedar St, Springfield'),
(35, 'Taylor Crimson', 'taylor.crimson@example.com', 'Compliance Officer', 'p@ssw0rd35', 'Legal', '2323 Ash St, Springfield'),
(36, 'Reese Silver', 'reese.silver@example.com', 'Training Specialist', 'p@ssw0rd36', 'Human Resources', '2424 Elm St, Springfield'),
(37, 'Drew Bronze', 'drew.bronze@example.com', 'Quality Control Specialist', 'p@ssw0rd37', 'Quality Assurance', '2525 Oak St, Springfield'),
(38, 'Sam Ruby', 'sam.ruby@example.com', 'Account Manager', 'p@ssw0rd38', 'Sales', '2626 Pine St, Springfield'),
(39, 'Pat Sapphire', 'pat.sapphire@example.com', 'Product Designer', 'p@ssw0rd39', 'Design', '2727 Maple St, Springfield'),
(40, 'Kim Pearl', 'kim.pearl@example.com', 'Operations Coordinator', 'p@ssw0rd40', 'Operations', '2828 Birch St, Springfield'),
(41, 'Jordan Opal', 'jordan.opal@example.com', 'Risk Manager', 'p@ssw0rd41', 'Finance', '2929 Cedar St, Springfield'),
(42, 'Morgan Coral', 'morgan.coral@example.com', 'Event Coordinator', 'p@ssw0rd42', 'Marketing', '3030 Ash St, Springfield'),
(43, 'Riley Turquoise', 'riley.turquoise@example.com', 'Technical Support Specialist', 'p@ssw0rd43', 'IT', '3131 Elm St, Springfield'),
(44, 'Sky Garnet', 'sky.garnet@example.com', 'Business Development Manager', 'p@ssw0rd44', 'Sales', '3232 Oak St, Springfield'),
(45, 'Blake Onyx', 'blake.onyx@example.com', 'Software Tester', 'p@ssw0rd45', 'Quality Assurance', '3333 Pine St, Springfield'),
(46, 'Taylor Jade', 'taylor.jade@example.com', 'Research Assistant', 'p@ssw0rd46', 'Research', '3434 Maple St, Springfield'),
(47, 'Reese Emerald', 'reese.emerald@example.com', 'HR Generalist', 'p@ssw0rd47', 'Human Resources', '3535 Birch St, Springfield'),
(48, 'Pat Topaz', 'pat.topaz@example.com', 'Public Relations Specialist', 'p@ssw0rd48', 'Marketing', '3636 Cedar St, Springfield'),
(49, 'Kim Aquamarine', 'kim.aquamarine@example.com', 'Data Engineer', 'p@ssw0rd49', 'Data Science', '3737 Ash St, Springfield'),
(50, 'Alex Amethyst', 'alex.amethyst@example.com', 'Digital Marketing Specialist', 'p@ssw0rd50', 'Marketing', '3838 Elm St, Springfield'),
(51, 'Robin Citrine', 'robin.citrine@example.com', 'IT Consultant', 'p@ssw0rd51', 'IT', '3939 Oak St, Springfield'),
(52, 'Drew Amber', 'drew.amber@example.com', 'Compliance Analyst', 'p@ssw0rd52', 'Legal', '4040 Pine St, Springfield'),
(53, 'Sky Peridot', 'sky.peridot@example.com', 'Business Consultant', 'p@ssw0rd53', 'Business Analysis', '4141 Maple St, Springfield'),
(54, 'Taylor Malachite', 'taylor.malachite@example.com', 'Content Strategist', 'p@ssw0rd54', 'Content', '4242 Birch St, Springfield'),
(55, 'Casey Agate', 'casey.agate@example.com', 'Sales Manager', 'p@ssw0rd55', 'Sales', '4343 Cedar St, Springfield'),
(56, 'Jamie Quartz', 'jamie.quartz@example.com', 'DevOps Specialist', 'p@ssw0rd56', 'Engineering', '4444 Ash St, Springfield'),
(57, 'Dylan Jasper', 'dylan.jasper@example.com', 'HR Manager', 'p@ssw0rd57', 'Human Resources', '4545 Elm St, Springfield'),
(58, 'Quinn Turquoise', 'quinn.turquoise@example.com', 'Legal Counsel', 'p@ssw0rd58', 'Legal', '4646 Oak St, Springfield'),
(59, 'Reese Moonstone', 'reese.moonstone@example.com', 'Operations Analyst', 'p@ssw0rd59', 'Operations', '4747 Pine St, Springfield'),
(60, 'Pat Zircon', 'pat.zircon@example.com', 'Software Architect', 'p@ssw0rd60', 'Engineering', '4848 Maple St, Springfield'),
(61, 'Riley Beryl', 'riley.beryl@example.com', 'UX Researcher', 'p@ssw0rd61', 'Design', '4949 Birch St, Springfield'),
(62, 'Blake Jasper', 'blake.jasper@example.com', 'Automation Engineer', 'p@ssw0rd62', 'Engineering', '5050 Cedar St, Springfield'),
(63, 'Casey Obsidian', 'casey.obsidian@example.com', 'Creative Director', 'p@ssw0rd63', 'Design', '5151 Ash St, Springfield'),
(64, 'Jordan Carnelian', 'jordan.carnelian@example.com', 'Accountant', 'p@ssw0rd64', 'Finance', '5252 Elm St, Springfield'),
(65, 'Morgan Sapphire', 'morgan.sapphire@example.com', 'Product Owner', 'p@ssw0rd65', 'Product', '5353 Oak St, Springfield'),
(66, 'Jamie Jet', 'jamie.jet@example.com', 'Business Intelligence Analyst', 'p@ssw0rd66', 'Data Science', '5454 Pine St, Springfield'),
(67, 'Dylan Sodalite', 'dylan.sodalite@example.com', 'Facilities Manager', 'p@ssw0rd67', 'Operations', '5555 Maple St, Springfield'),
(68, 'Quinn Sandstone', 'quinn.sandstone@example.com', 'Security Engineer', 'p@ssw0rd68', 'IT', '5656 Birch St, Springfield'),
(69, 'Reese Slate', 'reese.slate@example.com', 'Full Stack Developer', 'p@ssw0rd69', 'Engineering', '5757 Cedar St, Springfield'),
(70, 'Taylor Gabbro', 'taylor.gabbro@example.com', 'Content Marketing Manager', 'p@ssw0rd70', 'Content', '5858 Ash St, Springfield'),
(71, 'Pat Limestone', 'pat.limestone@example.com', 'Digital Transformation Officer', 'p@ssw0rd71', 'IT', '5959 Elm St, Springfield'),
(72, 'Sky Granite', 'sky.granite@example.com', 'Supply Chain Manager', 'p@ssw0rd72', 'Logistics', '6060 Oak St, Springfield'),
(73, 'Robin Marble', 'robin.marble@example.com', 'Corporate Trainer', 'p@ssw0rd73', 'Human Resources', '6161 Pine St, Springfield'),
(74, 'Alex Dolomite', 'alex.dolomite@example.com', 'Data Scientist', 'p@ssw0rd74', 'Data Science', '6262 Maple St, Springfield'),
(75, 'Kim Basalt', 'kim.basalt@example.com', 'Sales Consultant', 'p@ssw0rd75', 'Sales', '6363 Birch St, Springfield'),
(76, 'Drew Andesite', 'drew.andesite@example.com', 'Network Engineer', 'p@ssw0rd76', 'IT', '6464 Cedar St, Springfield'),
(77, 'Casey Tuff', 'casey.tuff@example.com', 'Product Development Specialist', 'p@ssw0rd77', 'Product', '6565 Ash St, Springfield'),
(78, 'Jamie Pumice', 'jamie.pumice@example.com', 'ERP Consultant', 'p@ssw0rd78', 'IT', '6666 Elm St, Springfield'),
(79, 'Dylan Rhyolite', 'dylan.rhyolite@example.com', 'Marketing Director', 'p@ssw0rd79', 'Marketing', '6767 Oak St, Springfield'),
(80, 'Quinn Shale', 'quinn.shale@example.com', 'Data Visualization Specialist', 'p@ssw0rd80', 'Data Science', '6868 Pine St, Springfield'),
(81, 'Morgan Schist', 'morgan.schist@example.com', 'HR Coordinator', 'p@ssw0rd81', 'Human Resources', '6969 Maple St, Springfield'),
(82, 'Riley Phyllite', 'riley.phyllite@example.com', 'Systems Architect', 'p@ssw0rd82', 'IT', '7070 Birch St, Springfield'),
(83, 'Taylor Gneiss', 'taylor.gneiss@example.com', 'Customer Experience Manager', 'p@ssw0rd83', 'Support', '7171 Cedar St, Springfield'),
(84, 'Casey Hornfels', 'casey.hornfels@example.com', 'Innovation Manager', 'p@ssw0rd84', 'Product', '7272 Ash St, Springfield'),
(85, 'Blake Slate', 'blake.slate@example.com', 'SEO Analyst', 'p@ssw0rd85', 'Marketing', '7373 Elm St, Springfield'),
(86, 'Jamie Quartzite', 'jamie.quartzite@example.com', 'Business Process Analyst', 'p@ssw0rd86', 'Business Analysis', '7474 Oak St, Springfield'),
(87, 'Dylan Chalk', 'dylan.chalk@example.com', 'IT Director', 'p@ssw0rd87', 'IT', '7575 Pine St, Springfield'),
(88, 'Quinn Flint', 'quinn.flint@example.com', 'Cybersecurity Specialist', 'p@ssw0rd88', 'IT', '7676 Maple St, Springfield'),
(89, 'Reese Chert', 'reese.chert@example.com', 'Lead Developer', 'p@ssw0rd89', 'Engineering', '7777 Birch St, Springfield'),
(90, 'Pat Jasper', 'pat.jasper@example.com', 'Customer Success Manager', 'p@ssw0rd90', 'Support', '7878 Cedar St, Springfield'),
(91, 'Robin Mudstone', 'robin.mudstone@example.com', 'Finance Director', 'p@ssw0rd91', 'Finance', '7979 Ash St, Springfield'),
(92, 'Alex Arkose', 'alex.arkose@example.com', 'Content Developer', 'p@ssw0rd92', 'Content', '8080 Elm St, Springfield'),
(93, 'Kim Siltstone', 'kim.siltstone@example.com', 'Data Warehouse Manager', 'p@ssw0rd93', 'Data Science', '8181 Oak St, Springfield'),
(94, 'Drew Greenschist', 'drew.greenschist@example.com', 'IT Support Manager', 'p@ssw0rd94', 'IT', '8282 Pine St, Springfield'),
(95, 'Casey Redstone', 'casey.redstone@example.com', 'Corporate Communications Manager', 'p@ssw0rd95', 'Marketing', '8383 Maple St, Springfield'),
(96, 'Jamie Bluestone', 'jamie.bluestone@example.com', 'UX/UI Designer', 'p@ssw0rd96', 'Design', '8484 Birch St, Springfield'),
(97, 'Dylan Brownstone', 'dylan.brownstone@example.com', 'Operations Director', 'p@ssw0rd97', 'Operations', '8585 Cedar St, Springfield'),
(98, 'Quinn Marls', 'quinn.marls@example.com', 'Legal Assistant', 'p@ssw0rd98', 'Legal', '8686 Ash St, Springfield'),
(99, 'Reese Limestone', 'reese.limestone@example.com', 'Project Lead', 'p@ssw0rd99', 'Management', '8787 Elm St, Springfield'),
(100, 'Pat Peat', 'pat.peat@example.com', 'Digital Strategist', 'p@ssw0rd100', 'Marketing', '8888 Oak St, Springfield');
 select * from cowaa_login;
ALTER TABLE cowaa_login
ADD RegistrationDate date;


CREATE TEMPORARY TABLE temp_registration_dates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_date DATE
);

-- Step 2: Insert values into the temporary table
INSERT INTO temp_registration_dates (registration_date) VALUES
('2024-01-01'), ('2024-01-01'), ('2024-01-01'),
('2024-01-02'), ('2024-01-02'), ('2024-01-02'),
('2024-01-03'), ('2024-01-03'), ('2024-01-03'), ('2024-01-03'),
('2024-01-04'), ('2024-01-04'), ('2024-01-04'),
('2024-01-05'), ('2024-01-05'), ('2024-01-05'),
('2024-01-08'), ('2024-01-08'), ('2024-01-08'), ('2024-01-08'),
('2024-01-09'), ('2024-01-09'), ('2024-01-09'),
('2024-01-10'), ('2024-01-10'),
('2024-01-11'), ('2024-01-11'), ('2024-01-11'),
('2024-01-12'), ('2024-01-12'),
('2024-01-15'), ('2024-01-15'), ('2024-01-15'),
('2024-01-16'), ('2024-01-16'), ('2024-01-16'),
('2024-01-17'), ('2024-01-17'),
('2024-01-18'), ('2024-01-18'), ('2024-01-18'),
('2024-01-19'), ('2024-01-19'), ('2024-01-19'),
('2024-01-22'), ('2024-01-22'), ('2024-01-22'),
('2024-01-23'), ('2024-01-23'), ('2024-01-23'),
('2024-01-24'), ('2024-01-24'),
('2024-01-25'), ('2024-01-25'), ('2024-01-25'),
('2024-01-26'), ('2024-01-26'),
('2024-01-29'), ('2024-01-29'), ('2024-01-29'),
('2024-01-30'), ('2024-01-30'), ('2024-01-30'),
('2024-01-31'), ('2024-01-31'),
('2024-02-01'), ('2024-02-01'), ('2024-02-01'),
('2024-02-02'), ('2024-02-02'), ('2024-02-02'),
('2024-02-05'), ('2024-02-05'), ('2024-02-05'),
('2024-02-06'), ('2024-02-06'), ('2024-02-06'),
('2024-02-07'), ('2024-02-07'),
('2024-02-08'), ('2024-02-08'), ('2024-02-08'),
('2024-02-09'), ('2024-02-09'),
('2024-02-12'), ('2024-02-12'), ('2024-02-12'),
('2024-02-13'), ('2024-02-13'), ('2024-02-13'),
('2024-02-14'), ('2024-02-14'),
('2024-02-15'), ('2024-02-15'), ('2024-02-15'),
('2024-02-16'), ('2024-02-16'),
('2024-02-19'), ('2024-02-19'), ('2024-02-19');

UPDATE cowaa_login cl
JOIN temp_registration_dates trd ON cl.EmployeeID = trd.id
SET cl.RegistrationDate = trd.registration_date;
select * from cowaa_login;
DROP TEMPORARY TABLE temp_registration_dates;
SELECT DATE(RegistrationDate) as date, COUNT(*) as count FROM cowaa_login GROUP BY DATE(RegistrationDate) ORDER BY DATE(RegistrationDate);
SELECT COUNT(*) AS count_today
FROM cowaa_login
WHERE DATE(RegistrationDate) = CURDATE();
INSERT INTO cowaa_login (EmployeeID, Name, Email, Designation, Password, Department, Address,RegistrationDate,LastUpdateTime) VALUES
(101, 'Joh Doe', 'joh.doe@example.com', 'Software Engineer', 'p@ssw0rd101', 'Engineering', '123 Elm St, Springfield',current_date() ,current_time() );
INSERT INTO cowaa_login (EmployeeID, Name, Email, Designation, Password, Department, Address,RegistrationDate,LastUpdateTime) VALUES
(104, 'hey Doe', 'charlie.gold@example.com', 'Software Engineer', 'p@ssw0rd102', 'Engineering', '123 Elm St, Springfield',current_date() ,current_time() );

INSERT INTO cowaa_login (EmployeeID, Name, Email, Designation, Password, Department, Address) VALUES
(105, 'Jo Do', 'joh.do@example.com', 'Software Engineer', 'p@ssw0rd105', 'Engineering', '123 Elm St, Springfield' );
