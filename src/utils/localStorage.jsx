const employees = [
     {
       id: 1,
       email: "employee1@example.com",
       password: "123",
       tasks: [
         {
           taskTitle: "Design Homepage",
           taskDescription: "Create a responsive homepage layout",
           taskDate: "2024-11-01",
           category: "Design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           taskTitle: "Setup CI/CD",
           taskDescription: "Implement continuous integration for the project",
           taskDate: "2024-11-03",
           category: "Development",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           taskTitle: "Optimize Database",
           taskDescription: "Analyze and improve database performance",
           taskDate: "2024-11-05",
           category: "Database",
           active: true,
           newTask: false,
           completed: false,
           failed: false
         }
       ]
     },
     {
       id: 2,
       email: "employee2@example.com",
       password: "123",
       tasks: [
         {
           taskTitle: "Update API Documentation",
           taskDescription: "Ensure all endpoints are documented",
           taskDate: "2024-11-02",
           category: "Documentation",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           taskTitle: "Bug Fixes",
           taskDescription: "Fix critical bugs in user authentication",
           taskDate: "2024-11-04",
           category: "Development",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         }
       ]
     },
     {
       id: 3,
       email: "employee3@example.com",
       password: "123",
       tasks: [
         {
           taskTitle: "Conduct Usability Testing",
           taskDescription: "Gather feedback from users",
           taskDate: "2024-11-03",
           category: "Testing",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           taskTitle: "Create Landing Page",
           taskDescription: "Develop a landing page for the new product",
           taskDate: "2024-11-06",
           category: "Design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           taskTitle: "User Guide Documentation",
           taskDescription: "Write a guide for end-users",
           taskDate: "2024-11-08",
           category: "Documentation",
           active: true,
           newTask: false,
           completed: false,
           failed: true
         }
       ]
     },
     {
       id: 4,
       email: "employee4@example.com",
       password: "123",
       tasks: [
         {
           taskTitle: "Security Audit",
           taskDescription: "Perform a full security audit",
           taskDate: "2024-11-09",
           category: "Security",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           taskTitle: "Update Privacy Policy",
           taskDescription: "Revise privacy policy for compliance",
           taskDate: "2024-11-10",
           category: "Compliance",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         }
       ]
     },
     {
       id: 5,
       email: "employee5@example.com",
       password: "123",
       tasks: [
         {
           taskTitle: "Database Backup",
           taskDescription: "Schedule regular backups for data",
           taskDate: "2024-11-11",
           category: "Database",
           active: true,
           newTask: false,
           completed: false,
           failed: false
         },
         {
           taskTitle: "Client Meeting",
           taskDescription: "Discuss project requirements with the client",
           taskDate: "2024-11-12",
           category: "Meetings",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         }
       ]
     }
   ];
   
const admin = {
id: 1,
email: "admin@example.com",
password: "123"
};
   
export const setLocalStorage = () => {
     localStorage.setItem("employees", JSON.stringify(employees));
     localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))
     console.log(employees, admin);
     
}