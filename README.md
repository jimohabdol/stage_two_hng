# User API Documentation

This documentation provides information on how to use the User API to perform CRUD operations on user records. The API allows you to create, retrieve, update, and delete user records. All requests and responses are in JSON format. Link to UML diagram: https://lucid.app/lucidchart/27d1ecd4-7d8e-4b94-8a59-3d85b7645649/edit?viewport_loc=28%2C159%2C1579%2C909%2C0_0&invitationId=inv_ff3196a3-d71a-4ed9-9e35-b094f243ca6a

## Base URL

The base URL for the User API is `http://localhost:3000/api/`.

## API Endpoints

### GET User

Retrieve a user by their ID.

**Endpoint:** `/api/{userId}`

- `{userId}`: The unique ID of the user you want to retrieve.

#### Example

**Request:**

```http
GET http://localhost:3000/api/6502fabb5cb9b2aba493cd28
```

**Response:**

```json
{
    "id": "6502fabb5cb9b2aba493cd28",
    "name": "Stella Shola",
    "age": 38,
    "email": "sss@gmail.com",
    "date": "2023-09-14T12:21:15.645Z"
}
```

### POST Create User

Create a new user record.

**Endpoint:** `/api/`

#### Request Body

- `name` (string): The name of the user.
- `age` (number): The age of the user.
- `email` (string): The email address of the user.

#### Example

**Request:**

```http
POST http://localhost:3000/api/
Content-Type: application/json

{
  "name": "John Ola",
  "age": 30,
  "email": "ojohn@gmail.com"
}
```

**Response:**

```json
{
    "id": "650300a2da83911eb8a175c0",
    "name": "John Ola",
    "age": 30,
    "email": "ojohn@gmail.com"
}
```

### DELETE User

Delete a user by their ID.

**Endpoint:** `/api/{userId}`

- `{userId}`: The unique ID of the user you want to delete.

#### Example

**Request:**

```http
DELETE http://localhost:3000/api/6502fabb5cb9b2aba493cd28
```

**Response:**

```json
{
    "acknowledged": true,
    "deletedCount": 1
}
```

### PUT Update User

Update an existing user's record by their ID.

**Endpoint:** `/api/{userId}`

- `{userId}`: The unique ID of the user you want to update.

#### Request Body

- `name` (string): The updated name of the user.
- `age` (number): The updated age of the user.
- `email` (string): The updated email address of the user.

#### Example

**Request:**

```http
PUT http://localhost:3000/api/6502faaa5cb9b2aba493cd27
Content-Type: application/json

{
    "name": "Stella Shola",
    "age": 30,
    "email": "sss@gmail.com"
}
```

**Response:**

```json
{
    "id": "6502faaa5cb9b2aba493cd27",
    "name": "Stella Shola",
    "age": 30,
    "email": "sss@gmail.com",
    "date": "2023-09-14T12:20:58.257Z"
}
```

## Error Responses

If any errors occur during API requests, the API will respond with appropriate error status codes and messages. Some common error codes include:

- `400 Bad Request`: Invalid request format or missing required fields.
- `404 Not Found`: The requested user is not found.
- `500 Internal Server Error`: An internal server error occurred.

Please make sure to handle these error responses in your application accordingly.

## Conclusion

This documentation provides you with the necessary information to use the User API for creating, retrieving, updating, and deleting user records.
