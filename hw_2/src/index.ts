import { renderSearchFormBlock } from './search-form';
import { renderSearchStubBlock } from './search-results';
import { renderUserBlock } from './user';
import { renderToast } from './lib';
import { getUserData } from './getUserData'
import { getFavoritesAmount} from './getFavoritesAmount'
/*global console*/
/*global window*/

const user = getUserData()
let name = '';
let avatarUrl = ''

if (user !== undefined) {
    name = user.username ? user.username : ''
    avatarUrl = user.avatarUrl ? user.avatarUrl : ''
}

const favoritesAmount = getFavoritesAmount()

window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock(favoritesAmount, name, avatarUrl);
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast(
        {
            text: 'Это пример уведомления. Используйте его при необходимости',
            type: 'success',
        },
        {
            name: 'Понял',
            handler: () => {
                console.log('Уведомление закрыто');
            },
        }
    );
});
