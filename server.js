const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample help content data
const helpData = {
  home: [
    {
      id: 'welcome',
      title: 'Welcome to Kidzvidz',
      description: 'Get started with Kidzvidz and explore our features',
      icon: '👋',
      date: 'July 19, 2026',
      readTime: 3,
      image: 'https://via.placeholder.com/400x200?text=Welcome+to+Kidzvidz',
      content: `
        <h2>Welcome to Kidzvidz</h2>
        <p>Kidzvidz is your ultimate entertainment platform for kids and families. Stream thousands of kid-friendly movies, shows, and educational content all in one place.</p>
        <h2>What You Can Do</h2>
        <ul>
          <li>Stream movies and TV shows</li>
          <li>Create personalized watchlists</li>
          <li>Set parental controls</li>
          <li>Track viewing history</li>
          <li>Get personalized recommendations</li>
        </ul>
      `
    },
    {
      id: 'features-overview',
      title: 'Key Features Overview',
      description: 'Discover all the amazing features Kidzvidz offers',
      icon: '✨',
      date: 'July 18, 2026',
      readTime: 4,
      content: `
        <h2>Explore Our Features</h2>
        <p>Kidzvidz comes packed with features designed to make your viewing experience amazing.</p>
        <h2>Smart Recommendations</h2>
        <p>Our AI-powered recommendation engine learns your preferences and suggests content you'll love.</p>
        <h2>Family-Friendly Controls</h2>
        <p>Customize parental controls to ensure age-appropriate content for your children.</p>
      `
    }
  ],
  'getting-started': [
    {
      id: 'create-account',
      title: 'Create Your Account',
      description: 'Set up your Kidzvidz account in minutes',
      icon: '🚀',
      date: 'July 20, 2026',
      readTime: 5,
      content: `
        <h2>How to Create an Account</h2>
        <p>Getting started with Kidzvidz is easy. Follow these simple steps:</p>
        <ol>
          <li>Go to kidzvidz.com/signup</li>
          <li>Enter your email address</li>
          <li>Create a strong password</li>
          <li>Verify your email</li>
          <li>Set up your profile</li>
        </ol>
        <h2>Next Steps</h2>
        <p>After creating your account, download the Kidzvidz app and start streaming!</p>
      `
    },
    {
      id: 'download-app',
      title: 'Download the App',
      description: 'Install Kidzvidz on your devices',
      icon: '📱',
      date: 'July 19, 2026',
      readTime: 3,
      content: `
        <h2>Available Platforms</h2>
        <p>Kidzvidz is available on multiple platforms:</p>
        <ul>
          <li>iOS - Apple App Store</li>
          <li>Android - Google Play Store</li>
          <li>Mac - App Store</li>
          <li>Windows - Microsoft Store</li>
          <li>Smart TV - Various platforms</li>
          <li>Web - kidzvidz.com</li>
        </ul>
      `
    }
  ],
  features: [
    {
      id: 'streaming-quality',
      title: 'Video Quality & Streaming',
      description: 'Adjust playback quality based on your connection',
      icon: '📺',
      date: 'July 17, 2026',
      readTime: 4,
      content: `
        <h2>Adaptive Streaming</h2>
        <p>Kidzvidz automatically adjusts video quality based on your internet connection speed.</p>
        <h2>Quality Options</h2>
        <ul>
          <li>Auto - Automatically adjusts</li>
          <li>Low - 480p (Save data)</li>
          <li>Medium - 720p</li>
          <li>High - 1080p</li>
          <li>Ultra - 4K (if available)</li>
        </ul>
      `
    },
    {
      id: 'watchlist',
      title: 'Create & Manage Watchlists',
      description: 'Save your favorite content for later',
      icon: '❤️',
      date: 'July 16, 2026',
      readTime: 3,
      content: `
        <h2>Using Watchlists</h2>
        <p>Save content you want to watch later with the Watchlist feature.</p>
        <h2>How to Add to Watchlist</h2>
        <ol>
          <li>Open any movie or show</li>
          <li>Click the heart icon</li>
          <li>It will appear in your watchlist</li>
        </ol>
      `
    }
  ],
  settings: [
    {
      id: 'account-settings',
      title: 'Account Settings',
      description: 'Manage your account information',
      icon: '⚙️',
      date: 'July 15, 2026',
      readTime: 5,
      content: `
        <h2>Update Your Profile</h2>
        <p>Keep your account information up to date.</p>
        <h2>What You Can Change</h2>
        <ul>
          <li>Email address</li>
          <li>Password</li>
          <li>Display name</li>
          <li>Profile picture</li>
          <li>Language preferences</li>
        </ul>
      `
    },
    {
      id: 'parental-controls',
      title: 'Parental Controls',
      description: 'Keep your family safe with content restrictions',
      icon: '🔒',
      date: 'July 14, 2026',
      readTime: 6,
      content: `
        <h2>Set Up Parental Controls</h2>
        <p>Parental controls allow you to restrict content based on age ratings.</p>
        <h2>Age Ratings Supported</h2>
        <ul>
          <li>All Ages</li>
          <li>5+</li>
          <li>7+</li>
          <li>10+</li>
          <li>13+</li>
          <li>16+</li>
          <li>18+</li>
        </ul>
      `
    }
  ],
  account: [
    {
      id: 'manage-profiles',
      title: 'Manage Profiles',
      description: 'Create and manage multiple profiles',
      icon: '👥',
      date: 'July 13, 2026',
      readTime: 4,
      content: `
        <h2>Multiple Profiles</h2>
        <p>Create separate profiles for each family member to get personalized recommendations.</p>
      `
    },
    {
      id: 'subscription-plan',
      title: 'Subscription Plans',
      description: 'Choose the perfect plan for your family',
      icon: '💳',
      date: 'July 12, 2026',
      readTime: 5,
      content: `
        <h2>Available Plans</h2>
        <p>Select a plan that fits your needs and budget.</p>
      `
    }
  ],
  playback: [
    {
      id: 'playback-controls',
      title: 'Playback Controls',
      description: 'Master video playback features',
      icon: '▶️',
      date: 'July 11, 2026',
      readTime: 4,
      content: `
        <h2>Video Controls</h2>
        <p>Use these controls to enhance your viewing experience.</p>
      `
    },
    {
      id: 'subtitles-cc',
      title: 'Subtitles & Closed Captions',
      description: 'Enable subtitles in multiple languages',
      icon: '📝',
      date: 'July 10, 2026',
      readTime: 3,
      content: `
        <h2>Subtitle Options</h2>
        <p>Kidzvidz supports subtitles in multiple languages.</p>
      `
    }
  ],
  troubleshooting: [
    {
      id: 'buffering-issues',
      title: 'Fix Buffering Issues',
      description: 'Resolve slow streaming or buffering problems',
      icon: '🔧',
      date: 'July 9, 2026',
      readTime: 5,
      content: `
        <h2>Buffering Solutions</h2>
        <p>If you experience buffering, try these steps:</p>
        <ol>
          <li>Check your internet connection</li>
          <li>Lower video quality</li>
          <li>Close other apps</li>
          <li>Restart the app</li>
        </ol>
      `
    },
    {
      id: 'login-issues',
      title: 'Login Problems',
      description: 'Troubleshoot login and authentication issues',
      icon: '🔑',
      date: 'July 8, 2026',
      readTime: 4,
      content: `
        <h2>Can't Log In?</h2>
        <p>Follow these steps if you're having trouble logging in.</p>
      `
    }
  ],
  faq: [
    {
      id: 'faq-general',
      title: 'General Questions',
      description: 'Answers to common questions about Kidzvidz',
      icon: '❓',
      date: 'July 7, 2026',
      readTime: 8,
      content: `
        <h2>Frequently Asked Questions</h2>
        <h3>How much does Kidzvidz cost?</h3>
        <p>Visit our pricing page for the latest subscription plans.</p>
        <h3>Can I share my account?</h3>
        <p>Yes, you can create multiple profiles within your account.</p>
      `
    }
  ]
};

// API Routes
app.get('/api/:category', (req, res) => {
  const { category } = req.params;

  if (helpData[category]) {
    res.json(helpData[category]);
  } else {
    res.status(404).json({ error: 'Category not found', available: Object.keys(helpData) });
  }
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Kidzvidz Help API',
    version: '1.0.0',
    categories: Object.keys(helpData),
    endpoints: {
      getCategory: '/api/:category',
      listCategories: '/api'
    }
  });
});

// Search endpoint
app.get('/search', (req, res) => {
  const { q } = req.query;

  if (!q || q.length < 2) {
    return res.json([]);
  }

  const results = [];
  const query = q.toLowerCase();

  Object.entries(helpData).forEach(([category, items]) => {
    items.forEach(item => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
      ) {
        results.push({
          ...item,
          category
        });
      }
    });
  });

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`✓ Kidzvidz Help API running on http://localhost:${PORT}`);
  console.log(`✓ Available at http://localhost:${PORT}/api`);
});
