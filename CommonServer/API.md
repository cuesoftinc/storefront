### StoreFront API

## User

The Register and Login API. Note that the response on every request returns a `success` which will true on successful response and false otherwise, it also returns a `message` which describes the response returned. When a `success` is true, a `data` object is also included in the response object except in the case of a successful login request which rather returns a `token`.

### POST Register

Register a new user.

**URL** : `/api/register/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "name": "[name in string]",
  "email": "[valid email address]",
  "password": "[password in string]"
}
```

**Request body example**

```json
{
  "name": "Quadri Bello",
  "email": "quadribello@gmail.com",
  "password": "password"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "ID": 2,
    "CreatedAt": "2023-10-19T16:14:18.343105243+01:00",
    "UpdatedAt": "2023-10-19T16:14:18.343105243+01:00",
    "DeletedAt": null,
    "name": "Quadri Bello",
    "email": "quadribello@gmail.com",
    "password": ""
  }
}
```

**Error Response**

```json
{
  "success": false,
  "message": "User already exists"
}
```

### POST Login

Login a user.

**URL** : `/api/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in string]"
}
```

**Request body example**

```json
{
  "email": "quadribello@gmail.com",
  "password": "password"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc3MzU4OTgsImlhdCI6MTY5NzcyODY5OCwidXNlcklkIjoyfQ.33MNyetRWPoT2o3SFTH59m6sX8-FDY6m1KDfrocbMDA"
}
```

**Error Response**

```json
{
  "success": false,
  "message": "Invalid login credentials"
}
```
