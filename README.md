# E-commerce Chatbot

![E-commerce Chatbot](./images/chatbot-banner.png)
![Product Catalog](./images/product-catalog.png)
![Upselling Recommendations](./images/upsell-recommendations.png)

This is an e-commerce chatbot powered by Node.js and Microsoft Bot Framework, integrated with Moltin for catalog management, LUIS for natural language understanding, and Microsoft's Recommendations API for product suggestions. The chatbot allows users to explore products, add them to a cart, and receive personalized upsell recommendations.

## Features

- **Intent-driven Dialogue**: The bot uses natural language understanding to recognize and respond to user commands.
- **Product Exploration**: Integrates Moltin's API to display product catalogs and details.
- **Shopping Cart Management**: Users can add products to a shopping cart and proceed to checkout.
- **Upselling Recommendations**: Powered by Microsoft Recommendations API, the bot suggests frequently bought together items.
- **Natural Language Processing**: Utilizes LUIS (Language Understanding Intelligent Service) to interpret user queries and commands.
- **Custom Recognizers**: Recognizes specific intents such as greetings, product exploration, and cart management.
- **Upsell Suggestions**: Recommends related products based on user actions.

## Technologies Used

- **Next.js**: Framework for building the frontend of the web application.
- **Drizzle**: A lightweight library for interacting with Ethereum and smart contracts, used for blockchain-related interactions.
- **Vercel**: Platform for deploying the project and hosting the application.
- **Node.js**: Server-side JavaScript runtime used to power the chatbot backend.
- **Microsoft Bot Framework**: Framework used for building the chatbot and managing dialogue flow.
- **Moltin API**: Used for managing and displaying the e-commerce catalog.
- **Microsoft LUIS**: Language Understanding Intelligent Service used to process and understand user input.
- **Microsoft Recommendations API**: Used to provide personalized product recommendations based on user activity.

## Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. [Install Node.js](https://nodejs.org/)
- **Yarn or npm**: Yarn or npm package manager is required for managing dependencies.

### Steps to Get Started

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-chatbot.git
    cd ecommerce-chatbot
    ```

2. Install the required dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables for your APIs:
    - **Moltin API Key**: Get your API key from [Moltin](https://moltin.com/)
    - **LUIS API Key**: Get your API key from [LUIS](https://www.microsoft.com/en-us/luis)
    - **Microsoft Recommendations API Key**: Get your API key from [Microsoft Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/)

4. Create a `.env.local` file in the root of your project and add your API keys:
    ```env
    
    OPENAI_API_KEY=***
    AUTH_SECRET=***
    BLOB_READ_WRITE_TOKEN=***
    POSTGRES_URL=***
    ```

5. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. Visit `http://localhost:3000` to interact with the chatbot.

## Features Walkthrough

1. **Greeting the Bot**: The bot begins by greeting users and allowing them to inquire about the product catalog.
   
2. **Product Exploration**: The user can search for products like bikes, view details, and select variants.

3. **Shopping Cart Management**: The bot helps users add products to the shopping cart and asks for required details like size and color.

4. **Upselling**: Once an item is in the cart, the bot suggests additional items that other users frequently bought together.

5. **Checkout**: The user can proceed to checkout and purchase their items.





Thank you for checking out this e-commerce chatbot project! I hope you find it useful.
