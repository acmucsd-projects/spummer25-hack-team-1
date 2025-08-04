# Events API

Event management system with CRUD operations, user interactions (likes, tracking), and comments.

## Endpoints

### 1. Get Event by ID

**GET** `/api/events/:id`

Retrieves a single event by its ID.

**Request:**

```
GET /api/events/507f1f77bcf86cd799439011
```

**Response (200):**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "user": "507f1f77bcf86cd799439012",
  "title": "ACM Hackathon 2024",
  "description": "Annual 48-hour coding competition with amazing prizes",
  "location": "Computer Science Building, Room 101",
  "date": "2024-03-15T09:00:00.000Z",
  "img": "https://example.com/hackathon-banner.jpg",
  "likes": ["507f1f77bcf86cd799439013", "507f1f77bcf86cd799439014"],
  "tracks": ["507f1f77bcf86cd799439013"],
  "comments": [
    {
      "text": "Can't wait for this event!",
      "user": "507f1f77bcf86cd799439013",
      "_id": "507f1f77bcf86cd799439015"
    }
  ],
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

---

### 2. Get User's Liked Events

**GET** `/api/events/likes/:id` 🔒

Retrieves all events liked by a specific user.

**Request:**

```
GET /api/events/likes/507f1f77bcf86cd799439012
Authorization: Bearer <token>
```

**Response (200):**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "ACM Hackathon 2024",
    "description": "Annual 48-hour coding competition",
    "location": "Computer Science Building",
    "date": "2024-03-15T09:00:00.000Z",
    "likes": ["507f1f77bcf86cd799439012"],
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

### 3. Get User's Tracked Events

**GET** `/api/events/track/:id` 🔒

Retrieves all events tracked by a specific user.

**Request:**

```
GET /api/events/track/507f1f77bcf86cd799439012
Authorization: Bearer <token>
```

**Response (200):**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "ACM Hackathon 2024",
    "description": "Annual 48-hour coding competition",
    "tracks": ["507f1f77bcf86cd799439012"],
    "date": "2024-03-15T09:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

### 4. Get Events by User

**GET** `/api/events/user/:username` 🔒

Retrieves all events created by a specific user.

**Request:**

```
GET /api/events/user/johndoe
Authorization: Bearer <token>
```

**Response (200):**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439012",
    "title": "ACM Hackathon 2024",
    "description": "Annual 48-hour coding competition",
    "location": "Computer Science Building",
    "date": "2024-03-15T09:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

### 5. Get All Events

**GET** `/api/events/all` 🔒

Retrieves all events in the system.

**Request:**

```
GET /api/events/all
Authorization: Bearer <token>
```

**Response (200):**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439012",
    "title": "ACM Hackathon 2024",
    "description": "Annual 48-hour coding competition",
    "location": "Computer Science Building",
    "date": "2024-03-15T09:00:00.000Z",
    "likes": ["507f1f77bcf86cd799439013"],
    "tracks": [],
    "comments": [],
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439016",
    "user": "507f1f77bcf86cd799439017",
    "title": "Tech Talk: AI in Web Development",
    "description": "Learn about the latest AI tools for developers",
    "location": "Engineering Building, Auditorium",
    "date": "2024-03-20T14:00:00.000Z",
    "likes": [],
    "tracks": ["507f1f77bcf86cd799439012"],
    "comments": [],
    "createdAt": "2024-01-16T08:15:00.000Z"
  }
]
```

---

### 6. Create Event

**POST** `/api/events/` 🔒

Creates a new event.

**Request:**

```json
{
  "title": "ACM Hackathon 2024",
  "description": "Annual 48-hour coding competition with amazing prizes and networking opportunities",
  "location": "Computer Science Building, Room 101",
  "date": "2024-03-15T09:00:00.000Z",
  "img": "https://example.com/hackathon-banner.jpg"
}
```

**Response (201):**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "user": "507f1f77bcf86cd799439012",
  "title": "ACM Hackathon 2024",
  "description": "Annual 48-hour coding competition with amazing prizes and networking opportunities",
  "location": "Computer Science Building, Room 101",
  "date": "2024-03-15T09:00:00.000Z",
  "img": "https://example.com/hackathon-banner.jpg",
  "likes": [],
  "tracks": [],
  "comments": [],
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Validation:**

- Must have either a title OR description (at minimum)
- Date is optional but will be parsed as Date object if provided
- All other fields are optional

---

### 7. Comment on Event

**POST** `/api/events/comment/:id` 🔒

Adds a comment to an event.

**Request:**

```json
{
  "text": "This event looks amazing! Can't wait to participate."
}
```

**Response (200):**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "ACM Hackathon 2024",
  "comments": [
    {
      "text": "This event looks amazing! Can't wait to participate.",
      "user": "507f1f77bcf86cd799439012",
      "_id": "507f1f77bcf86cd799439018"
    }
  ],
  "updatedAt": "2024-01-15T11:45:00.000Z"
}
```

---

### 8. Like/Unlike Event

**POST** `/api/events/like/:id` 🔒

Toggles like status for an event. If user hasn't liked the event, it adds a like. If already liked, it removes the like.

**Request:**

```
POST /api/events/like/507f1f77bcf86cd799439011
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "ACM Hackathon 2024",
  "likes": ["507f1f77bcf86cd799439012"],
  "updatedAt": "2024-01-15T11:30:00.000Z"
}
```

---

### 9. Track/Untrack Event

**POST** `/api/events/track/:id` 🔒

Toggles tracking status for an event. If user isn't tracking the event, it adds them to tracks. If already tracking, it removes them.

**Request:**

```
POST /api/events/track/507f1f77bcf86cd799439011
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "ACM Hackathon 2024",
  "tracks": ["507f1f77bcf86cd799439012"],
  "updatedAt": "2024-01-15T11:35:00.000Z"
}
```

---

### 10. Delete Event

**DELETE** `/api/events/:id` 🔒

Deletes an event. Only the event creator can delete their own events.

**Request:**

```
DELETE /api/events/507f1f77bcf86cd799439011
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "message": "Event deleted successfully"
}
```

---

## Error Responses

All endpoints return error messages in this format:

```json
{
  "error": "Error description"
}
```

**Common Errors:**

- 400: "Invalid event ID"
- 400: "Event must have a title or description"
- 401: "Unauthorized" (missing or invalid token)
- 403: "Forbidden" (trying to delete someone else's event)
- 404: "Event not found"
- 404: "User not found"
- 500: "Internal server error"
- 500: "Server error"

---

## Usage Notes

1. **Protected Routes (🔒)**: Require JWT token in Authorization header: `Bearer <token>`
2. **Event Creation**: Must include either title or description (or both)
3. **User Interactions**: Like and track operations are toggles (like/unlike, track/untrack)
4. **Comments**: Require authentication and non-empty text
5. **Permissions**: Users can only delete events they created
6. **Timestamps**: All events include `createdAt` and `updatedAt` fields
7. **Image Handling**: Currently accepts image URLs as strings (TODO: implement actual image upload)

---

## Event Object Structure

```json
{
  "_id": "ObjectId",
  "user": "ObjectId (ref: User)",
  "title": "String (optional)",
  "description": "String (optional)",
  "location": "String (optional)",
  "date": "Date (optional)",
  "img": "String (optional)",
  "likes": ["ObjectId (ref: User)"],
  "tracks": ["ObjectId (ref: User)"],
  "comments": [
    {
      "text": "String (required)",
      "user": "ObjectId (ref: User, required)",
      "_id": "ObjectId"
    }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```
