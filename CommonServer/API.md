# StoreFront API

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
    "id": "a36b266f-ec02-4d6c-ac2e-9e213c81fb94",
    "created_at": "2023-10-19T16:14:18.343105243+01:00",
    "updated_at": "2023-10-19T16:14:18.343105243+01:00",
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

## Admin

The endpoints here helps a user with an admin role to be able to do the following:

- Create a new Category
- Create a Sub-category under an existing Category
- Create a new Product
- Update an existing product
- Delete an existing Product

### Create Category

**URL**: `api/admin/category/create`

**Method**: `POST`

**Auth required**: Signed in with Admin access

**Data constraints**

```json
{
  "name": "[name in string]",
  "description": "[description in string]"
}
```

**Request body example**

```json
{
  "name": "Medicals",
  "description": "A Category of medical equipments, medicine, etc"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "id": "h36b266f-ec02-4d6c-ac2e-9e213c81fb94",
    "created_at": "2023-11-02T10:09:04.653829985+01:00",
    "updated_at": "2023-11-02T10:09:04.653829985+01:00",
    "DeletedAt": null,
    "name": "Medicals",
    "description": "A Category of medical equipments, medicine, etc",
    "SubCategories": null
  }
}
```

### Create Sub-Category

**URL**: `api/admin/category/:category_id/subCategory/create`

**Method**: `POST`

**Auth required**: Signed in with Admin access

**Data constraints**

```json
{
  "name": "[name in string]",
  "description": "[description in string]"
}
```

**Request body example**

```json
{
  "name": "Medical equipments",
  "description": "A Sub-category of Medicals"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "Subcategory created successfully",
  "data": {
    "ID": 3,
    "created_at": "2023-11-02T10:14:21.486860075+01:00",
    "updated_at": "2023-11-02T10:14:21.486860075+01:00",
    "DeletedAt": null,
    "name": "Medical equipments",
    "description": "A Sub-category of Medicals",
    "CategoryID": 2
  }
}
```

### Create Product

**URL**: `api/admin/create`

**Method**: `POST`

**Auth required**: Signed in with Admin access

**Data constraints**

```json
{
  "name": "[name in string]",
  "description": "[description in string]",
  "price": "[price in float]",
  "quantity": "[quantity in integer]",
  "category_id": "[category_id in integer]",
  "sub_category": "[sub_category_id in integer]",
  "shipping": "[shipping in boolean]",
  "color": "[color in string]",
  "size": "[size in string] NOTE: This is nullable",
  "image": "[images in array of strings] NOTE: This is nullable"
}
```

**Request body example**

```json
{
  "name": "Surgical box",
  "description": "A box containing surgical equipments",
  "category_id": 2,
  "sub_category": 3,
  "price": 50000,
  "shipping_info": "No shipping fee discount",
  "color": "Black",
  "size": "",
  "quantity": 10,
  "image": "no image right now"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "p36b266f-ec02-4d6c-ac2e-9e213c81fb94",
    "created_at": "2023-11-02T10:24:45.867644099+01:00",
    "updated_at": "2023-11-02T10:24:45.867644099+01:00",
    "DeletedAt": null,
    "name": "Surgical box",
    "description": "A box containing surgical equipments",
    "category_id": 2,
    "sub_category": 3,
    "price": 50000,
    "shipping_info": "No shipping fee discount",
    "color": "Black",
    "size": "",
    "quantity": 10,
    "image": "no image right now"
  }
}
```

### Product

The endpoints here helps a user to be able to do the following:

- Get all products
- Get a single product
- Get all products in a category
- Get all products in a sub-category
- Get all products in a category and sub-category

### Get all products

**URL**: `api/product/`

**Method**: `GET`

**Auth required**: Signed-in user

**Success Response**

