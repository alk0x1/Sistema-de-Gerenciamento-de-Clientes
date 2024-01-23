import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    // ... other configurations
    plugins: [
        // ... other plugins
        new webpack.EnvironmentPlugin(['API_BASE_URL'])
    ]
};
