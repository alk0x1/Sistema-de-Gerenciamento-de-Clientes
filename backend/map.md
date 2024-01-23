/backend
│
├── /node_modules                  # Node.js packages
│
├── /src                           # Source files
│   ├── /controllers               # Controllers to handle request logic
│   │   ├── customerController.js  # Logic for customer-related requests
│   │   └── routeController.js     # Logic for route optimization requests
│   │
│   ├── /routes                    # Express routes
│   │   ├── customerRoutes.js      # Routes for customer management
│   │   └── routeRoutes.js         # Routes for route optimization
│   │
│   ├── /services                  # Business logic and service layer
│   │   ├── customerService.js     # Services for customer management
│   │   └── routeService.js        # Services for route calculation
│   │
│   ├── /models                    # Database models
│   │   └── Customer.js            # Customer model
│   │
│   ├── /db                        # Database interaction files
│   │   ├── index.js               # Database connection setup
│   │   └── /migrations            # Database migration scripts
│   │
│   ├── /utils                     # Utility functions
│   │   ├── apiResponse.js         # Standard API response formats
│   │   └── errorHandler.js        # Error handling utilities
│   │
│   ├── /config                    # Configuration files
│   │   └── index.js               # Central configuration management
│   │
│   ├── app.js                     # Express app setup
│   └── index.js                   # Entry point for the application
│
├── /tests                         # Automated tests
│   ├── customerController.test.js # Tests for customer controller
│   └── routeController.test.js    # Tests for route controller
│
├── .env                           # Environment variables
├── .gitignore                     # Specifies untracked files to ignore
├── package.json                   # Project manifest
├── README.md                      # Project documentation
└── server.js                      # Server initialization