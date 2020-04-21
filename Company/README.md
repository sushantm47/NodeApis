Create employee

    URL

    http://localhost:8080/api/employee/create

    BODY

    {
        "name": "TestUser3",
        "ssn" : "01fe17bcsROFL",
        "salary" : 10001,
        "designation" : "LMAO",
        "department" : "dept1",
        "environment" : "development",
        "gender" : "female"
    }

GET employees with different filters

    URL

    http://localhost:8080/api/employee/employees?minsalary=10000&gender=female&environment=production