```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": {
    "categories": [
      {
        "id": "j36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-01T15:10:48.127082+01:00",
        "updated_at": "2023-11-01T15:10:48.127082+01:00",
        "DeletedAt": null,
        "name": "Fashion",
        "description": "A Category of men, women and kids fashion",
        "SubCategories": [
          {
            "id": "q36b266f-ec02-4d6c-ac2e-9e213c81fb94",
            "created_at": "2023-11-01T15:34:00.922019+01:00",
            "updated_at": "2023-11-01T15:34:00.922019+01:00",
            "DeletedAt": null,
            "name": "Men",
            "description": "A Sub-category of mens fashion wears",
            "CategoryID": 1
          }
        ]
      },
      {
        "id": "e36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:09:04.653829+01:00",
        "updated_at": "2023-11-02T10:09:04.653829+01:00",
        "DeletedAt": null,
        "name": "Medicals",
        "description": "A Category of medical equipments, medicine, etc",
        "SubCategories": [
          {
            "id": "n36b266f-ec02-4d6c-ac2e-9e213c81fb94",
            "created_at": "2023-11-02T10:14:21.48686+01:00",
            "updated_at": "2023-11-02T10:14:21.48686+01:00",
            "DeletedAt": null,
            "name": "Medical equipments",
            "description": "A Sub-category of Medicals",
            "CategoryID": 2
          }
        ]
      }
    ],
    "products": [
      {
        "": "w36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-01T17:02:21.420582+01:00",
        "updated_at": "2023-11-01T17:02:21.420582+01:00",
        "DeletedAt": null,
        "name": "Nike Jordan 2",
        "description": "The new Nike Jordan 2",
        "category_id": 1,
        "sub_category": 2,
        "price": 50000,
        "shipping_info": "No shipping fee discount",
        "color": "Blue",
        "size": "35",
        "quantity": 0,
        "image": "no image right now"
      },
      {
        "id": "m36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:24:45.867644+01:00",
        "updated_at": "2023-11-02T10:24:45.867644+01:00",
        "DeletedAt": null,
        "name": "Surgical box",
        "description": "A box containing surgical equipments",
        "category_id": 2,
        "sub_category": 3,
        "price": 50000,
        "shipping_info": "No shipping fee discount",
        "color": "Black",
        "size": "",
        "quantity": 0,
        "image": "no image right now"
      },
      {
        "id": "b36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:26:59.579321+01:00",
        "updated_at": "2023-11-02T10:26:59.579321+01:00",
        "DeletedAt": null,
        "name": "Specialized Surgical box",
        "description": "A box containing Specialized surgical equipments",
        "category_id": 2,
        "sub_category": 3,
        "price": 50000,
        "shipping_info": "No shipping fee discount",
        "color": "Black",
        "size": "",
        "quantity": 0,
        "image": "no image right now"
      },
      {
        "id": "u36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:30:52.727375+01:00",
        "updated_at": "2023-11-02T10:30:52.727375+01:00",
        "DeletedAt": null,
        "name": "Specialized Surgical box 2",
        "description": "A box containing Specialized surgical equipments 2",
        "category_id": 2,
        "sub_category": 3,
        "price": 50000,
        "shipping_info": "No shipping fee discount",
        "color": "Black",
        "size": "",
        "quantity": 0,
        "image": "no image right now"
      },
      {
        "id": "x36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:39:23.626156+01:00",
        "updated_at": "2023-11-02T10:39:23.626156+01:00",
        "DeletedAt": null,
        "name": "Specialized Surgical box 3",
        "description": "A box containing Specialized surgical equipments 3",
        "category_id": 2,
        "sub_category": 3,
        "price": 50000,
        "shipping_info": "No shipping fee discount",
        "color": "Black",
        "size": "",
        "quantity": 10,
        "image": "no image right now"
      }
    ],
    "sub_categories": [
      {
        "id": "k36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-01T15:34:00.922019+01:00",
        "updated_at": "2023-11-01T15:34:00.922019+01:00",
        "DeletedAt": null,
        "name": "Men",
        "description": "A Sub-category of mens fashion wears",
        "CategoryID": 1
      },
      {
        "id": "e36b266f-ec02-4d6c-ac2e-9e213c81fb94",
        "created_at": "2023-11-02T10:14:21.48686+01:00",
        "updated_at": "2023-11-02T10:14:21.48686+01:00",
        "DeletedAt": null,
        "name": "Medical equipments",
        "description": "A Sub-category of Medicals",
        "CategoryID": 2
      }
    ]
  }
}
```
