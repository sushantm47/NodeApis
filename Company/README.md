## Create employee

    URL

    http://localhost:8080/api/employee/create

    BODY

    {
        "name": "user",
        "ssn" : "01fe17bcs007",
        "salary" : 22222,
        "designation" : "Associate",
        "department" : "automation",
        "environment" : "development",
        "gender" : "female"
    }

## GET employees with different conditions

    URL

    http://localhost:8080/api/employee/employees?minsalary=10000&gender=female&environment=production
