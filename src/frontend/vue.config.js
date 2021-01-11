const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/'),
                'View': path.join(__dirname, 'src/views/'),
                'Style': path.join(__dirname, 'static/styles/'),
                'Script': path.join(__dirname, 'static/script/'),
                'Constant': path.join(__dirname, 'static/constant/'),
                'Store': path.join(__dirname, 'src/store/'),
                'Shared': path.join(__dirname, 'src/shared/'),
                'Assets': path.join(__dirname, 'static/image')
            }
        },
        devtool: 'source-map'
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8090"
            }
        },
        overlay: false,
    },
}