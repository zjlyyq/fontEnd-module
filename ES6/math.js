var chenshu = 8;
var jiecheng = function(num){
    if(num <= 1){
        return num;
    }
    else{
        return num * jiecheng(num-1)
    }
}
export { chenshu,jiecheng };