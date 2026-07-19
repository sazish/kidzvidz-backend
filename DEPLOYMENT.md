# Deploying Kidzvidz Backend to Heroku

## Option 1: GitHub Integration (Easiest - No CLI needed)

### Step 1: Commit Changes
The changes are already committed and pushed to GitHub.

### Step 2: Create Heroku App
1. Go to https://dashboard.heroku.com/
2. Click "New" → "Create new app"
3. Choose an app name (e.g., `kidzvidz-help-api`)
4. Choose region: Europe or US
5. Click "Create app"

### Step 3: Connect GitHub
1. On your app page, go to "Deploy" tab
2. Click "Connect to GitHub"
3. Search for `kidzvidz-backend`
4. Click "Connect"

### Step 4: Enable Auto-Deploy
1. Scroll to "Automatic deploys"
2. Check "Automatic deploys from main branch"
3. Click "Enable Automatic Deploys"

### Step 5: Deploy
1. Scroll to "Manual deploy"
2. Click "Deploy Branch" (main)
3. Wait for build to complete

### Step 6: View Your API
Your API will be available at:
```
https://YOUR-APP-NAME.herokuapp.com/api
```

Example:
```
https://kidzvidz-help-api.herokuapp.com/api
```

---

## Option 2: Using Heroku CLI (If You Want to Install)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create app
heroku create kidzvidz-help-api

# Set environment variable
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

---

## Update Help App to Use Your API

Once deployed, update the Help App to use your API:

Edit `/Users/nickazish/kidzvidz_c/src/App.jsx`:

```javascript
// Change this line from:
const response = await fetch(`http://localhost:3000/api/${selectedCategory}`);

// To:
const response = await fetch(`https://YOUR-APP-NAME.herokuapp.com/api/${selectedCategory}`);
```

Then rebuild and redeploy the Help App.

---

## Testing Your API

Once deployed, test with:
```
https://YOUR-APP-NAME.herokuapp.com/api
https://YOUR-APP-NAME.herokuapp.com/api/getting-started
https://YOUR-APP-NAME.herokuapp.com/search?q=account
```
