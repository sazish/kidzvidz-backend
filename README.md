# Kidzvidz Help API Backend

Express.js backend server for serving Kidzvidz help content.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (already created) or update it:
```
PORT=3000
NODE_ENV=development
```

3. Start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Get Help Content by Category
```
GET /api/:category
```

Available categories:
- `home` - Welcome and overview
- `getting-started` - Setup guides
- `features` - Feature documentation
- `settings` - Settings and configuration
- `account` - Account management
- `playback` - Playback and streaming
- `troubleshooting` - Troubleshooting guides
- `faq` - Frequently asked questions

**Example:**
```bash
curl http://localhost:3000/api/getting-started
```

### List All Categories
```
GET /api
```

**Response:**
```json
{
  "message": "Kidzvidz Help API",
  "version": "1.0.0",
  "categories": ["home", "getting-started", "features", ...],
  "endpoints": {...}
}
```

### Search Content
```
GET /search?q=<search-term>
```

**Example:**
```bash
curl http://localhost:3000/search?q=account
```

## Deployment

### Heroku

1. Create a Procfile:
```
web: node server.js
```

2. Deploy:
```bash
heroku login
heroku create kidzvidz-help-api
git push heroku main
```

### AWS EC2

1. SSH into your instance
2. Clone the repo
3. Install Node.js
4. Run:
```bash
npm install
npm start
```

### DigitalOcean App Platform

1. Connect your GitHub repo
2. Set the run command: `npm start`
3. Deploy

### Using PM2 for Production

```bash
npm install -g pm2
pm2 start server.js --name "kidzvidz-api"
pm2 save
```

## Data Structure

Each help article has the following structure:

```json
{
  "id": "unique-id",
  "title": "Article Title",
  "description": "Short description",
  "icon": "emoji",
  "date": "Publication date",
  "readTime": 5,
  "image": "https://image-url.jpg",
  "content": "<html>Content here</html>"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## CORS Configuration

The API allows requests from all origins. To restrict CORS, modify `server.js`:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Testing

To test locally:

```bash
# Start the server
npm start

# In another terminal, test the API
curl http://localhost:3000/api
curl http://localhost:3000/api/getting-started
curl http://localhost:3000/search?q=account
```

## Adding New Content

Edit `server.js` and add entries to the `helpData` object:

```javascript
'new-category': [
  {
    id: 'article-id',
    title: 'Article Title',
    description: 'Description',
    icon: '📚',
    date: new Date().toLocaleDateString(),
    readTime: 5,
    content: '<h2>Content</h2><p>...</p>'
  }
]
```

Then restart the server.

## License

ISC
