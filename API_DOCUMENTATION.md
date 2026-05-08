# API Documentation

Base URL: `http://<your-domain>/api`

## 1. Blogs

### **Get All Blogs**
Fetch a paginated list of active blogs.

-   **Endpoint:** `GET /blogs`
-   **Parameters:**
    -   `page` (optional, integer): Page number for pagination (Default: 1).
    -   `search` (optional, string): Search keyword for filtering by title or description.
-   **Response:**
    ```json
    {
      "status": true,
      "data": {
        "current_page": 1,
        "data": [
          {
            "id": 1,
            "title": "My Blog Title",
            "slug": "my-blog-title",
            "desc": "Blog description...",
            "date": "2024-01-01",
            "image": "image_name.jpg",
            "image_url": "http://.../storage/blogs/media/image_name.jpg",
            "category": { "id": 1, "name": "Tech" },
            "author": { "id": 1, "name": "Admin" }
          }
        ],
        "total": 10,
        "per_page": 10
      }
    }
    ```

### **Get Blog Details**
Fetch a single blog by its slug, including 3 recent blogs.

-   **Endpoint:** `GET /blogs/{slug}`
-   **Parameters:**
    -   `slug` (required, string): The unique slug of the blog.
-   **Response:**
    ```json
    {
      "status": true,
      "data": {
        "id": 1,
        "title": "My Blog Title",
        "desc": "Full content...",
        "image_url": "http://.../image.jpg",
        "category": { ... },
        "author": { ... }
      },
      "recent_blogs": [
        {
          "id": 2,
          "title": "Another Blog",
          "image_url": "http://.../thumb.jpg"
        }
      ]
    }
    ```

---

## 2. Contact Us

### **Submit Contact Query**
Submit a new query from the "Contact Us" or "Hire Us" form.

-   **Endpoint:** `POST /contact-us`
-   **Headers:**
    -   `Content-Type: application/json`
-   **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "company_name": "Acme Corp" (optional),
      "budget": "$5k - $10k" (optional),
      "services": ["Branding", "SEO"] (optional, array or comma-separated string),
      "message": "I need help with...",
      "agree": "accepted" (required, value must be 'yes', 'on', 1, or true)
    }
    ```
-   **Response:**
    ```json
    {
      "status": true,
      "message": "Thank you! Your query has been submitted successfully.",
      "data": { ... }
    }
    ```

---

## 3. Careers

### **Get Open Positions**
Fetch a list of all active job openings.

-   **Endpoint:** `GET /careers`
-   **Parameters:**
    -   `category` (optional, string): Filter by category (e.g., 'Marketing', 'Development').
-   **Response:**
    ```json
    {
      "status": true,
      "data": [
        {
          "id": 1,
          "title": "Video Editor",
          "slug": "video-editor",
          "category": "Designing",
          "type": "Full-Time",
          "location": "Remote",
          "experience": "2+ Years",
          "short_desc": "We are looking for...",
          "tags": "Premiere Pro, After Effects"
        }
      ]
    }
    ```

### **Get Job Details**
Fetch full details of a specific job position.

-   **Endpoint:** `GET /careers/{slug}`
-   **Parameters:**
    -   `slug` (required, string): The unique slug of the job.
-   **Response:**
    ```json
    {
      "status": true,
      "data": {
        "id": 1,
        "title": "Video Editor",
        "description": "Full job summary...",
        "responsibilities": "<ul><li>Edit videos...</li></ul>",
        "skills_required": "<ul><li>Adobe Suite...</li></ul>",
        "nice_to_have": "<ul><li>3D skills...</li></ul>"
      }
    }
    ```

### **Apply for Job**
Submit a job application with resume.

-   **Endpoint:** `POST /careers/apply`
-   **Headers:**
    -   `Content-Type: multipart/form-data`
-   **Body:**
    -   `career_id` (required, integer): ID of the job position.
    -   `name` (required, string): Applicant's name.
    -   `email` (required, email): Applicant's email.
    -   `phone` (required, string): Applicant's phone number.
    -   `state` (required, string): Applicant's state/location.
    -   `experience` (required, string): Years of experience.
    -   `resume` (required, file): PDF/DOC/DOCX file (Max 2MB).
    -   `linkedin` (optional, url): LinkedIn profile URL.
    -   `cover_letter` (optional, string): Text message.
-   **Response:**
    ```json
    {
      "status": true,
      "message": "Application submitted successfully!",
      "data": { ... }
    }
    ```

---

## 4. Clientele

### **Get All Clients**
Fetch a list of client logos and names.

-   **Endpoint:** `GET /clients`
-   **Response:**
    ```json
    {
      "status": true,
      "data": [
        {
          "id": 1,
          "name": "Sony",
          "logo": "sony.png",
          "logo_url": "http://.../storage/clients/sony.png",
          "sort_order": 0
        }
      ]
    }
    ```
