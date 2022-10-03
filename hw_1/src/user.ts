import { renderBlock } from './lib'

export function renderUserBlock (favoriteItemsAmount: number | string, name?: string, ava?: string) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
    const hasFavoriteItems = favoriteItemsAmount ? true : false

    renderBlock(
        'user-block',
        `
    <div class="header-container">
      <img class="avatar" src="${ava}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
    )
}
