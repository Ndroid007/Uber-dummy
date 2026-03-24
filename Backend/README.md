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


## Endpoint: `/users/login`
### Description
This endpoint is used to authenticate a user and provide a JWT token for accessing protected resources.

### HTTP Method
`POST`

### Request Body
The endpoint expects the following data in JSON format:

```json
{
  "email": "string", // Required: The email address of the user
  "password": "string" // Required: The password for the user account
}
```

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


## Endpoint: `/users/profile`

### Description
This endpoint retrieves the profile information of the currently authenticated user.

### HTTP Method
`GET`

### Authentication
This is a protected route and requires a valid JWT token to be sent in the Authorization header or as a cookie.

### Request Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Request Body
No request body required.

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "id": "string",
    "firstname": "string",
    "lastname": "string",
    "email": "string",
    "createAt": "datetime"
  }
  ```

#### Error Responses
- **Status Code:** `401 Unauthorized`
  - **Reason:** Missing or invalid JWT token.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
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


## Endpoint: `/users/logout`

### Description
This endpoint logs out the currently authenticated user by blacklisting their JWT token and clearing the authentication cookie.

### HTTP Method
`GET`

### Authentication
This is a protected route and requires a valid JWT token to be sent in the Authorization header or as a cookie.

### Request Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Request Body
No request body required.

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Error Responses
- **Status Code:** `401 Unauthorized`
  - **Reason:** Missing or invalid JWT token.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
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



## Endpoint: `/captains/register`
### Description
This endpoint is used to register a new captain in the system. It accepts captain details and creates a new captain record in the database.

### HTTP Method
`POST`

### Request Body
The endpoint expects the following data in JSON format:

### Response
#### Success Response
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "integer",
        "vehicleType": "string"
      }
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

- **Status Code:** `500 Internal Server Error`

  - **Reason:** Unexpected server error.
  - **Body:**
    ```json
    {
      "error": "An error occurred while processing your request"
    }
    ```

## Endpoint: `/captains/login`
### Description
This endpoint is used to authenticate a user and provide a JWT token for accessing protected resources.

### HTTP Method
`POST`

### Request Body
The endpoint expects the following data in JSON format:

```json
{
  "email": "string", // Required: The email address of the user
  "password": "string" // Required: The password for the user account
}
```

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
      "token": "JWT TOKEN",
      "captain": {
          "fullname": {
              "firstname": "string",
              "lastname": "string"
          },
          "vehicle": {
              "color": "string",
              "plate": "string",
              "capacity": "number",
              "vehicleType": "string"
          },
          "_id": "UNIQUE ID",
          "email": "string",
          "password": "string",
          "status": "[active/inactive]",
          "__v": 0
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


## Endpoint: `/captains/profile`

### Description
This endpoint retrieves the profile information of the currently authenticated user.

### HTTP Method
`GET`

### Authentication
This is a protected route and requires a valid JWT token to be sent in the Authorization header or as a cookie.

### Request Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Request Body
No request body required.

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
    },
    "_id": "UNIQUE ID",
    "email": "string",
    "status": "[active/inactive]",
    "__v": 0
  }
  ```

#### Error Responses
- **Status Code:** `401 Unauthorized`
  - **Reason:** Missing or invalid JWT token.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
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


## Endpoint: `/captains/logout`

### Description
This endpoint logs out the currently authenticated user by blacklisting their JWT token and clearing the authentication cookie.

### HTTP Method
`GET`

### Authentication
This is a protected route and requires a valid JWT token to be sent in the Authorization header or as a cookie.

### Request Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Request Body
No request body required.

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Error Responses
- **Status Code:** `401 Unauthorized`
  - **Reason:** Missing or invalid JWT token.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
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


