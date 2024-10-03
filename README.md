Here is the `README.md` with your updated workflow steps in markdown format:

---

# Early Intervention Case Management System

This is a web-based case management system designed to facilitate the Early Intervention (EI) process in New York State. It allows users to manage referrals, assign service coordinators, and track the progress of cases through the EI workflow.

## Table of Contents

-   [Features](#features)
-   [Workflow Steps](#workflow-steps)
-   [Dependencies](#dependencies)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Examples](#examples)

## Features

-   User role management (Clerical, Supervisor, Service Coordinator, Medical Records, Admin)
-   Dynamic case management with status updates (Referral, Awaiting Validation, Assigned, etc.)
-   Generate and store referral letters as PDFs
-   Admin dashboard with role-based views
-   Inbox system to guide users based on their role-specific tasks
-   Filter cases based on user role

## Workflow Steps

### Log In

-   Navigate to the login page.
-   Enter your username and password (or simply press **Login** for demo purposes).
-   After logging in, you will be redirected to the **Dashboard**.

### Check Dashboard for Existing Cases

-   On the Dashboard, review the list of existing cases.
-   Ensure the case you are about to create is not already listed. You can search by name or DOB.
-   If the case already exists, follow the appropriate steps to manage it based on its status. If not, proceed to the next step.

### Create a New Case

-   Navigate to the **New Case** page (accessible via the navigation bar).
-   Fill out the required demographic information for the new child, such as:
    -   First Name
    -   Last Name
    -   Date of Birth
    -   Address
    -   Race, Ethnicity, Language, etc.
-   Once the form is completed, click **Add Child** to submit the new case.
-   The new case should now appear on the Dashboard.

### Generate a New Referral

-   After the case is created, click **View** (on the Dashboard page).
-   In the case navbar (left side), select **Add New Referral**.
-   Fill out the necessary referral information, including any notes or additional details.
-   Submit the referral.

### Validate the Case (Supervisor)

-   Navigate to the **Inbox** to see cases that are in the "Awaiting Validation" status.
-   Log in as a Supervisor or switch to the **Supervisor** role from the role selector.
-   For each case, click the **View** button to review the details.
-   If everything is correct, validate the referral. This will change the case status to "Validated" and your role will be reset to "Clerical."

### Assign Service Coordinator (Supervisor)

-   Log in as a Supervisor or switch to the **Supervisor** role from the role selector.
-   Once the referral is validated, assign a Service Coordinator to the case.
-   From the **Inbox**, find the "Validated" cases and click the **Assign** button for the relevant case.
-   Select a Service Coordinator from the dropdown menu and confirm the assignment.
-   The case status will update to "Assigned."

### Accept the Case (Service Coordinator)

-   Navigate to the **Inbox**, where you’ll find cases that are assigned to the **Service Coordinator** role.
-   Log in as a Service Coordinator or switch to the **Service Coordinator** role.
-   For each case, click the **Accept** button to confirm acceptance of the case.
-   This action updates the case status to "Active," and you can now proceed with Early Intervention services.

---

## Dependencies

To run the project locally, the following dependencies are required:

### Backend

-   **Node.js** (v14+)
-   **Express.js**: Web framework for building APIs
-   **PostgreSQL**: Database system
-   **Sequelize**: ORM for interacting with PostgreSQL
-   **pdf-lib**: Library for generating PDFs
-   **Cors**: Middleware for enabling cross-origin requests
-   **nodemon**: Dev tool for automatic restarts

### Frontend

-   **React.js**: JavaScript library for building the user interface
-   **React Router**: For client-side routing
-   **Bootstrap**: CSS framework for responsive design

---

## Installation

Follow these steps to set up the project:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/case-management-system.git
cd case-management-system
```

### 2. Set up the frontend

1. Navigate to the `client` folder:

    ```bash
    cd client
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm start
    ```

---

## Usage

1. Navigate to `http://localhost:3000` in your browser.
2. Log in using a test account (optional).
3. Use the dashboard to create new cases, generate referrals, assign service coordinators, and track case progress.

---

## Examples

### Example Case 1:

**Child Information:**

-   First Name: Joe
-   Last Name: Doe
-   Prefix: Mr.
-   Suffix: Jr.
-   Date of Birth: 07-04-2010
-   Gestational Age: 38 weeks
-   Ethnicity: Hispanic or Latino
-   Race: White
-   Address: 123 Maple St, Syracuse, NY
-   Language: English
-   School District: Syracuse City School District
-   Status: Referral

**Referral Information:**

-   Referral Date: 09-28-2024
-   Referral Agency: Doctor
-   Reason/Notes: Communication delay

---

### Example Case 2:

**Child Information:**

-   First Name: Emily
-   Last Name: Miller
-   Prefix: Ms.
-   Suffix: Sr.
-   Date of Birth: 08-03-1995
-   Gestational Age: 40 weeks
-   Ethnicity: Hispanic or Latino
-   Race: White
-   Address: 44 Maple Ave, Syracuse, NY
-   Language: French
-   School District: Fayetteville-Manlius Central School District
-   Status: Referral

**Referral Information:**

-   Referral Date: 09-20-2024
-   Referral Agency: Hospital
-   Reason/Notes: Physical development concerns

---

## License

This project is licensed under the MIT License.

---
