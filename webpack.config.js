//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin  = require('copy-webpack-plugin');
//추가
const { VueLoaderPlugin } = require('vue-loader');

// export
module.exports = {
    //확장자가 없어도 사용가능 옵션
    resolve: {
        extensions: ['.js', '.vue'],
        //경로 별칭
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    //parcel index.html
    //파일을 읽어들이기 시작하는 진입점 설정
    //entry: './js/main.js',  수정전
    entry: './src/main.js',
    
    
    //결과물(번들)을 반환하는 설정
    //__dirname : 현재 파일이 있는경로
    output: {
        // path: path.resolve(__dirname, 'dist'),   //파일경로
        // filename: 'main.js', //파일이름
        clean: true //그전에 만든 파일 제거
    },

    module: {
        rules: [
            //vue추가
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    //순서 중요
                    //vue 추가
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },            
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        //vue추가
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost'
    }
}

