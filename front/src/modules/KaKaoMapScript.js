/* global kakao */
let lat;
let lng; 
// const kakaoLocationId = 23201274

let map;

export default function KakaoMapScript(lat,lng) {
    lat = lat;
    lng = lng;
    const container = document.getElementById('map');
    container.innerHTML = '';

    // set Marker
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });
    const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 4,
    };
   map = new kakao.maps.Map(container, options);

    marker.setMap(map);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

}
export  function panTo(lat,lng) {
    // 이동할 위도 경도 위치를 생성합니다 
    let moveLatLon = new kakao.maps.LatLng(lat, lng)
    // map.setLevel(4);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
export function zoomIn(map) {
    map.setLevel(map.getLevel() - 1)
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
export function zoomOut(map) {
    map.setLevel(map.getLevel() + 1)
}

export function getLocationURL(kakaoLocationId) {
    return 'https://map.kakao.com/link/to/' + kakaoLocationId
}

export function getMapURL(kakaoLocationId) {
    return '	https://map.kakao.com/link/map/' + kakaoLocationId
}

