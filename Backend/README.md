# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It accepts user details and creates a new user record in the database.

### HTTP Method
`POST`

### Request Body
The endpoint expects the following data in JSON format:

```json
{
  "name": "string", // Required: The name of the user
  "email": "string", // Required: The email address of the user
  "password": "string" // Required: The password for the user account
}
```

### Response

#### Success Response
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```

#### Error Responses
- **Status Code:** `400 Bad Request`
  - **Reason:** Missing or invalid fields in the request body.
  - **Body:**
    ```json
    {
      "error": "Invalid input data"
    }
    ```

- **Status Code:** `409 Conflict`
  - **Reason:** Email already exists.
  - **Body:**
    ```json
    {
      "error": "Email already in use"
    }
    ```

- **Status Code:** `500 Internal Server Error`
  - **Reason:** Unexpected server error.
  - **Body:**
    ```json
    {
      "error": "An error occurred while processing your request"
    }
    ```

#### Example Success Response
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "12345",
      "name": "John Doe",
      "email": "johndoe@example.com",
    },
    "token": "JWT TOKEN"
  }
  ```


## Endpoint: /users/login
### Description
This endpoint is used to authenticate a user and provide a JWT token for accessing protected resources.

### HTTP Method
`POST`

### Request Body
The endpoint expects the following data in JSON format:

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Login successful",
    "token": "JWT TOKEN",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```

#### Error Responses
- **Status Code:** `400 Bad Request`

  - **Reason:** Missing or invalid fields in the request body.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Invalid value",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

- **Status Code:** `401 Unauthorized`

  - **Reason:** Invalid email or password.
  - **Body:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **Status Code:** 500 Internal Server Error

  - **Reason:** Unexpected server error.
  - **Body:**
    ```json
    {
      "error": "An error occurred while processing your request"
    }
    ```

