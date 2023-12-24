export const getAssetURL = (image) => {
    //参数一：是相对路径
    //参数二：当前路径的URL
    return new URL(`../assets/img/${image}`,
            import.meta.url).href
        //vite是使用esmodel，webpack中可以用requir来动态获取图片的url
}