import path from 'path';
import sharp from 'sharp';
import fs from 'fs/promises';

/**
 * 간이 이미지 변환 서비스
 * data에 있는 이미지 파일을 특정 사이즈로 변환하는 서비스
 */
(async () => {
    try{
        fs.readdir('./data')
        .then((fileList)=>{
            fileList.forEach(file=>{
                sharp(path.join('./data', file))
                .resize(1080, 1080, { fit: 'inside' })
                .withMetadata()
                .toFormat('jpg', { quality : 100 })
                .toFile(path.join('./result', file), (err, info) => {
                    console.log(`리사이징 이미지 info : ${JSON.stringify(info, null, 2)}`);
                });
            })
        })
        .catch(err=>{
            console.log(err)
        })
    } catch(err){
        console.log(err);
    }
})();