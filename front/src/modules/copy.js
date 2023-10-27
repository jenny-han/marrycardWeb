export function copyDoc(type, cliptext) {
    // execCommand 사용
    const textArea = document.createElement('textarea');
    textArea.value = cliptext
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
    } catch (err) {
        alert('복사 실패', err);
    }
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);
    alert(type + "가 클립보드에 복사되었습니다!")
}

export default function doCopy(type, copytxt) {

    if (navigator.clipboard) {
            navigator.clipboard.writeText(copytxt).then(() => { alert(type + "가 클립보드에 복사되었습니다!") }).catch((err) => alert(err))

            navigator.permissions.query({ name: 'clipboard-write' ,}).then((result) => {
                if (result.state === "denied") copyDoc(type, copytxt);
            }).catch((err) => alert(err))
        
    } else {
        copyDoc(type, copytxt);
    }
}