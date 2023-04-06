let slide_index = 0;
let slide_img = Array(
    "https://dq51jve9h21d4.cloudfront.net/sites/default/files/styles/article_thumbnail/public/news/1105/x060_a-v04c_b.png.pagespeed.ic.JH613iPMcl.webp",
    "https://dq51jve9h21d4.cloudfront.net/sites/default/files/styles/article_thumbnail/public/news/1097/x125_a-v14-01i.png.pagespeed.ic.YUwqlmDe_N.webp",
    "https://dq51jve9h21d4.cloudfront.net/sites/default/files/styles/article_thumbnail/public/crmland/217/xartboard-crmland-6.png.pagespeed.ic.uaQFYlK2b-.webp"
)

function plus_Slide(j){
    slide_index += j;
}

function change_slide(){
    if (slide_index == -1){
        slide_index = 2;
    }
    document.getElementById("slide_img").src = slide_img[slide_index];
}