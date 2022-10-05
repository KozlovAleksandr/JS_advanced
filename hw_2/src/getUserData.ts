export function getUserData() {
//    localStorage.user = JSON.stringify({
//        username: 'Aleksandr',
//       avatarUrl: './avatar.jpg',
//    });

    return JSON.parse(localStorage.user);
}
