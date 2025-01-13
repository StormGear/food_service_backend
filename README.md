## Backend API for Food Ordering System
Backend API for Food Ordering System using Express.js/Node.js with comprehensive API documentation using SwaggerDocs, deployed on Heroku with a Heroku Postgres database.

[Frontend App](https://food-service-fronted.vercel.app)



## Setup Instructions
1. Set up the environment variables: Create a `.env` file in the root directory and add the following:

   ```plaintext
   LOCAL_DATABASE_URL=your-database-connection-string
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server using nodemon:

   ```bash
   nodemon
   ```

4. Access the app at:

   - Backend API: https://food-service-backend-n60w.onrender.com/api-docs/



# Entity-Relationship Diagram
<img src="./assets/ERD.jpeg">

This shows all the entities, attributes and cardinality.

# Full Database Schema
<img src="./assets/db.jpeg">

This is the full database schema which specifies the datatypes used in the project and the primary keys, foreign keys, and so on. This was written with the Data Modelling Language.

## Deployment Link

Access the deployed application here: [Food Ordering System](https://food-service-fronted.vercel.app/)
<br/>
Access the Application Programming Interface Documentation: [API Documentation](https://food-service-backend-n60w.onrender.com/api-docs/)

## Login Details

 Authentication is required, use the following test credentials to access the system:

- **Username:** testuser@example.com
- **Password:** password123

## Installation Instructions
Clone the repository: <br/>
Backend: [Server App](https://github.com/StormGear/food_service_backend.git) <br/>
Frontend: [Client App](https://github.com/StormGear/food_service_fronted.git)

## Install dependencies:
npm install

## Start the development server application:
npm start

## Comprehensive API Documentation using Swagger

The API documentation provides detailed information about the endpoints, request parameters, and responses. It is generated using Swagger, which allows for easy exploration and testing of the API.

### Overview
<img src="./assets/Swagger.jpeg" alt="Swagger Overview">
This image shows the overview of the API documentation, including the available endpoints and their descriptions.

### Endpoint Details
<img src="./assets/Swagger2.jpeg" alt="Swagger Endpoint Details">
This image provides detailed information about a specific endpoint, including the request method, URL, parameters, and example responses.

### Response Examples
<img src="./assets/Swagger3.jpeg" alt="Swagger Response Examples">
This image shows example responses for the API endpoints, helping developers understand the expected output for different requests.

### How to Use Swagger
1. **Access the Swagger UI**: Navigate to the `/api-docs` endpoint of your deployed application to access the Swagger UI.
2. **Explore Endpoints**: Browse through the list of available endpoints. Each endpoint is documented with its request method, URL, parameters, and responses.
3. **Try Out Endpoints**: Use the "Try it out" feature to test the endpoints directly from the Swagger UI. Enter the required parameters and execute the request to see the response.
4. **View Responses**: Check the response section to see the status code, response body, and headers for each request.

### Benefits of Using Swagger
- **Interactive Documentation**: Swagger provides an interactive interface for exploring and testing API endpoints.
- **Standardized Format**: The documentation follows the OpenAPI Specification, ensuring consistency and compatibility.
- **Ease of Use**: Developers can easily understand and use the API without needing to refer to external documentation.

For more information on how to use Swagger, visit the [Swagger Documentation](https://swagger.io/docs/).





## API Endpoint Groups


> ### **User Management**


> ### **Order Management**


> ### **Loyalty Management**

> ### **Menu Item Management**

> ### **Order Management**

> ### **Order Item Management**

> ### **Cart  Management**

> ### **Cart Item Management**


### Backend

Deployed on Heroku:


[Backend URL](https://food-service-d1ed0096c526.herokuapp.com/api-docs/)


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request



## Contact

For questions or feedback, please reach out at:

- Email: [papakofiboahen@gmail.com](mailto\:your-email@example.com)
- GitHub: [StormGear](https://github.com/StormGear)