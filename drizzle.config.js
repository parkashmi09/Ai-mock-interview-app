/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai_mock_db_owner:WNlGI9Obzu0C@ep-damp-star-a1a7y219.ap-southeast-1.aws.neon.tech/Ai_mock_db?sslmode=require',
    }
  };
  